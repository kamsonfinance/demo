'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavConfig } from '@/types/content'

interface Props { content: NavConfig }

interface SubItem {
  label: string
  href: string
  desc?: string
}

interface NavItem {
  label: string
  href?: string
  children?: SubItem[]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: "Director's Message", href: '/about#director',   desc: 'A note from our Founder' },
      { label: 'Why Kamson',         href: '/about#why-kamson', desc: 'What makes us different' },
      { label: 'Our Team',           href: '/about#team',       desc: 'The people behind Kamson' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Home Loans',                  href: '/services#home-loans',            desc: 'Residential & NRI finance' },
      { label: 'Business Loans',              href: '/services#business-loans',        desc: 'Term loans & expansion' },
      { label: 'MSME Loans',                  href: '/services#msme-loans',            desc: 'Collateral-free MSME credit' },
      { label: 'Loan Against Property',       href: '/services#loan-against-property', desc: 'Unlock capital from property' },
      { label: 'Working Capital',             href: '/services#working-capital',       desc: 'OD, CC & inventory finance' },
      { label: 'Insurance',                   href: '/services#insurance',             desc: 'Health, motor & corporate' },
    ],
  },
  {
    label: 'Partners',
    href: '/partners',
    children: [
      { label: 'Banking Network',     href: '/partners#network',  desc: '50+ banks & insurance partners' },
      { label: 'Partner With Kamson', href: '/partners',          desc: 'For CAs, consultants & DSAs' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation({ content }: Props) {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobile,  setOpenMobile]  = useState<string | null>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setOpenMobile(null)
  }, [pathname])

  const isActive = (item: NavItem) => {
    if (item.href) {
      if (item.href === '/') return pathname === '/'
      return pathname.startsWith(item.href)
    }
    if (item.children) {
      return item.children.some(c => {
        const base = c.href.split('#')[0]
        return base && pathname.startsWith(base)
      })
    }
    return false
  }

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 bg-white border-b-2 border-[#B8962E]
                  transition-all duration-200
                  ${scrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.08)]' : ''}`}
    >
      <div className="flex items-stretch h-[72px] lg:h-[82px]">

        {/* ── Logo ── */}
        <Link
          href="/"
          aria-label="Kamson Financial Services"
          className="flex-shrink-0 flex items-center px-3 md:px-4 lg:px-5"
        >
          <Image
            src="/logo-Inteck.png"
            alt="Kamson Financial Services — Brand of Inteck Marketing India"
            width={260}
            height={80}
            className="object-contain w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-auto"
            priority
          />
        </Link>

        {/* ── Desktop nav ── */}
        <div className="flex-1 hidden lg:flex items-center justify-between px-4 xl:px-10 min-w-0">

          <nav className="flex items-center gap-1 flex-1" role="navigation" aria-label="Main navigation">
            {NAV_ITEMS.map(item => {
              const active = isActive(item)
              const hasChildren = !!item.children
              const isOpen = openDropdown === item.label

              return (
                <div key={item.label} className="relative">
                  {hasChildren ? (
                    <div
                      className="flex items-center"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={item.href!}
                        className={`flex items-center font-sans text-[13px] pl-3 pr-1 py-2 rounded-l-md
                                    transition-all duration-150 whitespace-nowrap
                                    ${active
                                      ? 'bg-[#B8962E]/10 text-[#B8962E] font-semibold'
                                      : 'text-[#0D1B3E] hover:text-[#B8962E] hover:bg-[#B8962E]/5'
                                    }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        className={`flex items-center px-1.5 py-2 rounded-r-md transition-all duration-150
                                    ${active
                                      ? 'bg-[#B8962E]/10 text-[#B8962E]'
                                      : 'text-[#0D1B3E] hover:text-[#B8962E] hover:bg-[#B8962E]/5'
                                    }`}
                      >
                        <svg
                          width="10" height="6" viewBox="0 0 10 6" fill="none"
                          className={`transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                        >
                          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`flex items-center font-sans text-[13px] px-3 py-2 rounded-md
                                  transition-all duration-150 whitespace-nowrap
                                  ${active
                                    ? 'bg-[#B8962E]/10 text-[#B8962E] font-semibold'
                                    : 'text-[#0D1B3E] hover:text-[#B8962E] hover:bg-[#B8962E]/5'
                                  }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {hasChildren && isOpen && (
                    <div
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="absolute top-full left-0 mt-0 pt-2 z-50 min-w-[240px]"
                    >
                      <div className="bg-white border border-[#E8E4DC] shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-sm overflow-hidden">
                        {item.children!.map((child, i) => (
                          <Link
                            key={i}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="flex flex-col px-4 py-3 hover:bg-[#F7F4EF] border-b border-[#F0EDE8]
                                       last:border-b-0 transition-colors group"
                          >
                            <span className="font-sans text-[13px] font-semibold text-[#0D1B3E]
                                             group-hover:text-[#B8962E] transition-colors leading-tight">
                              {child.label}
                            </span>
                            {child.desc && (
                              <span className="font-sans text-[11px] text-[#9A9790] mt-0.5 leading-tight">
                                {child.desc}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Desktop: phone + WA */}
          <div className="flex items-center gap-4 ml-4 flex-shrink-0">
            <a
              href={content.phoneHref}
              className="font-sans text-[13px] font-semibold text-[#0D1B3E] hover:text-[#B8962E] transition-colors whitespace-nowrap"
            >
              {content.phoneDisplay}
            </a>
            <a
              href={content.whatsappHref}
              target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-sans text-[12px] font-semibold
                         px-4 py-2 rounded-sm hover:bg-[#1fba59] transition-colors whitespace-nowrap"
            >
              {content.ctaLabel}
            </a>
          </div>
        </div>

        {/* ── Mobile: phone icon + hamburger ── */}
        <div className="flex items-center gap-2 ml-auto pr-3 lg:hidden">
          <a
            href={content.phoneHref}
            aria-label="Call Kamson"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#B8962E]/10
                       text-[#B8962E] hover:bg-[#B8962E]/20 transition-colors flex-shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </a>
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#0D1B3E]/70 p-1.5 hover:text-[#B8962E] transition-colors flex-shrink-0"
          >
            {menuOpen
              ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              : <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            }
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0D1B3E]
                        border-t border-white/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.4)] z-50
                        max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="px-4 py-3">
            {NAV_ITEMS.map(item => {
              const active = isActive(item)
              const hasChildren = !!item.children
              const isExpanded = openMobile === item.label

              return (
                <div key={item.label} className="border-b border-white/[0.06] last:border-b-0">
                  {hasChildren ? (
                    <>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href!}
                          onClick={() => setMenuOpen(false)}
                          className={`flex-1 py-3.5 font-sans text-[15px] transition-colors
                                      ${active ? 'text-[#CFA84A] font-semibold' : 'text-white/80 hover:text-[#CFA84A]'}`}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => setOpenMobile(isExpanded ? null : item.label)}
                          aria-expanded={isExpanded}
                          className="p-3 text-white/50 hover:text-[#CFA84A] transition-colors"
                        >
                          <svg
                            width="12" height="8" viewBox="0 0 12 8" fill="none"
                            className={`transition-transform duration-200 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                          >
                            <path d="M1 1.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                      {isExpanded && (
                        <div className="pb-2 pl-3 space-y-0">
                          {item.children!.map((child, i) => (
                            <Link
                              key={i}
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className="flex flex-col py-2.5 border-b border-white/[0.04] last:border-b-0
                                         group transition-colors"
                            >
                              <span className="font-sans text-[13.5px] text-white/70 group-hover:text-[#CFA84A] transition-colors">
                                {child.label}
                              </span>
                              {child.desc && (
                                <span className="font-sans text-[11px] text-white/35 mt-0.5">{child.desc}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-3.5 font-sans text-[15px] transition-colors
                                   ${active ? 'text-[#CFA84A] font-semibold' : 'text-white/80 hover:text-[#CFA84A]'}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}

            {/* WhatsApp CTA */}
            <div className="pt-4 pb-2">
              <a
                href={content.whatsappHref}
                target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-[#25D366] text-white font-sans
                           font-semibold text-[14px] py-3 rounded-sm hover:bg-[#1fba59] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
