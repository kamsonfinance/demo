import { siteContent } from '@/content/homepage'
import Navigation      from '@/components/layout/Navigation'
import MobileActionBar from '@/components/layout/MobileActionBar'
import WhatsAppButton  from '@/components/layout/WhatsAppButton'
import Footer          from '@/components/layout/Footer'

const c = siteContent

export default function ContactPage() {
  const { contact, nav } = c
  return (
    <>
      <Navigation content={nav} />
      <main className="pb-20 md:pb-0">

        {/* Page header */}
        <section className="bg-[#0A1630] py-14 md:py-18 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <p className="font-sans text-[10.5px] font-semibold tracking-[3px] uppercase
                           text-[#CFA84A]/80 mb-4">
              {contact.eyebrow}
            </p>
            <h1 className="font-serif font-bold text-white leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}>
              {contact.heading}
            </h1>
            <p className="font-sans text-[16px] text-white/65 leading-[1.8] max-w-2xl">
              {contact.subheading}
            </p>
          </div>
        </section>

        {/* Contact channels */}
        <section className="bg-[#080F26] py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-14">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left — channels */}
              <div>
                <span className="block w-8 h-[2px] bg-[#CFA84A] mb-6" />
                <h2 className="font-serif font-bold text-white leading-tight mb-2"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em' }}>
                  Reach Us Directly
                </h2>
                <p className="font-sans text-[14px] text-white/45 mb-8 leading-[1.75]">
                  No forms. Speak to a Kamson Relationship Manager directly.
                </p>

                <div className="space-y-0 mb-8">
                  {contact.channels.map((ch, i) => (
                    <a key={i} href={ch.href}
                      target={ch.href.startsWith('http') ? '_blank' : undefined}
                      rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 py-5 border-b border-white/[0.08]
                                 hover:border-[#CFA84A]/35 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/[0.07] border border-white/[0.1]
                                      flex items-center justify-center flex-shrink-0 mt-0.5
                                      group-hover:border-[#CFA84A]/30 transition-colors text-[16px]">
                        {ch.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-[15px] font-semibold text-white leading-tight">{ch.label}</p>
                        <p className="font-sans text-[13px] text-white/40 mt-0.5 leading-snug">{ch.sub}</p>
                      </div>
                      <span className="font-sans text-[12px] font-semibold text-[#CFA84A]
                                       group-hover:text-white transition-colors flex-shrink-0
                                       self-center whitespace-nowrap ml-2">
                        {ch.action}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 py-5">
                  <div className="w-10 h-10 rounded-full bg-white/[0.07] border border-white/[0.1]
                                  flex items-center justify-center flex-shrink-0 text-[16px]">
                    📍
                  </div>
                  <div>
                    <p className="font-sans text-[15px] font-semibold text-white leading-tight mb-1">Our Office</p>
                    <p className="font-sans text-[13px] text-white/40 leading-[1.65]">
                      {contact.officeAddress}
                    </p>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.officeAddress)}`}
                       target="_blank" rel="noopener noreferrer"
                       className="font-sans text-[11px] font-semibold text-[#CFA84A] mt-2 inline-block
                                  hover:text-white transition-colors">
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Right — map + email */}
              <div>
                <div className="rounded-sm overflow-hidden border border-white/[0.08] h-[280px] mb-6">
                  <iframe
                    src={contact.mapsEmbedUrl}
                    width="100%" height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map — ${contact.officeAddress}`}
                  />
                </div>

                {/* Email channel */}
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-sm p-6">
                  <p className="font-sans text-[11px] font-semibold tracking-[2px] uppercase
                                 text-[#CFA84A] mb-3">Business Hours</p>
                  <p className="font-sans text-[14px] text-white/65 leading-[1.75]">
                    Monday – Saturday<br />
                    10:00 AM – 7:00 PM
                  </p>
                  <p className="font-sans text-[12px] text-white/35 mt-3">
                    WhatsApp responses within 2 hours during business hours.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </main>
      <WhatsAppButton href={nav.whatsappHref} ariaLabel={nav.whatsappAriaLabel} />
      <MobileActionBar
        phoneHref={nav.phoneHref}
        whatsappHref={nav.whatsappHref}
        scheduleHref="/contact"
        callLabel={nav.mobileBar.callLabel}
        whatsappLabel={nav.mobileBar.whatsappLabel}
        scheduleLabel={nav.mobileBar.scheduleLabel}
      />
    </>
  )
}
