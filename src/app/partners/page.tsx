import { siteContent } from '@/content/homepage'
import Navigation      from '@/components/layout/Navigation'
import MobileActionBar from '@/components/layout/MobileActionBar'
import WhatsAppButton  from '@/components/layout/WhatsAppButton'
import Footer          from '@/components/layout/Footer'
import Image           from 'next/image'
import Link            from 'next/link'

const c = siteContent

const PARTNER_TYPES = [
  {
    icon: '',
    title: 'Chartered Accountants',
    desc: 'Your business clients need financing you cannot arrange directly. Kamson handles the full process — protecting your professional relationship with every referral.',
    image: '/images/partners/ca.png',
  },
  {
    icon: '',
    title: 'Property Consultants & Dealers',
    desc: "When your buyer needs a home loan or your seller needs LAP, Kamson is the partner who gets it done. Fast, reliable, with access to 34+ lenders.",
    image: '/images/partners/property.png',
  },
  {
    icon: '',
    title: 'Builders & Developers',
    desc: 'Project finance, construction loans and buyer home loan support. Kamson has helped builders of all sizes — independent developers to large residential projects.',
    image: '/images/partners/builders.png',
  },
  {
    icon: '',
    title: 'DSAs & Financial Advisors',
    desc: "If you have clients and want access to Kamson's lender network and expertise, partner with us. We handle the complex work so you can focus on your relationships.",
    image: '/images/partners/dsa.png',
  },
  {
    icon: '',
    title: 'Insurance Advisors',
    desc: 'Cross-refer clients who need loan solutions. We reciprocate with insurance referrals from our client base — a natural partnership built on complementary expertise.',
    image: '/images/partners/insurance.png',
  },
]

export default function PartnersPage() {
  return (
    <>
      <Navigation content={c.nav} />
      <main className="pb-20 md:pb-0">

        {/* ── Page Hero ── */}
        <section className="relative bg-[#060e22] overflow-hidden" style={{ minHeight: '380px' }}>
          <Image
            src="/images/partners/hero.png"
            alt="Professional partnership"
            fill className="object-cover opacity-25"
            priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060e22] via-[#060e22]/85 to-[#060e22]/40" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060e22] to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16
                          flex flex-col justify-center" style={{ minHeight: '380px' }}>
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="block w-5 h-[1.5px] bg-[#CFA84A]" />
              <p className="font-sans text-[10.5px] font-semibold tracking-[3.5px] uppercase text-[#CFA84A]">
                For Professionals
              </p>
            </span>
            <h1 className="font-serif font-bold text-white leading-[1.08] mb-4"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em' }}>
              Partner With<br />
              <span className="text-[#CFA84A]">Kamson</span>
            </h1>
            <p className="font-sans text-[16px] text-white/60 leading-[1.8] max-w-xl">
              Give your clients access to 35 years of lender expertise and a network of 50+ banks and insurance partners. Your reputation travels with every referral — Kamson protects it.
            </p>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="bg-[#F5EDD6] border-y border-[#E2D5B0]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="flex flex-wrap">
              {[
                { value: '35+', label: 'Years of relationships' },
                { value: '50+', label: 'Lending partners' },
                { value: '₹5,000Cr+', label: 'Financing facilitated' },
                { value: '10,000+', label: 'Clients assisted' },
              ].map((s, i) => (
                <div key={i} className={`flex-1 min-w-[140px] py-7 px-4 text-center ${i > 0 ? 'border-l border-[#D9CC9E]' : ''}`}>
                  <div className="font-serif font-bold text-[#0D1B3E] leading-none mb-1.5"
                       style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}>{s.value}</div>
                  <div className="font-sans font-semibold text-[#6B5F3A] uppercase leading-tight text-[9.5px] tracking-[0.04em]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── Lending network ── */}
        <section id="network" className="bg-white py-12 border-b border-[#E8E4DC] scroll-mt-[90px]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <p className="font-sans text-[10px] font-semibold tracking-[3px] uppercase text-[#B8962E] mb-6">
              50+ Lending &amp; Insurance Partners
            </p>
            <div className="flex flex-wrap gap-2.5">
              {c.lenderBadges.lenders.map((name, i) => (
                <span key={i} className="font-sans text-[12.5px] font-semibold text-[#0D1B3E]
                                         bg-[#F5EDD6] border border-[#E2D5B0] px-4 py-2">
                  {name}
                </span>
              ))}
              <span className="font-sans text-[12.5px] text-[#9A9790] px-4 py-2 italic">
                {c.lenderBadges.moreText}
              </span>
            </div>
          </div>
        </section>


        {/* ── Who partners ── */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="flex items-center gap-4 mb-12">
              <span className="block w-10 h-[2px] bg-[#B8962E]" />
              <p className="font-sans text-[10.5px] font-semibold tracking-[3px] uppercase text-[#B8962E]">
                Who Partners With Kamson
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-[#E2DDD4]">
              {PARTNER_TYPES.map((pt, i) => (
                <div key={i} className="group bg-white hover:bg-[#0D1B3E] transition-colors duration-300 overflow-hidden">
                  <div className="relative h-[160px] overflow-hidden">
                    <Image src={pt.image} alt={pt.title} fill
                           className="object-cover group-hover:scale-105 transition-transform duration-500"
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-5 text-[1.8rem]">{pt.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-[#0D1B3E] group-hover:text-white
                                   text-[1.1rem] mb-3 transition-colors leading-snug">
                      {pt.title}
                    </h3>
                    <p className="font-sans text-[13.5px] text-[#6B6760] group-hover:text-white/55
                                   leading-[1.72] transition-colors">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* CTA card */}
              <div className="bg-[#0D1B3E] p-8 flex flex-col justify-between">
                <div>
                  <p className="font-sans text-[9.5px] font-semibold tracking-[2.5px] uppercase text-[#CFA84A] mb-3">
                    Start the Conversation
                  </p>
                  <h3 className="font-serif font-bold text-white text-[1.2rem] leading-snug mb-3">
                    Ready to partner with Kamson?
                  </h3>
                  <p className="font-sans text-[13px] text-white/50 leading-[1.7]">
                    WhatsApp or call to discuss how a Kamson partnership works for your client base.
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                  <Link href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-[#B8962E] text-white
                                   font-sans font-semibold text-[13px] px-5 py-3 rounded-sm
                                   hover:bg-[#CFA84A] transition-colors">
                    Contact Kamson →
                  </Link>
                  <a href={c.nav.whatsappHref} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white
                                font-sans font-semibold text-[13px] px-5 py-3 rounded-sm
                                hover:bg-[#1fba59] transition-colors">
                    WhatsApp to Discuss
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section className="bg-[#F5EDD6] py-14 md:py-18">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center">
              <blockquote>
                <span className="block w-10 h-[2px] bg-[#B8962E] mb-6" />
                <p className="font-serif text-[20px] md:text-[24px] italic text-[#0D1B3E] leading-[1.65] mb-6">
                  &ldquo;{c.trustedBy.quoteText}&rdquo;
                </p>
                <footer>
                  <p className="font-sans text-[13px] font-semibold text-[#0D1B3E]">{c.trustedBy.quoteAttrib}</p>
                  <p className="font-sans text-[11px] text-[#B8962E] mt-0.5">{c.trustedBy.quoteRole}</p>
                </footer>
              </blockquote>

              {/* Professional trust badges */}
              <div className="grid grid-cols-2 gap-3">
                {c.trustedBy.cards.map((card, i) => (
                  <div key={i} className="bg-white border border-[#E2D5B0] rounded-sm p-4 text-center
                                           hover:border-[#B8962E]/40 transition-colors">
                    <p className="font-sans text-[12px] font-semibold text-[#0D1B3E] leading-snug">{card.name}</p>
                  </div>
                ))}
              </div>
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
