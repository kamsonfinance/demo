import Link from 'next/link'
import type { PartnerSectionContent } from '@/types/content'

interface Props { content: PartnerSectionContent }

export default function PartnerSection({ content }: Props) {
  return (
    <section className="bg-navy-deep section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="eyebrow eyebrow-light">{content.eyebrow}</p>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">{content.heading}</h2>
            <p className="font-sans text-[13px] text-white/55 leading-[1.65] mb-4">{content.subheading}</p>
            <div className="flex flex-wrap gap-2">
              {content.tags.map((tag, i) => (
                <span key={i} className="font-sans text-[10px] font-bold px-3 py-1.5 rounded-full bg-dark/[0.07] text-white/55 border border-white/10">
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <Link href={content.ctaPrimary.href} className="btn-gold text-center">
              {content.ctaPrimary.label}
            </Link>
            <a
              href={content.ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light text-center text-sm"
            >
              {content.ctaSecondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
