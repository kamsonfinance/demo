import Image from 'next/image'
import Link from 'next/link'

const BANNERS = [
  {
    title: 'MSME Loans',
    subtitle: 'Collateral-Free · Govt. Schemes',
    desc: 'Priority sector lending and CGTMSE-backed collateral-free loans for small and medium enterprises.',
    stat: 'Up to Rs 2 Crore',
    image: '/images/banners/msme.png',
    href: '/services#msme-loans',
    overlay: 'from-[#0a2a0f]/95 via-[#0a2a0f]/70 to-[#0a2a0f]/20',
  },
  {
    title: 'Home Loans',
    subtitle: 'Salaried · Self-Employed · NRI',
    desc: 'Best-fit rates from 50+ lenders. Kamson navigates the full process from selection to disbursement.',
    stat: 'Up to Rs 5 Crore',
    image: '/images/banners/home.png',
    href: '/services#home-loans',
    overlay: 'from-[#060e22]/95 via-[#060e22]/70 to-[#060e22]/20',
  },
  {
    title: 'Loan Against Property',
    subtitle: 'Residential · Commercial · Lal Dora',
    desc: 'Unlock capital from properties standard banks decline — including Lal Dora and complex-title properties.',
    stat: 'Up to Rs 20 Crore',
    image: '/images/banners/lap.png',
    href: '/services#loan-against-property',
    overlay: 'from-[#1a0f00]/95 via-[#1a0f00]/70 to-[#1a0f00]/20',
  },
  {
    title: 'Business Loans',
    subtitle: 'Term Loans · Expansion · Equipment',
    desc: 'Structured around actual cash flows for manufacturers, traders, healthcare groups and SMEs.',
    stat: 'Up to Rs 25 Crore',
    image: '/images/banners/business.png',
    href: '/services#business-loans',
    overlay: 'from-[#060e22]/95 via-[#060e22]/70 to-[#060e22]/20',
  },
  {
    title: 'Insurance',
    subtitle: 'Motor · Health · General',
    desc: '',
    stat: '',
    image: '/images/banners/insurance.png',
    href: '/services#insurance',
    overlay: 'from-[#060e22]/95 via-[#060e22]/70 to-[#060e22]/20',
  },
]

export default function ServiceBanners() {
  return (
    <section className="bg-[#0D1B3E] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="block w-10 h-[2px] bg-[#CFA84A]" />
          <p className="font-sans text-[10.5px] font-semibold tracking-[3px] uppercase text-[#CFA84A]">
            Featured Services
          </p>
        </div>

        {/* Banner grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0.5 bg-white/[0.06]">
          {BANNERS.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="group relative overflow-hidden block"
              style={{ minHeight: '360px' }}
            >
              {/* Background image */}
              <Image
                src={b.image}
                alt={b.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${b.overlay}`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Stat pill */}
                <div className="mb-4">
                  <span className="inline-block font-sans text-[10px] font-semibold tracking-[2px] uppercase
                                   bg-[#CFA84A] text-[#060e22] px-3 py-1">
                    {b.stat}
                  </span>
                </div>

                <p className="font-sans text-[9.5px] font-semibold tracking-[2.5px] uppercase text-[#CFA84A] mb-2">
                  {b.subtitle}
                </p>
                <h3 className="font-serif font-bold text-white text-[1.25rem] leading-snug mb-3">
                  {b.title}
                </h3>
                <p className="font-sans text-[12.5px] text-white/60 leading-[1.65] mb-5">
                  {b.desc}
                </p>

                {/* CTA arrow */}
                <div className="flex items-center gap-2">
                  <span className="font-sans text-[11.5px] font-semibold text-[#CFA84A] group-hover:text-white transition-colors">
                    Learn More
                  </span>
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className="text-[#CFA84A] group-hover:text-white group-hover:translate-x-1 transition-all"
                  >
                    <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Top-left number tag */}
              <div className="absolute top-5 left-6">
                <span className="font-serif font-bold text-white/15 text-[2.5rem] leading-none select-none">
                  {String(BANNERS.indexOf(b) + 1).padStart(2, '0')}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 font-sans text-[13px] font-semibold
                       text-[#CFA84A] border border-[#CFA84A]/30 px-6 py-3 rounded-sm
                       hover:bg-[#CFA84A]/10 transition-colors"
          >
            View All Services
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
