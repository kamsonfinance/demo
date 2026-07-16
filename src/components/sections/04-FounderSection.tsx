'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { FounderContent } from '@/types/content'

interface Props { content: FounderContent }

export default function FounderSection({ content }: Props) {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="founder" className="bg-white py-20 md:py-28">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">

          {/* Photo column */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            {!imgError ? (
              <div className="relative w-[320px] h-[520px] rounded-sm overflow-hidden
                              shadow-[0_12px_40px_rgba(13,27,62,0.15)] flex-shrink-0">
                <Image
                  src={content.imageSrc}
                  alt={content.imageAlt}
                  fill
                  className="object-cover"
                  sizes="240px"
                  onError={() => setImgError(true)}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#B8962E]" />
              </div>
            ) : (
              /* Fallback when founder.jpg not yet added */
              <div className="w-[320px] h-[620px] rounded-sm bg-[#EEE9DE]
                              flex flex-col items-center justify-center flex-shrink-0
                              border border-[#D9CC9E]">
                <div className="w-16 h-16 rounded-full bg-[#B8962E]/15 border-2 border-[#B8962E]/30
                                flex items-center justify-center mb-3">
                  <span className="font-serif text-[22px] font-bold text-[#8A6F22]">MS</span>
                </div>
                <p className="font-sans text-[12px] font-semibold text-[#3D3A33] text-center px-4">
                  Founder photograph<br/>to be added
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#B8962E]" />
              </div>
            )}

            {/* Caption below photo */}
            <div className="text-center lg:text-left">
              <p className="font-sans text-[13px] font-bold text-[#0D1B3E]">{content.name}</p>
              <p className="font-sans text-[11.5px] text-[#6B6760] mt-0.5">Founder &amp; Director</p>
              <p className="font-sans text-[11px] text-[#B8962E] font-semibold mt-1.5">
                {content.experience}
              </p>
            </div>
          </div>

          {/* Content column */}
          <div>
            
            <span className="block w-16 h-[3px] bg-[#B8962E] mb-6" />
            <h2 className="font-serif font-bold text-[#0D1B3E] leading-tight mb-2"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}>
              {content.name}
            </h2>
            <p className="font-sans text-[13px] text-[#6B6760] mb-8 tracking-[0.1px]">
              {content.title}
            </p>

            <div className="space-y-5 mb-10">
              {content.paragraphs.map((para, i) => (
                <p key={i} className="font-serif text-[17px] text-[#3D3A33] leading-[1.95]">
                  {para}
                </p>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#B8962E] pl-6">
              <p className="font-serif text-[22px] italic text-[#0D1B3E] leading-[1.7] mb-3">
                &ldquo;{content.quote}&rdquo;
              </p>
              <footer className="font-sans text-[12px] text-[#6B6760]">
                {content.quoteAttr}
              </footer>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  )
}
