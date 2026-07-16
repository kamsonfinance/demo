import { siteContent } from '@/content/homepage'
import Navigation      from '@/components/layout/Navigation'
import MobileActionBar from '@/components/layout/MobileActionBar'
import WhatsAppButton  from '@/components/layout/WhatsAppButton'
import Footer          from '@/components/layout/Footer'
import IneckMarketing  from '@/components/sections/04-FounderSection'
import WhyKamson       from '@/components/sections/05-WhyKamson'
import Link            from 'next/link'

const c = siteContent

export default function IneckMarketing() {
  return (
    <>
      <Navigation content={c.nav} />
      <main className="pb-20 md:pb-0">

        {/* Page header */}
        <section className="bg-[#0A1630] py-12 md:py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <p className="font-sans text-[10.5px] font-semibold tracking-[3px] uppercase
                           text-[#CFA84A]/80 mb-4">
              About Inteck Marketing India
            </p>
            <h1 className="font-serif font-bold text-white leading-[1.1]"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}>
              Inteck Marketing
            </h1>
            <p className="font-sans text-[14px] text-white/50 mt-2">Founder &amp; Director · Kamson Financial Services · Est. 1988</p>
          </div>
        </section>

        <IneckMarketing content={c.founder} />
        <WhyKamson content={c.whyKamson} />

        {/* CTA strip */}
        <section className="bg-[#080F26] py-12">
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
