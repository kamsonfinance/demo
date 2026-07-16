import type { BankingPartnersContent } from '@/types/content'

interface Props { content: BankingPartnersContent }

export default function BankingPartners({ content }: Props) {
  return (
    <section className="bg-white py-16 border-y border-[#E8E4DC]">
      <div className="wrap flex items-center gap-6">
        <p className="font-sans text-[10px] font-medium tracking-[1.5px] uppercase
                       text-white/30 flex-shrink-0">
          {content.label}
        </p>
        {/* Text names instead of placeholder images */}
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {content.partners.map((b, i) => (
            <span key={i} className="font-sans text-[11px] font-medium text-white/30">
              {b.name}
            </span>
          ))}
          <span className="font-sans text-[11px] text-white/20">{content.moreText}</span>
        </div>
      </div>
    </section>
  )
}
