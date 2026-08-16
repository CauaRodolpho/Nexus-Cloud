import {
  Hero,
 
  FeaturesGrid,
  DashboardPreview,
  UseCasesSection,
  SecuritySection,
  TestimonialsSection,
  FaqSection,
 
} from '@/components/marketing'
import { PricingSection } from '@/components/pricing'


export default function HomePage() {
  return (
    <>
      <Hero />
      
      <FeaturesGrid />
      <PricingSection />
     
      <DashboardPreview />
      <UseCasesSection />
      <SecuritySection />
      <TestimonialsSection />
      <FaqSection />
      
    </>
  )
}
