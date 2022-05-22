import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';
import { Project } from '../../types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('env : ', process.env.EMAIL);
  const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.MAILPASS,
    },
    secure: true,
  });
  const mailData = {
    from: 'Website: zeyar.dev',
    to: 'zeyarpaing@protonmail.com',
    subject: `Message From ${req.body.email}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log('error  :', err);
      res.status(500).json('error');
    } else {
      console.log('ok ');
      res.status(200).json('ok');
    }
  });
  res.status(200).json('ok');
}
