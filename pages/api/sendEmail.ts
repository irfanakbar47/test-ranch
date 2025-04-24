import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import moment from "moment-timezone";
import sgMail from "@sendgrid/mail";
import getLogger from "@/services/logger";
import ContactEmailTemplate from "@/templates/ContactEmailTemplate";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const geoip = require('geoip-lite');
const logger = getLogger('api-handler');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    logger.warn(`Method ${req.method} not allowed`);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { firstName, lastName, email, phone, company, message, timezone } = req.body;

  if (!firstName || !lastName || !email || !phone || !company || !message) {
    const ip =
      req.headers['x-real-ip'] ||
      req.headers['x-forwarded-for']
    '';

    let geo: any = {};

    try {
      geo = geoip.resolve(ip);
    } catch (e: any) {
      logger.error(`Error resolving IP ${ip}: ${e.message}`);
    }

    const ua = req.headers['user-agent'];

    try {
      await axios.post(process.env.NEXT_PUBLIC_WEBHOOK_URL || '', {
        activity: 'instaProtek Website',
        iconUri: 'https://example.com/force.png',
        title: 'Auto Emailer Submit Error - required field empty',
        text: 'Error Submitting to Sales Email',
        attachments: [
          {
            type: 'Card',
            color: '#00ff2a',
            author: {
              name: 'Lead API',
            },
            title: 'Request Details',
            body: 'Request Details',
            fields: Object.entries({
              'User Agent': ua || 'None',
              ip,
              ...geo,
            }).map((entry) => {
              return {
                title: entry[0],
                value: entry[1] ? JSON.stringify(entry[1]) : '-NONE-',
                style: 'Short',
              };
            }),
          },
          {
            type: 'Card',
            color: '#00ff2a',
            author: {
              name: 'Lead API',
            },
            title: 'Request Body',
            body: 'Request Body Content',
            fields: Object.entries(req.body).map((entry) => {
              return {
                title: entry[0],
                value: entry[1] || '-NONE-',
                style: 'Short',
              };
            }),
          },
        ],
      });
    } catch (e: any) {
      logger.error(`Error sending webhook notification: ${e.message}`);
    }

    logger.warn('Required field missing in request body');
    return res.status(400).json({ error: "All fields are required" });
  }

  const recipients = process.env.SENDGRID_EMAIL_RECIPIENTS?.split(",").map(
    (email) => email.trim()
  ) || [];

  if (!recipients || recipients.length === 0) {
    logger.error('No recipients defined for email');
    return res.status(500).json({ error: "No recipients defined" });
  }

  if (!process.env.SENDGRID_EMAIL_SENDER) {
    logger.error('Sender email not defined');
    return res.status(500).json({ error: "Sender email not defined" });
  }

  const senderTimezone = timezone || 'UTC';
  const currentDate = moment.tz(senderTimezone);
  const sentDate = currentDate.format('M/D/YYYY');

  const msg = {
    to: recipients,
    from: {
      email: process.env.SENDGRID_EMAIL_SENDER!,
      name: 'instaProtek'
    },
    subject: `Partner With Us - Inquiry - ${firstName} ${lastName}`,
    text: `You've got a new customer inquiry:
          Name: ${firstName} ${lastName}
          Email: ${email}
          Phone: ${phone}
          Company: ${company}
          Message:
          ${message}`,
    html: ContactEmailTemplate({ firstName, lastName, email, phone, company, message, sentDate })
  };

  try {
    await sgMail.send(msg);
    logger.info('Email sent successfully');
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    logger.error(`Error sending email: ${error.response?.body || error.message}`);
    res.status(500).json({ error: "Failed to send email" });
  }
}
