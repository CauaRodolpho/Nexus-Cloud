# TODO — Refatoração Front-End (Nexus Cloud)

## Etapa A — Design System (tokens + componentes)
- [ ] Revisar `tailwind.config.ts` e ajustar/alinhar tokens (gradiente roxo, glass, sombras leves).
- [ ] Atualizar componentes UI existentes (Button/Card/Badge/Input/Progress/etc.) para cobrir variantes pedidas e states (loading/disabled/focus) com consistência.

- [x] Criar pequenos componentes “marketing primitives” (ex: Container/SectionHeading/StatItem) se necessário.



## Etapa C — Hero premium (alto impacto)
- [x] Refatorar `src/components/marketing/hero.tsx` e `hero-motion.tsx` para incluir: CTA principal/secondary, estatísticas/KPIs, indicadores, elementos gráficos discretos.
- [ ] Garantir animações sutis (fade/slide/blur leve) e respeito a `useReducedMotion`.
- [ ] Padronizar tipografia, espaçamentos e cores para Dark/Light.


## Etapa B — Layout & Estrutura (SaaS grade sólida)
- [ ] Criar/usar wrapper de layout com espaçamentos padronizados.
- [ ] Ajustar Navbar/Footer para consistência e acessibilidade (focus/keyboard) sem mudar lógica.

## Etapa D — Pricing + Cards
- [ ] Refinar `pricing-section.tsx` e `pricing-card.tsx` para hover elegante, hierarquia premium e consistência de UI.

## Etapa E — Seções restantes
- [ ] Atualizar Features/UseCases/Security/Testimonials/FAQ/FinalCta para o mesmo design system.

## Etapa F — Performance & Code Health
- [ ] Remover duplicações e código morto.
- [ ] Evitar re-renders desnecessários (memo/useMemo quando fizer sentido).
- [ ] Rodar `npm run lint` e `npm run build` após cada etapa.

