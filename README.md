# R.V.PC Technology

Sitio del catálogo de **R.V.PC Technology**: hardware empresarial y gaming reacondicionado con certificación Grado A+, garantía de 90 días y atención directa por WhatsApp desde San Cristóbal, Táchira, Venezuela.

## Stack

- HTML5, CSS y JavaScript vanilla. Sin frameworks ni build.
- Tipografías: Space Grotesk, Inter y JetBrains Mono (Google Fonts).
- Iconografía SVG inline (sin librerías externas).
- Imágenes locales en `imagenes/`.

## Funciones

- Hero tipo editorial con carrusel automático, pestañas, progreso y navegación por teclado.
- Raíl horizontal de equipos destacados.
- Tiles de categorías que filtran el catálogo.
- Catálogo con filtros por categoría, búsqueda combinada, orden por precio/nombre y estado vacío.
- Visor de producto con galería, miniaturas, zoom, arrastre, navegación por teclado y enlace profundo (`?equipo=slug`).
- Menú móvil con búsqueda sincronizada.
- Compartir producto, copiar número y avisos tipo toast.
- Cuenta local con registro, inicio y cierre de sesión, perfil e historial de pedidos.
- Carrito persistente con cantidades, subtotal, checkout como invitado o con cuenta y confirmación por WhatsApp.
- Pagos coordinados por **Binance Pay (USDT)** o **efectivo USD**, sin cobro automático.
- SEO: título, descripción, Open Graph, favicon, JSON-LD y fallback `noscript`.
- Accesibilidad: skip link, foco visible, etiquetas ARIA, `prefers-reduced-motion`.

## Estructura

```
index.html      Estructura, SEO y contenido estático
styles.css      Sistema visual completo (tokens, componentes, responsive)
script.js       Inventario, renderizado, filtros, cuenta local, carrito y checkout
favicon.svg     Icono del sitio
imagenes/       Fotografías de productos y categorías
texto.zip       Respaldo de la versión anterior (no se usa en el sitio)
```

## Ejecutar en local

El sitio no necesita compilación. Puedes abrir `index.html` directamente, pero para que las rutas y los enlaces profundos funcionen igual que en producción, sirve la carpeta con cualquier servidor estático:

```powershell
python -m http.server 8765
```

Luego abre `http://localhost:8765/`.

## Editar el inventario

Todo el catálogo vive en `script.js`, en el arreglo `INVENTORY`. Cada producto usa esta forma:

```js
{
  id: 1,
  slug: "hp-z230-sff",        // identificador para el enlace ?equipo=
  cat: "cpu",                 // cpu | laptop-intel | laptop-ryzen | gpu | ram | combo
  catLabel: "Escritorio",
  brand: "HP",
  model: "Z230 SFF",
  condition: "Certificado Grado A+",
  warranty: "90 días de garantía",
  badge: "Gama entrada",
  ideal: "Texto corto de uso recomendado.",
  price: 210,                 // número, sin símbolos ni decimales
  specs: [["Procesador", "Intel Xeon E3-1240 v3"]],
  images: ["imagenes/hpz230.jpg"],
  featured: false
}
```

- Los productos con `featured: true` aparecen en el raíl de destacados.
- El hero se configura en el arreglo `HERO`, usando el `slug` de cada producto.
- El teléfono y los textos de contacto están en `SITE`, al inicio de `script.js`.
- Los enlaces de WhatsApp de `index.html` deben mantenerse alineados con `SITE.phone`.

## Cuenta demo

El sitio incluye una cuenta de demostración que se crea automáticamente en el primer arranque:

| Correo | Contraseña |
| --- | --- |
| `demo@rvpc.com` | `demo1234` |

Desde el botón de cuenta del header también puedes registrarte con cualquier correo. La sesión se restaura al recargar y dura 30 días.

> **Importante:** la autenticación es solo para demostración. Las cuentas viven en `localStorage`, las contraseñas se guardan con un hash SHA-256 sin sal y no hay servidor que valide identidades. No uses contraseñas reales ni este esquema en producción.

## Carrito y pagos

- El botón del carrito está en el header (y en el menú móvil) con contador de unidades.
- Puedes añadir equipos desde las tarjetas del catálogo o desde el visor de producto.
- El botón **Lo quiero** de WhatsApp está dentro de la ficha de cada producto; las tarjetas del catálogo quedan con las acciones de carrito y compartir.
- El carrito de invitado se guarda en el navegador y se fusiona con el carrito de tu cuenta al iniciar sesión.
- El checkout pide nombre y WhatsApp, permite **retiro en San Cristóbal** o **envío nacional** y ofrece dos métodos de pago:
  - **Binance Pay (USDT):** el ID de pago se coordina por WhatsApp; el pedido queda reservado por 24 horas.
  - **Efectivo USD:** se paga al retirar o al recibir el equipo.
- Al confirmar se genera un pedido `RV-YYMMDD-####`, se guarda en el navegador y se prepara un mensaje de WhatsApp con el resumen para enviarlo al negocio.
- No se procesa ningún pago automáticamente. La confirmación final se hace por WhatsApp al `+58 414-1766272`.

Los pedidos hechos como invitado se guardan con `userId: null` y no aparecen en el historial de una cuenta.

### Datos guardados en el navegador

| Clave | Contenido |
| --- | --- |
| `rvpc.users.v1` | Cuentas registradas (incluida la demo) |
| `rvpc.session.v1` | Sesión activa y fecha de guardado |
| `rvpc.orders.v1` | Últimos pedidos confirmados |
| `rvpc.cart.guest.v1` | Carrito sin sesión iniciada |
| `rvpc.cart.user.<id>` | Carrito de cada cuenta |

Puedes borrar estos datos desde las herramientas del navegador para reiniciar la demo.

## Verificación

Se probaron los flujos de cuenta demo, registro, validación de correo duplicado y contraseñas distintas, inicio y cierre de sesión, restauración de sesión, carrito por usuario, fusión del carrito de invitado, checkout como invitado y autenticado, retiro y envío, ambos métodos de pago, historial de pedidos y enlace de confirmación por WhatsApp.

También se revisó el layout a 390 px, 560 px, 1000 px y 1280 px sin desbordamiento horizontal, con el header, el menú móvil, el carrito y los modales adaptándose a cada ancho.

La auditoría Lighthouse de la base visual, realizada antes de añadir la cuenta y el carrito, marcó:

- Accesibilidad: **100**
- Buenas prácticas: **100**
- SEO: **100**

Conviene repetir la auditoría tras estos cambios. En la verificación también se revisaron 40 rutas de imagen, 12 productos, 6 categorías, filtros combinados, estado vacío, visor con zoom y menú móvil.
