import { siteContent } from '@/content/homepage'
import Navigation      from '@/components/layout/Navigation'
import MobileActionBar from '@/components/layout/MobileActionBar'
import WhatsAppButton  from '@/components/layout/WhatsAppButton'
import Footer          from '@/components/layout/Footer'
import Image           from 'next/image'
import Link            from 'next/link'

const c = siteContent

const SERVICE_CATEGORIES = [
  {
    id: 'home-loans',
    title: 'Home Loans',
    subtitle: 'Residential · NRI · Balance Transfer · Construction',
    desc: 'Best-fit home loan rates from 50+ lenders matched to your exact profile. Salaried, self-employed and NRI buyers — Kamson navigates the entire process from application to disbursement.',
    image: '/images/services/home-loans.png',
    stat: 'Rs 5 Cr+',
    statLabel: 'Max arranged',
    highlights: ['Salaried & self-employed', 'NRI home loans', 'Balance transfers', 'Under-construction properties', 'First-time buyer guidance'],
    accentColor: '#CFA84A',
  },
  {
    id: 'business-loans',
    title: 'Business Loans',
    subtitle: 'Term Loans · Expansion · Equipment · Professional',
    desc: 'Term loans structured around actual business cash flows. Manufacturers, traders, healthcare groups and SMEs across Delhi NCR. We present your case to the right lender — not a shotgun approach.',
    image: '/images/services/business-loans.png',
    stat: 'Rs 25 Cr+',
    statLabel: 'Loans arranged',
    highlights: ['Unsecured business loans', 'Hospital & clinic finance', 'School & education loans', 'Hotel & hospitality', 'Manufacturing & trading'],
    accentColor: '#CFA84A',
  },
  {
    id: 'msme-loans',
    title: 'MSME Loans',
    subtitle: 'Collateral-Free · Government Schemes · Priority Sector',
    desc: 'Dedicated MSME financing through government-backed schemes and priority sector lending. Collateral-free loans and structured MSME credit for small and medium enterprises across Delhi NCR.',
    image: '/images/services/msme-loans.png',
    stat: 'Rs 2 Cr+',
    statLabel: 'MSME loans arranged',
    highlights: ['Collateral-free loans (CGTMSE)', 'Manufacturing & trading', 'Service sector MSMEs', 'MUDRA & Govt. schemes', 'Fast disbursement'],
    accentColor: '#CFA84A',
  },
  {
    id: 'loan-against-property',
    title: 'Loan Against Property',
    subtitle: 'Residential · Commercial · Lal Dora · Complex Title',
    desc: 'Unlock capital from properties that standard banks decline. Lal Dora, Abadi, agricultural and complex-title properties arranged up to Rs 20 Crore through specialist lenders.',
    image: '/images/services/lap.png',
    stat: 'Rs 20 Cr+',
    statLabel: 'LAP arranged',
    highlights: ['Lal Dora & Abadi accepted', 'Commercial collateral', 'Complex income profiles', 'Multiple property owners', 'Industrial properties'],
    accentColor: '#CFA84A',
  },
  {
    id: 'working-capital',
    title: 'Working Capital',
    subtitle: 'OD · CC Limits · Inventory Finance · Bill Discounting',
    desc: 'OD and CC limits, inventory finance and structured working capital for manufacturers, traders, distributors and exporters. Enhancement of existing limits also arranged.',
    image: '/images/services/working-capital.png',
    stat: 'Rs 50 Cr+',
    statLabel: 'Facilities arranged',
    highlights: ['OD / CC limit enhancement', 'Inventory & stock finance', 'Export finance', 'Bill discounting', 'Channel finance'],
    accentColor: '#CFA84A',
  },
  {
    id: 'insurance',
    title: 'Insurance',
    subtitle: 'Health · Motor · General · Corporate · Life',
    desc: 'Health, motor, general and corporate insurance through leading insurers. Right coverage at the right premium — backed by 35 years of financial advisory expertise.',
    image: '/images/services/insurance.png',
    stat: '10+',
    statLabel: 'Insurance partners',
    highlights: ['Health & mediclaim', 'Motor insurance', 'Corporate group policies', 'Term & life cover', 'General insurance'],
    accentColor: '#CFA84A',
  },
  
]

const PROCESS_STEPS = [
  { n: '01', label: 'Understand Your Requirement' },
  { n: '02', label: 'Match to Right Lender' },
  { n: '03', label: 'File Preparation' },
  { n: '04', label: 'Approval Management' },
  { n: '05', label: 'Disbursement & Beyond' },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation content={c.nav} />
      <main className="pb-20 md:pb-0">

        {/* Page Hero */}
        <section className="relative bg-[#060e22] overflow-hidden" style={{ minHeight: '380px' }}>
          <Image
            src="/images/services/services-hero.png"
            alt="Delhi financial district"
            fill className="object-cover opacity-30"
            priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060e22] via-[#060e22]/80 to-[#060e22]/40" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060e22] to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16
                          flex flex-col justify-center" style={{ minHeight: '380px' }}>
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="block w-5 h-[1.5px] bg-[#CFA84A]" />
              <p className="font-sans text-[10.5px] font-semibold tracking-[3.5px] uppercase text-[#CFA84A]">
                What Kamson Does
              </p>
            </span>
            <h1 className="font-serif font-bold text-white leading-[1.08] mb-4"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em' }}>
              Loans &amp; Insurance<br />
              <span className="text-[#CFA84A]">Products We Arrange </span>
            </h1>
            <p className="font-sans text-[16px] text-white/60 leading-[1.8] max-w-xl">
              Full process management across 50+ banks, NBFCs and insurance partners — from lender selection to disbursement.
            </p>

            {/* Quick nav pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {SERVICE_CATEGORIES.map((cat) => (
                <a key={cat.id} href={`#${cat.id}`}
                   className="font-sans text-[11px] font-semibold text-[#CFA84A]
                              border border-[#CFA84A]/35 px-3 py-1.5 rounded-sm
                              hover:bg-[#CFA84A]/10 transition-colors">
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Per-service sections */}
        {SERVICE_CATEGORIES.map((cat, index) => (
          <section
            key={cat.id}
            id={cat.id}
            className="scroll-mt-[80px] py-14 md:py-20 border-b border-[#E8E4DC]"
            style={{ background: index % 2 === 0 ? '#F7F4EF' : '#FFFFFF' }}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch`}>

                {/* Image — flips side on odd items */}
                <div className={`relative overflow-hidden rounded-sm h-[280px] lg:h-full lg:min-h-[360px] ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Stat badge */}
                  <div className="absolute bottom-5 left-6">
                    <span className="font-serif font-bold text-white leading-none"
                          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                      {cat.stat}
                    </span>
                    <p className="font-sans text-[10px] font-semibold text-white/65 uppercase tracking-[1.5px] mt-1">
                      {cat.statLabel}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <p className="font-sans text-[9.5px] font-semibold tracking-[2.5px] uppercase text-[#B8962E] mb-2">
                    {cat.subtitle}
                  </p>
                  <h2 className="font-serif font-bold text-[#0D1B3E] leading-snug mb-4"
                      style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', letterSpacing: '-0.02em' }}>
                    {cat.title}
                  </h2>
                  <p className="font-sans text-[15px] text-[#6B6760] leading-[1.78] mb-7">
                    {cat.desc}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                    {cat.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8962E] flex-shrink-0" />
                        <span className="font-sans text-[13px] text-[#3D3A33]">{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(cat.title)}`}
                    className="inline-flex items-center gap-2.5 bg-[#B8962E] text-white
                               font-sans font-semibold text-[13.5px] px-6 py-3.5 rounded-sm
                               hover:bg-[#CFA84A] transition-colors shadow-sm"
                  >
                    Enquire about {cat.title}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </Link>
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* Process strip */}
        <section className="bg-[#0D1B3E] py-12 md:py-14">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <p className="font-sans text-[10px] font-semibold tracking-[3px] uppercase text-[#CFA84A]/70 mb-8">
              How Kamson Works — Every Time
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/[0.06]">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="bg-[#0D1B3E] px-5 py-5 flex flex-col gap-3">
                  <span className="font-serif font-bold text-[#B8962E] text-[1.5rem] leading-none">
                    {step.n}
                  </span>
                  <span className="font-sans text-[12px] text-white/55 leading-[1.55]">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#F7F4EF] py-14 md:py-18">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="block w-10 h-[2px] bg-[#B8962E] mb-5" />
                <h2 className="font-serif font-bold text-[#0D1B3E] leading-tight mb-4"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}>
                  Not sure which service fits your requirement?
                </h2>
                <p className="font-sans text-[15px] text-[#6B6760] leading-[1.8] max-w-lg">
                  Speak with a Kamson Relationship Manager. We will identify the right solution from our full range of lending and insurance options — at no obligation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/contact"
                      className="inline-flex items-center gap-2.5 bg-[#B8962E] text-white font-sans
                                 font-semibold text-[14px] px-7 py-4 rounded-sm hover:bg-[#CFA84A] transition-colors shadow-md">
                  Contact Kamson
                </Link>
                <a href={c.nav.whatsappHref} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-sans
                              font-semibold text-[14px] px-7 py-4 rounded-sm hover:bg-[#1fba59] transition-colors shadow-md">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <WhatsAppButton href={c.nav.whatsappHref} ariaLabel={c.nav.whatsappAriaLabel} />
      <MobileActionBar
        phoneHref={c.nav.phoneHref}
        whatsappHref={c.nav.whatsappHref}
        scheduleHref="/contact"
        callLabel={c.nav.mobileBar.callLabel}
        whatsappLabel={c.nav.mobileBar.whatsappLabel}
        scheduleLabel={c.nav.mobileBar.scheduleLabel}
      />
    </>
  )
}
