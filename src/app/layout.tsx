import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { generateMetadata as buildMetadata, generateOrganizationSchema } from '@/lib/seo'
import { ThemeProvider } from '@/components/shared/theme-provider'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({
  title: 'Hospedagem VPS de Alta Performance',
  description:
    'Hospedagem VPS com AMD EPYC, NVMe SSD, virtualização KVM e proteção Anti-DDoS de 10 Tbps. Alto desempenho e SLA de 99.99%. Implante em minutos.',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = generateOrganizationSchema()

  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-background font-sans text-foreground" suppressHydrationWarning>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
          >
            Pular para o conteúdo principal
          </a>

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

