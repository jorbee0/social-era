import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, service, message } = body;

    // ✅ Validation
    if (!firstName || !email || !message) {
      return NextResponse.json({
        success: false,
        error: "Missing required fields",
      });
    }

    // ✅ Transporter setup
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ==============================
    // 📩 1. EMAIL TO CLIENT
    // ==============================
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "🚨 New Contact Form Submission",
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // ==============================
    // 📩 2. AUTO-REPLY TO USER
    // ==============================
    await transporter.sendMail({
      from: `"The Social Era" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ We received your query",
      html: `
        <h2>Hi ${firstName},</h2>
        <p>Thank you for contacting us 🙌</p>
        <p>We have received your query ${
          service ? `regarding <b>${service}</b>` : ""
        }.</p>
        <p>Our team will get back to you soon.</p>
        <br/>
        <p><b>Your Message:</b></p>
        <p>${message}</p>
        <br/>
        <p>Regards,<br/>The Social Era</p>
      `,
    });

    // ✅ Success response
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Email Error:", error);

    return NextResponse.json({
      success: false,
      error: "Failed to send email",
    });
  }
}