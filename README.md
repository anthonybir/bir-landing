# BIR Landing

Landing page for [bir.com.py](https://bir.com.py) - Software consulting and development services.

## Tech Stack

- **Framework:** Next.js 16
- **UI:** React 19
- **Styling:** Tailwind CSS v4
- **Email:** Resend API
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Features

- Responsive landing page
- Contact form with email integration
- Rate limiting (5 requests/15 min per IP)
- XSS protection
- Honeypot spam prevention

## Development

```bash
pnpm install
pnpm dev
```

## Environment Variables

Create `.env.local` with:

```
RESEND_API_KEY=your_resend_api_key
CONTACT_TO=recipient@example.com
CONTACT_FROM=sender@yourdomain.com
CONTACT_SUBJECT=Contact form subject
```

## License

Private
