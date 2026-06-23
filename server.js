// server.js — Express + Nodemailer backend
// Run: node server.js  (or use nodemon server.js)
// Install deps: npm install express nodemailer cors dotenv

import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ─── Nodemailer Transporter ───────────────────────────────────────────────────
// Uses Gmail with App Password (2FA must be ON, generate App Password from Google Account)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,      // your Gmail: gaytrikolhe2001@gmail.com
    pass: process.env.MAIL_PASS,      // Gmail App Password (NOT your normal password)
  },
});

// ─── Contact API ──────────────────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,           // mail comes to YOU
    replyTo: email,                       // so you can reply directly to sender
    subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #1f2937; margin-bottom: 4px;">New Contact Form Submission</h2>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 12px 0;" />

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; width: 100px;"><strong>Name</strong></td>
            <td style="padding: 8px 0; color: #111827;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Email</strong></td>
            <td style="padding: 8px 0; color: #111827;">
              <a href="mailto:${email}" style="color: #4f46e5;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Subject</strong></td>
            <td style="padding: 8px 0; color: #111827;">${subject || "—"}</td>
          </tr>
        </table>

        <div style="background: #f9fafb; padding: 16px; border-radius: 6px; border-left: 3px solid #4f46e5;">
          <p style="margin: 0; color: #374151; white-space: pre-wrap;">${message}</p>
        </div>

        <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
          Sent via your portfolio contact form &mdash; Reply directly to this email to respond to ${name}.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Mail received from ${email}`);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Nodemailer error:", err.message);
    return res.status(500).json({ error: "Failed to send email." });
  }
});

// ─── Start Server ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});