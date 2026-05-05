# HANDOFF — MOBA SAGE

> Creado: 2026-05-05 | Boot Session
> Proyecto: gamer-frog/moba-sage
> Deploy: https://moba-sage.vercel.app
> Stack: Next.js 16.1.1, React 19, Tailwind 4, Framer Motion 12, Data Dragon 16.9.1

## Estado Actual
| Campo | Valor |
|-------|-------|
| Branch | main |
| Version APP | 2.0.0 (src/data/constants.ts) |
| Version Build | v1.9.0 (public/version.txt) |
| DDragon | 16.9.1 |
| Patch LoL | 26.9 — Season 2 Pandemonium |
| Patch WR | 6.9 |
| Build | Clean (0 errors) |
| Push ID | electronica-frog |
| Git Author | bautiarmanijuegos@gmail.com |

## Archivos Clave
- `src/app/page.tsx` — Monolito principal (~644 lineas, 30+ useState)
- `src/lib/data.ts` — Data hardcoded (157KB, ~3900 lineas) — NO TOCAR sin saber que se hace
- `src/components/moba/constants.ts` — Tiers, roles, tabs, colors
- `src/components/moba/helpers.ts` — CHAMPION_NAME_MAP, ITEM_NAME_MAP, DDragon URLs
- `src/data/champion-data.ts` — Skill names, skins, rune tree config
- `src/data/combos-data.ts` — Pro comps (5 entries)
- `src/data/constants.ts` — APP_NAME, APP_VERSION
- `public/tierlist-feed.json` — Tier list live data (Ralph Loop v3)
- `public/patches-feed.json` — Patch notes (26.9, 26.8, 26.7, 26.6, WR 6.9)
- `public/guides-feed.json` — Guides feed
- `public/meta-builds.json` — AI-generated builds
- `public/activity-feed.json` — Activity/novelties feed

## Constraints (NO VIOLAR)
- NO crear `vercel.json`
- NO crear crons Vercel (se hacen desde este bot)
- NO poner API keys en codigo
- NO instalar z-ai-web-dev-sdk como dependencia
- Z-index: LoadingScreen z-[210], ChampionModal z-[250], ActivityPopup z-[201]
- Zaahen ES un campeon VALIDO

## Historial de Mejoras (14 rondas completadas)
- Rounds 1-3: fetchData resiliente, cache headers, loading, SEO, PWA, crons
- Rounds 4-14: 100+ fixes (memoization, a11y, type safety, memory leaks, security, performance)
- Ultimo commit: 1c51d26 (Round 13)

## Datos del Proyecto
- Campeones LoL en data.ts: ~66 (S-tier: Zaahen, Jinx, Ahri, Nocturne, Ornn, Briar, Aurelion Sol, Veigar, Nilah, Soraka, Zyra; A-tier: Master Yi, Lee Sin, Thresh, Darius, etc.)
- Campeones WR: ~22 (6 S-tier, 11 A-tier, 5 otros)
- Tier list feed v10: 10 S-tier, 10 A-tier, 4 B-tier
- Pro comps: 5 entries (Engage, Poke, Split Push, Pick, Protect ADC)
- Patch data: 5 patches documentados (LoL 26.9, 26.8, 26.7, 26.6, WR 6.9)

## Modo de Operacion
1. Leer ORDERS.md para tareas pendientes
2. Ejecutar la tarea mas prioritaria
3. Actualizar ORDERS.md marcando lo hecho
4. Actualizar este HANDOFF.md con resultados
5. Push como electronica-frog a main
