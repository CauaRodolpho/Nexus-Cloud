'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { Button, Input } from '@/components/ui'
import { ThemeToggle } from '@/components/shared/theme-toggle'

import type { LoginDTO } from '@/types'



export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<LoginDTO>({ email: '', password: '', rememberMe: false })
  const [errors, setErrors] = useState<Partial<Record<keyof LoginDTO, string>>>({})

  function validate(): boolean {
    const newErrors: Partial<Record<keyof LoginDTO, string>> = {}
    if (!formData.email) newErrors.email = 'Informe seu email'
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email inválido'
    if (!formData.password) newErrors.password = 'Informe sua senha'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setIsLoading(true)
    // TODO: integrate with authService.login(formData) when backend is available
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="voce@empresa.com"
        leftIcon={<Mail className="h-4 w-4" />}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
        autoComplete="email"
        required
      />

      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          name="password"
          label="Senha"
          placeholder="••••••••"
          leftIcon={<Lock className="h-4 w-4" />}
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          error={errors.password}
          autoComplete="current-password"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3.5 top-[34px] text-muted-foreground hover:text-muted-foreground"
          aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-muted-foreground">
          <input
            type="checkbox"
            checked={formData.rememberMe}
            onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
            className="h-4 w-4 rounded border-border bg-background-tertiary text-primary focus:ring-primary"
          />
          Lembrar de mim
        </label>
        <Link href="/forgot-password" className="text-primary-light hover:underline">
          Esqueceu a senha?
        </Link>
      </div>

      <div className="flex items-center justify-between gap-3">
        {/* Toggle de tema centralizado */}
        <ThemeToggle variant="inline" />
        <div />
      </div>


      <Button type="submit" variant="primary" size="lg" isLoading={isLoading} className="w-full">
        Entrar
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Não tem uma conta?{' '}
        <Link href="/register" className="font-medium text-primary-light hover:underline">
          Criar conta gratuita
        </Link>
      </p>
    </form>
  )
}
