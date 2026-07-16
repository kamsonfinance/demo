import type { ReferralStripContent } from '@/types/content'
import Link from 'next/link'

interface Props { content: ReferralStripContent }

export default function ReferralStrip({ content }: Props) {
  return (
    <div className="bg-[#e80a0a] border-t border-white">
      <div className="wrap py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="font-sans text-[14px] text-white leading-snug
                      [&_strong]:text-white/85 [&_strong]:font-medium"
           dangerouslySetInnerHTML={{ __html: content.text }} />
        <Link href={content.ctaHref}
              className="inline-flex items-right 
border-b-2 border-[#C63D32]
text-[#ffffff]
font-sans
font-bold
text-[12px]
pb-1
hover:text-[#f3f6f4]
hover:border-[#f3f6f4]
transition-all">
          {content.ctaLabel}
        </Link>
      </div>
    </div>
  )
}
