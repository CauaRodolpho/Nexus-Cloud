import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { LegalPage, LegalSection } from '@/components/marketing/legal-page'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Termos de Uso',
  description: 'Termos de uso dos serviços de hospedagem VPS da Nexus Cloud.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <LegalPage title="Termos de Uso" updatedAt="1 de agosto de 2026">
      <LegalSection title="1. Aceitação dos termos">
        <p>
          Ao contratar ou utilizar os serviços da {SITE_CONFIG.name} (&quot;Nexus Cloud&quot;, &quot;nós&quot;),
          você concorda com estes Termos de Uso. Caso não concorde, não deve utilizar nossos
          serviços de hospedagem VPS, cloud e servidores dedicados.
        </p>
      </LegalSection>

      <LegalSection title="2. Descrição do serviço">
        <p>
          Fornecemos infraestrutura de servidores virtuais (VPS), cloud hosting e servidores
          dedicados, incluindo provisionamento, monitoramento, backups e suporte técnico,
          conforme as especificações de cada plano contratado.
        </p>
      </LegalSection>

      <LegalSection title="3. Uso aceitável">
        <p>É vedado utilizar os servidores para, entre outros:</p>
        <ul className="list-disc pl-5">
          <li>Envio de spam ou distribuição de malware;</li>
          <li>Hospedagem de conteúdo ilegal ou que viole direitos de terceiros;</li>
          <li>Ataques a outros sistemas, redes ou serviços;</li>
          <li>Mineração de criptomoedas sem autorização prévia em planos compartilhados.</li>
        </ul>
        <p>
          Violações podem resultar em suspensão imediata do serviço, sem reembolso, mediante
          notificação ao cliente.
        </p>
      </LegalSection>

      <LegalSection title="4. Disponibilidade e SLA">
        <p>
          Garantimos disponibilidade mínima de 99,9% ao mês para servidores em produção. Créditos
          proporcionais ao tempo de indisponibilidade são aplicados automaticamente à fatura
          seguinte, conforme detalhado no contrato de cada plano.
        </p>
      </LegalSection>

      <LegalSection title="5. Pagamento e cancelamento">
        <p>
          Os planos são cobrados de forma antecipada, mensal ou anual. O cancelamento pode ser
          feito a qualquer momento pelo painel do cliente, sem multa, encerrando a cobrança no
          ciclo seguinte.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitação de responsabilidade">
        <p>
          A Nexus Cloud não se responsabiliza por perdas de dados decorrentes de uso indevido do
          servidor pelo cliente. Recomendamos manter backups próprios além dos automáticos
          oferecidos pela plataforma.
        </p>
      </LegalSection>

      <LegalSection title="7. Contato">
        <p>
          Dúvidas sobre estes termos podem ser enviadas para{' '}
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
            {SITE_CONFIG.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
