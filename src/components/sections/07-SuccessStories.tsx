import Link from 'next/link'
import type { SuccessStoriesContent } from '@/types/content'

interface Props { content: SuccessStoriesContent }

export default function SuccessStories({ content }: Props) {
  return (
    <section id="outcomes" className="bg-[#F7F3E8] py-14 md:py-16 section">
      <div className="wrap">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="rule-gold-light" />
          <h2 className="h-section-xl h-section-xl-dark mb-3">{content.heading}</h2>
          <p className="font-sans text-[15px] text-[#0D1B3E] leading-[1.78]">{content.subheading}</p>
        </div>

        {/* Scale indicators — 4 cards, navy/gold only, no color chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {content.scaleCards.map((card, i) => (
            <div key={i} className="bg-white border border-[#E5DED0]
             rounded-sm p-7 lg:p-8">
              <p className="font-sans text-[9.5px] font-semibold tracking-[2px] uppercase
                          text-[#B8962E] mb-4">
                {card.type}
              </p>
              <div className="font-serif font-bold text-[#0D1B3E] leading-none mb-1"
                   style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                {card.capAmount}
              </div>
              <p className="font-sans text-[11px] text-[#0D1B3E] mb-6">{card.capLabel}</p>
              <ul className="space-y-2.5">
                {card.examples.map((ex, j) => (
                  <li key={j} className="flex items-center justify-between gap-3">
                    <span className="font-sans text-[11px] text-[#6B6760] truncate">{ex.profile}</span>
                    <span className="font-sans text-[12px] font-semibold text-[#CFA84A] flex-shrink-0">{ex.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       

        {/* CTA + Disclaimer */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8 pt-6
                        border-t border-[#E5DED0]">
          <Link href={content.ctaHref} className="btn-primary inline-flex flex-shrink-0">
            {content.ctaLabel}
          </Link>
          <p className="font-sans text-[11px] text-[#7A746A] italic">{content.disclaimer}</p>
        </div>

      </div>
    </section>
  )
}
