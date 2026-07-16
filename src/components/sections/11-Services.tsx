import Link from 'next/link'
import type { ServicesContent } from '@/types/content'

interface Props { content: ServicesContent }

export default function Services({ content }: Props) {
  return (
    <section id="services" className="bg-white section-sm">
      <div className="wrap">

        <div className="mb-10">
          <span className="rule-gold" />
          <h2 className="h-section text-[#0D1B3E] mb-3">{content.heading}</h2>
          <p className="font-sans text-[14px] text-[#6B6760]">{content.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {content.columns.map((col, i) => (
            <div key={i}>
              {/* Column title */}
              <p className="font-sans text-[10px] font-semibold tracking-[2px] uppercase
                             text-[#B8962E] mb-4">{col.title}</p>
              <p className="font-sans text-[12px] text-[#9A9790] mb-5">{col.subtitle}</p>

              {/* Service list — just clean links */}
              <div className="divide-y divide-[#F0ECE4]">
              {col.items.map((item, j) => (
  <div
    key={j}
    className="flex items-center gap-3 py-3"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-[#B8962E]" />
    <span className="font-sans text-[15px] text-[#1A1814]">
      {item.name}
    </span>
  </div>
))}
              </div>

              {/* CTAs — below list */}
              <div className="flex gap-3 mt-6">
                <Link href={col.ctaPrimary.href} className="btn-primary text-[13px] px-5 py-2.5">
                  {col.ctaPrimary.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
