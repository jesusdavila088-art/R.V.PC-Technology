/* ============================================================
   R.V.PC TECHNOLOGY — 2026
   Catálogo, carrusel, raíl, filtros y visor de producto.
   Vanilla JS. Sin dependencias.
   ============================================================ */

(() => {
  "use strict";

  /* ---------- Configuración ---------- */
  const SITE = {
    phone: "584141766272",
    phoneDisplay: "+58 414-1766272",
    city: "San Cristóbal, Táchira",
    hours: "Lun – Sáb · 8:30 AM – 6:00 PM",
    warranty: "90 días",
    currency: "USD"
  };

  const HERO_INTERVAL = 7000;
  const WHATSAPP = (text) =>
    `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;

  /* ---------- Iconos ---------- */
  const ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4 9 9 0 0 1-3.8-.9L3 21l1.9-5.3a8.4 8.4 0 1 1 16.1-4.2Z"/>',
    whatsapp: '<path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 21l1.9-4.8a8.5 8.5 0 1 1 15.6-4.6Z"/><path d="M8.7 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.6c.1.3 0 .5-.1.7l-.5.6c-.2.2-.2.4 0 .7.5.8 1.2 1.4 2 1.8.3.1.5.1.7-.1l.5-.6c.2-.2.4-.3.7-.2l1.6.7c.3.2.4.4.4.6v.6c0 .3-.1.6-.5.8-.5.3-1.2.4-1.9.2-1.1-.3-2.2-.9-3.2-1.9-1-1-1.6-2.1-1.9-3.2-.2-.7-.1-1.4.2-1.9Z"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
    arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    check: '<path d="m4 12 5 5L20 6"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.4 3.2 8.2 7.5 9.5 4.3-1.3 7.5-5.1 7.5-9.5V6L12 3Z"/><path d="m8.8 11.8 2.2 2.2 4.2-4.4"/>',
    truck: '<path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/>',
    store: '<path d="M4 10v9h16v-9M3 10l2-6h14l2 6"/><path d="M3 10a3 3 0 0 0 5 2 3 3 0 0 0 5 0 3 3 0 0 0 5 0 3 3 0 0 0 3-2"/><path d="M9 19v-5h6v5"/>',
    cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/><rect x="10" y="10" width="4" height="4" rx="1"/>',
    laptop: '<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M2 19h20"/>',
    gpu: '<rect x="2" y="7" width="20" height="10" rx="2"/><circle cx="9" cy="12" r="2.5"/><path d="M14 9h5M14 12h5M14 15h3M6 17v3M17 17v3"/>',
    ram: '<rect x="2" y="7" width="20" height="10" rx="1.5"/><path d="M6 17v2M10 17v2M14 17v2M18 17v2M6 10h3v4H6zM12 10h3v4h-3zM18 10h1v4h-1z"/>',
    sparkles: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/>',
    share: '<circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="m8.4 10.8 7.2-4.2M8.4 13.2l7.2 4.2"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    zoomIn: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6M11 8v6M8 11h6"/>',
    zoomOut: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6M8 11h6"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
    pin: '<path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    package: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
    filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".8" fill="currentColor" stroke="none"/>'
  };

  const icon = (name, cls = "") =>
    `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  /* ---------- Categorías ---------- */
  const CATEGORIES = [
    { id: "todos", label: "Todos", short: "Todo", image: "imagenes/vector6.jpg" },
    { id: "cpu", label: "Escritorios", short: "Desktop", image: "imagenes/HPPRODESK1.jpg" },
    { id: "laptop-intel", label: "Laptops Intel", short: "Intel", image: "imagenes/vector2.jpg" },
    { id: "laptop-ryzen", label: "Laptops AMD", short: "AMD", image: "imagenes/lenovot495.jpg" },
    { id: "gpu", label: "Tarjetas de video", short: "GPU", image: "imagenes/rx5501.jpg" },
    { id: "ram", label: "Memorias RAM", short: "RAM", image: "imagenes/ramddr34gb1.jpg" },
    { id: "combo", label: "Combos Gamer", short: "Combo", image: "imagenes/xeonx99.jpg" }
  ];

  /* ---------- Inventario ---------- */
  const INVENTORY = [
    {
      id: 1,
      slug: "hp-z230-sff",
      cat: "cpu",
      catLabel: "Escritorio",
      brand: "HP",
      model: "Z230 SFF",
      condition: "Certificado Grado A+",
      warranty: "90 días de garantía",
      badge: "Gama entrada",
      ideal: "Oficinas, puntos de venta y administración.",
      price: 210,
      specs: [
        ["Procesador", "Intel Xeon E3-1240 v3"],
        ["Memoria", "16 GB DDR3"],
        ["Almacenamiento", "500 GB HDD"],
        ["Gráfica", "NVIDIA NVS 310"],
        ["Formato", "SFF"]
      ],
      images: ["imagenes/hpz230.jpg", "imagenes/hpz230 1.jpg"],
      featured: false
    },
    {
      id: 2,
      slug: "qiyida-xeon-x99",
      cat: "cpu",
      catLabel: "Escritorio",
      brand: "Qiyida",
      model: "Xeon X99",
      condition: "Certificado Grado A+",
      warranty: "90 días de garantía",
      badge: "Alto rendimiento",
      ideal: "Gaming de entrada, renderizado y multitarea pesada.",
      price: 420,
      specs: [
        ["Procesador", "Intel Xeon E5-2670 v3"],
        ["Memoria", "16 GB DDR4"],
        ["Almacenamiento", "500 GB SSD"],
        ["Gráfica", "AMD RX 580 8 GB"],
        ["Fuente", "Corsair CX650M Semi Modular"]
      ],
      images: ["imagenes/casegenerico.jpg"],
      featured: true
    },
    {
      id: 3,
      slug: "lenovo-t495",
      cat: "laptop-ryzen",
      catLabel: "Laptop AMD",
      brand: "Lenovo",
      model: "ThinkPad T495",
      condition: "Certificado Grado A+",
      warranty: "90 días de garantía",
      badge: "Empresarial",
      ideal: "Ingeniería, análisis de datos y contabilidad.",
      price: 330,
      specs: [
        ["Procesador", "AMD Ryzen 5 3500U"],
        ["Memoria", "16 GB DDR4"],
        ["Almacenamiento", "256 GB NVMe"],
        ["Pantalla", '14" FHD'],
        ["Gráfica", "Radeon Vega 8"]
      ],
      images: [
        "imagenes/lenovot495.jpg",
        "imagenes/lenovot495 2.jpg",
        "imagenes/lenovot495 3.jpg",
        "imagenes/lenovot495 4.jpg"
      ],
      featured: false
    },
    {
      id: 4,
      slug: "dell-inspiron-15-3535",
      cat: "laptop-ryzen",
      catLabel: "Laptop AMD",
      brand: "Dell",
      model: "Inspiron 15 3535 Táctil",
      condition: "Certificado Grado A+",
      warranty: "90 días de garantía",
      badge: "Táctil",
      ideal: "Diseño interactivo, estudio y multitarea intensiva.",
      price: 490,
      specs: [
        ["Procesador", "AMD Ryzen 7 7730U"],
        ["Memoria", "16 GB DDR4"],
        ["Almacenamiento", "512 GB NVMe"],
        ["Pantalla", '15.6" FHD táctil'],
        ["Gráfica", "Radeon Graphics"]
      ],
      images: [
        "imagenes/DELL Inspiron 15 3535 Táctil 1.jpg",
        "imagenes/DELL Inspiron 15 3535 Táctil 2.jpg",
        "imagenes/DELL Inspiron 15 3535 Táctil 3.jpg",
        "imagenes/DELL Inspiron 15 3535 Táctil 4.jpg",
        "imagenes/DELL Inspiron 15 3535 Táctil 5.jpg",
        "imagenes/DELL Inspiron 15 3535 Táctil 6.jpg"
      ],
      featured: true
    },
    {
      id: 5,
      slug: "hp-elitebook-845-g8",
      cat: "laptop-ryzen",
      catLabel: "Laptop AMD",
      brand: "HP",
      model: "EliteBook 845 G8",
      condition: "Certificado Grado A+",
      warranty: "90 días de garantía",
      badge: "Corporativa",
      ideal: "Trabajo corporativo y productividad avanzada.",
      price: 400,
      specs: [
        ["Procesador", "AMD Ryzen 5 5650U"],
        ["Memoria", "16 GB DDR4"],
        ["Almacenamiento", "256 GB NVMe"],
        ["Pantalla", '14" FHD'],
        ["Gráfica", "Radeon Vega 7"]
      ],
      images: [
        "imagenes/HP EliteBook 845 G8 1.jpg",
        "imagenes/HP EliteBook 845 G8 2.jpg",
        "imagenes/HP EliteBook 845 G8 3.jpg",
        "imagenes/HP EliteBook 845 G8 4.jpg"
      ],
      featured: true
    },
    {
      id: 6,
      slug: "amd-rx-550-2gb",
      cat: "gpu",
      catLabel: "Tarjeta de video",
      brand: "AMD Radeon",
      model: "RX 550 2GB GDDR5",
      condition: "Certificado Grado A+",
      warranty: "90 días de garantía",
      badge: "Low profile",
      ideal: "Actualización de PCs de oficina y eSports ligeros.",
      price: 60,
      specs: [
        ["Memoria", "2 GB GDDR5 · 128 bits"],
        ["Interfaz", "PCIe 3.0 x8"],
        ["Formato", "Low Profile"],
        ["Salidas", "HDMI / DisplayPort"],
        ["Consumo", "50 W"]
      ],
      images: ["imagenes/rx5501.jpg", "imagenes/rx5502.jpg", "imagenes/rx5503.jpg"],
      featured: false
    },
    {
      id: 7,
      slug: "sk-hynix-ddr3-4gb",
      cat: "ram",
      catLabel: "Memoria RAM",
      brand: "SK hynix",
      model: "DDR3 4GB 1600MHz",
      condition: "Certificado Grado A+",
      warranty: "90 días de garantía",
      badge: "Upgrade",
      ideal: "Mejorar multitarea y acelerar el sistema operativo.",
      price: 15,
      specs: [
        ["Tipo", "DDR3 DIMM (escritorio)"],
        ["Capacidad", "4 GB"],
        ["Frecuencia", "1600 MHz"],
        ["Formato", "Módulo individual"]
      ],
      images: ["imagenes/ramddr34gb1.jpg", "imagenes/ramddr34gb2.jpg", "imagenes/ramddr34gb3.jpg"],
      featured: false
    },
    {
      id: 8,
      slug: "sk-hynix-ddr3-8gb",
      cat: "ram",
      catLabel: "Memoria RAM",
      brand: "SK hynix",
      model: "DDR3 8GB 1600MHz",
      condition: "Certificado Grado A+",
      warranty: "90 días de garantía",
      badge: "Upgrade",
      ideal: "Mejorar multitarea y acelerar el sistema operativo.",
      price: 30,
      specs: [
        ["Tipo", "DDR3 DIMM (escritorio)"],
        ["Capacidad", "8 GB"],
        ["Frecuencia", "1600 MHz"],
        ["Formato", "Módulo individual"]
      ],
      images: ["imagenes/ramddr38gb1.jpg"],
      featured: false
    },
    {
      id: 9,
      slug: "combo-xeon-x99-d4",
      cat: "combo",
      catLabel: "Combo Gamer",
      brand: "Qiyida",
      model: "Combo Xeon X99 D4",
      condition: "Certificado Grado A+",
      warranty: "90 días de garantía",
      badge: "Kit de ensamble",
      ideal: "Base completa para gaming de entrada y renderizado.",
      price: 175,
      specs: [
        ["Procesador", "Intel Xeon E5-2670 v3"],
        ["Memoria", "16 GB DDR4"],
        ["Placa", "X99 con puerto M.2 NVMe"],
        ["Refrigeración", "Fan Cooler RGB 2011"],
        ["Formato", "ATX"]
      ],
      images: ["imagenes/xeonx99.jpg"],
      featured: false
    },
    {
      id: 10,
      slug: "hp-mini-prodesk-g3",
      cat: "cpu",
      catLabel: "Escritorio",
      brand: "HP",
      model: "Mini ProDesk G3",
      condition: "Certificado Grado A+",
      warranty: "90 días de garantía",
      badge: "Mini PC",
      ideal: "Punto de venta, recepción y oficina compacta.",
      price: 190,
      specs: [
        ["Procesador", "Intel Core i5-6500T"],
        ["Memoria", "8 GB DDR4"],
        ["Almacenamiento", "256 GB SSD"],
        ["Gráfica", "Intel HD 530"],
        ["Formato", "Mini PC"]
      ],
      images: [
        "imagenes/HPPRODESK1.jpg",
        "imagenes/HPPRODESK2.jpg",
        "imagenes/HPPRODESK3.jpg",
        "imagenes/HPPRODESK4.jpg"
      ],
      featured: false
    },
    {
      id: 11,
      slug: "lenovo-m715q-mini",
      cat: "cpu",
      catLabel: "Escritorio",
      brand: "Lenovo",
      model: "M715Q Mini",
      condition: "Certificado Grado A+",
      warranty: "90 días de garantía",
      badge: "Mini PC",
      ideal: "Escritorio compacto para oficina y estudio.",
      price: 220,
      specs: [
        ["Procesador", "AMD Ryzen 5 2400GE"],
        ["Memoria", "8 GB DDR4"],
        ["Almacenamiento", "256 GB SSD"],
        ["Gráfica", "Radeon Vega 11"],
        ["Formato", "Mini PC"]
      ],
      images: [
        "imagenes/lenovotinkpad0.jpg",
        "imagenes/lenovotinkpad2.jpg",
        "imagenes/lenovotinkpad3.jpg",
        "imagenes/lenovotinkpad4.jpg",
        "imagenes/lenovotinkpad5.jpg"
      ],
      featured: false
    },
    {
      id: 12,
      slug: "msi-vector-16hx-ai",
      cat: "laptop-intel",
      catLabel: "Laptop Intel",
      brand: "MSI",
      model: "Vector 16 HX AI",
      condition: "Nuevo · Sellado",
      warranty: "Garantía de tienda",
      badge: "Gama alta",
      ideal: "Gaming, ingeniería, edición y alto rendimiento.",
      price: 2800,
      specs: [
        ["Procesador", "Intel Core Ultra 9 275HX"],
        ["Memoria", "16 GB DDR5"],
        ["Almacenamiento", "1 TB SSD NVMe"],
        ["Pantalla", '16" QHD+ IPS 240 Hz'],
        ["Gráfica", "NVIDIA RTX 5080 16 GB GDDR7"]
      ],
      images: [
        "imagenes/vector1.jpg",
        "imagenes/vector2.jpg",
        "imagenes/vector3.jpg",
        "imagenes/vector4.jpg",
        "imagenes/vector5.jpg"
      ],
      featured: true
    }
  ];

  const HERO = [
    {
      slug: "msi-vector-16hx-ai",
      kicker: "Nuevo ingreso · Gama alta",
      title: "Potencia sin concesiones",
      desc: "MSI Vector 16 HX AI. Core Ultra 9, RTX 5080 y panel QHD+ de 240 Hz para trabajar y jugar al máximo nivel.",
      specs: ["Ultra 9 275HX", "RTX 5080", "240 Hz QHD+"],
      image: "imagenes/vector1.jpg"
    },
    {
      slug: "hp-elitebook-845-g8",
      kicker: "Corporativo · Grado A+",
      title: "Movilidad que rinde",
      desc: "HP EliteBook 845 G8. Chasis empresarial, Ryzen 5 5650U y 16 GB de RAM en un formato de 14 pulgadas.",
      specs: ["Ryzen 5 5650U", "16 GB DDR4", '14" FHD'],
      image: "imagenes/HP EliteBook 845 G8 1.jpg"
    },
    {
      slug: "qiyida-xeon-x99",
      kicker: "Ensambles · Alto rendimiento",
      title: "Construido para exigir",
      desc: "Qiyida Xeon X99. Xeon E5-2670 v3, RX 580 y 500 GB SSD para gaming, render y multitarea pesada.",
      specs: ["Xeon E5-2670 v3", "RX 580 8 GB", "500 GB SSD"],
      image: "imagenes/casegenerico.jpg"
    },
    {
      slug: "dell-inspiron-15-3535",
      kicker: "Creatividad · Táctil",
      title: "Tu estudio, en movimiento",
      desc: "Dell Inspiron 15 3535. Ryzen 7 7730U, 16 GB y pantalla táctil FHD para diseño y productividad.",
      specs: ["Ryzen 7 7730U", "16 GB DDR4", '15.6" Táctil'],
      image: "imagenes/DELL Inspiron 15 3535 Táctil 1.jpg"
    }
  ];

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const esc = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));

  const money = (value) =>
    new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);

  const priceLabel = (product) => `$${money(product.price)}`;

  const productLabel = (product) => `${product.brand} ${product.model}`;

  const bySlug = (slug) => INVENTORY.find((product) => product.slug === slug);

  const waLink = (product) =>
    WHATSAPP(
      `Hola R.V.PC Technology, me interesa el ${productLabel(product)} (${priceLabel(product)} ${SITE.currency}). ¿Está disponible?`
    );

  const categoryLabel = (id) =>
    (CATEGORIES.find((category) => category.id === id) || {}).label || "Equipos";

  const countByCategory = (id) =>
    id === "todos"
      ? INVENTORY.length
      : INVENTORY.filter((product) => product.cat === id).length;

  const plural = (count) => (count === 1 ? "" : "s");

  const currentUrlFor = (product) => {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";
    url.searchParams.set("equipo", product.slug);
    return url.toString();
  };

  /* ---------- Toast ---------- */
  let toastTimer = null;

  function toast(message) {
    const node = $("#toast");
    if (!node) return;
    node.textContent = message;
    node.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => node.classList.remove("is-visible"), 3200);
  }

  async function copyText(text, message) {
    try {
      await navigator.clipboard.writeText(text);
      toast(message);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
        toast(message);
      } catch {
        toast("No se pudo copiar. Intenta manualmente.");
      }
      area.remove();
    }
  }

  /* ---------- Tarjetas ---------- */
  function productCard(product, options = {}) {
    const label = productLabel(product);
    const [main, hover] = product.images;
    const specs = product.specs
      .slice(0, options.specs || 3)
      .map(([key, value]) => `<li><span>${esc(key)}</span>${esc(value)}</li>`)
      .join("");

    return `
      <article class="product-card" data-cat="${product.cat}" data-reveal>
        <div class="product-card__media">
          <a class="product-card__open" href="?equipo=${product.slug}" data-open="${product.slug}" aria-label="Ver ficha de ${esc(label)}">
            <img class="product-card__img product-card__img--main" src="${product.images[0]}" alt="${esc(label)}" loading="lazy" decoding="async" width="640" height="480">
            ${hover ? `<img class="product-card__img product-card__img--hover" src="${hover}" alt="" aria-hidden="true" loading="lazy" decoding="async" width="640" height="480">` : ""}
            <span class="product-card__overlay">${icon("zoomIn", "icon--sm")} Ver ficha</span>
          </a>
          <div class="product-card__badges">
            <span class="badge badge--grade">${icon("shield", "icon--sm")} ${esc(product.condition)}</span>
            ${product.badge ? `<span class="badge badge--featured">${esc(product.badge)}</span>` : ""}
          </div>
        </div>
        <div class="product-card__body">
          <span class="product-card__brand">${esc(product.brand)} · ${esc(product.catLabel)}</span>
          <h3 class="product-card__title">
            <button type="button" data-open="${product.slug}">${esc(product.model)}</button>
          </h3>
          <p class="product-card__ideal">${esc(product.ideal)}</p>
          <ul class="product-card__specs">${specs}</ul>
          <span class="product-card__condition">${icon("check", "icon--sm")} ${esc(product.warranty)}</span>
          <div class="product-card__footer">
            <span class="product-card__price">${priceLabel(product)} <small>${SITE.currency}</small></span>
            <div class="product-card__actions">
              <button class="icon-btn" type="button" data-share="${product.slug}" aria-label="Compartir ${esc(label)}" title="Compartir">${icon("share", "icon--sm")}</button>
              <a class="btn btn--whatsapp btn--sm" href="${waLink(product)}" target="_blank" rel="noopener noreferrer">${icon("whatsapp", "icon--sm")} Lo quiero</a>
            </div>
          </div>
        </div>
      </article>`;
  }

  /* ---------- Hero ---------- */
  const heroState = { index: 0, timer: null, playing: true };

  function renderHero() {
    const slides = $("#heroSlides");
    const tabs = $("#heroTabs");
    if (!slides || !tabs) return;

    slides.innerHTML = HERO.map((item, index) => {
      const product = bySlug(item.slug);
      if (!product) return "";
      return `
        <article class="hero-slide ${index === 0 ? "is-active" : ""}" data-slide="${index}" aria-hidden="${index !== 0}">
          <img class="hero-slide__img" src="${item.image}" alt="${esc(productLabel(product))}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
          <div class="hero-slide__shade"></div>
          <div class="container hero-slide__content">
            <span class="hero-slide__kicker">${icon("sparkles", "icon--sm")} ${esc(item.kicker)}</span>
            <h2 class="hero-slide__title">${esc(item.title)}</h2>
            <p class="hero-slide__desc">${esc(item.desc)}</p>
            <ul class="hero-slide__specs">${item.specs.map((spec) => `<li>${esc(spec)}</li>`).join("")}</ul>
            <div class="hero-slide__actions">
              <span class="hero-slide__price">${priceLabel(product)} <small>${SITE.currency}</small></span>
              <button class="btn btn--primary" type="button" data-open="${product.slug}">Ver equipo ${icon("arrowUpRight", "icon--sm")}</button>
              <a class="btn btn--whatsapp" href="${waLink(product)}" target="_blank" rel="noopener noreferrer">${icon("whatsapp", "icon--sm")} Consultar</a>
            </div>
          </div>
        </article>`;
    }).join("");

    tabs.innerHTML = HERO.map((item, index) => {
      const product = bySlug(item.slug);
      return `
        <button class="hero__tab ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0}" data-hero-tab="${index}">
          <span>0${index + 1}</span>
          <strong>${esc(product ? product.model : item.title)}</strong>
        </button>`;
    }).join("");
  }

  function setHero(index, restart = true) {
    const slides = $$(".hero-slide");
    const tabs = $$(".hero__tab");
    if (!slides.length) return;

    heroState.index = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      const active = i === heroState.index;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });

    tabs.forEach((tab, i) => {
      const active = i === heroState.index;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    if (restart) restartHeroProgress();
  }

  function restartHeroProgress() {
    const bar = $("#heroProgress span");
    if (!bar) return;
    bar.style.animation = "none";
    void bar.offsetWidth;
    bar.style.animation = "";
  }

  function startHeroTimer() {
    stopHeroTimer();
    if (!heroState.playing) return;
    heroState.timer = window.setInterval(() => {
      setHero(heroState.index + 1);
    }, HERO_INTERVAL);
  }

  function stopHeroTimer() {
    window.clearInterval(heroState.timer);
    heroState.timer = null;
  }

  function initHero() {
    renderHero();
    const hero = $("#hero");
    if (!hero) return;

    startHeroTimer();

    hero.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-hero-tab]");
      if (tab) {
        setHero(Number(tab.dataset.heroTab));
        startHeroTimer();
        return;
      }
      const action = event.target.closest("[data-hero-prev], [data-hero-next]");
      if (action) {
        setHero(heroState.index + (action.dataset.heroNext !== undefined ? 1 : -1));
        startHeroTimer();
      }
    });

    const tabs = $("#heroTabs");
    if (tabs) {
      tabs.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        const offset = event.key === "ArrowRight" ? 1 : -1;
        const total = $$(".hero__tab").length;
        const next = (heroState.index + offset + total) % total;
        setHero(next);
        startHeroTimer();
        const target = $$(".hero__tab")[next];
        if (target) target.focus();
      });
    }

    hero.addEventListener("mouseenter", stopHeroTimer);
    hero.addEventListener("mouseleave", () => {
      if (heroState.playing) startHeroTimer();
    });
    hero.addEventListener("focusin", stopHeroTimer);
    hero.addEventListener("focusout", (event) => {
      if (!hero.contains(event.relatedTarget) && heroState.playing) startHeroTimer();
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopHeroTimer();
      } else if (heroState.playing) {
        startHeroTimer();
      }
    });

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      heroState.playing = false;
      stopHeroTimer();
      hero.classList.remove("is-playing");
    }
  }

  /* ---------- Categorías ---------- */
  function renderCategories() {
    const grid = $("#categoriesGrid");
    if (!grid) return;

    grid.innerHTML = CATEGORIES.filter((category) => category.id !== "todos").map((category) => {
      const count = countByCategory(category.id);
      return `
        <button class="category-tile" type="button" data-cat-link="${category.id}" data-reveal>
          <img class="category-tile__img" src="${category.image}" alt="" aria-hidden="true" loading="lazy" decoding="async">
          <span class="category-tile__shade"></span>
          <span class="category-tile__count">${count} equipo${plural(count)}</span>
          <span class="category-tile__content">
            <span class="category-tile__title">${esc(category.label)}<small>${esc(category.short)}</small></span>
            <span class="category-tile__arrow">${icon("arrowUpRight", "icon--sm")}</span>
          </span>
        </button>`;
    }).join("");
  }

  /* ---------- Raíl de destacados ---------- */
  function renderFeatured() {
    const track = $("#featuredTrack");
    if (!track) return;

    track.innerHTML = INVENTORY.filter((product) => product.featured)
      .map((product) => `<div class="rail__item">${productCard(product, { specs: 2 })}</div>`)
      .join("");
  }

  /* ---------- Catálogo ---------- */
  const state = { cat: "todos", query: "", sort: "featured" };

  function renderFilters() {
    const pills = $("#filterPills");
    if (!pills) return;

    pills.innerHTML = CATEGORIES.map((category) => {
      const count = countByCategory(category.id);
      return `
        <button class="filter-pill ${state.cat === category.id ? "is-active" : ""}" type="button" data-filter="${category.id}" aria-pressed="${state.cat === category.id}">
          ${esc(category.label)} <span>${count}</span>
        </button>`;
    }).join("");
  }

  function matchesQuery(product, query) {
    if (!query) return true;
    const haystack = [
      product.brand,
      product.model,
      product.catLabel,
      product.ideal,
      product.badge,
      product.condition,
      ...product.specs.flat()
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  }

  function visibleProducts() {
    const query = state.query.trim().toLowerCase();
    const list = INVENTORY.filter(
      (product) =>
        (state.cat === "todos" || product.cat === state.cat) &&
        matchesQuery(product, query)
    );

    const sorters = {
      featured: (a, b) => Number(b.featured) - Number(a.featured) || a.price - b.price,
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      name: (a, b) => productLabel(a).localeCompare(productLabel(b), "es")
    };

    return list.sort(sorters[state.sort] || sorters.featured);
  }

  function renderCatalog() {
    const grid = $("#productGrid");
    const empty = $("#emptyState");
    const count = $("#resultsCount");
    if (!grid) return;

    const list = visibleProducts();
    grid.innerHTML = list.map((product) => productCard(product)).join("");

    if (empty) empty.hidden = list.length !== 0;
    if (count) {
      count.textContent = `${list.length} equipo${plural(list.length)} disponible${plural(list.length)}`;
    }

    $$("[data-filter]").forEach((pill) => {
      const active = pill.dataset.filter === state.cat;
      pill.classList.toggle("is-active", active);
      pill.setAttribute("aria-pressed", String(active));
    });

    observeReveals(grid);
  }

  function setCategory(category) {
    state.cat = category;
    renderCatalog();
  }

  function setQuery(query) {
    state.query = query;
    $$("[data-search]").forEach((input) => {
      if (input.value !== query) input.value = query;
    });
    const clear = $("#searchClear");
    if (clear) clear.hidden = !query;
    renderCatalog();
  }

  function resetFilters() {
    state.cat = "todos";
    state.query = "";
    state.sort = "featured";
    $$("[data-search]").forEach((input) => (input.value = ""));
    const clear = $("#searchClear");
    if (clear) clear.hidden = true;
    const sort = $("#sortSelect");
    if (sort) sort.value = "featured";
    renderCatalog();
  }

  function initCatalog() {
    renderFilters();
    renderCatalog();

    const pills = $("#filterPills");
    if (pills) {
      pills.addEventListener("click", (event) => {
        const pill = event.target.closest("[data-filter]");
        if (pill) setCategory(pill.dataset.filter);
      });
    }

    let searchTimer = null;
    $$("[data-search]").forEach((input) => {
      input.addEventListener("input", () => {
        window.clearTimeout(searchTimer);
        const value = input.value;
        searchTimer = window.setTimeout(() => setQuery(value), 120);
      });
    });

    const sort = $("#sortSelect");
    if (sort) {
      sort.addEventListener("change", () => {
        state.sort = sort.value;
        renderCatalog();
      });
    }

    const clear = $("#searchClear");
    if (clear) {
      clear.addEventListener("click", () => {
        setQuery("");
        const input = $("#searchInput");
        if (input) input.focus();
      });
    }

    const reset = $("#emptyReset");
    if (reset) reset.addEventListener("click", resetFilters);
  }

  /* ---------- Compartir ---------- */
  async function shareProduct(product) {
    const url = currentUrlFor(product);
    const data = {
      title: `${productLabel(product)} · R.V.PC Technology`,
      text: `Mira este ${productLabel(product)} en R.V.PC Technology por ${priceLabel(product)} ${SITE.currency}.`,
      url
    };

    if (navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch (error) {
        if (error && error.name === "AbortError") return;
      }
    }
    copyText(url, "Enlace del producto copiado.");
  }

  /* ---------- Reveal ---------- */
  let revealObserver = null;

  function observeReveals(root = document) {
    const nodes = $$("[data-reveal]", root);
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
    }

    nodes.forEach((node, index) => {
      if (node.classList.contains("is-visible")) return;
      node.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 55}ms`);
      revealObserver.observe(node);
    });
  }

  /* ---------- Visor de producto ---------- */
  const lightboxState = {
    product: null,
    index: 0,
    zoom: 1,
    x: 0,
    y: 0,
    dragging: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
    trigger: null
  };

  const originalTitle = document.title;

  function renderLightbox(product) {
    const title = $("#lightboxTitle");
    const eyebrow = $("#lightboxEyebrow");
    const ideal = $("#lightboxIdeal");
    const specs = $("#lightboxSpecs");
    const meta = $("#lightboxMeta");
    const price = $("#lightboxPrice");
    const wa = $("#lightboxWa");
    const share = $("#lightboxShare");
    const thumbs = $("#lightboxThumbs");

    if (title) title.textContent = productLabel(product);
    if (eyebrow) eyebrow.textContent = `${product.brand} · ${product.catLabel}`;
    if (ideal) ideal.textContent = product.ideal;
    if (specs) {
      specs.innerHTML = product.specs
        .map(([key, value]) => `<li><span>${esc(key)}</span>${esc(value)}</li>`)
        .join("");
    }
    if (meta) {
      meta.innerHTML = `
        <span class="badge badge--grade">${icon("shield", "icon--sm")} ${esc(product.condition)}</span>
        <span class="badge">${icon("check", "icon--sm")} ${esc(product.warranty)}</span>`;
    }
    if (price) price.innerHTML = `${priceLabel(product)} <small>${SITE.currency}</small>`;
    if (wa) {
      wa.href = waLink(product);
      wa.innerHTML = `${icon("whatsapp", "icon--sm")} Lo quiero`;
    }
    if (share) {
      share.onclick = () => shareProduct(product);
    }
    if (thumbs) {
      thumbs.innerHTML = product.images
        .map(
          (src, index) => `
          <button class="lightbox__thumb ${index === 0 ? "is-active" : ""}" type="button" data-thumb="${index}" aria-label="Foto ${index + 1} de ${product.images.length}">
            <img src="${src}" alt="" loading="lazy" decoding="async">
          </button>`
        )
        .join("");
    }
  }

  function setLightboxImage(index) {
    const product = lightboxState.product;
    if (!product) return;

    lightboxState.index = (index + product.images.length) % product.images.length;
    const image = $("#lightboxImage");
    const counter = $("#lightboxCounter");

    if (image) {
      image.src = product.images[lightboxState.index];
      image.alt = `${productLabel(product)} — foto ${lightboxState.index + 1}`;
    }
    if (counter) {
      counter.textContent = `${lightboxState.index + 1} / ${product.images.length}`;
    }
    $$(".lightbox__thumb").forEach((thumb, i) => {
      thumb.classList.toggle("is-active", i === lightboxState.index);
    });

    resetZoom();

    const next = product.images[(lightboxState.index + 1) % product.images.length];
    if (next) {
      const preload = new Image();
      preload.src = next;
    }
  }

  function applyZoom() {
    const image = $("#lightboxImage");
    const output = $("#lightboxZoom");
    const viewport = $("#lightboxViewport");
    if (!image) return;

    image.style.transform = `translate(${lightboxState.x}px, ${lightboxState.y}px) scale(${lightboxState.zoom})`;
    if (output) output.textContent = `${Math.round(lightboxState.zoom * 100)}%`;
    if (viewport) {
      viewport.classList.toggle("is-zoomed", lightboxState.zoom > 1);
      viewport.classList.toggle("is-dragging", lightboxState.dragging);
    }
  }

  function setZoom(value) {
    const next = Math.min(4, Math.max(1, value));
    if (next === 1) {
      lightboxState.x = 0;
      lightboxState.y = 0;
    }
    lightboxState.zoom = next;
    applyZoom();
  }

  function resetZoom() {
    lightboxState.zoom = 1;
    lightboxState.x = 0;
    lightboxState.y = 0;
    applyZoom();
  }

  function openLightbox(slug, index = 0, trigger = null) {
    const product = bySlug(slug);
    if (!product) return;

    lightboxState.product = product;
    lightboxState.trigger = trigger || document.activeElement;
    renderLightbox(product);
    setLightboxImage(index);

    const lightbox = $("#lightbox");
    if (!lightbox) return;

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");

    const url = new URL(window.location.href);
    url.searchParams.set("equipo", product.slug);
    window.history.replaceState(null, "", url.toString());
    document.title = `${productLabel(product)} · R.V.PC Technology`;

    window.setTimeout(() => {
      const close = $(".lightbox__close");
      if (close) close.focus();
    }, 30);
  }

  function closeLightbox() {
    const lightbox = $("#lightbox");
    if (!lightbox || !lightbox.classList.contains("is-open")) return;

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    document.title = originalTitle;
    resetZoom();

    const url = new URL(window.location.href);
    url.searchParams.delete("equipo");
    window.history.replaceState(null, "", url.toString());

    const trigger = lightboxState.trigger;
    lightboxState.product = null;
    if (trigger && typeof trigger.focus === "function") trigger.focus();
  }

  function initLightbox() {
    const lightbox = $("#lightbox");
    if (!lightbox) return;

    lightbox.addEventListener("click", (event) => {
      if (event.target.closest("[data-lightbox-close]")) {
        closeLightbox();
        return;
      }
      if (event.target.closest("[data-lightbox-prev]")) {
        setLightboxImage(lightboxState.index - 1);
        return;
      }
      if (event.target.closest("[data-lightbox-next]")) {
        setLightboxImage(lightboxState.index + 1);
        return;
      }
      if (event.target.closest("[data-zoom-in]")) {
        setZoom(lightboxState.zoom + 0.5);
        return;
      }
      if (event.target.closest("[data-zoom-out]")) {
        setZoom(lightboxState.zoom - 0.5);
        return;
      }
      const thumb = event.target.closest("[data-thumb]");
      if (thumb) {
        setLightboxImage(Number(thumb.dataset.thumb));
      }
    });

    const viewport = $("#lightboxViewport");
    const image = $("#lightboxImage");

    if (viewport && image) {
      viewport.addEventListener("click", (event) => {
        if (event.target.closest("button")) return;
        setZoom(lightboxState.zoom > 1 ? 1 : 2);
      });

      viewport.addEventListener("pointerdown", (event) => {
        if (lightboxState.zoom <= 1) return;
        lightboxState.dragging = true;
        lightboxState.startX = event.clientX;
        lightboxState.startY = event.clientY;
        lightboxState.originX = lightboxState.x;
        lightboxState.originY = lightboxState.y;
        viewport.setPointerCapture(event.pointerId);
        applyZoom();
      });

      viewport.addEventListener("pointermove", (event) => {
        if (!lightboxState.dragging) return;
        lightboxState.x = lightboxState.originX + (event.clientX - lightboxState.startX);
        lightboxState.y = lightboxState.originY + (event.clientY - lightboxState.startY);
        applyZoom();
      });

      const endDrag = () => {
        if (!lightboxState.dragging) return;
        lightboxState.dragging = false;
        applyZoom();
      };

      viewport.addEventListener("pointerup", endDrag);
      viewport.addEventListener("pointercancel", endDrag);
      image.addEventListener("dragstart", (event) => event.preventDefault());
    }

    document.addEventListener("keydown", (event) => {
      if (!lightbox.classList.contains("is-open")) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setLightboxImage(lightboxState.index - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setLightboxImage(lightboxState.index + 1);
      } else if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setZoom(lightboxState.zoom + 0.5);
      } else if (event.key === "-") {
        event.preventDefault();
        setZoom(lightboxState.zoom - 0.5);
      } else if (event.key === "0") {
        event.preventDefault();
        resetZoom();
      } else if (event.key === "Tab") {
        const focusables = $$(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          lightbox
        ).filter((node) => !node.disabled && node.offsetParent !== null);

        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ---------- Menú móvil ---------- */
  function initMobileMenu() {
    const menu = $("#mobileMenu");
    const open = $("#menuOpen");
    const close = $("#menuClose");
    if (!menu || !open) return;

    const setOpen = (value) => {
      menu.classList.toggle("is-open", value);
      menu.setAttribute("aria-hidden", String(!value));
      open.setAttribute("aria-expanded", String(value));
      document.body.classList.toggle("is-locked", value);
      if (value) {
        window.setTimeout(() => {
          const first = $(".mobile-menu__link");
          if (first) first.focus();
        }, 60);
      } else {
        open.focus();
      }
    };

    open.addEventListener("click", () => setOpen(true));
    if (close) close.addEventListener("click", () => setOpen(false));

    menu.addEventListener("click", (event) => {
      if (event.target === menu) {
        setOpen(false);
        return;
      }
      if (event.target.closest("[data-menu-close]")) {
        setOpen(false);
        return;
      }
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("is-open")) setOpen(false);
    });
  }

  /* ---------- Header y navegación ---------- */
  function initHeader() {
    const header = $("#siteHeader");
    if (!header) return;

    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const links = $$(".main-nav a");
    const sections = links
      .map((link) => {
        const id = link.getAttribute("href");
        return id && id.startsWith("#") ? document.querySelector(id) : null;
      })
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) return;

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  /* ---------- Raíl ---------- */
  function initRail() {
    const track = $("#featuredTrack");
    if (!track) return;

    const scrollBy = (direction) => {
      const item = track.querySelector(".rail__item");
      const amount = item ? item.getBoundingClientRect().width + 18 : track.clientWidth * 0.8;
      track.scrollBy({ left: amount * direction, behavior: "smooth" });
    };

    $$("[data-rail-prev]").forEach((button) =>
      button.addEventListener("click", () => scrollBy(-1))
    );
    $$("[data-rail-next]").forEach((button) =>
      button.addEventListener("click", () => scrollBy(1))
    );
  }

  /* ---------- Atajos y copiar ---------- */
  function initShortcuts() {
    document.addEventListener("keydown", (event) => {
      const target = event.target;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable);

      if (typing) return;

      const isSearch = event.key === "/" || ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k");
      if (!isSearch) return;

      event.preventDefault();
      const input = $("#searchInput");
      if (input && input.offsetParent !== null) {
        input.focus();
        input.select();
        return;
      }
      const menuOpen = $("#menuOpen");
      if (menuOpen) menuOpen.click();
      window.setTimeout(() => {
        const mobileInput = $("#mobileSearchInput");
        if (mobileInput) mobileInput.focus();
      }, 80);
    });

    $$("[data-copy]").forEach((button) => {
      button.addEventListener("click", () =>
        copyText(button.dataset.copy, button.dataset.copyMessage || "Copiado al portapapeles.")
      );
    });
  }

  /* ---------- Enlaces profundos ---------- */
  function handleDeepLink() {
    const slug = new URLSearchParams(window.location.search).get("equipo");
    if (!slug || !bySlug(slug)) return;
    window.setTimeout(() => openLightbox(slug), 120);
  }

  /* ---------- Delegación global ---------- */
  function initDelegation() {
    document.addEventListener("click", (event) => {
      const open = event.target.closest("[data-open]");
      if (open) {
        event.preventDefault();
        openLightbox(open.dataset.open, 0, open);
        return;
      }

      const share = event.target.closest("[data-share]");
      if (share) {
        event.preventDefault();
        const product = bySlug(share.dataset.share);
        if (product) shareProduct(product);
        return;
      }

      const categoryLink = event.target.closest("[data-cat-link]");
      if (categoryLink) {
        event.preventDefault();
        setCategory(categoryLink.dataset.catLink);
        const catalog = $("#catalogo");
        if (catalog) catalog.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  /* ---------- Arranque ---------- */
  function init() {
    initHero();
    renderCategories();
    renderFeatured();
    initCatalog();
    initLightbox();
    initMobileMenu();
    initHeader();
    initRail();
    initShortcuts();
    initDelegation();
    observeReveals();
    handleDeepLink();

    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      $$("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
