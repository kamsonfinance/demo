// KAMSON FINANCIAL SERVICES — Content Types

export interface SEOMeta {
  title: string; description: string; keywords?: string[]
  ogImage?: string; canonical?: string; schema?: Record<string, unknown>
}
export interface NavLink { label: string; href: string }
export interface NavConfig {
  brandName: string; brandTagline: string; links: NavLink[]
  phoneDisplay: string; phoneHref: string; whatsappHref: string; ctaLabel: string
  mobileBar: { callLabel: string; whatsappLabel: string; scheduleLabel: string }
  whatsappAriaLabel: string
}
export interface HeroContent {
  eyebrow: string; headline: string; subheading: string
  ctas: {
    whatsapp: { label: string; href: string }
    call:     { label: string; href: string }
    schedule: { label: string; href: string }
  }
  trustPills: Array<{ text: string }>
  founderImageSrc: string; founderImageAlt: string; founderCaption: string
}
export interface TrustMetric { value: string; label: string }
export interface ReferralStripContent { text: string; ctaLabel: string; ctaHref: string }
export interface LenderBadgesContent {
  heading: string; subheading: string
  lenders: string[]
  moreText: string
}
export interface FounderContent {
  eyebrow: string; name: string; title: string; experience: string
  imageSrc: string; imageAlt: string; paragraphs: string[]
  quote: string; quoteAttr: string
}
export interface WhyKamsonCard {
  number: string; icon: string; heading: string; summary: string; body: string; tag: string
}
export interface WhyKamsonContent {
  eyebrow: string; heading: string; lede: string; cards: WhyKamsonCard[]
  footerText: string; footerCta: { label: string; href: string }
}
export interface SpecializedCard { icon: string; name: string; desc: string; tag: string }
export interface SpecializedFinancingContent {
  eyebrow: string; heading: string; subheading: string; cards: SpecializedCard[]
}
export interface TransactionExample { profile: string; amount: string; detail?: string }
export interface TransactionCard {
  type: string; capLabel: string; capAmount: string; examples: TransactionExample[]
}
export interface TransactionContent {
  eyebrow: string; heading: string; subheading: string; cards: TransactionCard[]
}
export interface ClientOutcome {
  clientType: string; location: string; loanType: string; amount: string
}
export interface ClientOutcomesContent {
  eyebrow: string; heading: string; subheading: string; outcomes: ClientOutcome[]
  ctaLabel: string; ctaHref: string
}
export interface SuccessStoriesContent {
  eyebrow: string; heading: string; subheading: string
  scaleCards: TransactionCard[]
  outcomes: ClientOutcome[]
  ctaLabel: string; ctaHref: string
  disclaimer: string
}
export interface ClientProfile { icon: string; name: string; desc: string }
export interface WhoWeWorkWithContent {
  eyebrow: string; heading: string; subheading: string; profiles: ClientProfile[]
}
export interface BankingPartner { name: string; logoSrc: string; logoAlt: string }
export interface BankingPartnersContent {
  label: string; partners: BankingPartner[]; moreText: string
}
export interface ProcessStep {
  stepLabel: string; heading: string; body: string; tag: string; isFinal?: boolean
}
export interface ProcessContent {
  eyebrow: string; heading: string; subheading: string
  introBody: string; ctaLabel: string; ctaHref: string; steps: ProcessStep[]
}
export interface ServiceItem { name: string; href: string }
export interface ServiceColumn {
  title: string; subtitle: string; items: ServiceItem[]
  ctaPrimary: { label: string; href: string }
  ctaSecondary: { label: string; href: string }
}
export interface ServicesContent { eyebrow: string; heading: string; subheading: string; columns: ServiceColumn[] }
export interface ProfessionalCard { icon: string; name: string; desc: string }
export interface TrustedByContent {
  eyebrow: string; heading: string; subheading: string; cards: ProfessionalCard[]
  quoteText: string; quoteAttrib: string; quoteRole: string
}
export interface Review {
  initials: string; name: string; date: string; text: string; loanTag: string; avatarColor: string
}
export interface ReviewsContent {
  eyebrow: string; heading: string; rating: string; reviewCount: string
  googleUrl: string; viewAllLabel: string; reviews: Review[]
}
export interface PartnerTag { label: string }
export interface PartnerSectionContent {
  eyebrow: string; heading: string; subheading: string; tags: PartnerTag[]
  ctaPrimary: { label: string; href: string }; ctaSecondary: { label: string; href: string }
}
export interface ContactChannel { icon: string; label: string; sub: string; action: string; href: string }
export interface ContactContent {
  eyebrow: string; heading: string; subheading: string; channels: ContactChannel[]
  formTitle: string; formSubtitle: string; submitLabel: string; submittingLabel: string
  successTitle: string; errorMessage: string; promise: string
  fieldLabels: {
    name: string; mobile: string; city: string; loanType: string
    amount: string; message: string; loanTypeDefault: string
  }
  fieldPlaceholders: { name: string; mobile: string; city: string; amount: string; message: string }
  loanTypes: string[]
  officeAddress: string; mapsEmbedUrl: string
  footerLinks: Array<{ label: string; href: string }>
  address: string; copyright: string
}
export interface SiteContent {
  seo: SEOMeta; nav: NavConfig; hero: HeroContent; trustMetrics: TrustMetric[]
  referralStrip: ReferralStripContent; lenderBadges: LenderBadgesContent
  founder: FounderContent; whyKamson: WhyKamsonContent
  specializedFinancing: SpecializedFinancingContent
  successStories: SuccessStoriesContent
  transactions: TransactionContent; clientOutcomes: ClientOutcomesContent
  whoWeWorkWith: WhoWeWorkWithContent; bankingPartners: BankingPartnersContent
  process: ProcessContent; services: ServicesContent; trustedBy: TrustedByContent
  reviews: ReviewsContent; partnerSection: PartnerSectionContent; contact: ContactContent
}
export interface LeadSubmission {
  name: string; mobile: string; city: string; loanType: string
  amount: string; message?: string; sourcePage: string; createdAt?: string
}
export interface PartnerEnquiry {
  name: string; mobile: string; professionType: string; city: string; message?: string; createdAt?: string
}
