import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { LegalPage, LegalSection } from '@/components/marketing/legal-page'

export const metadata: Metadata = buildMetadata({
  title: 'Acordo de Nível de Serviço (SLA)',
  description: 'Garantia de 99.99% de uptime e política de créditos da Nexus Cloud.',
  path: '/sla',
})

export default function SlaPage() {
  return (
    <LegalPage title="Acordo de Nível de Serviço (SLA)" updatedAt="1 de agosto de 2026">
      <LegalSection title="1. Garantia de disponibilidade">
        <p>
          Garantimos 99.99% de uptime mensal para todos os planos VPS, medido a partir da
          conectividade de rede e disponibilidade do hypervisor nos nossos datacenters.
        </p>
      </LegalSection>

      <LegalSection title="2. Política de créditos">
        <ul className="list-disc pl-5">
          <li>Uptime entre 99.0% e 99.98%: crédito de 5% da mensalidade;</li>
          <li>Uptime entre 95.0% e 98.99%: crédito de 15% da mensalidade;</li>
          <li>Uptime abaixo de 95.0%: crédito de 30% da mensalidade.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Exclusões">
        <p>
          Janelas de manutenção programada (avisadas com 48h de antecedência), ataques de
          negação de serviço acima da capacidade contratada de mitigação, e indisponibilidades
          causadas por configurações do próprio cliente não contam para o cálculo de uptime.
        </p>
      </LegalSection>

      <LegalSection title="4. Como solicitar o crédito">
        <p>
          Abra um chamado com o time de suporte em até 30 dias após o incidente, informando o
          identificador do servidor e o período de indisponibilidade. O crédito é aplicado na
          fatura seguinte.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
