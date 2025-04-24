import { IContactEmailProps } from "@/types/global";

const ContactEmailTemplate = (props: IContactEmailProps) => {

  const { firstName, lastName, email, phone, company, message, sentDate } = props;

  const mailContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>instaProtek</title>
      </head>
      <body style="width: 100%; height: 100%;">
        <table width="700px" cellspacing="0" cellpadding="0" style="margin: 100px auto; box-shadow: 1px 2px 20px -3px #eaeaea;">
          <thead></thead>
          <tbody>
            
            <!--HEADER-->
            <tr>
              <td>
                <table width="100%" cellspacing="0" cellpadding="0" style="background: #1f2a44;">
                  <thead></thead>
                  <body>
                    <tr>
                      <td colspan="1" style="text-align: center; height: 80px; border-bottom: 2px solid #1f2a44;">
                        <a href="http://www.instaprotek.com" target="_blank" />
                          <img src="https://acdn.dnamicro.net/instaprotek/instaProtek_primary_logo-inverse.png" width="140" height="auto" />
                        </a>
                      </td>
                    </tr>
                  </body>
                </table>
              </td>
            </tr>

            <!-- BODY -->
            <tr>
              <td style="padding: 0 40px;">
                <table width="100%" cellspacing="0" cellpadding="0" style="background: #ffffff; padding: 20px 20px 20px 20px;">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td style="text-align: right; font-family: Inter, Sans-Serif; font-size: 12px; color: #333333;">
                        <p><span style="font-weight: 700">Sent Date:</span> ${sentDate}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: center; font-family: Inter, Sans-Serif; font-size: 16px; color: #1f2a44; padding: 10px 10px 0 10px;">
                        <img
                          src="https://acdn.dnamicro.net/instaprotek/envelope.png"
                          width="60"
                          height="60"
                        >
                      </td>
                    </tr>
                    <tr>
                      <td colspan="1" style="text-align: left; font-family: Inter, Sans-Serif; font-size: 16px; padding: 0 0 8px 0; color: #333333;">
                        <p>Dear <span style="font-weight: 700;">Sales Team</span>,</p>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="1" style="text-align: left; font-family: Inter, Sans-Serif; font-size: 12px; padding: 0 0 5px 0; color: #333333;">
                        <p>You've got a new customer inquiry:</p>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="1" style="text-align: left; font-family: Inter, Sans-Serif; font-size: 12px; padding: 0 20px 10px 20px; color: #333333;">
                        <p><strong style="font-weight: 700;">Name:</strong> ${firstName} ${lastName}</p>
                        <p><strong style="font-weight: 700;">Email:</strong> ${email}</p>
                        <p><strong style="font-weight: 700;">Phone:</strong> ${phone}</p>
                        <p><strong style="font-weight: 700;">Company:</strong> ${company}</p>
                        <p><strong style="font-weight: 700;">Message:</strong></p>
                        <p>${message}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td>
                <table width="100%" cellspacing="0" cellpadding="0" style="background: #1f2a44; padding: 0px 20px;">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td colspan="1" style="text-align: center; font-family: Inter, Sans-Serif; font-size: 14px; color: #ffffff;">
                        <p>© 2024 instaProtek. All Rights Reserved. | Visit <a href="http://www.instaprotek.com" target="_blank" style="color: #ffffff;">instaProtek.com</a></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  `;
  
  return mailContent;
}

export default ContactEmailTemplate;