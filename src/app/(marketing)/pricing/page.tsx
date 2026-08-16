import type { Metadata } from 'next'
import { generateMetadata as buildMetadata, generateFaqSchema } from '@/lib/seo'
import { PricingSection, CustomVpsBuilder } from '@/components/pricing'
import { ComparisonTable, FaqSection } from '@/components/marketing'
import { FAQ_DATA } from '@/data'

export const metadata: Metadata = buildMetadata({
  title: 'Preços e Planos VPS',
  description:
    'Planos VPS a partir de R$29,90/mês. AMD EPYC, NVMe SSD, Anti-DDoS incluído. Compare Starter, Pro, Enterprise e Titan.',
  path: '/pricing',
})

export default function PricingPage() {
  const faqSchema = generateFaqSchema(FAQ_DATA.map((f) => ({ question: f.question, answer: f.answer })))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-24">
        <div className="mx-auto max-w-3xl px-4 pt-12 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Preços simples e transparentes
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Sem taxas escondidas, sem contratos longos. Cancele quando quiser.
          </p>
        </div>
      </div>
      <PricingSection />
      <CustomVpsBuilder />
      <ComparisonTable />
      <FaqSection />
    </>
  )
}
