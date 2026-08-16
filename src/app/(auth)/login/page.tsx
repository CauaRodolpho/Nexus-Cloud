import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/seo'
import { AuthShell } from '@/components/shared'
import { LoginForm } from '@/features/auth'

export const metadata: Metadata = buildMetadata({
  title: 'Login',
  description: 'Acesse sua conta Nexus Cloud para gerenciar seus servidores VPS.',
  path: '/login',
  noIndex: true,
})

export default function LoginPage() {
  return (
    <AuthShell title="Bem-vindo de volta" subtitle="Entre na sua conta para gerenciar seus servidores.">
      <LoginForm />
    </AuthShell>
  )
}
