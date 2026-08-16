'use client'

import { useState, type FormEvent } from 'react'
import { Input, Button } from '@/components/ui'
import { Send } from 'lucide-react'

export function SupportForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    // TODO: integrate with supportService.createTicket() when backend is available
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-success/20 bg-success/5 p-8 text-center">
        <p className="text-lg font-semibold text-foreground">Ticket enviado com sucesso!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Nossa equipe responderá em até 2 horas. Você receberá uma confirmação por email.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Nome" placeholder="Seu nome" required />
        <Input label="Email" type="email" placeholder="voce@empresa.com" required />
      </div>
      <Input label="Assunto" placeholder="Como podemos ajudar?" required />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={5}
          required
          placeholder="Descreva sua dúvida ou problema em detalhes..."
          className="rounded-xl border border-border bg-background-tertiary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <Button type="submit" variant="primary" size="lg" isLoading={isLoading} rightIcon={<Send className="h-4 w-4" />}>
        Enviar mensagem
      </Button>
    </form>
  )
}
