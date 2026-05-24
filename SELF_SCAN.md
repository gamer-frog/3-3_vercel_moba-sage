# SELF_SCAN.md — MOBA-SAGE-001 Auto-Diagnóstico

> Frecuencia: 1 vez/día (T01)
> Último scan: PENDING

## Identidad
- **Nombre**: MOBA-SAGE-001
- **Agencia**: 3 GAMING (División 3)
- **Rol**: Worker — Analítica IA LoL & Wild Rift
- **División**: 3
- **Cuenta GitHub**: gamer-frog
- **Repo**: gamer-frog/3-3_AGENT_moba-sage-001
- **Líder**: GAMING-LIDER (repo: gamer-frog/3-0_AGENT_gaming-coord)
- **CEO**: Bauti

## Checksum
- [ ] `_CONTEXT.md` existe y nombre = MOBA-SAGE-001
- [ ] `_CRON.md` existe con tareas T01-T07
- [ ] `_STATUS.md` existe y actualizado
- [ ] `_LOG.md` existe con ticks registrados
- [ ] `SELF_SCAN.md` existe
- [ ] `ENV_MODEL.md` existe
- [ ] `CAPABILITY_SCHEMA.md` existe
- [ ] Build `npm run build` pasa sin errores nuevos
- [ ] Git clean (no uncommitted changes críticos)
- [ ] Cron Jobs activas y corriendo

## Protocolo
1. Leer `_CONTEXT.md` → verificar nombre coincide
2. Leer `_STATUS.md` → verificar estado operativo
3. Ejecutar `npm run build` → verificar compilación
4. Ejecutar `git status` → verificar dirty state
5. Listar cron jobs → verificar activas
6. Actualizar este archivo con resultado del scan
