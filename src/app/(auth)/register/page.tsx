import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { AuthShell } from '@/components/shared'
import { RegisterForm } from '@/features/auth'

export const metadata: Metadata = buildMetadata({
  title: 'Criar Conta',
  description: 'Crie sua conta gratuita na Nexus Cloud e implante sua primeira VPS em minutos.',
  path: '/register',
  noIndex: true,
})

export default function RegisterPage() {
  return (
    <AuthShell title="Crie sua conta" subtitle="Comece grátis e implante sua primeira VPS em minutos.">
      <RegisterForm />
    </AuthShell>
  )
}
