'use client'
import { useState } from 'react'
import type { ContactContent } from '@/types/content'

interface Props { content: ContactContent }
type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactSection({ content }: Props) {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', mobile: '', city: '', loanType: '', amount: '', message: '' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, sourcePage: 'homepage' }),
      })
      setState(res.ok ? 'success' : 'error')
    } catch { setState('error') }
  }
  const f = content.fieldLabels
  const p = content.fieldPlaceholders

  // Shared input class for this dark form (boxed, not underline)
  const inp = `block w-full bg-white/[0.07] border border-white/[0.15] rounded-sm
               font-sans text-[13.5px] text-white placeholder:text-white/25
               px-3 py-2.5 h-10 focus:outline-none focus:border-[#CFA84A]/60
               focus:bg-white/[0.10] transition-colors`

  return (
    <section id="contact" className="bg-[#080F26] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-14">

        {/* Header */}
        <div className="mb-14">
          <span className="block w-8 h-[2px] bg-[#CFA84A] mb-5" />
          <h2 className="font-serif font-bold text-white leading-tight mb-3"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}>
            {content.heading}
          </h2>
          <p className="font-sans text-[15px] text-white/50 max-w-xl leading-[1.8]">
            {content.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-start">

          {/* LEFT — channels + map */}
          <div>
            {/* Channel rows */}
            <div className="space-y-0 mb-8">
              {content.channels.map((ch, i) => (
                <a key={i} href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 py-5 border-b border-white/[0.08]
                             hover:border-[#CFA84A]/35 transition-colors group">

                  {/* Icon container — fixed width */}
                  <div className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/[0.1]
                                  flex items-center justify-center flex-shrink-0 mt-0.5
                                  group-hover:border-[#CFA84A]/30 transition-colors text-[15px]">
                    {ch.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[14px] font-semibold text-white leading-tight">
                      {ch.label}
                    </p>
                    <p className="font-sans text-[12.5px] text-white/40 mt-0.5 leading-snug">
                      {ch.sub}
                    </p>
                  </div>

                  {/* Action */}
                  <span className="font-sans text-[11px] font-semibold text-[#CFA84A]
                                   group-hover:text-white transition-colors flex-shrink-0
                                   self-center whitespace-nowrap">
                    {ch.action}
                  </span>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-sm overflow-hidden border border-white/[0.08] h-[200px]">
              <iframe
                src={content.mapsEmbedUrl}
                width="100%" height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map — ${content.officeAddress}`}
              />
            </div>

            <p className="font-sans text-[12px] text-white/35 mt-3">
              📍 {content.officeAddress}
            </p>
          </div>

          
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-6
                        border-t border-white/[0.07] gap-3">
          <p className="font-sans text-[11px] text-white/22">{content.copyright}</p>
          <div className="flex gap-5">
            {content.footerLinks.map(link => (
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
