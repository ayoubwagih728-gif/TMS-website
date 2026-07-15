// EmailJS configuration — reads from Vite environment variables (see .env).
// NOTHING here is a secret: the EmailJS *public key* is the only credential and
// is designed to be exposed in browser code. Do NOT add a private key or any
// Outlook/M365 password.
//
// The contact form sends TWO emails per submission:
//   1. Team notification  -> your inbox (TEMPLATE_ID + TO_EMAIL)
//   2. Customer auto-reply -> whoever submitted the form (AUTOREPLY_TEMPLATE_ID)

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Template B — team notification (goes to your Outlook inbox).
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
// Where team notifications are delivered (set the template's To Email to {{to_email}}).
export const EMAILJS_TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL

// Template A — customer thank-you auto-reply (optional; goes to the submitter).
export const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID

// The form can operate as long as the team-notification path is configured.
export const EMAILJS_CONFIGURED = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_PUBLIC_KEY && EMAILJS_TEMPLATE_ID && EMAILJS_TO_EMAIL
)
