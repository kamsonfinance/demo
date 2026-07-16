import type { Metadata } from 'next'
import { siteContent } from '@/content/homepage'
import Navigation      from '@/components/layout/Navigation'
import MobileActionBar from '@/components/layout/MobileActionBar'
import WhatsAppButton  from '@/components/layout/WhatsAppButton'
import Footer          from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Kamson Financial Services',
  description: 'Terms of Service for Kamson Financial Services — Brand of Inteck Marketing India.',
}

const c = siteContent

const TERMS = [
  {
    n: '1',
    heading: 'Acceptance of Terms',
    body: 'By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.',
  },
  {
    n: '2',
    heading: 'Services',
    body: 'We provide information and assistance related to Home Loans, Mortgage Loans, Loan Consultation, and Life, Health, Motor and General Insurance Services. Final approval of any loan or insurance product is subject to the respective bank, financial institution, or insurance company\'s eligibility criteria and policies.',
  },
  {
    n: '3',
    heading: 'User Responsibilities',
    body: 'You agree to provide accurate and complete information, use our services only for lawful purposes, and not misuse, copy, or attempt to disrupt our website or services.',
  },
  {
    n: '4',
    heading: 'No Guarantee',
    body: 'We do not guarantee loan approval, insurance policy issuance, interest rates, premiums, or processing time. All decisions are made solely by the respective financial institution or insurance provider.',
  },
  {
    n: '5',
    heading: 'Intellectual Property',
    body: 'All website content, including text, images, logos, graphics, and design, is the property of Kamson Financial Services Brand of Inteck Marketing India unless otherwise stated. Unauthorised use is prohibited.',
  },
  {
    n: '6',
    heading: 'Limitation of Liability',
    body: 'We are not liable for any direct, indirect, incidental, or consequential loss arising from the use of our website or services, including decisions made by banks or insurance companies.',
  },
  {
    n: '7',
    heading: 'Privacy',
    body: 'Your use of our services is also governed by our Privacy Policy. Please review it to understand how we collect and use your information.',
  },
  {
    n: '8',
    heading: 'Third-Party Services',
    body: 'Our website may contain links to third-party websites or services. We are not responsible for their content, policies, or practices.',
  },
  {
    n: '9',
    heading: 'Changes to Terms',
    body: 'We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on this page and become effective immediately upon publication.',
  },
  {
    n: '10',
    heading: 'Governing Law',
    body: 'These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in New Delhi.',
  },
]

export default function TermsPage() {
  return (
    <>
      <Navigation content={c.nav} />
      <main className="pb-20 md:pb-0">

        {/* Hero */}
        <section className="bg-[#0D1B3E] py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="block w-5 h-[1.5px] bg-[#CFA84A]" />
              <p className="font-sans text-[10.5px] font-semibold tracking-[3.5px] uppercase text-[#CFA84A]">
                Legal
              </p>
            </span>
            <h1 className="font-serif font-bold text-white leading-tight mb-3"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Terms of Service
            </h1>
            <p className="font-sans text-[14px] text-white/50">
              Kamson Financial Services — Brand of Inteck Marketing India
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#F7F4EF] py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">

            <p className="font-sans text-[15px] text-[#6B6760] leading-[1.8] mb-10">
              Welcome to Kamson Financial Services Brand of Inteck Marketing India. By accessing or using our website and services, you agree to the following Terms of Service.
            </p>

            <div className="space-y-8">
              {TERMS.map((t) => (
                <div key={t.n} className="border-b border-[#E2DDD4] pb-8 last:border-b-0 flex gap-5">
                  <span className="font-serif font-bold text-[#B8962E] text-[1.4rem] leading-none flex-shrink-0 w-8">
                    {t.n}.
                  </span>
                  <div>
                    <h2 className="font-serif font-bold text-[#0D1B3E] text-[1.1rem] mb-2">
                      {t.heading}
                    </h2>
                    <p className="font-sans text-[14.5px] text-[#6B6760] leading-[1.8]">
                      {t.body}
                    </p>
                  </div>
                </div>
              ))}
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
