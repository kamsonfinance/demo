import type { LenderBadgesContent } from '@/types/content'

interface Props { content: LenderBadgesContent }

export default function LenderBadges({ content }: Props) {
  return (
    <section className="bg-[#F5EDD6] border-b border-[#E2D5B0] py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-14">

        {/* Heading */}
        <div className="mb-6">
          <p className="font-sans text-[10.5px] font-semibold tracking-[2px] uppercase
                         text-[#6B5F3A] mb-1">
            {content.heading}
          </p>
          <p className="font-sans text-[13px] text-[#8B7A4A] leading-snug max-w-lg">
            {content.subheading}
          </p>
        </div>

        {/* Badges — wrapping row */}
        <div className="flex flex-wrap gap-2 mb-3">
          {content.lenders.map((name, i) => (
            <span key={i}
              className="font-sans text-[12.5px] font-medium text-[#1A1814]
                         bg-white border border-[#D9CC9E] px-3.5 py-1.5
                         rounded-sm whitespace-nowrap
                         hover:border-[#B8962E]/50 hover:text-[#0D1B3E]
                         transition-colors cursor-default select-none">
              {name}
            </span>
          ))}
        </div>

        <p className="font-sans text-[11.5px] text-[#8B7A4A] italic">
          {content.moreText}
        </p>

      </div>
    </section>
  )
}
