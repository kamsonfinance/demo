# Kamson Financial Services — Website

Production-ready website for Kamson Financial Services. Built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## Tech Stack

| Layer       | Technology |
|-------------|-----------|
| Framework   | Next.js 14 (App Router) |
| Language    | TypeScript |
| Styling     | Tailwind CSS |
| Database    | Supabase (PostgreSQL) |
| Deployment  | Vercel |
| Fonts       | Playfair Display (headings) + Inter (body) |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# 3. Set up database
# Run supabase/schema.sql in your Supabase SQL editor

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Updating Content

**All website content lives in one file:**

```
src/content/homepage.ts
```

Every section — hero headline, trust metrics, transaction amounts, testimonials, contact details — is in this file. Edit it directly. TypeScript will catch any structural errors.

### Key content to update before launch:

- [ ] `hero.ctas.call.href` → real phone number
- [ ] `hero.ctas.whatsapp.href` → real WhatsApp number
- [ ] `nav.phoneDisplay` + `nav.phoneHref` → real phone
- [ ] `trustMetrics[2].value` → verify actual financing volume
- [ ] `founder.imageSrc` → real founder photo at `/public/placeholders/founder.jpg`
- [ ] `bankingPartners.partners[*].logoSrc` → real bank logos
- [ ] `transactions` → verify amounts with Kamson
- [ ] `reviews` → replace with actual Google reviews
- [ ] `contact.channels[3].sub` → real office address
- [ ] `contact.channels[3].href` → real Google Maps link
- [ ] `seo.schema.telephone` → real phone

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Homepage (composes all 16 sections)
│   ├── globals.css         # Design tokens + Tailwind base
│   └── api/
│       ├── contact/        # Lead capture → Supabase
│       └── partner/        # Partner enquiry → Supabase
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Sticky nav, mobile hamburger
│   │   ├── MobileActionBar.tsx # Call / WhatsApp / Schedule
│   │   └── WhatsAppButton.tsx  # Desktop floating button
│   └── sections/
│       ├── 01-HeroSection.tsx
│       ├── 02-TrustMetrics.tsx
│       ├── 03-ReferralStrip.tsx
│       ├── 04-FounderSection.tsx
│       ├── 05-WhyKamson.tsx
│       ├── 06-SpecializedFinancing.tsx
│       ├── 07-TransactionShowcase.tsx
│       ├── 08-WhoWeWorkWith.tsx
│       ├── 09-BankingPartners.tsx
│       ├── 10-KamsonProcess.tsx
│       ├── 11-Services.tsx
│       ├── 12-TrustedByProfessionals.tsx
│       ├── 13-GoogleReviews.tsx
│       ├── 14-PartnerSection.tsx
│       └── 15-ContactSection.tsx
├── content/
│   └── homepage.ts         # ← ALL CONTENT LIVES HERE
├── types/
│   └── content.ts          # TypeScript types for all content
└── lib/
    ├── supabase.ts         # Supabase client
    └── utils.ts            # Utilities (cn, etc.)

supabase/
└── schema.sql              # Database schema + RLS policies
```

## Deployment (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables from `.env.example`
4. Deploy

## Migrating Content to Supabase CMS

When you want content editors to update the website without code changes:

1. The `supabase/schema.sql` already has tables for most content
2. Fetch content in each component using `supabase.from('trust_metrics').select('*')`
3. Replace the content objects in `src/content/homepage.ts` with async Supabase queries
4. Use Next.js `revalidate` or ISR to control cache behaviour

## Future Modules

The architecture supports adding:
- **Partner Portal** — `/partner/dashboard` with Supabase auth
- **Customer Portal** — loan tracking, document upload
- **Admin Panel** — manage leads, partner enquiries, content
- **CRM Integration** — leads can sync to any CRM via Supabase webhooks

## Design System

Colors, fonts, and spacing are defined in `tailwind.config.ts`.

Key classes:
- `bg-navy` / `text-navy` → #0D1B3E
- `bg-gold` / `text-gold` → #B8962E
- `text-gold-light` → #D4AE4E
- `bg-gold-pale` → #F7F0DE
- `bg-cream` → #FAF8F3
- `font-serif` → Playfair Display
- `font-sans` → Inter
- `.eyebrow` → section label style
- `.section-heading` → h2 style
- `.btn-gold` / `.btn-navy` / `.btn-wa` → CTA buttons
- `.card-surface` / `.card-dark` / `.card-white` → card variants
