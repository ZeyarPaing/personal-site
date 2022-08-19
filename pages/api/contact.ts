import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';
import axios from 'axios';

function sendError(res: NextApiResponse) {
  return res
    .status(500)
    .json({ message: 'Sorry, the bird failed to send your message' });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const abstractApiKey = process.env.ABSTRACT_API_KEY;
  const body = JSON.parse(req.body);

  //check email validity
  if (!body.email && !body.message) {
    sendError(res);
  }

  let abstract = await axios.get(
    `https://emailvalidation.abstractapi.com/v1/`,
    {
      params: { api_key: abstractApiKey, email: body.email },
    },
  );
  if (abstract.data.deliverability == 'UNDELIVERABLE') {
    sendError(res);
  }

  const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: abstract.data.autocorrect || process.env.EMAIL,
      pass: process.env.MAILPASS,
    },
    secure: true,
  });
  const mailData = {
    from: 'PersonalWeb',
    to: 'zeyarpaing@protonmail.com',
    subject: `Message From ${body.email}`,
    html: `
  <div>
      <h4>Hello Zeyar!</h4>
      <p>There is a message someone sent from your website's contact section.</p>
      <hr>
      <p>Sender's email : ${body.email}</p>
      <p style="max-width: 50%">${body.message}</p>
      <hr>
      <small>Bot from zeyar.dev</small>
  </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      sendError(res);
    } else {
      res.status(200).json({ message: 'Message sent' });
    }
  });
}
