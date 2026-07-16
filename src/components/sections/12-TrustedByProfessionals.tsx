import type { TrustedByContent } from '@/types/content'

interface Props { content: TrustedByContent }

export default function TrustedByProfessionals({ content }: Props) {
  return (
    
    <section id="trusted-professionals" className="bg-white py-12 md:py-14">
      <div className="wrap">

        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="rule-gold-light" />
          <h2 className="h-section-xl h-section-xl-dark mb-2">{content.heading}</h2>
          <p className="font-sans text-[16px] text-[#6B6760] leading-[1.8] font-light">
            {content.subheading}
          </p>
        </div>

      <div className="mb-6 text-center">
        <p className="font-serif text-[56px] font-bold text-[#CFA84A] leading-none">
          35+
        </p>

        <p className="font-sans text-[#0D1B3E]/70 text-sm tracking-[2px] uppercase mt-2">
          Years Building Professional Relationships
        </p>
      </div>
        {/* Profession list — clean, no card boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
  {content.cards.map((card, i) => (
    <div
      key={i}
      className="bg-[#FFF8F6]  border border-[#E8E1D5]
                rounded-sm  p-5 text-center hover:border-[#C63D32]   transition-all"
    >
      

      <h3 className="font-sans text-[12px] font-semibold text-[#0D1B3E] mb-1">
        {card.name}
      </h3>

      <p className="font-sans text-[12px] text-[#6B6760] leading-[1.5]">
        {card.desc}
      </p>
    </div>
  ))}
</div>

        {/* CA Quote — simple blockquote, no box */}
       
      </div>
    </section>
  )
}
