'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import type { HeroContent } from '@/types/content'

interface Props { content: HeroContent }

interface Slide {
  id: string
  eyebrow: string
  headline: string
  headlineAccent: string
  subheading: string
  tag: string
  image: string
  imageAlt: string
  overlayClass: string
  accent: string
  objectPosition: string
  objectFit?: 'cover' | 'contain'
}

const SLIDES: Slide[] = [
  {
    id: 'overview',
    eyebrow: 'Home Loans · Business Loans · Insurance · Delhi NCR · Est. 1988',
    headline: 'Loans & Insurance.',
    headlineAccent: 'Arranged Simply.',
    subheading: 'Home Loans, Business Loans, MSME Loans, Loan Against Property, Working Capital and Insurance — through 50+ banks and insurance partners.',
    tag: 'Kamson Financial Services',
    image: '/images/about.png',
    imageAlt: 'Handshake over Delhi skyline — Kamson Financial Services',
    overlayClass: 'from-[#060e22]/90 via-[#060e22]/55 to-[#060e22]/10',
    objectPosition: '70% center',
    accent: '#CFA84A',
  },
  {
    id: 'business-loans',
    eyebrow: 'Business Loans · Up to Rs 25 Crore',
    headline: 'Fuel Your',
    headlineAccent: 'Business Growth.',
    subheading: 'Term loans and expansion finance for manufacturers, traders, healthcare groups and SMEs across Delhi NCR.',
    tag: 'Business Loans',
    image: '/images/businessloans.png',
    imageAlt: 'Business boardroom — Kamson Business Finance',
    overlayClass: 'from-[#060e22]/92 via-[#060e22]/60 to-[#060e22]/15',
    objectPosition: '65% center',
    accent: '#CFA84A',
  },
  {
    id: 'insurance',
    eyebrow: 'Insurance Solutions · Health · Motor · Corporate',
    headline: 'Protect What',
    headlineAccent: 'Matters Most.',
    subheading: 'Health, Motor, Travel, Home and Corporate Insurance solutions backed by 35+ years of advisory expertise.',
    tag: 'Insurance Solutions',
    image: '/images/insurance1.png',
    imageAlt: 'Family protection shield — Insurance Solutions',
    overlayClass: 'from-[#060e22]/95 via-[#060e22]/65 to-[#060e22]/10',
    objectPosition: 'right center',
    objectFit: 'contain',
    accent: '#CFA84A',
  },
  {
    id: 'home-loans',
    eyebrow: 'Home Loans · 50+ Lending Partners',
    headline: 'Your Dream Home,',
    headlineAccent: 'Our Network.',
    subheading: 'Best-fit home loan rates matched to your exact profile — salaried, self-employed or NRI. From application to disbursement, Kamson manages every step.',
    tag: 'Home Loans',
    image: '/images/homeloans.png',
    imageAlt: 'Premium home at night — Kamson Home Loans Delhi NCR',
    overlayClass: 'from-[#060e22]/88 via-[#060e22]/50 to-[#060e22]/05',
    objectPosition: '60% center',
    accent: '#CFA84A',
  },
  {
    id: 'lap',
    eyebrow: 'Loan Against Property · Up to Rs 20 Crore',
    headline: 'Unlock the Value',
    headlineAccent: 'In Your Property.',
    subheading: 'Residential, commercial, Lal Dora and Abadi properties accepted. Kamson arranges structured LAP solutions that standard banks decline.',
    tag: 'Loan Against Property',
    image: '/images/lap.png',
    imageAlt: 'Commercial property at dusk — Loan Against Property',
    overlayClass: 'from-[#060e22]/85 via-[#060e22]/45 to-[#060e22]/05',
    objectPosition: '55% center',
    accent: '#CFA84A',
  },
  {
    id: 'workingcapital',
    eyebrow: 'Working Capital Solutions',
    headline: 'Strengthen Your',
    headlineAccent: 'Business Flow.',
    subheading: 'OD & CC limits, inventory finance and structured working capital for manufacturers, traders, distributors and exporters.',
    tag: 'Working Capital',
    image: '/images/workingcapital.png',
    imageAlt: 'Financial charts and growth — Working Capital Finance',
    overlayClass: 'from-[#060e22]/90 via-[#060e22]/55 to-[#060e22]/10',
    objectPosition: '60% center',
    accent: '#CFA84A',
  },
  
]

export default function HeroSection({ content }: Props) {
  const [current, setCurrent] = useState(0)
  const [prev,    setPrev]    = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(c => {
        const next = (c + 1) % SLIDES.length
        setPrev(c)
        setTransitioning(true)
        setTimeout(() => { setPrev(null); setTransitioning(false) }, 700)
        return next
      })
    }, 6500)
  }, [])

  const goTo = useCallback((idx: number) => {
    if (transitioning || idx === current) return
    setPrev(current)
    setTransitioning(true)
    setCurrent(idx)
    setTimeout(() => { setPrev(null); setTransitioning(false) }, 700)
  }, [transitioning, current])

  const goPrev = useCallback(() => {
    const idx = (current - 1 + SLIDES.length) % SLIDES.length
    goTo(idx)
    startTimer()
  }, [current, goTo, startTimer])

  const goNext = useCallback(() => {
    const idx = (current + 1) % SLIDES.length
    goTo(idx)
    startTimer()
  }, [current, goTo, startTimer])

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [startTimer])

  const slide     = SLIDES[current]
  const prevSlide = prev !== null ? SLIDES[prev] : null

  return (
    <section
      className="relative bg-[#060e22] overflow-hidden"
      style={{ minHeight: 'clamp(560px, 82vh, 720px)' }}
    >
      {/* Outgoing slide — fades from opacity-1 to opacity-0 */}
      {prevSlide && (
        <div
          className="absolute inset-0"
          style={{ zIndex: 1, animation: 'heroFadeOut 0.7s ease forwards' }}
        >
          <Image
            src={prevSlide.image}
            alt={prevSlide.imageAlt}
            fill
            className={prevSlide.objectFit === 'contain' ? 'object-contain' : 'object-cover'}
            style={{ objectPosition: prevSlide.objectPosition }}
            sizes="100vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${prevSlide.overlayClass}`} />
        </div>
      )}

      {/* Incoming slide — fades from opacity-0 to opacity-1 */}
      <div
        key={current}
        className="absolute inset-0"
        style={{ zIndex: 2, animation: 'heroFadeIn 0.7s ease forwards' }}
      >
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          className={slide.objectFit === 'contain' ? 'object-contain' : 'object-cover'}
          style={{ objectPosition: slide.objectPosition }}
          priority
          sizes="100vw"
        />
        {/* Gradient tuned per slide to keep text readable without killing the image */}
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlayClass}`} />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060e22] to-transparent" />
        {/* Top vignette for eyebrow legibility */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#060e22]/30 to-transparent" />
      </div>

      {/* Content */}
      <div
        className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-center"
        style={{ minHeight: 'clamp(560px, 80vh, 760px)', zIndex: 10 }}
      >
        <div className="py-4 md:py-6 max-w-2xl">

          {/* Eyebrow */}
          <div className={`transition-all duration-500 ${transitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="block w-5 h-[1.5px] bg-[#CFA84A] flex-shrink-0" />
              <p className="font-sans text-[10px] font-semibold tracking-[2.5px] uppercase text-[#CFA84A] truncate">
                {slide.eyebrow}
              </p>
            </span>
          </div>

          {/* Headline */}
          <div className={`transition-all duration-500 delay-75 ${transitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}>
            <h1
              className="font-serif font-bold text-white leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em' }}
            >
              {slide.headline}
              <br />
              <span style={{ color: slide.accent }}>{slide.headlineAccent}</span>
            </h1>
          </div>

          {/* Subheading */}
          <div className={`transition-all duration-500 delay-100 ${transitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}>
            <p
              className="font-sans text-[14px] md:text-[15px] text-white/90 leading-[1.7] mb-5 md:mb-8 max-w-[420px]"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}
            >
              {slide.subheading}
            </p>
          </div>

          {/* CTAs */}
          <div className={`flex flex-wrap items-center gap-3 mb-6 md:mb-10 transition-all duration-500 delay-150 ${transitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}>
            <a
              href={content.ctas.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-sans font-semibold text-[13.5px] px-6 py-3.5 rounded-sm hover:bg-[#1fba59] transition-colors whitespace-nowrap shadow-lg"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {content.ctas.whatsapp.label}
            </a>
            <a
              href={content.ctas.call.href}
              className="inline-flex items-center gap-2.5 bg-white/[0.12] backdrop-blur-sm border border-white/25 text-white font-sans font-semibold text-[13.5px] px-6 py-3.5 rounded-sm hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Kamson
            </a>
          </div>

          {/* Trust pills — hidden on mobile to save space */}
          <div className={`hidden sm:flex flex-wrap gap-x-6 gap-y-2.5 pt-5 border-t border-white/[0.12] transition-all duration-500 delay-200 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
            {content.trustPills.map((pill, i) => (
              <span key={i} className="font-sans text-[12.5px] font-medium text-white/75 flex items-center gap-1.5">
                <span className="text-[#CFA84A] text-[10px]" aria-hidden="true">*</span>
                {pill.text.slice(2)}
              </span>
            ))}
          </div>

          {/* Service chips — hidden on mobile, shown from sm up */}
          <div className="hidden sm:flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/[0.08]">
            {['Home Loans', 'Business Loans', 'MSME Loans', 'Loan Against Property', 'Working Capital', 'Insurance'].map((svc) => (
              <a
                key={svc}
                href={`/services#${svc.toLowerCase().replace(/ /g, '-').replace('loan-against-property', 'loan-against-property')}`}
                className="font-sans text-[11px] font-semibold text-white/60 hover:text-[#CFA84A]
                           border border-white/[0.15] hover:border-[#CFA84A]/40 px-3 py-1.5 rounded-sm
                           transition-colors whitespace-nowrap"
              >
                {svc}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Prev / Next arrows — vertically centered on the hero */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20
                   w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full
                   bg-white/[0.10] border border-white/[0.18] backdrop-blur-sm
                   text-white hover:bg-[#CFA84A]/80 hover:border-[#CFA84A]
                   transition-all duration-200 group"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
             className="group-hover:-translate-x-0.5 transition-transform">
          <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20
                   w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full
                   bg-white/[0.10] border border-white/[0.18] backdrop-blur-sm
                   text-white hover:bg-[#CFA84A]/80 hover:border-[#CFA84A]
                   transition-all duration-200 group"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
             className="group-hover:translate-x-0.5 transition-transform">
          <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Slide controls */}
      <div className="relative flex items-center justify-between px-6 md:px-10 lg:px-16 pb-6 pt-2" style={{ zIndex: 10 }}>
        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); startTimer() }}
              aria-label={`Go to ${s.tag}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-8 h-[3px] bg-[#CFA84A]'
                  : 'w-[3px] h-[3px] bg-white/30 hover:bg-white/55'
              }`}
            />
          ))}
        </div>
        <div className={`flex items-center gap-3 transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
          <span className="font-sans text-[10px] font-semibold tracking-[2px] text-[#CFA84A]">
            {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
          <span className="w-px h-3 bg-white/20" />
          <span className="font-sans text-[10px] text-white/40 uppercase tracking-[1.5px] hidden sm:block">
            {slide.tag}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06]" style={{ zIndex: 10 }}>
        <div
          key={current}
          className="h-full bg-[#CFA84A]"
          style={{ animation: 'progress 6.5s linear forwards' }}
        />
      </div>

      <style>{`
        @keyframes heroFadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes heroFadeOut { from { opacity: 1 } to { opacity: 0 } }
        @keyframes progress    { from { width: 0%  } to { width: 100% } }
      `}</style>
    </section>
  )
}
