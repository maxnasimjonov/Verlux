# Verlux Construction Website

A modern, responsive website for Verlux Construction built with Next.js, React, and Tailwind CSS.

## Features

- Modern, responsive design
- Service pages with detailed information
- Quote request form with email notifications
- Project showcase
- About page with company information

## Getting Started

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration
QUOTE_RECIPIENT_EMAIL=your-email@example.com

# Resend API Configuration (Optional)
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=Verlux Construction <noreply@verlux.com>
```

### Email Setup

The quote form can send emails in two ways:

1. **Using Resend (Recommended)**
   - Sign up at [resend.com](https://resend.com)
   - Get your API key
   - Add `RESEND_API_KEY` to your `.env.local`
   - Verify your domain or use the test email
   - Set `RESEND_FROM_EMAIL` to a verified email

2. **Manual Processing**
   - If `RESEND_API_KEY` is not set, quote requests will be logged to the console
   - You can manually process these requests

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Services

The website includes detailed pages for:
- Balcony Restoration
- Masonry Restoration
- Caulking and Sealant Application
- Architectural Coating / Painting
- Underground Garage Structure Repairs
- Roof Replacement & Repair
- Stucco Installation & Repair
- Siding Installation & Repair
- Windows Installations

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React (Icons)
