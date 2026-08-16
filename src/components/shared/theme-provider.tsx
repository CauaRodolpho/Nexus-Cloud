'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

/**
 * Provider de tema da aplicação.
 *
 * - `attribute="class"`      -> alterna a classe `.dark` no <html>, consumida
 *                               pelos tokens definidos em globals.css.
 * - `defaultTheme="system"`  -> respeita a preferência do SO no primeiro acesso.
 * - `enableSystem`           -> habilita a opção "Sistema" no ThemeToggle.
 * - `disableTransitionOnChange` evita um "flash" de transição em outros
 *   elementos (ex: imagens) no instante da troca; a transição suave de cor
 *   fica a cargo do `transition-colors` definido em globals.css.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
