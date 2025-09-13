// api/contact.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Missing fields" });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // change this later to your verified domain email
      to: "dilkhushkumawat33@gmail.com", // replace with your email
      subject: `New message from ${name}`,
      reply_to: email,
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
