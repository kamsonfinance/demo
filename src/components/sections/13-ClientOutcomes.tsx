import Link from 'next/link'
import type { ClientOutcomesContent } from '@/types/content'

interface Props { content: ClientOutcomesContent }

export default function ClientOutcomes({ content }: Props) {
  return (
    <section id="outcomes" className="bg-[#FAFAF7] section">
      <div className="wrap">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <span className="rule-gold" />
            <h2 className="h-section-xl text-[#0D1B3E]">{content.heading}</h2>
          </div>
          <div className="lg:self-end">
            <p className="font-sans text-[15px] text-[#6B6760] leading-[1.75]">
              {content.subheading}
            </p>
          </div>
        </div>

        {/* Table — clean, no box borders */}
        <div>
          {/* Column headers — desktop */}
          <div className="hidden md:grid grid-cols-[1fr_200px_160px_140px] gap-6 pb-3
                           border-b border-[#C8C2B6] mb-0">
            {['Client', 'Loan Type', 'Location', 'Amount'].map(h => (
              <span key={h} className="font-sans text-[10px] font-semibold tracking-[1.5px]
                                        uppercase text-[#9A9790]">
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          {content.outcomes.map((o, i) => (
            <div key={i}
              className="grid grid-cols-1 md:grid-cols-[1fr_200px_160px_140px] gap-2 md:gap-6
                         py-5 border-b border-[#E8E4DC] group cursor-default
                         hover:bg-white -mx-6 px-6 md:-mx-10 md:px-10 lg:-mx-14 lg:px-14
                         transition-colors duration-100">
              <span className="font-sans text-[15px] font-semibold text-[#0D1B3E]">
                {o.clientType}
              </span>
              <span className="font-sans text-[14px] text-[#6B6760]">
                {o.loanType}
              </span>
              <span className="font-sans text-[14px] text-[#9A9790]">
                {o.location}
              </span>
              <span className="font-serif text-[16px] font-bold text-[#0D1B3E]
                               group-hover:text-[#B8962E] transition-colors">
                {o.amount}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-6">
          <Link href={content.ctaHref} className="btn-primary">
            {content.ctaLabel}
          </Link>
          <p className="font-sans text-[12px] text-[#9A9790]">
            Representative outcomes. Amounts approximate.
          </p>
        </div>

      </div>
    </section>
  )
}
