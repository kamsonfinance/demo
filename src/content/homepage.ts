// KAMSON FINANCIAL SERVICES — Homepage Content

import type { SiteContent } from '@/types/content'

export const siteContent: SiteContent = {

  seo: {
    title:       'Kamson Financial Services | Trusted Financial Advisory Since 1988 | Delhi NCR',
    description: 'Kamson Financial Services — 35 years of trusted financial advisory in Delhi NCR. Home loans, business loans, LAP, working capital through 50+ banks & insurance partners. Call +91 98110 75812.',
    keywords:    ['home loan Delhi', 'business loan NCR', 'loan against property Delhi', 'Kamson Financial', 'Madhu Sagar Adlakha', 'financial advisor Delhi'],
    ogImage:     '/og-image.jpg',
    schema: {
      '@context': 'https://schema.org', '@type': 'FinancialService',
      name: 'Kamson Financial Services',
      description: 'Relationship-driven financial advisory with 35+ years of experience in Delhi NCR.',
      url: 'https://kamsonfinancial.com', telephone: '+919811075812',
      address: { '@type': 'PostalAddress', streetAddress: 'Kochhar Tower, Jail Road', addressLocality: 'New Delhi', addressRegion: 'Delhi', addressCountry: 'IN' },
      foundingDate: '1988', areaServed: 'Delhi NCR',
    },
  },

  nav: {
    brandName:    'KAMSON',
    brandTagline: 'Financial Services · Est. 1988',
    links: [
      { label: 'About',   href: '/founder'    },
      { label: 'Services',       href: '/services'   },
      { label: 'Why Kamson',     href: '/founder' },
      { label: 'Specialisations',     href: '/services' },
      { label: 'Success Stories',href: '/'   },
       { label: 'Partners',href: '/partners'   },
      { label: 'Contact',        href: '/contact'    },
    ],
    phoneDisplay:      '+91 98110 75812',
    phoneHref:         'tel:+919811075812',
    whatsappHref:      'https://wa.me/919560506332',
    ctaLabel:          'WhatsApp',
    mobileBar: { callLabel: 'Call', whatsappLabel: 'WhatsApp', scheduleLabel: 'Enquire' },
    whatsappAriaLabel: 'Chat with Kamson on WhatsApp',
  },

  hero: {
    eyebrow:    'Trusted Financial Advisory · Delhi NCR',
    headline:   'Loans & Insurance. Arranged Simply',
    subheading: 'Home Loans, Business Loans, MSME Loans, Loan Against Property, Working Capital & Insurance Solutions through our network of 50+ lenders and insurance partners.',
    ctas: {
      whatsapp: { label: 'WhatsApp Us',      href: 'https://wa.me/919560506332' },
      call:     { label: '📞 Call Kamson',   href: 'tel:+919811075812' },
      schedule: { label: 'Request Callback', href: '/contact' },
    },
    trustPills: [
      { text: '✓ 35+ Years in Business' },
      { text: '✓ 50+ Lending & Insurance Partners' },
      { text: '✓ ₹5,000Cr+ Financing Facilitated' },
      { text: '✓ 10,000+ Customers Assisted' },
    ],
    founderImageSrc: '/images/founder.PNG',
    founderImageAlt: 'Madhu Sagar Adlakha — Founder & Director, Kamson Financial Services',
    founderCaption:  'Madhu Sagar Adlakha · Founder & Director',
  },

  trustMetrics: [
    { value: '35+',        label: 'Years in Business'            },
    { value: '50+',        label: 'Banking & Insurance Partners' },
    { value: '₹5,000Cr+', label: 'Financing Facilitated'        },
    { value: '50,000+',   label: 'Customers Assisted'           },
    { value: '95%',        label: 'Approval Success'             },
  ],

  referralStrip: {
    text:     '<strong>Are you a CA, Property Consultant, Builder or Financial Advisor?</strong> Partner with Kamson — give your clients access to Kamson\'s lender relationships and expertise.',
    ctaLabel: 'Partner With Kamson →',
    ctaHref:  '/partners',
  },

  lenderBadges: {
    heading:    'Our Lending & Insurance Network - 50+ Lending & Insurance Partners',
    subheading: 'From home loans and business finance to insurance solutions, Kamson works with a wide network of banks, NBFCs and insurers to find the right fit for every client.',
    lenders: [
      'HDFC Bank',  'ICICI Bank',  'Axis Bank',  'Kotak Mahindra Bank',  'SBI',
  'Punjab National Bank',  'Bank of Baroda',  'IDFC First Bank',  'Bajaj Finance',
  'Tata Capital',  'LIC Housing Finance',  'HDFC Life',  'ICICI Prudential',
  'Star Health'
    ],
    moreText: 'And 36+ additional lending and insurance partners',
  },

  founder: {
    eyebrow:    'The Foundation of Kamson',
    name:       'Madhu Sagar Adlakha',
    title:      'Founder & Director · Kamson Financial Services Brand of Inteck Marketing India',
    experience: '35 Years of Financial Advisory Experience',
    imageSrc:   '/images/founder.png',
    imageAlt:   'Madhu Sagar Adlakha — Founder & Director, Kamson Financial Services',
    paragraphs: [
      'In 1988, Madhu Sagar Adlakha founded Kamson Financial Services Brand of Inteck Marketing India on a single conviction — that individuals and businesses deserve the same quality of financial access that large institutions receive. Over 35 years, that conviction has been validated by thousands of transactions across home loans, business financing, working capital and structured commercial deals.',
      'The experience accumulated at Kamson Financial Services Brand of Inteck Marketing India — the lender relationships, the process knowledge, the track record — is the product of three and a half decades of doing this work, case by case.',
    ],
    quote:     'Kamson Financial Services Brand of Inteck Marketing was built on the belief that the right financial guidance, at the right time, changes outcomes. Every client carries something important. We carry that responsibility seriously.',
    quoteAttr: '— Madhu Sagar Adlakha, Founder & Director',
  },

  whyKamson: {
    eyebrow:  'The Question We Welcome Most',
    heading:  'Why Come to Kamson Instead of Going Directly to a Bank?',
    lede:     'It is a fair question — and we welcome it. After thousands of transactions, here is the honest answer.',
    cards: [
      { number: '01', icon: '🎯', heading: 'Right Lender, First Time', summary: 'We match your profile to the correct lender before you apply — protecting your credit score.', body: 'Each lender has distinct criteria for income type, property, business vintage and credit profile. Our knowledge of 50+ lenders means the right match is made before a single application is submitted.', tag: 'Better lender fit' },
      { number: '02', icon: '📚', heading: 'Accumulated Lender Intelligence', summary: 'We know which bank is flexible today — and which one to avoid for your specific case.', body: 'Banks have unstated preferences alongside their published criteria. Our long-standing understanding of each lender — who is currently flexible, which bank suits which collateral — is simply not available at a bank branch.', tag: 'Institutional knowledge' },
      { number: '03', icon: '⚡', heading: 'Complex Cases Are Our Speciality', summary: 'Self-employed, structured income, commercial collateral — cases banks decline, we approve.', body: 'Self-employed professionals, business owners with multiple entities, structured income, commercial collateral. The cases that standard bank branches decline are where Kamson\'s relationships create the clearest value.', tag: 'Complex cases welcome' },
      { number: '04', icon: '🤝', heading: 'One Contact. Multiple Lenders.', summary: 'You deal with Kamson. We handle the lenders, documentation and follow-up.', body: 'A bank offers its own products. Kamson presents your requirement to the most suitable lenders from a network of 50+, manages the documentation, and stays accountable through to disbursement.', tag: 'Single point of accountability' },
    ],
    footerText: 'Kamson\'s fee is transparent. In most cases it is covered by the lending institution — not the borrower.',
    footerCta:  { label: 'Schedule a Free Consultation →', href: '/contact' },
  },

  specializedFinancing: {
    eyebrow:    'Specialist Expertise',
    heading:    'We handle difficult financing cases',
    subheading: 'Certain cases require deep lender knowledge that goes far beyond published criteria.',
    cards: [
      { icon: '🏘', name: 'Properties Most Banks Reject',      desc: 'Lal Dora, Abadi and complex property structures.',            tag: 'Specialist lender access' },
      { icon: '🏥', name: 'Business Financing', desc: 'Hospitals, schools, hotels and manufacturing businesses.',             tag: ''       },
      { icon: '🏫', name: 'Commercial Real Estate',  desc: 'Industrial, commercial and income-generating properties.',           tag: 'Institutional finance'    },
      { icon: '🏨', name: 'Complex Income Cases',        desc: 'Self-employed and multi-entity income structures',         tag: 'Hospitality finance'      },
      { icon: '🏭', name: '+ Many other specialised financing requirements',   desc: '', tag: 'Industrial finance'       },
          ],
  },

  successStories: {
    eyebrow:    'Representative Outcomes',
    heading:    'Representative Outcomes Delivered By Kamson',
    subheading: 'Financing arranged across loan types, customer profiles and locations across Delhi NCR.',
    scaleCards: [
      { type: 'Working Capital Finance', capLabel: 'Facilities arranged up to', capAmount: '₹50 Crore', examples: [{ profile: 'Manufacturing Co.', amount: '₹5 Cr' }, { profile: 'Trading Business', amount: '₹2.2 Cr' }, { profile: 'Export House', amount: '₹8 Cr' }] },
      { type: 'Business Loans', capLabel: 'Loans arranged up to', capAmount: '₹25 Crore', examples: [{ profile: 'IT Services Co.', amount: '₹1.8 Cr' }, { profile: 'Healthcare Group', amount: '₹4 Cr' }, { profile: 'Retail Chain', amount: '₹7 Cr' }] },
      { type: 'Loan Against Property', capLabel: 'Loans arranged up to', capAmount: '₹20 Crore', examples: [{ profile: 'Trader · Faridabad', amount: '₹3 Cr' }, { profile: 'Property Developer', amount: '₹9 Cr' }, { profile: 'Business Owner', amount: '₹5 Cr' }] },
      { type: 'Home Loans', capLabel: 'Loans arranged up to', capAmount: '₹5 Crore', examples: [{ profile: 'Doctor · Gurgaon', amount: '₹1.2 Cr' }, { profile: 'NRI Buyer', amount: '₹2.5 Cr' }, { profile: 'First-time buyer', amount: '₹65 L' }] },
    ],
    outcomes: [
      { clientType: 'Doctor',              location: 'Gurgaon',   loanType: 'Home Loan',             amount: '₹1.2 Crore' },
      { clientType: 'Manufacturer',        location: 'Delhi NCR', loanType: 'Working Capital',       amount: '₹5 Crore'   },
      { clientType: 'Business Owner',      location: 'Noida',     loanType: 'Loan Against Property', amount: '₹3 Crore'   },
      { clientType: 'IT Services Company', location: 'Noida',     loanType: 'Business Loan',         amount: '₹1.8 Crore' },
      { clientType: 'Retail Chain',        location: 'Delhi',     loanType: 'Business Loan',         amount: '₹7 Crore'   },
      { clientType: 'NRI Buyer',           location: 'Gurgaon',   loanType: 'Home Loan',             amount: '₹2.5 Crore' },
      { clientType: 'Healthcare Group',    location: 'Delhi NCR', loanType: 'Business Loan',         amount: '₹4 Crore'   },
      { clientType: 'Property Developer',  location: 'Faridabad', loanType: 'Loan Against Property', amount: '₹9 Crore'   },
    ],
    ctaLabel:   'Discuss Your Requirement →',
    ctaHref:    '/contact',
    disclaimer: 'Representative transactions. Customer profiles and amounts are approximate.',
  },

  // Keep for backward compat
  transactions: { eyebrow: '', heading: '', subheading: '', cards: [] },
  clientOutcomes: { eyebrow: '', heading: '', subheading: '', outcomes: [], ctaLabel: '', ctaHref: '' },

  whoWeWorkWith: {
    eyebrow:    'Our Clients',
    heading:    'Who Kamson Commonly Works With',
    subheading: 'Clients from every professional and business background across Delhi NCR.',
    profiles: [
      { icon: '🩺', name: 'Doctors & Healthcare Professionals', desc: 'Clinic acquisition, practice expansion and home loans for self-employed medical professionals.' },
      { icon: '🏭', name: 'Manufacturers & Industrialists',      desc: 'Working capital facilities, plant finance, term loans and balance transfers.'               },
      { icon: '🛒', name: 'Traders & Distributors',             desc: 'OD and CC limits, inventory finance and LAP against commercial property.'                   },
      { icon: '🏗', name: 'Builders & Property Investors',       desc: 'Construction finance, project loans and buyer home loan support.'                           },
      { icon: '💼', name: 'Business Owners & Entrepreneurs',     desc: 'Business loans and LAP structured around actual cash flows — not just salary slips.'       },
      { icon: '📊', name: 'SMEs & Growing Companies',           desc: 'First-time institutional credit, CC enhancement and term loans.'                            },
      { icon: '🏠', name: 'Salaried Professionals',             desc: 'Home loans where Kamson finds a better rate or faster processing than your own bank.'      },
      { icon: '🌍', name: 'NRI Clients',                        desc: 'NRI home loans and investment property finance for the Delhi NCR market.'                  },
    ],
  },

  bankingPartners: {
    label: '50+ Banking & Insurance Partners',
    partners: [
      { name: 'SBI',            logoSrc: '/placeholders/bank-sbi.png',   logoAlt: 'State Bank of India'  },
      { name: 'HDFC Bank',      logoSrc: '/placeholders/bank-hdfc.png',  logoAlt: 'HDFC Bank'            },
      { name: 'ICICI Bank',     logoSrc: '/placeholders/bank-icici.png', logoAlt: 'ICICI Bank'           },
      { name: 'Axis Bank',      logoSrc: '/placeholders/bank-axis.png',  logoAlt: 'Axis Bank'            },
      { name: 'Kotak Bank',     logoSrc: '/placeholders/bank-kotak.png', logoAlt: 'Kotak Mahindra Bank'  },
      { name: 'PNB',            logoSrc: '/placeholders/bank-pnb.png',   logoAlt: 'Punjab National Bank' },
      { name: 'Bank of Baroda', logoSrc: '/placeholders/bank-bob.png',   logoAlt: 'Bank of Baroda'       },
      { name: 'IDFC First',     logoSrc: '/placeholders/bank-idfc.png',  logoAlt: 'IDFC First Bank'      },
    ],
    moreText: '+ 26 more banking & NBFC partners',
  },

  process: {
    eyebrow:    'How Kamson Works',
    heading:    'The Kamson Process',
    subheading: 'A structured, repeatable framework developed over decades.',
    introBody:  'Every stage is managed by Kamson. The client does not chase the bank. Kamson does.',
    ctaLabel:   'Start the Conversation →',
    ctaHref:    '/contact',
    steps: [
      { stepLabel: 'Step 01', heading: 'Understand the Requirement',       body: 'Loan type, amount, timeline, income profile and any complicating factors. No assumptions.',                                                  tag: 'Free · No obligation'      },
      { stepLabel: 'Step 02', heading: 'Identify Suitable Lenders',        body: 'We select the most appropriate lenders from 50+ based on profile, collateral and income structure. Targeted — not a shotgun approach.',     tag: 'Precision lender matching' },
      { stepLabel: 'Step 03', heading: 'Documentation & File Preparation', body: 'Every document is guided and reviewed. We know what each lender needs beyond their stated criteria.',                                        tag: 'Complete file preparation' },
      { stepLabel: 'Step 04', heading: 'Approval Management',              body: 'We track the file, respond to all queries and manage every additional requirement. You do not chase the bank. Kamson does.',                  tag: 'Active follow-through'     },
      { stepLabel: 'Step 05', heading: 'Disbursement Support',             body: 'We coordinate between lender, legal and client to ensure funds reach the right place at the right time.',                                   tag: 'End-to-end accountability' },
      { stepLabel: 'Beyond the transaction', heading: 'Ongoing Relationship', body: 'The transaction closes. The relationship continues — for balance transfers, new loans and every financial decision that follows.', tag: 'Not just one transaction', isFinal: true },
    ],
  },

  services: {
    eyebrow:    'What Kamson Does',
    heading:    'Loan & Insurance Products We Arrange',
    subheading: 'Full process management — from lender selection to disbursement.',
    columns: [
      {
        title: 'Loan Solutions', subtitle: 'Home · Business · LAP · Working Capital · Construction · Commercial',
        items: [
          { name: 'Home Loans',                  href: '/services#home-loans'            },
          { name: 'Business Loans',              href: '/services#business-loans'        },
          { name: 'MSME Loans',                  href: '/services#msme-loans'            },
          { name: 'Loan Against Property',       href: '/services#loan-against-property' },
          { name: 'Working Capital Finance',     href: '/services#working-capital'       },
          { name: 'Construction Finance',        href: '/services#home-loans'            },
        ],
        ctaPrimary:   { label: 'Speak to Kamson About Loans',     href: '/contact'                   },
        ctaSecondary: { label: 'WhatsApp',                         href: 'https://wa.me/919560506332' },
      },
      {
        title: 'Insurance Solutions', subtitle: 'Health · Motor · General · Corporate',
        items: [
          { name: 'Health Insurance',  href: '/services/health-insurance'  },
          { name: 'Motor Insurance',    href: '/services/life-insurance'    },
          { name: 'General Insurance', href: '/services/general-insurance' },
          { name: 'Corporate Insurance', href: '/services/general-insurance' },
        ],
        ctaPrimary:   { label: 'Speak to Kamson About Insurance', href: '/contact'                   },
        ctaSecondary: { label: 'WhatsApp',                         href: 'https://wa.me/919560506332' },
      },
    ],
  },

  trustedBy: {
    eyebrow:    'Professional Trust',
    heading:    'The Financial Community Trusts Kamson',
    subheading: 'For decades, Chartered Accountants, property consultants and banking professionals across Delhi NCR have referred their most important clients to Kamson.',
    cards: [
      { icon: '', name: 'Chartered Accountants', desc: ''    },
      { icon: '', name: 'Property Consultants',  desc: ''        },
      { icon: '', name: 'Builders & Developers', desc: ''           },
      { icon: '', name: 'Banking Professionals', desc: ''       },
      { icon: '', name: 'Business Owners',       desc: ''     },
    ],
    quoteText:   'For all our financing & insurance requirements, Kamson has been our trusted partner for over a decade. They understand banking, structure files correctly, and treat every referral as an extension of our own reputation.',
    quoteAttrib: 'Chartered Accountant · Delhi NCR',
    quoteRole:   '12-year relationship with Kamson',
  },

  reviews: { eyebrow: '', heading: '', rating: '4.8', reviewCount: '120+ Google reviews', googleUrl: '', viewAllLabel: '', reviews: [] },

  partnerSection: {
    eyebrow: 'For Professionals', heading: 'Partner With Kamson',
    subheading: 'Give your clients access to decades of lender expertise.',
    tags: [{ label: 'CAs' }, { label: 'Property Dealers' }, { label: 'Builders' }, { label: 'DSAs' }, { label: 'Insurance Advisors' }],
    ctaPrimary:   { label: 'Learn About Partnering →', href: '/partners'                   },
    ctaSecondary: { label: 'WhatsApp to Discuss',       href: 'https://wa.me/919560506332' },
  },

  contact: {
    eyebrow:    'Get in Touch',
    heading:    'Discuss Your Requirement With Kamson',
    subheading: 'Whether you are buying a home, growing a business, arranging working capital or evaluating insurance options, Kamson will help you identify the right solution.',
    channels: [
      { icon: '📞', label: 'Call Kamson',     sub: '+91 98110 75812 · Mon–Sat 10am–7pm',         action: 'Call Now →',       href: 'tel:+919811075812'          },
      { icon: '💬', label: 'WhatsApp',         sub: '+91 95605 06332 · Responded within 2 hours', action: 'Open Chat →',      href: 'https://wa.me/919560506332' },
      { icon: '📧', label: 'Email Kamson',     sub: 'support@kamsonfinancials.com · Replied within 1 business day', action: 'Send Email →', href: 'mailto:support@kamsonfinancials.com' },
      { icon: '📍', label: 'Visit Our Office', sub: ' 102-103 1st Floor, Kochhar Tower, Jail Road, Hari Nagar, New Delhi',         action: 'Get Directions →', href: 'https://maps.google.com/?q=Kochhar+Tower+Jail+Road+New+Delhi' },
    ],
    formTitle: 'Send Kamson a Message', formSubtitle: 'Fill this in and a Relationship Manager will be in touch.',
    submitLabel: 'Submit Enquiry', submittingLabel: 'Submitting…', successTitle: 'Enquiry Received',
    errorMessage: 'Something went wrong. Please call us directly.',
    promise: 'A Kamson Relationship Manager will contact you within one business day.',
    fieldLabels: { name: 'Full Name', mobile: 'Mobile Number', city: 'City', loanType: 'Loan / Insurance Type', amount: 'Approximate Amount Required', message: 'Brief Message (Optional)', loanTypeDefault: 'Select type' },
    fieldPlaceholders: { name: 'Your full name', mobile: '+91 XXXXX XXXXX', city: 'Delhi / NCR', amount: 'e.g. ₹50 Lakhs, ₹2 Crore', message: 'Any additional context…' },
    loanTypes: ['Home Loan', 'Business Loan', 'MSME Loan', 'Loan Against Property', 'Working Capital', 'Construction Finance', 'Commercial Property', 'Health Insurance', 'Life Insurance', 'General Insurance', 'Other'],
    officeAddress: ' 102-103 1st Floor, Kochhar Tower, Jail Road, Hari Nagar, New Delhi',
    mapsEmbedUrl:  'https://www.google.com/maps?q=Kamson%20Business%20Solutions%20Pvt%20Ltd%20103%20Jail%20Rd%20Shiv%20Nagar%20Extension%20Hari%20Nagar%20New%20Delhi%20110058&output=embed',
    footerLinks:   [{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms', href: '/terms' }],
    address:       'Kochhar Tower, Jail Road, New Delhi',
    copyright:     '© 2026 Kamson Financial Services · All rights reserved · Delhi NCR',
  },
}
