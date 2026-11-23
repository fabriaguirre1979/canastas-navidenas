# Bitácora — Canastas Navidenas (Landing de Prompts)

## Estado actual (20-nov-2026, ~14:30)

- **Proyecto actual**: Estado exacto de 19 de noviembre de 2026 restaurado (versión limpia con animaciones originales de nieve y foil overlay, selector de vistas "Canastas" y "Caramelos" con GIF `nuevafunda.gif` y JPG `canastapromocional.jpg`).
- **Puerto**: 3003 (`http://127.0.0.1:3003/`)
- **Animaciones activas**:
  - `snow-fall` (copos de nieve animados con JS y CSS)
  - `foil-spin` (overlay radial giratorio)
  - Transición limpia entre Canastas y Caramelos

## Historial de cambios

### 19-nov-2026 — Estado original del proyecto
- Landing page con animaciones de nieve y foil overlay
- Selector de vistas: "Canastas" (canastapromocional.jpg) y "Caramelos" (nuevafunda.gif)
- Servidor corriendo en puerto 3003

### 20-nov-2026 — Restauración desde punto de referencia
- **Problema**: Se aplicaron mejoras con `modern-web-guidance` (Holo 3D, badge, botón WhatsApp, ornaments) que generaron conflictos de sintaxis y encoding.
- **Sintaxis**: Error en `document.querySelectorAll('.nav-btn';` (falta paréntesis) detuvo la ejecución del script.
- **Encoding**: Emojis (★, 🎄, ⭐, 🔔, ❄, 🎁) se sirvieron corruptos como bytes raw en lugar de entidades HTML.
- **Loop**: Se intentó corregir múltiples veces sin éxito, generando más problemas.
- **Solución**: El usuario recordó que existía un backup `.bak` del archivo `dark-souls-holo-card.html` del 19-nov. Al restaurarlo y reconstruir el cindermane a partir de ese estado base, el proyecto volvió a funcionar correctamente.
- **Lección**: Los backups y los puntos de referencia son cruciales cuando los cambios se desestabilizan.

### 21-nov-2026 — Limpieza y registro
- Eliminado todo lo que se hizo después del 19-nov.
- LOG.md actualizado al estado limpio del 19-nov.
- Proyecto listo para continuar desde donde se pausó.

### 23-nov-2026 — Control de versiones + Iconos navideños
- **Git init**: Repositorio local inicializado con .gitignore (excluye node_modules/, dist/)
- **Primer checkpoint**: Commit `229b1ef` - estado funcional con animaciones snow/foil, selector vistas, puerto 3003
- **Iconos navideños añadidos**: 🎁 regalo, 🎄 árbol, ❄️ copo, ⭐ estrella alrededor de las tarjetas con animación sutil de fade in/out + cambio de escala tenue (8s ease-in-out, delays escalonados 2s)
- **Sistema de recuperación**: Ahora cada sesión termina en commit; `git restore .` vuelve al último checkpoint; ramas para experimentos

### 23-nov-2026 (tarde) — Iconos rediseñados: distribución pantalla completa
- **24 iconos** distribuidos aleatoriamente por todo el viewport (no solo alrededor de la tarjeta)
- **Tamaños variables**: 16-40px aleatorios
- **Animación más rápida**: 4s (era 8s) con ease-in-out
- **Delays aleatorios**: 0-4s para aparición escalonada natural
- **Duraciones variables**: 3.5-5s para desincronizar ciclos
- **Opacidad dinámica**: 0 → 0.4 → 0.7 → 0.85 → 0.7 → 0.4 → 0 con rotación sutil ±5°
- **Checkpoint**: `54056c0`

### 23-nov-2026 (noche) — Distribución inteligente en anillos alrededor de la tarjeta
- **Evita el área central** (radio 22% desde centro) donde está la tarjeta — ni estrellas amontonadas a la derecha ni arbolitos tocando la tarjeta abajo
- **3 anillos de distribución**: 28%, 38%, 48% del viewport desde el centro
- **Espaciado mínimo**: 12% entre iconos (verificación de colisión)
- **Variación radial**: ±4% por anillo para naturalidad
- **Fallback seguro**: si no cabe con espaciado, coloca en posiciones aleatorias fuera del radio de la tarjeta
- **Checkpoint**: `e6a9271`
