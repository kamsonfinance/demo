import type { WhoWeWorkWithContent } from '@/types/content'

interface Props { content: WhoWeWorkWithContent }

export default function WhoWeWorkWith({ content }: Props) {
  return (
    <section className="bg-white section-sm">
      <div className="wrap">

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">

          {/* Left — heading stays sticky-ish */}
          <div>
            <span className="rule-gold" />
            <h2 className="h-section text-[#0D1B3E] mb-4">{content.heading}</h2>
            <p className="font-sans text-[14px] text-[#6B6760] leading-[1.75]">
              {content.subheading}
            </p>
          </div>

          {/* Right — two-column list, no cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0 divide-y divide-[#F0ECE4]
                          sm:divide-y-0">
            {content.profiles.map((p, i) => (
              <div key={i} className="py-5 border-b border-[#F0ECE4]">
                <p className="font-sans text-[14.5px] font-semibold text-[#0D1B3E] mb-1.5">
                  {p.name}
                </p>
                <p className="font-sans text-[13px] text-[#6B6760] leading-[1.65]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
