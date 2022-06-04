import { NextApiRequest, NextApiResponse } from 'next';
import dynamoDb from '../../lib/dynamo-db';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'PUT') {
    const body = JSON.parse(req.body);
    const abstractApiKey = process.env.ABSTRACT_API_KEY;
    const reCaptchaSecret = process.env.RECAPTCHA_SECRET;

    //RECAPTCHA
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${reCaptchaSecret}&response=${body.captcha}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        method: 'POST',
      },
    );
    const captchaValidation = await response.json();
    if (!captchaValidation.success) {
      return res.status(403).send({ message: 'invalid recaptcha' });
    }

    //ABSTRACT - to check email validity
    let abstract = await axios.get(
      `https://emailvalidation.abstractapi.com/v1/`,
      {
        params: { api_key: abstractApiKey, email: body.email },
      },
    );
    if (abstract.data.deliverability == 'UNDELIVERABLE') {
      return res.status(403).json({ message: 'invalid email address' });
    }

    //WRITE TO DB
    try {
      const { Attributes } = await dynamoDb.put({
        TableName: 'zeyar-dev',
        Item: {
          email: body.email,
          message: body.message,
        },
      });
      res.status(200).json(Attributes);
    } catch (e) {
      // @ts-ignore
      res.status(500).json({ ...e, message: 'server error' });
    }
  } else {
    res.status(405).json({ message: 'method not allowed' });
  }
}
