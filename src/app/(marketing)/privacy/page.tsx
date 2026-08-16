import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { LegalPage, LegalSection } from '@/components/marketing/legal-page'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Política de Privacidade',
  description: 'Como a Nexus Cloud coleta, usa e protege seus dados pessoais.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade" updatedAt="1 de agosto de 2026">
      <LegalSection title="1. Dados que coletamos">
        <ul className="list-disc pl-5">
          <li>Dados de cadastro: nome, e-mail, CPF/CNPJ e endereço de cobrança;</li>
          <li>Dados de uso: logs de acesso ao painel, métricas de consumo de recursos;</li>
          <li>Dados de pagamento: processados por gateways parceiros — nunca armazenamos dados
            completos de cartão em nossos servidores.</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Finalidade do tratamento">
        <p>
          Utilizamos seus dados para provisionar e faturar os serviços contratados, prevenir
          fraudes e abuso, prestar suporte técnico e cumprir obrigações legais e regulatórias.
        </p>
      </LegalSection>

      <LegalSection title="3. Compartilhamento">
        <p>
          Não vendemos dados pessoais. Compartilhamos apenas com processadores de pagamento,
          provedores de infraestrutura de datacenter e autoridades, quando exigido por lei.
        </p>
      </LegalSection>

      <LegalSection title="4. Retenção e segurança">
        <p>
          Dados são retidos pelo período do contrato e por até 5 anos após o encerramento, para
          fins fiscais. Utilizamos criptografia em trânsito e em repouso, e nossos datacenters
          seguem controles de acesso físico e lógico auditados.
        </p>
      </LegalSection>

      <LegalSection title="5. Seus direitos">
        <p>
          Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode solicitar acesso,
          correção, portabilidade ou exclusão dos seus dados a qualquer momento. Veja detalhes na
          nossa página de LGPD.
        </p>
      </LegalSection>

      <LegalSection title="6. Contato do encarregado (DPO)">
        <p>
          Solicitações relacionadas a dados pessoais podem ser enviadas para{' '}
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
            {SITE_CONFIG.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
