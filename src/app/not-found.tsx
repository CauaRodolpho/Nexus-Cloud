import Link from 'next/link'
import { Button } from '@/components/ui'
import { Navbar, Footer } from '@/components/layout'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <span className="bg-gradient-primary bg-clip-text text-7xl font-bold text-transparent">
          404
        </span>
        <h1 className="mt-4 text-2xl font-bold text-foreground">Página não encontrada</h1>
        <p className="mt-2 max-w-md text-muted-foreground">
          O endereço que você tentou acessar não existe ou foi movido.
        </p>
        <Button variant="primary" className="mt-8" leftIcon={<ArrowLeft className="h-4 w-4" />} asChild>
          <Link href="/">Voltar para o início</Link>
        </Button>
      </main>
      <Footer />
    </>
  )
}
