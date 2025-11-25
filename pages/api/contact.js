import nodemailer from 'nodemailer';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sanitize input to prevent XSS
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

// Validate and sanitize inputs
function validateInput(name, email, message) {
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return { valid: false, error: 'Name is required and must be a non-empty string.' };
  }
  if (name.trim().length > 100) {
    return { valid: false, error: 'Name must be less than 100 characters.' };
  }
  
  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
    return { valid: false, error: 'Valid email is required.' };
  }
  if (email.length > 254) {
    return { valid: false, error: 'Email must be less than 254 characters.' };
  }
  
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return { valid: false, error: 'Message is required and must be a non-empty string.' };
  }
  if (message.trim().length > 5000) {
    return { valid: false, error: 'Message must be less than 5000 characters.' };
  }
  
  return { valid: true };
}

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // Check if required environment variables are set
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error('Missing email configuration');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  const { name, email, message } = req.body;

  // Validate inputs
  const validation = validateInput(name, email, message);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  // Sanitize inputs to prevent XSS
  const sanitizedName = sanitizeInput(name);
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedMessage = sanitizeInput(message);

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${sanitizedName}" <${sanitizedEmail}>`,
      to: process.env.GMAIL_USER,
      replyTo: sanitizedEmail,
      subject: `New Contact Form Message from ${sanitizedName}`,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #333;">
            <strong>Message:</strong>
            <p style="margin-top: 10px; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
        </div>
      `
    });

    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    // Don't expose internal error details to client
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
