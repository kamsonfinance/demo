import type { Metadata } from 'next'
import { siteContent } from '@/content/homepage'
import Navigation      from '@/components/layout/Navigation'
import MobileActionBar from '@/components/layout/MobileActionBar'
import WhatsAppButton  from '@/components/layout/WhatsAppButton'
import Footer          from '@/components/layout/Footer'
import FounderSection  from '@/components/sections/04-FounderSection'
import WhyKamson       from '@/components/sections/05-WhyKamson'
import Link            from 'next/link'

export const metadata: Metadata = {
  title: 'About Kamson Financial Services | Director, Team & Why Kamson',
  description: 'Learn about Kamson Financial Services — our founder Madhu Sagar Adlakha, why clients choose us over banks, and the team behind 35+ years of financial advisory in Delhi NCR.',
}

const c = siteContent

const TEAM = [
  {
    name: 'Madhu Sagar Adlakha',
    role: 'Founder & Director',
    since: 'Est. 1988',
    desc: '35+ years of financial advisory experience across home loans, business finance, LAP and working capital. Built Kamson Financial Services Brand of Inteck Marketing India from the ground up on a foundation of lender relationships and client trust.',
    initials: 'MSA',
  },
  {
    name: 'Relationship Managers',
    role: 'Client Advisory Team',
    since: 'Delhi NCR · Ex-Bankers & Finance Professionals',
    desc: 'Our team includes ex-bankers and highly qualified finance professionals who understand lender criteria from the inside. Each client is guided from initial consultation through documentation, lender liaison and final disbursement.',
    initials: 'RM',
  },
  {
    name: 'Documentation Team',
    role: 'File & Process Specialists',
    since: 'In-house · 60+ Employees',
    desc: 'A dedicated in-house team of over 60 employees — specialists who prepare and review every file before submission, ensuring each application is matched precisely to the lender\'s criteria.',
    initials: 'DT',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation content={c.nav} />
      <main className="pb-20 md:pb-0">

        {/* ── Page Hero ── */}
        <section className="relative bg-[#0A1630] overflow-hidden" style={{ minHeight: '340px' }}>
          <div className="absolute inset-0 opacity-10"
               style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #B8962E 0%, transparent 60%)' }} />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16
                          flex flex-col justify-center" style={{ minHeight: '340px' }}>
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="block w-5 h-[1.5px] bg-[#CFA84A]" />
              <p className="font-sans text-[10.5px] font-semibold tracking-[3.5px] uppercase text-[#CFA84A]">
                About Kamson BRAND OF INTECK MARKETING INDIA
              </p>
            </span>
            <h1 className="font-serif font-bold text-white leading-[1.08] mb-4"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.03em' }}>
              35 Years of Trusted<br />
              <span className="text-[#CFA84A]">Financial Advisory</span>
            </h1>
            <p className="font-sans text-[15px] text-white/60 leading-[1.8] max-w-xl">
              Kamson Financial Services brand of Inteck Marketing India was founded in 1988 on a conviction that individuals and businesses deserve the same quality of financial access that large institutions receive.
            </p>

            {/* Jump links */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: "Director's Message", href: '#director' },
                { label: 'Why Kamson',         href: '#why-kamson' },
                { label: 'Our Team',           href: '#team' },
              ].map(l => (
                <a key={l.href} href={l.href}
                   className="font-sans text-[12px] font-semibold text-[#CFA84A]
                              border border-[#CFA84A]/40 px-4 py-2 rounded-sm
                              hover:bg-[#CFA84A]/10 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key Numbers ── */}
        <section className="bg-[#F5EDD6] border-y border-[#E2D5B0]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="flex flex-wrap">
              {[
                { value: '1988',      label: 'Founded' },
                { value: '35+',       label: 'Years of advisory' },
                { value: '60+',       label: 'Employees' },
                { value: '50+',       label: 'Lending & insurance partners' },
                { value: '₹5,000Cr+', label: 'Financing facilitated' },
                { value: '50,000+',  label: 'Clients assisted' },
              ].map((s, i) => (
                <div key={i} className={`flex-1 min-w-[120px] py-7 px-4 text-center ${i > 0 ? 'border-l border-[#D9CC9E]' : ''}`}>
                  <div className="font-serif font-bold text-[#0D1B3E] leading-none mb-1.5"
                       style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}>{s.value}</div>
                  <div className="font-sans font-semibold text-[#6B5F3A] uppercase text-[9px] tracking-[0.04em] leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Director's Message ── */}
        <section id="director" className="scroll-mt-[90px]">
          <div className="bg-[#F7F4EF] py-6 px-6 md:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-[#B8962E]" />
              <p className="font-sans text-[10.5px] font-semibold tracking-[3px] uppercase text-[#B8962E]">
                Director's Message
              </p>
            </div>
          </div>
          <FounderSection content={c.founder} />
        </section>

        {/* ── Why Kamson ── */}
        <div id="why-kamson" className="scroll-mt-[90px]">
          <WhyKamson content={c.whyKamson} />
        </div>

        {/* ── Our Team ── */}
        <section id="team" className="scroll-mt-[90px] bg-[#F7F4EF] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

            <div className="flex items-center gap-4 mb-12">
              <span className="block w-10 h-[2px] bg-[#B8962E]" />
              <p className="font-sans text-[10.5px] font-semibold tracking-[3px] uppercase text-[#B8962E]">
                Our Team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[#E2DDD4]">
              {TEAM.map((member, i) => (
                <div key={i} className="bg-white p-8 flex flex-col">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-[#0D1B3E] flex items-center justify-center mb-5 flex-shrink-0">
                    <span className="font-serif font-bold text-[#CFA84A] text-[16px]">{member.initials}</span>
                  </div>
                  <p className="font-sans text-[9.5px] font-semibold tracking-[2px] uppercase text-[#B8962E] mb-2">
                    {member.role}
                  </p>
                  <h3 className="font-serif font-bold text-[#0D1B3E] text-[1.15rem] leading-snug mb-1">
                    {member.name}
                  </h3>
                  <p className="font-sans text-[11px] text-[#9A9790] mb-4">{member.since}</p>
                  <p className="font-sans text-[13.5px] text-[#6B6760] leading-[1.72]">{member.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="font-sans text-[14px] text-[#6B6760] mb-5">
                Every Kamson client is assigned a dedicated relationship manager who manages the process end-to-end.
              </p>
              <Link href="/contact"
                    className="inline-flex items-center gap-2 bg-[#B8962E] text-white font-sans
                               font-semibold text-[14px] px-7 py-4 rounded-sm hover:bg-[#CFA84A] transition-colors shadow-md">
                Speak With Kamson →
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA Strip ── */}
        <section className="bg-[#0D1B3E] py-12">
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-14 flex flex-col sm:flex-row
                          items-center justify-between gap-6">
            <div>
              <p className="font-serif text-white font-bold text-[1.2rem] mb-1">
                Ready to discuss your financing requirement?
              </p>
              <p className="font-sans text-[13px] text-white/45">
                Kamson has been helping clients navigate complex finance since 1988.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 flex-wrap">
              <Link href="/contact"
                    className="inline-flex items-center gap-2 bg-[#B8962E] text-white font-sans
                               font-semibold text-[14px] px-6 py-3 rounded-sm hover:bg-[#CFA84A] transition-colors">
                Contact Kamson →
              </Link>
              <a href={c.nav.whatsappHref} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-[#25D366] text-white font-sans
                            font-semibold text-[14px] px-6 py-3 rounded-sm hover:bg-[#1fba59] transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <WhatsAppButton href={c.nav.whatsappHref} ariaLabel={c.nav.whatsappAriaLabel} />
      <MobileActionBar
        phoneHref={c.nav.phoneHref}
        whatsappHref={c.nav.whatsappHref}
        scheduleHref="/contact"
        callLabel={c.nav.mobileBar.callLabel}
        whatsappLabel={c.nav.mobileBar.whatsappLabel}
        scheduleLabel={c.nav.mobileBar.scheduleLabel}
      />
    </>
  )
}
