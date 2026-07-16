import Link from 'next/link'
import type { ProcessContent } from '@/types/content'

interface Props { content: ProcessContent }

export default function KamsonProcess({ content }: Props) {
  return (
    <section className="bg-[#FAFAF7] section">
      <div className="wrap">

        {/* Two-column header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 mb-14">
          <div>
            <span className="rule-gold" />
            <h2 className="h-section-xl text-[#0D1B3E] mb-4">{content.heading}</h2>
            <p className="font-sans text-[15px] text-[#6B6760] leading-[1.78]">
              {content.subheading}
            </p>
          </div>
          <div className="lg:self-end bg-[#0D1B3E] p-7 rounded-sm">
            <p className="font-sans text-[14px] text-white/65 leading-[1.7] mb-5">
              {content.introBody}
            </p>
            <Link href={content.ctaHref} className="btn-primary inline-flex text-[13px]">
              {content.ctaLabel}
            </Link>
          </div>
        </div>

        {/* Steps — numbered, no boxes */}
        <div className="space-y-0">
          {content.steps.map((step, i) => {
            const isLast = i === content.steps.length - 1
            return (
              <div key={i}
                className="grid grid-cols-[52px_1fr] gap-6 py-7
                           border-b border-[#E8E4DC] last:border-b-0">

                {/* Step number */}
                <div className="flex flex-col items-center gap-0">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    font-sans text-[13px] font-bold flex-shrink-0
                    ${step.isFinal
                      ? 'border-2 border-[#B8962E] text-[#B8962E]'
                      : 'bg-[#0D1B3E] text-white'}
                  `}>
                    {step.isFinal ? '∞' : i + 1}
                  </div>
                  {!isLast && <div className="w-px flex-1 bg-[#E8E4DC] mt-2 min-h-[16px]" />}
                </div>

                {/* Content */}
                <div className="pb-1">
                  <p className="font-sans text-[10px] font-semibold tracking-[1.5px] uppercase
                                 text-[#B8962E] mb-1">
                    {step.stepLabel}
                  </p>
                  <h3 className="font-sans text-[16px] font-semibold text-[#0D1B3E] mb-2">
                    {step.heading}
                  </h3>
                  <p className="font-sans text-[14px] text-[#6B6760] leading-[1.7]">
                    {step.body}
                  </p>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
