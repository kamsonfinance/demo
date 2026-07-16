import type { TransactionContent } from '@/types/content'

interface Props { content: TransactionContent }

export default function TransactionShowcase({ content }: Props) {
  return (
    <section id="transactions" className="bg-[#0D1B3E] section-sm">
      <div className="wrap">

        {/* Header */}
        <div className="mb-12">
          <span className="rule-gold-light" />
          <h2 className="h-section h-section-light mb-3">{content.heading}</h2>
          <p className="font-sans text-[15px] text-white/50 max-w-md">{content.subheading}</p>
        </div>

        {/* Four types — horizontal, typography-first */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07]">
          {content.cards.map((card, i) => (
            <div key={i} className="bg-[#0D1B3E] p-8 lg:p-10">

              {/* Type label */}
              <p className="font-sans text-[10px] font-semibold tracking-[2px] uppercase
                             text-white/35 mb-5">
                {card.type}
              </p>

              {/* The big number */}
              <div className="font-serif font-bold text-white leading-none mb-1"
                   style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}>
                {card.capAmount}
              </div>
              <p className="font-sans text-[11px] text-white/30 mb-8">{card.capLabel}</p>

              {/* Examples as a simple list */}
              <ul className="space-y-3">
                {card.examples.map((ex, j) => (
                  <li key={j} className="flex flex-col gap-0.5">
                    <span className="font-sans text-[12px] text-white/45">{ex.profile}</span>
                    <span className="font-sans text-[13px] font-semibold text-white/70">{ex.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
