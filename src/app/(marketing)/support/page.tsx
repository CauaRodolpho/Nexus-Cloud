import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { SupportForm } from '@/features/support'
import { FaqSection } from '@/components/marketing'
import { LifeBuoy, MessageCircle, Mail, BookOpen } from 'lucide-react'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Suporte',
  description: 'Fale com nossa equipe de suporte técnico 24/7. Tempo médio de resposta: 15 minutos.',
  path: '/support',
})

const CHANNELS = [
  { icon: MessageCircle, title: 'Chat em tempo real', description: 'Resposta em até 5 minutos, 24/7.' },
  { icon: Mail, title: 'Email', description: SITE_CONFIG.supportEmail },
  { icon: BookOpen, title: 'Documentação', description: 'Guias técnicos e tutoriais detalhados.' },
]

export default function SupportPage() {
  return (
    <>
      <div className="relative overflow-hidden pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary-light">
            <LifeBuoy className="h-7 w-7" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Como podemos ajudar?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Nossa equipe técnica está disponível 24 horas por dia, 7 dias por semana.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {CHANNELS.map((channel) => (
              <div key={channel.title} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-light">
                  <channel.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{channel.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-xl font-semibold text-foreground">Abrir um ticket de suporte</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Preencha o formulário abaixo e nossa equipe entrará em contato.
            </p>
            <div className="mt-6">
              <SupportForm />
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  )
}
