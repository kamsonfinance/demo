'use client'
import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-24 right-6 md:right-7 z-40
                 w-10 h-10 flex items-center justify-center
                 bg-white border border-[#E2DDD4] rounded-full
                 shadow-[0_4px_16px_rgba(0,0,0,0.12)]
                 text-[#B8962E] hover:bg-[#B8962E] hover:text-white hover:border-[#B8962E]
                 transition-all duration-200"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 10L7 5l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
