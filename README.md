Markdown
# 🚀 Nexus Cloud - VPS & Cloud Management Console

[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescript.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cau%C3%A3-rodolpho/)

Uma interface moderna, performática e totalmente responsiva para gerenciamento de servidores VPS e infraestrutura em nuvem. O projeto simula o painel de controle da **Nexus Cloud**, priorizando experiência do usuário (UX), acessibilidade (a11y) e arquitetura de componentes escalável.

---

## 📌 Demonstração Visual & Funcionalidades

### 🌟 Principais Recursos

- **Sidebar Interativa & Retrátil:** Navegação fluida com suporte a colapso de menu (`collapsible`), alternando entre exibição completa e modo compacto por ícones.
- **Suporte a Temas (Dark/Light Mode):** Componente dedicado `ThemeToggle` integrado nativamente ao design system da aplicação.
- **Design System Modular:** Construção de interfaces baseada em componentes reutilizáveis utilizando Tailwind CSS e utilitários da biblioteca `cn()` (`clsx` + `tailwind-merge`).
- **Navegação Dinâmica:** Roteamento com Next.js (App Router), indicando rotas ativas através da API do `usePathname`.
- **Acessibilidade (a11y):** Uso rigoroso de atributos semânticos como `aria-current`, `aria-hidden`, títulos contextuais (`title`) e leitor de tela amigável.
- **Responsividade Total:** Layout adaptável para telas mobile, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** [Next.js](https://nextjs.org/) (App Router) + [React](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescript.org/) (Tipagem estática estrita)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Arquitetura de UI:** Componentização limpa (`Atomic / Feature-based`)

---

## 📂 Estrutura do Projeto

```text
├── src/
│   ├── app/                  # Rotas e páginas do Next.js (App Router)
│   ├── components/
│   │   ├── dashboard/        # Componentes específicos do Painel (Ex: DashboardSidebar)
│   │   └── shared/           # Componentes globais e reutilizáveis (Ex: ThemeToggle)
│   ├── lib/                  # Utilitários globais (Ex: utils.ts com tailwind-merge)
│   └── styles/               # Estilos globais e tokens CSS
```

## ⚡ Boas Práticas Demonstradas

- **Clean Code & Componentização:** Funções enxutas, separação de responsabilidades e reaproveitamento de componentes UI.
- **TypeScript Estrito:** Interfaces bem definidas para propriedades e mapas de rotas, prevenindo erros em tempo de desenvolvimento.
- **Gerenciamento de Estado do React:** Manipulação limpa de estados locais (`useState`) para controle de interface responsiva.
- **Performance:** Uso estratégico de `'use client'` apenas onde há interatividade, mantendo o restante da aplicação otimizado no servidor.

---
## 🚀 Como Executar o Projeto

> ⚠️ **Atenção:** Certifique-se de ter o **Node.js** na versão `18.x` (ou superior) e um gerenciador de pacotes (`npm`, `yarn` ou `pnpm`) instalado antes de iniciar.

---

### 1️⃣ Clonar e Acessar o Repositório

```bash
git clone https://github.com/CauaRodolpho/Nexus-Cloud.git
cd Nexus-Cloud
2️⃣ Instalar Dependências
Bash
npm install
3️⃣ Iniciar Servidor de Desenvolvimento
Bash
npm run dev
4️⃣ Visualizar no Navegador
Abra o endereço abaixo no seu navegador preferido:
👉 http://localhost:3000

👤 Desenvolvedor
Cauã Rodolpho
Front-End Developer | React & Next.js
