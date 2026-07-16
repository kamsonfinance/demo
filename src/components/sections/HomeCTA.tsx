import Link from 'next/link'
import type { ContactContent, NavConfig } from '@/types/content'

interface Props { contact: ContactContent; nav: NavConfig }

export default function CTASection({ contact, nav }: Props) {
  return (
    <section className="bg-[#080F26] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — heading + contact channels */}
          <div>
            <span className="block w-8 h-[2px] bg-[#CFA84A] mb-5" />
            <h2 className="font-serif font-bold text-white leading-tight mb-3"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              Discuss Your Requirement With Kamson
            </h2>
            <p className="font-sans text-[15px] text-white/50 leading-[1.8] mb-8">
              Whether you are buying a home, growing a business or evaluating insurance — Kamson will help you find the right solution.
            </p>

            <div className="space-y-0">
              {contact.channels.map((ch, i) => (
                <a key={i} href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 py-4 border-b border-white/[0.08]
                             hover:border-[#CFA84A]/35 transition-colors group">
                  <div className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/[0.1]
                                  flex items-center justify-center flex-shrink-0 mt-0.5
                                  group-hover:border-[#CFA84A]/30 transition-colors text-[15px]">
                    {ch.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[14px] font-semibold text-white leading-tight">{ch.label}</p>
                    <p className="font-sans text-[12.5px] text-white/40 mt-0.5 leading-snug">{ch.sub}</p>
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-[#CFA84A]
                                   group-hover:text-white transition-colors flex-shrink-0
                                   self-center whitespace-nowrap">
                    {ch.action}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — quick CTAs */}
          <div className="flex flex-col gap-4">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-sm p-8">
              <p className="font-sans text-[11px] font-semibold tracking-[2px] uppercase text-[#CFA84A] mb-4">
                Get in Touch
              </p>
              <p className="font-sans text-[14px] text-white/60 leading-[1.75] mb-6">
                A Kamson Relationship Manager will contact you within one business day.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#B8962E] text-white
                             font-sans font-semibold text-[14px] px-7 py-3.5 rounded-sm
                             hover:bg-[#CFA84A] transition-colors">
                  Full Contact Page →
                </Link>
                <a href={nav.whatsappHref} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white
                             font-sans font-semibold text-[14px] px-7 py-3.5 rounded-sm
                             hover:bg-[#1fba59] transition-colors">
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-6
                        border-t border-white/[0.07] gap-3">
          <p className="font-sans text-[11px] text-white/22">{contact.copyright}</p>
          <div className="flex gap-5">
            {contact.footerLinks.map(link => (
              <a key={link.href} href={link.href}
                className="font-sans text-[11px] text-white/22 hover:text-white/45 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
