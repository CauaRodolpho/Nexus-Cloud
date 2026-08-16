import Link from 'next/link'
import { Twitter, Github, Linkedin, Youtube, Mail, Phone } from 'lucide-react'
import { FOOTER_LINKS, SITE_CONFIG } from '@/constants'
import { Badge } from '@/components/ui'
import { BrandMark } from '@/components/shared/brand-mark'

const columns = [
  { title: 'Empresa', links: FOOTER_LINKS.empresa },
  { title: 'Produtos', links: FOOTER_LINKS.produtos },
  { title: 'Suporte', links: FOOTER_LINKS.suporte },
  { title: 'Legal', links: FOOTER_LINKS.legal },
]

const socials = [
  { icon: Twitter, href: 'https://twitter.com/nexuscloud', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/nexuscloud', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/nexuscloud', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com/@nexuscloud', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background-secondary">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <BrandMark />
              <span className="text-lg font-bold text-foreground">
                Nexus<span className="text-primary-light">Cloud</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Infraestrutura cloud de alta performance para aplicações modernas.
            </p>
            <div className="mt-4">
              <Badge variant="success" dot>
                Todos os sistemas operacionais
              </Badge>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary-light"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados. CNPJ{' '}
            {SITE_CONFIG.cnpj}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
