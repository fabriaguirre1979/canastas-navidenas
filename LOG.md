# Bitácora — Canastas Navidenas (Landing de Prompts)

## Estado actual (23-nov-2026, noche)
- **Proyecto actual**: Landing funcional con animaciones snow/foil, selector vistas Canastas/Caramelos, iconos navideños en 3 anillos alrededor de la tarjeta
- **Puerto**: 3003 (`http://127.0.0.1:3003/`)
- **Animaciones activas**:
  - `snow-fall` (copos de nieve animados con JS y CSS)
  - `foil-spin` (overlay radial giratorio)
  - `xmas-float` (24 iconos 🎁🎄❄️⭐ en 3 anillos, 4s ease-in-out, opacidad escalonada)
  - Transición limpia entre Canastas y Caramelos
- **Control de versiones**: ✅ **Git activo local + GitHub remoto** desde **23-nov-2026**
- **Repositorio GitHub**: https://github.com/fabriaguirre1979/canastas-navidenas

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

### 23-nov-2026 (mañana) — **INSTAURACIÓN DEL CONTROL DE VERSIONES (GIT LOCAL)**
**⚡ HITO CLAVE: Se implementa control de versiones real para evitar pérdida de trabajo ⚡**
- **Git init** en `/home/f3/Projects/Landing de Prompts/canastas-navidenas/.git`
- **.gitignore** creado excluyendo `node_modules/` y `dist/`
- **Primer commit base**: `8eb9b29` — landing funcional (snow, foil, selector vistas, puerto 3003)
- **Filosofía**: Cada sesión termina en commit; `git restore .` = UNDO real; ramas para experimentos
- **Lección aprendida**: El desastre del 20-nov ocurrió por **no tener checkpoints persistentes**. La "memoria" de cuándo se dijo "pausa" era frágil. Ahora el disco recuerda por nosotros.

### 23-nov-2026 (mediodía) — Iconos navideños v1 + Primer checkpoint con Git
- **Iconos añadidos**: 🎁 regalo, 🎄 árbol, ❄️ copo, ⭐ estrella (4 iconos fijos alrededor de tarjeta)
- **Animación**: fade in/out + escala tenue, 8s ease-in-out, delays escalonados 2s
- **Checkpoint**: `229b1ef` — primer commit tras git init
- **LOG actualizado** con nueva sección de control de versiones

### 23-nov-2026 (tarde) — Iconos navideños v2: distribución pantalla completa
- **24 iconos** distribuidos aleatoriamente por todo el viewport
- **Tamaños variables**: 16-40px aleatorios
- **Animación más rápida**: 4s (era 8s) con ease-in-out
- **Delays aleatorios**: 0-4s para aparición escalonada natural
- **Duraciones variables**: 3.5-5s para desincronizar ciclos
- **Opacidad dinámica**: 0 → 0.4 → 0.7 → 0.85 → 0.7 → 0.4 → 0 con rotación sutil ±5°
- **Checkpoint**: `54056c0`

### 23-nov-2026 (noche) — Iconos navideños v3: distribución inteligente en anillos
- **Evita el área central** (radio 22% desde centro) donde está la tarjeta — ni estrellas amontonadas a la derecha ni arbolitos tocando la tarjeta abajo
- **3 anillos de distribución**: 28%, 38%, 48% del viewport desde el centro
- **Espaciado mínimo**: 12% entre iconos (verificación de colisión)
- **Variación radial**: ±4% por anillo para naturalidad
- **Fallback seguro**: si no cabe con espaciado, coloca en posiciones aleatorias fuera del radio de la tarjeta
- **Checkpoint**: `e6a9271` → `757c555` (LOG update)

### 23-nov-2026 (noche) — **REPOSITORIO GITHUB CREADO Y SINCRONIZADO**
- **Repo remoto**: https://github.com/fabriaguirre1979/canastas-navidenas
- **Push completo**: 7 commits subidos, historial íntegro
- **Rama master** trackeando `origin/master`
- **Base sólida** para continuar sin riesgo de pérdida

---

## 🎯 PRÓXIMO PROYECTO: FIESTAS DE QUITO 2026 — Chocolates y Vinos
**Inspiración**: Fundación de Quito (6 dic), Fiestas de la Luz, Pase del Niño, Año Viejo
**Producto**: Landing promocional de **chocolates artesanales + vinos** para regalos navideños/fin de año
**Vinos confirmados**:
- **VINO CATADOR CHILENO**
- **Vino de Mortiño Valle de Lita**
**Paleta sugerida**: rojo quiteño, oro colonial, azul sierra
**Tipografía**: colonial/moderna (estilo Gill Sans con toque quiteño)
**CTA ideas**: "Regala Quito esta Navidad" / "Brinda por el 2027"
**Estado**: Idea registrada, pendiente de iniciar tras pulir canastas navideñas