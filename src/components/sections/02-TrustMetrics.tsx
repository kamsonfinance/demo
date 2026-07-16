import type { TrustMetric } from '@/types/content'

interface Props { metrics: TrustMetric[] }

export default function TrustMetrics({ metrics }: Props) {
  return (
    <section className="bg-[#F5EDD6] border-y border-[#E2D5B0]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-14">
        {/* Desktop: 5 equal columns */}
        
          <div className="hidden lg:flex">
          {metrics.map((m, i) => (
            <div key={i}
              className={`flex-1 py-7 px-3 text-center min-w-0
                ${i > 0 ? 'border-l border-[#D9CC9E]' : ''}`}>
              <div className="font-serif font-bold text-[#0D1B3E] leading-none mb-1.5 px-1"
              
                   style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)' }}>
                {m.value}
              </div>
              <div className="font-sans font-semibold text-[#6B5F3A] uppercase leading-tight"
                   style={{ fontSize: 'clamp(8px, 1vw, 10.5px)', letterSpacing: '0.04em' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 + 1 */}
        <div className="sm:hidden grid grid-cols-2 divide-x divide-[#D9CC9E]">
          {metrics.slice(0, 4).map((m, i) => (
            <div key={i}
              className={`py-5 px-4 text-center ${i >= 2 ? 'border-t border-[#D9CC9E]' : ''}`}>
              <div className="font-serif font-bold text-[#0D1B3E] text-[1.4rem] leading-none mb-1">
                {m.value}
              </div>
              <div className="font-sans text-[9px] font-semibold text-[#6B5F3A] uppercase tracking-[0.4px] leading-tight">
                {m.label}
              </div>
            </div>
          ))}
          {metrics[4] && (
            <div className="col-span-2 py-4 px-4 text-center border-t border-[#D9CC9E]">
              <div className="font-serif font-bold text-[#0D1B3E] text-[1.4rem] leading-none mb-1">
                {metrics[4].value}
              </div>
              <div className="font-sans text-[9px] font-semibold text-[#6B5F3A] uppercase tracking-[0.4px]">
                {metrics[4].label}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
