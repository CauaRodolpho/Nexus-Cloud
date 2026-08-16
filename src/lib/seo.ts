import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants'

interface SeoProps {
  title: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description = SITE_CONFIG.description,
  path = '',
  image = SITE_CONFIG.ogImage,
  noIndex = false,
}: SeoProps): Metadata {
  const fullTitle = `${title} | ${SITE_CONFIG.name}`
  const url = `${SITE_CONFIG.url}${path}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      site: SITE_CONFIG.twitter,
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.email,
      contactType: 'customer service',
    },
    sameAs: [
      'https://twitter.com/nexuscloud',
      'https://linkedin.com/company/nexuscloud',
      'https://github.com/nexuscloud',
    ],
  }
}

export function generateProductSchema(plan: {
  name: string
  priceMonthly: number
  description: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: plan.name,
    description: plan.description,
    offers: {
      '@type': 'Offer',
      price: plan.priceMonthly,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
