import nodemailer from "nodemailer";

interface ContactMailPayload {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

export async function sendContactEmail(payload: ContactMailPayload) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receiver = process.env.CONTACT_RECEIVER_EMAIL || "info@studentforge.in";

  const mailSubject = `[New Contact Form Submission] ${payload.category} - ${payload.name}`;
  const mailContent = `
New Contact Submission from Student Forge Portal:

Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
Category: ${payload.category}

Message:
${payload.message}

Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
  `.trim();

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff;">
      <h2 style="color: #1a3646; border-bottom: 2px solid #fbb03b; padding-bottom: 10px;">New Contact Submission</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
          <td style="padding: 8px 0; color: #1a3646;">${payload.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
          <td style="padding: 8px 0; color: #1a3646;"><a href="mailto:${payload.email}">${payload.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
          <td style="padding: 8px 0; color: #1a3646;"><a href="tel:${payload.phone}">${payload.phone}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Category:</td>
          <td style="padding: 8px 0;"><span style="background-color: #fbb03b; color: #1a3646; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">${payload.category}</span></td>
        </tr>
      </table>
      <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #1a3646; border-radius: 4px;">
        <h4 style="margin: 0 0 8px 0; color: #1a3646;">Message:</h4>
        <p style="margin: 0; color: #334155; white-space: pre-line; font-size: 14px;">${payload.message}</p>
      </div>
      <p style="font-size: 11px; color: #94a3b8; margin-top: 25px; text-align: center;">Submitted via Student Forge National Portal Contact Form</p>
    </div>
  `;

  if (!user || !pass) {
    console.log("ℹ️ SMTP credentials not set in process.env (SMTP_USER / SMTP_PASS). Email content prepared:");
    console.log(mailContent);
    return { sent: false, reason: "SMTP credentials missing" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const info = await transporter.sendMail({
      from: `"Student Forge Portal" <${user}>`,
      replyTo: payload.email,
      to: receiver,
      subject: mailSubject,
      text: mailContent,
      html: htmlContent,
    });

    console.log("✅ Contact email sent successfully:", info.messageId);
    return { sent: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Failed to send contact email:", error);
    return { sent: false, error };
  }
}
