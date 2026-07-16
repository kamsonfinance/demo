import { siteContent } from '@/content/homepage'

import Navigation      from '@/components/layout/Navigation'
import MobileActionBar from '@/components/layout/MobileActionBar'
import WhatsAppButton  from '@/components/layout/WhatsAppButton'
import Footer          from '@/components/layout/Footer'

import HeroSection     from '@/components/sections/01-HeroSection'
import TrustMetrics    from '@/components/sections/02-TrustMetrics'
import ServiceBanners  from '@/components/sections/12-ServiceBanners'
import ServicesSnapshot from '@/components/sections/11-Services'
import SuccessStories  from '@/components/sections/07-SuccessStories'
import CTASection      from '@/components/sections/HomeCTA'

const c = siteContent

export default function HomePage() {
  return (
    <>
      <Navigation content={c.nav} />
      <main className="pb-20 md:pb-0">
        <HeroSection     content={c.hero} />
        <TrustMetrics    metrics={c.trustMetrics} />
        <ServiceBanners />
        <ServicesSnapshot content={c.services} />
        <SuccessStories  content={c.successStories} />
        <CTASection      contact={c.contact} nav={c.nav} />
        <Footer />
      </main>
      <WhatsAppButton
        href={c.nav.whatsappHref}
        ariaLabel={c.nav.whatsappAriaLabel}
      />
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
