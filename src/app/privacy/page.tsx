import type { Metadata } from 'next'
import { siteContent } from '@/content/homepage'
import Navigation      from '@/components/layout/Navigation'
import MobileActionBar from '@/components/layout/MobileActionBar'
import WhatsAppButton  from '@/components/layout/WhatsAppButton'
import Footer          from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Kamson Financial Services',
  description: 'Privacy Policy for Kamson Financial Services — Brand of Inteck Marketing India.',
}

const c = siteContent

const SECTIONS = [
  {
    heading: 'Information We Collect',
    body: 'We may collect the following information: your name, mobile number, email address, postal address, and identity and financial details when required for loan or insurance processing.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'Your information is used to process home loan and insurance applications, contact you regarding your enquiries or services, provide customer support, improve our services, and comply with legal and regulatory requirements.',
  },
  {
    heading: 'Information Sharing',
    body: 'We do not sell or rent your personal information. Your information may be shared only with banks and financial institutions, insurance companies, government or regulatory authorities where required by law, and trusted service providers involved in processing your request.',
  },
  {
    heading: 'Data Security',
    body: 'We use appropriate security measures to protect your personal information from unauthorised access, disclosure, or misuse.',
  },
  {
    heading: 'Cookies',
    body: 'Our website may use cookies to improve user experience and analyse website traffic. You can manage cookie preferences through your browser settings.',
  },
  {
    heading: 'Your Rights',
    body: 'You may request to access your personal information, update or correct your information, or request deletion of your data, subject to legal and regulatory requirements.',
  },
  {
    heading: 'Third-Party Links',
    body: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.',
  },
  {
    heading: 'Policy Updates',
    body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page. Continued use of our services constitutes acceptance of the updated policy.',
  },
  {
    heading: 'Contact Us',
    body: 'For any privacy-related queries, please contact us at support@kamsonfinancials.com or call +91 98110 75812.',
  },
]

export default function PrivacyPage() {
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
              Privacy Policy
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
              At Kamson Financial Services Brand of Inteck Marketing India, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>

            <div className="space-y-8">
              {SECTIONS.map((s, i) => (
                <div key={i} className="border-b border-[#E2DDD4] pb-8 last:border-b-0">
                  <h2 className="font-serif font-bold text-[#0D1B3E] text-[1.15rem] mb-3">
                    {s.heading}
                  </h2>
                  <p className="font-sans text-[14.5px] text-[#6B6760] leading-[1.8]">
                    {s.body}
                  </p>
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
