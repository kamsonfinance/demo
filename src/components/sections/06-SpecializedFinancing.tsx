import type { SpecializedFinancingContent } from '@/types/content'

interface Props { content: SpecializedFinancingContent }

export default function SpecializedFinancing({ content }: Props) {
  return (
    <section id ="Specialized-finance" className="bg-[#080F26] border-b border-[#E2D5B0] py-6 md:py-8">
      
      <div className="wrap">

        {/* Header */}
        <div className="max-w-2xl mb-6">
          <span className="rule-gold-light" />
          <h2 className="h-section-xl h-section-xl-light mb-4">{content.heading}</h2>
          
          <p className="font-sans text-[14px] text-white/55 leading-[1.6] font-light">
            {content.subheading}
          </p>
        </div>

        {/* Two-column list — no card boxes */}
        {/* Specialized financing categories */}
{/* Specialized financing categories */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-4">

  {content.cards.map((card, i) => (
    <div
      key={i}
      className="border-l border-[#CFA84A]/30 pl-4 py-2"
    >
      <h3 className="font-sans text-[14px] font-semibold text-white mb-2 leading-snug">
        {card.name}
      </h3>

      <p className="font-sans text-[12px] text-white/55 leading-[1.5]">
        {card.desc}
      </p>
    </div>
  ))}

</div>
        

      </div>
    </section>
  )
}
