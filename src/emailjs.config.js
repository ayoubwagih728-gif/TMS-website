// EmailJS configuration for the contact form.
//
// These values are NOT secrets. The EmailJS public key is public by design, and
// the service/template IDs and destination address are all shipped in the browser
// bundle (visible in any visitor's network tab) regardless. They are committed here
// as defaults so the contact form works out of the box from this repo on any host.
//
// You can still override any of them per-environment with a VITE_ env var (e.g. on
// Vercel), which takes precedence over the default below.
//
// The ONLY thing that must never be committed is a private key or mailbox password
// (neither is used here). Abuse protection comes from the EmailJS domain Allow List
// (Account -> Security) + reCAPTCHA on the template — see README.
//
// The contact form sends TWO emails per submission:
//   1. Team notification  -> your inbox (TEMPLATE_ID + TO_EMAIL)
//   2. Customer auto-reply -> whoever submitted the form (AUTOREPLY_TEMPLATE_ID)

const env = import.meta.env

export const EMAILJS_SERVICE_ID = env.VITE_EMAILJS_SERVICE_ID || 'service_jow483m'
export const EMAILJS_PUBLIC_KEY = env.VITE_EMAILJS_PUBLIC_KEY || '8mrePCf_uB3yXp1rY'

// Template B — team notification (goes to your Outlook inbox).
export const EMAILJS_TEMPLATE_ID = env.VITE_EMAILJS_TEMPLATE_ID || 'template_zus65e9'
// Where team notifications are delivered (template's To Email = {{to_email}}).
export const EMAILJS_TO_EMAIL = env.VITE_EMAILJS_TO_EMAIL || 'ayoubwagih@tms-eg.com'

// Template A — customer thank-you auto-reply (goes to the submitter; To Email = {{email}}).
export const EMAILJS_AUTOREPLY_TEMPLATE_ID = env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || 'template_lhjsbwm'

// The form can operate as long as the team-notification path is configured.
export const EMAILJS_CONFIGURED = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_PUBLIC_KEY && EMAILJS_TEMPLATE_ID && EMAILJS_TO_EMAIL
)
