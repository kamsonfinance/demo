import Link from 'next/link'
import { siteContent } from '@/content/homepage'

const c = siteContent

const FOOTER_NAV = [
  {
    heading: 'About',
    links: [
      { label: "Director's Message", href: '/about#director'   },
      { label: 'Why Kamson',         href: '/about#why-kamson' },
      { label: 'Our Team',           href: '/about#team'       },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Home Loans',            href: '/services#home-loans'            },
      { label: 'Business Loans',        href: '/services#business-loans'        },
      { label: 'MSME Loans',            href: '/services#msme-loans'            },
      { label: 'Loan Against Property', href: '/services#loan-against-property' },
      { label: 'Working Capital',       href: '/services#working-capital'       },
      { label: 'Insurance',             href: '/services#insurance'             },
    ],
  },
  {
    heading: 'Partners',
    links: [
      { label: 'Partner With Kamson', href: '/partners'         },
      { label: 'Banking Network',     href: '/partners#network' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Get in Touch',    href: '/contact' },
      { label: 'WhatsApp Us',     href: c.nav.whatsappHref },
      { label: 'Call Kamson',     href: c.nav.phoneHref    },
      { label: 'Email Us',        href: 'mailto:support@kamsonfinancials.com' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#080F26] border-t border-white/[0.07]">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">

          {/* Brand column */}
          <div>
            <p className="font-sans text-[13px] text-white/45 leading-[1.75] max-w-[240px]">
              Trusted financial advisory in Delhi NCR since 1988. Home loans, business loans, LAP, working capital and insurance through 50+ lenders and insurance partners.
            </p>

            {/* Contact quick-links */}
            <div className="mt-6 space-y-2">
              <a href={c.nav.phoneHref}
                 className="flex items-center gap-2.5 font-sans text-[13px] text-white/55 hover:text-[#CFA84A] transition-colors">
                <span className="text-[14px]">📞</span>
                {c.nav.phoneDisplay}
              </a>
              <a href={c.nav.whatsappHref} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2.5 font-sans text-[13px] text-white/55 hover:text-[#CFA84A] transition-colors">
                <span className="text-[14px]">💬</span>
                WhatsApp: +91 95605 06332
              </a>
              <a href="mailto:support@kamsonfinancials.com"
                 className="flex items-center gap-2.5 font-sans text-[13px] text-white/55 hover:text-[#CFA84A] transition-colors">
                <span className="text-[14px]">📧</span>
                support@kamsonfinancials.com
              </a>
              <div className="flex items-start gap-2.5">
                <span className="text-[14px] mt-0.5 flex-shrink-0">📍</span>
                <span className="font-sans text-[12px] text-white/40 leading-[1.65]">
                  102-103, 1st Floor, Kochhar Tower,<br />
                  Jail Road, Hari Nagar, New Delhi
                </span>
              </div>
            </div>

            {/* Hours */}
            <p className="font-sans text-[11px] text-white/30 mt-5">
              Mon – Sat · 10:00 AM – 7:00 PM
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_NAV.map(section => (
              <div key={section.heading}>
                <p className="font-sans text-[10px] font-semibold tracking-[2.5px] uppercase
                               text-[#CFA84A] mb-4">
                  {section.heading}
                </p>
                <ul className="space-y-2.5">
                  {section.links.map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-sans text-[12.5px] text-white/45 hover:text-white/80 transition-colors leading-snug"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lender strip */}
      <div className="border-t border-white/[0.05] py-5 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-sans text-[9.5px] font-semibold tracking-[2px] uppercase text-white/25 flex-shrink-0">
            Partners:
          </span>
          {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak', 'Bajaj Finance', 'Tata Capital', 'LIC HFL'].map(name => (
            <span key={name} className="font-sans text-[11px] text-white/25">{name}</span>
          ))}
          <span className="font-sans text-[11px] text-white/20 italic">+ 42 more</span>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/[0.05] py-5 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-[11px] text-white/40">{c.contact.copyright}</p>
          <div className="flex gap-5">
            <a href="/privacy" className="font-sans text-[11px] text-white hover:text-[#CFA84A] transition-colors">Privacy Policy</a>
            <a href="/terms"   className="font-sans text-[11px] text-white hover:text-[#CFA84A] transition-colors">Terms of Service</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-white/[0.04]">
          <p className="font-sans text-[10.5px] text-white/30 leading-[1.7]">
            Loans and insurance are subject to eligibility, underwriting and applicable terms and conditions of respective banks, NBFCs and insurers.
          </p>
        </div>
      </div>
    </footer>
  )
}
