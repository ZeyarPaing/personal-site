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
    // const reCaptchaSecret = process.env.RECAPTCHA_SECRET;

    //RECAPTCHA

    // const response = await fetch(
    //     `https://www.google.com/recaptcha/api/siteverify?secret=${reCaptchaSecret}&response=${body.captcha}`,
    //     {
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    //       },
    //       method: 'POST',
    //     },
    // );
    // const captchaValidation = await response.json();
    // if (!captchaValidation.success) {
    //   return res.status(403).send({message: 'invalid recaptcha'});
    // }

    //ABSTRACT - to check email validity
    console.log('abstract api key : ', abstractApiKey);
    try {
      let abstract = await axios.get(
        `https://emailvalidation.abstractapi.com/v1/`,
        {
          params: { api_key: abstractApiKey, email: body.email },
        },
      );
      if (abstract.data.deliverability == 'UNDELIVERABLE') {
        return res
          .status(403)
          .json({ code: 403, message: 'invalid email address' });
      }
    } catch (e) {
      console.log('abstract err', e);
      return res.status(403).json({ code: 403, message: 'email check error' });
    }

    //WRITE TO DB
    try {
      await dynamoDb.update({
        Key: {
          email: body.email,
        },
        TableName: 'zeyar-dev-contact',
        UpdateExpression:
          'set #messages = list_append(if_not_exists(#messages, :empty_list), :message)',
        ExpressionAttributeNames: {
          '#messages': 'messages',
        },
        ExpressionAttributeValues: {
          ':message': [body.message],
          ':empty_list': [],
        },
      });
      res.status(200).json({ code: 200, message: 'successfully sent' });
    } catch (e) {
      // @ts-ignore
      res.status(500).json({ code: 500, ...e, message: 'server error' });
    }
  } else {
    res.status(405).json({ code: 405, message: 'method not allowed' });
  }
}
