# Bitácora — Canastas Navidenas (Landing de Prompts)

## Estado actual (25-nov-2026, tarde)
- **Proyecto actual**: Landing funcional con animaciones snow/foil, selector vistas Canastas/Caramelos, iconos navideños en 3 anillos alrededor de la tarjeta
- **Puerto**: 3003 (`http://127.0.0.1:3003/`)
- **Animaciones activas**:
  - `snow-fall` (copos de nieve animados con JS y CSS)
  - `foil-spin` (overlay radial giratorio)
  - `xmas-float` (24 iconos 🎁🎄❄️⭐ en 3 anillos, 4s ease-in-out, opacidad escalonada)
  - Transición limpia entre Canastas y Caramelos
- **Control de versiones**: ✅ **Git activo local + GitHub remoto** desde **23-nov-2026**
- **Repositorio GitHub**: https://github.com/fabriaguirre1979/canastas-navidenas
- **GitHub Pages LIVE**: https://fabriaguirre1979.github.io/canastascaramelosnavidad0996201838/ (HTTP 200)
- **PRÓXIMO PASO MAÑANA**: Completar registro en DNSHE-FreeDomains (https://dnshe.com)
  1. Crear cuenta (email + pass) → verificar email (código expira rápido)
  2. Console → Manage domains → registrar `canastascaramelosnavidad0996201838.bot.cd`
  3. En zona DNSHE: crear CNAME `@` → `fabriaguirre1979.github.io` y CNAME `www` → `fabriaguirre1979.github.io`
  4. GitHub Pages Settings → Custom domain: `canastascaramelosnavidad0996201838.bot.cd` → Enforce HTTPS

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

### 24-nov-2026 (tarde) — **GITHUB PAGES ACTIVADO + REPO RENAMEADO**
- **Repo renombrado**: `canastascaramelosnavidad0996201838` (nuevo nombre elegido por el usuario)
- **URL GitHub Pages**: https://fabriaguirre1979.github.io/canastascaramelosnavidad0996201838/
- **Workflow CI/CD**: `.github/workflows/deploy-pages.yml` (build Vite → deploy via Actions)
- **Vite base**: `/canastascaramelosnavidad0996201838/` configurado en `vite.config.ts`
- **Deploy automático**: push a master = build + deploy automático
- **Estado**: ✅ Live y respondiendo HTTP 200

### 24-nov-2026 (tarde) — **FIX: IFRAME SRC BASE PATH**
- **Problema**: iframe src faltaba el base path → cargaba `https://fabriaguirre1979.github.io/landing-pages/...` (404) en vez de `https://fabriaguirre1979.github.io/canastascaramelosnavidad0996201838/landing-pages/...`
- **Solución**: Usar `import.meta.env.BASE_URL` en `CanastasHoloCard.tsx` para prefijar rutas dinámicamente
- **Tipado**: Añadido `src/vite-env.d.ts` con tipos para `ImportMetaEnv.BASE_URL`
- **Verificado**: iframe src ahora correcto → página carga sin pantalla en blanco

### 24-nov-2026 (tarde) — **FIX: IMÁGENES EN GITHUB PAGES**
- **Problema**: rutas relativas `../../img/` en HTMLs de `landing-pages/` resolvían a `https://fabriaguirre1979.github.io/img/` (saltándose el base path `/canastascaramelosnavidad0996201838/`)
- **Solución**: Cambiar `src="../../img/..."` → `src="/canastascaramelosnavidad0996201838/img/..."` en ambos HTMLs (`dark-souls-holo-card-cindermane.html` y `dark-souls-holo-card.html`)
- **JS navigateTo()**: Actualizado para usar `basePath = '/canastascaramelosnavidad0996201838'` al cambiar imagen al hacer click en botones Canastas/Caramelos
- **Verificado**: Ambas imágenes cargan HTTP 200 en `https://fabriaguirre1979.github.io/canastascaramelosnavidad0996201838/img/...`

### 25-nov-2026 (mañana) — **DIGITALPLAT ACCOUNT SETUP — IN PROGRESS**
- **Estado**: Cuenta en creación — Google OAuth falla, intentando registro con email/contraseña
- **Problema**: OAuth2 Google no autorizado / formulario no responde / loop de verificación en dashboard
- **Alternativa**: Registro manual con email + contraseña (pendiente confirmación)
- **Proveedor DNS externo**: A definir — descartado Cloudflare por momento; evaluando CloudNS o HE.net (registro con email/pass, sin OAuth)
- **Objetivo**: Registrar dominio `canastascaramelosnavidad0996201838.us.kg` y delegar a nameservers externos
- **Pasos pending**:
  1. Confirmar registro DigitalPlat (email/pass o resolver Google OAuth)
  2. Crear zona DNS en proveedor externo (CloudNS/HE.net) → obtener NS
  3. Ingresar NS exactos en formulario DigitalPlat registro
  4. Configurar A records (185.199.108-111.153) + CNAME www en DNS externo
  5. Agregar custom domain en GitHub Pages: `canastascaramelosnavidad0996201838.us.kg`
  6. Verificar HTTP/HTTPS y activar enforce HTTPS

### 25-nov-2026 (mañana) — **BLOQUEO DECISIONES CRÍTICAS**
- **Riesgo si falla merge**: Perder nombre `canastascaramelosnavidad0996201838.us.kg` → 3 días mínimos en aprobación + posible pérdida definitiva
- **Mitigación**: Documentar cada campo antes submit; verificar zona DNS activa antes registro; submit una sola vez tras confirmación completa
- **Arquitectura objetivo**:
  ```
  DigitalPlat Registry (delega NS)
      │
      ▼
  DNS Externo (CloudNS/HE.net) — A records + CNAME
      │
      ▼
  GitHub Pages (https://fabriaguirre1979.github.io/canastascaramelosnavidad0996201838/)
  ```
- **Decision**: Evitar Cloudflare por momento; usar CloudNS o HE.net por registro simple email/pass

### 25-nov-2026 (tarde) — **CAMBIO DE ESTRATEGIA: DNSHE-FreeDomains (.bot.cd)**
- **DigitalPlat descartado**: registro .us.kg suspendido, no permite continuar
- **Opción elegida**: DNSHE-FreeDomains (https://dnshe.com) — dominio gratis `.bot.cd` (también .de5.net, .us.ci, .cc.cd)
- **Dominio objetivo**: `canastascaramelosnavidad0996201838.bot.cd` (coincide exacto con repo GitHub Pages)
- **Ventajas**: gratis forever, sin tarjeta, DNS completo (A, CNAME, MX, TXT, NS, SRV, CAA), Anycast, API, 100k+ usuarios
- **Estado**: Cuenta DNSHE en creación — código de verificación email expiró, **pendiente reintento registro mañana**

### 25-nov-2026 (evening) — **DOMINIO CUSTOM .DE5.NET REGISTRADO Y CONFIGURADO**
- **Dominio registrado**: `canastascaramelosnavidad0996201838.de5.net` en DNSHE-FreeDomains ✅
- **CNAMEs configurados**: `@` y `www` → `fabriaguirre1979.github.io` en zona DNSHE ✅
- **DNS propagado globalmente**: verificado con `dig +short` desde resolvers públicos ✅
- **GitHub Pages workflow triggered**: deployment exitoso Build + Deploy ✅
- **Certificado SSL en proceso**: `state: "new", "TLS certificate is being provisioned"` ⏳ (tardará hasta 15 min) ✅
- **Sitio default LIVE**: `https://fabriaguirre1979.github.io/canastascaramelosnavidad0996201838/` HTTP 200 ✅
- **Pantalla blanca en HTTP** (`http://canastascaramelosnavidad0996201838.de5.net`): esperada mientras se genera el certificado SSL; el sitio funcionará plenamente sobre **HTTPS** después de la emisión del certificado ✅
- **Próximo hito**: Certificado SSL listo (~15 min) → `https_enforced: true` → dominio custom totalmente funcional con HTTPS

### 26-nov-2026 (mañana) — **FIX: PANTALLA EN BLANCO EN DOMINIO CUSTOM (.de5.net)**
- **Problema**: `https://canastascaramelosnavidad0996201838.de5.net/` mostraba pantalla blanca (sin contenido). El HTML se servía pero los assets (JS, imágenes) daban 404.
- **Causa raíz**: `vite.config.ts` tenía `base: '/canastascaramelosnavidad0996201838/'` — correcto para la URL de GitHub Pages (`/repo/`) pero **incorrecto para dominio custom** que sirve desde root (`/`). Los assets se generaban en `/canastascaramelosnavidad0996201838/assets/...` pero el dominio custom los buscaba en `/assets/...`.
- **Solución aplicada**:
  1. **vite.config.ts**: `base: './'` (rutas relativas) — funciona en ambas URLs.
  2. **Landing pages HTML**: Rutas de imágenes cambiadas a absolutas desde root `/img/...` (en lugar de `../../img/...` o `/canastascaramelosnavidad0996201838/img/...`).
  3. **Favicon**: Añadido `public/favicon.svg` (emoji 🎁) para evitar 404.
- **Verificado**: Todos los assets cargan HTTP 200 en **ambas URLs**:
  - Custom domain: `https://canastascaramelosnavidad0996201838.de5.net/` ✅
  - GitHub Pages: `https://fabriaguirre1979.github.io/canastascaramelosnavidad0996201838/` ✅
- **Commits**: `49d74f8` (vite base), `a98faa7` (favicon + landing pages), `94bf361` (absolute img paths)

### 26-nov-2026 (mañana) — **ADICIÓN: NÚMERO DE CONTACTO 0996201838 COMO LEtrero PRINCIPAL**
- **Imagen**: `/img/0996201838.png` (776×1024 PNG) añadida como título/banner principal sobre la tarjeta central en ambas variantes de landing pages.
- **Ubicación**: Centrada horizontalmente entre los botones superiores (Canastas/Caramelos) y la tarjeta principal.
- **Implementación en ambos HTMLs** (`dark-souls-holo-card.html` y `dark-souls-holo-card-cindermane.html`):
  - Contenedor `.title-wrapper` en `position: fixed; top: 50px; left: 50%; transform: translateX(-50%); z-index: 10`
  - Imagen `.title-image` con `max-width: 100vw; max-height: 50vh` — responsive, mantiene aspect ratio
  - Efecto visual: doble `drop-shadow` dorado/bronce (`rgba(212,175,55,0.5)` + `rgba(139,90,43,0.3)`) para presencia premium
  - Animación de entrada: `title-fade-in` 1.2s ease-out (fade + slide-up desde -20px)
- **Ajuste de armonía visual**: Tarjeta bajada con `padding-top: 160px` en `.basket-wrapper` para crear separación clara entre la línea inferior del número y el marco superior de la tarjeta — individualidad visual lograda sin solapamiento.
- **Commits**: `3ba2ee2` (phone banner + LOG), `0bb8ab8` (contact info replacement), `04d53d7` (img folder to public/img)

### 26-nov-2026 (mediodía) — **ACTUALIZACIÓN: INFO DE CONTACTO EN FOOTER + FIX IMÁGENES EN PRODUCCIÓN**
- **Footer inferior izquierdo**: Reemplazado "Arrastrar para rotar • Rueda para acercar" por información bancaria profesional:
  ```
  TAMAYO AGUIRRE MARÍA PEPITA ELSIRA
  Bco Pichincha • Ahorros #3280457900
  CI 1704967775
  ```
- **Estética**: `font-size: 11px`, `line-height: 1.8`, `text-align: left` — elegante y legible.
- **Fix crítico imágenes**: Carpeta `img/` movida a `public/img/` para que Vite la incluya en el build de GitHub Pages (antes estaba en raíz y no se desplegaba).
- **Verificado**: Imágenes ahora accesibles en ambas URLs tras deploy.
- **Commits**: `0bb8ab8` (contact info), `04d53d7` (public/img fix)

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