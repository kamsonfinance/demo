import Link from 'next/link'
import type { WhyKamsonContent } from '@/types/content'

interface Props { content: WhyKamsonContent }

export default function WhyKamson({ content }: Props) {
  return (
    <section id="why-kamson" className="bg-white section">
      <div className="wrap">

        {/* Two-column header */}
        
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 mb-10">
          <div>
            <span className="rule-gold" />
            <h2 className="h-section-xl text-[#0D1B3E] mb-5">{content.heading}</h2>
            <p className="font-sans text-[16px] text-[#6B6760] leading-[1.8] max-w-lg">
              {content.lede}
            </p>
          </div>

          {/* Footer CTA box — only one, on the right */}
          <div className="lg:self-end">
            <div className="bg-[#0D1B3E] p-7 rounded-sm">
              <p className="font-sans text-[13px] text-white/65 leading-[1.7] mb-5">
                {content.footerText}
              </p>
              <Link href={content.footerCta.href} className="btn-primary text-sm inline-flex">
                {content.footerCta.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Four reasons — compact premium cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  {content.cards.map((card, i) => (
    <div
      key={i}
      className="bg-[#FAFAF7] border border-[#E8E4DC] rounded-sm p-6
                 hover:border-[#B8962E]/50 hover:shadow-[0_12px_30px_rgba(13,27,62,0.08)]
                 transition-all duration-200"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="font-serif text-[26px] font-bold text-[#B8962E] leading-none">
          {card.number}
        </div>

        <div>
          <h3 className="font-sans text-[18px] font-semibold text-[#0D1B3E] leading-snug mb-1">
            {card.heading}
          </h3>

          <span className="font-sans text-[10.5px] font-semibold text-[#B8962E] tracking-[0.4px] uppercase">
            {card.tag}
          </span>
        </div>
      </div>

      <p className="font-sans text-[14.5px] text-[#6B6760] leading-[1.65]">
        {card.body}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}
