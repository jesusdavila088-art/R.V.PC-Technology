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
    cart: '<path d="M3 4h2.2l2.3 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.5L21 7H6"/><circle cx="10" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/>',
    user: '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/>',
    eye: '<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
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
              <button class="icon-btn" type="button" data-add="${product.slug}" aria-label="Añadir ${esc(label)} al carrito" title="Añadir al carrito">${icon("cart", "icon--sm")}</button>
              <button class="icon-btn" type="button" data-share="${product.slug}" aria-label="Compartir ${esc(label)}" title="Compartir">${icon("share", "icon--sm")}</button>
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
    const add = $("#lightboxAdd");
    if (add) {
      add.onclick = () => addToCart(product.slug);
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
      syncBodyLock();
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

      const add = event.target.closest("[data-add]");
      if (add) {
        event.preventDefault();
        addToCart(add.dataset.add);
        return;
      }

      const openCartButton = event.target.closest("[data-open-cart]");
      if (openCartButton) {
        event.preventDefault();
        openCart(openCartButton);
        return;
      }

      const openAuthButton = event.target.closest("[data-open-auth]");
      if (openAuthButton) {
        event.preventDefault();
        if (account.user) openAccount(openAuthButton);
        else openAuth(openAuthButton.dataset.authTab || "login", openAuthButton);
        return;
      }

      const authClose = event.target.closest("[data-auth-close]");
      if (authClose) {
        event.preventDefault();
        closeAuth();
        return;
      }

      const accountClose = event.target.closest("[data-account-close]");
      if (accountClose) {
        event.preventDefault();
        closeAccount();
        return;
      }

      const cartClose = event.target.closest("[data-cart-close]");
      if (cartClose) {
        event.preventDefault();
        closeCart();
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

  /* ---------- Cuenta local ---------- */
  const STORE = {
    users: "rvpc.users.v1",
    session: "rvpc.session.v1",
    orders: "rvpc.orders.v1",
    guestCart: "rvpc.cart.guest.v1",
    cartPrefix: "rvpc.cart.user."
  };

  const PAYMENT_LABELS = {
    binance: "Binance Pay (USDT)",
    efectivo: "Efectivo USD"
  };

  const DELIVERY_LABELS = {
    retiro: "Retiro en San Cristóbal",
    envio: "Envío nacional"
  };

  const PAYMENT_HINTS = {
    binance:
      "Binance Pay: al confirmar te compartimos el ID de Binance Pay por WhatsApp. El pedido queda reservado por 24 horas.",
    efectivo:
      "Efectivo USD: pagas al retirar en San Cristóbal o al recibir tu equipo. Coordinamos el punto de entrega por WhatsApp."
  };

  const PAYMENT_DEFAULT_HINT =
    "Elige cómo quieres pagar. Te confirmamos los datos por WhatsApp antes de cerrar el pedido.";

  const storage = {
    get(key, fallback) {
      try {
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch {
        /* El navegador puede bloquear el almacenamiento; la sesión sigue en memoria. */
      }
    },
    remove(key) {
      try {
        window.localStorage.removeItem(key);
      } catch {
        /* Ignorar. */
      }
    }
  };

  const account = { user: null };
  let cart = [];
  let cartStep = "cart";
  const overlayStack = [];

  /* ---------- Contraseñas ---------- */
  async function hashPassword(password) {
    const text = `rvpc:${password}`;
    if (window.crypto && window.crypto.subtle) {
      try {
        const digest = await window.crypto.subtle.digest(
          "SHA-256",
          new TextEncoder().encode(text)
        );
        return Array.from(new Uint8Array(digest))
          .map((byte) => byte.toString(16).padStart(2, "0"))
          .join("");
      } catch {
        /* Fallback abajo. */
      }
    }

    let h1 = 0xdeadbeef;
    let h2 = 0x41c6ce57;
    for (let i = 0; i < text.length; i += 1) {
      const ch = text.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 =
      Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
      Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 =
      Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
      Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return `fnv-${(h2 >>> 0).toString(16)}${(h1 >>> 0).toString(16)}`;
  }

  /* ---------- Usuarios y sesión ---------- */
  function getUsers() {
    const users = storage.get(STORE.users, []);
    return Array.isArray(users) ? users : [];
  }

  function findUser(email) {
    const target = String(email || "").trim().toLowerCase();
    return getUsers().find((user) => user.email === target);
  }

  function setSession(user) {
    account.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || "",
      since: user.createdAt || new Date().toISOString()
    };
    storage.set(STORE.session, { ...account.user, savedAt: Date.now() });
  }

  function restoreSession() {
    const saved = storage.get(STORE.session, null);
    if (!saved || !saved.id) return;
    if (saved.savedAt && Date.now() - saved.savedAt > 1000 * 60 * 60 * 24 * 30) {
      storage.remove(STORE.session);
      return;
    }
    const user = getUsers().find((item) => item.id === saved.id);
    if (!user) {
      storage.remove(STORE.session);
      return;
    }
    account.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || "",
      since: user.createdAt || saved.since || ""
    };
  }

  function clearSession() {
    account.user = null;
    storage.remove(STORE.session);
  }

  let demoSeed = null;

  function ensureDemoUser() {
    if (!demoSeed) {
      demoSeed = (async () => {
        const users = getUsers();
        if (users.some((user) => user.email === "demo@rvpc.com")) return;
        users.push({
          id: "usr_demo",
          name: "Cliente Demo",
          email: "demo@rvpc.com",
          phone: "+58 414-0000000",
          passwordHash: await hashPassword("demo1234"),
          createdAt: "2026-01-15T12:00:00.000Z"
        });
        storage.set(STORE.users, users);
      })();
    }
    return demoSeed;
  }

  function initials(name) {
    return (
      String(name || "R")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part.charAt(0))
        .join("")
        .toUpperCase() || "R"
    );
  }

  function renderAuthState() {
    const button = $("#accountBtn");
    const label = $("#accountLabel");
    const mobileLabel = $("#mobileAccountLabel");

    if (label) {
      label.textContent = account.user ? account.user.name.split(/\s+/)[0] : "Ingresar";
    }
    if (button) {
      button.classList.toggle("is-authed", Boolean(account.user));
      button.setAttribute(
        "aria-label",
        account.user ? `Mi cuenta: ${account.user.name}` : "Iniciar sesión o crear cuenta"
      );
    }
    if (mobileLabel) mobileLabel.textContent = account.user ? "Mi cuenta" : "Ingresar";
  }

  /* ---------- Carrito ---------- */
  function normalizeCart(list) {
    if (!Array.isArray(list)) return [];
    return list
      .filter((item) => item && bySlug(item.slug))
      .map((item) => ({
        slug: item.slug,
        qty: Math.min(99, Math.max(1, Number(item.qty) || 1))
      }));
  }

  const cartKey = () =>
    account.user ? `${STORE.cartPrefix}${account.user.id}` : STORE.guestCart;

  const cartQuantity = () => cart.reduce((total, item) => total + item.qty, 0);

  const cartSubtotal = () =>
    cart.reduce((total, item) => {
      const product = bySlug(item.slug);
      return product ? total + product.price * item.qty : total;
    }, 0);

  function loadCart() {
    cart = normalizeCart(storage.get(cartKey(), []));
  }

  function saveCart() {
    storage.set(cartKey(), cart);
  }

  function activateUserCart() {
    const saved = normalizeCart(storage.get(cartKey(), []));
    cart.forEach((guestItem) => {
      const match = saved.find((item) => item.slug === guestItem.slug);
      if (match) match.qty = Math.min(99, match.qty + guestItem.qty);
      else saved.push({ ...guestItem });
    });
    cart = saved;
    storage.remove(STORE.guestCart);
    saveCart();
  }

  function addToCart(slug, quantity = 1) {
    const product = bySlug(slug);
    if (!product) return;

    const existing = cart.find((item) => item.slug === slug);
    if (existing) existing.qty = Math.min(99, existing.qty + quantity);
    else cart.push({ slug, qty: Math.min(99, Math.max(1, quantity)) });

    saveCart();
    renderCart();
    bumpCartButton();
    toast(`${productLabel(product)} añadido al carrito.`);
  }

  function changeQuantity(slug, delta) {
    const item = cart.find((entry) => entry.slug === slug);
    if (!item) return;
    item.qty = Math.min(99, Math.max(1, item.qty + delta));
    saveCart();
    renderCart();
  }

  function removeFromCart(slug) {
    const product = bySlug(slug);
    cart = cart.filter((item) => item.slug !== slug);
    saveCart();
    renderCart();
    if (product) toast(`${productLabel(product)} eliminado del carrito.`);
  }

  let bumpTimer = null;

  function bumpCartButton() {
    const button = $("#cartBtn");
    if (!button) return;
    button.classList.remove("is-bump");
    void button.offsetWidth;
    button.classList.add("is-bump");
    window.clearTimeout(bumpTimer);
    bumpTimer = window.setTimeout(() => button.classList.remove("is-bump"), 500);
  }

  function renderCart() {
    const items = $("#cartItems");
    if (!items) return;

    const empty = $("#cartEmpty");
    const foot = $("#cartFoot");
    const view = $("#cartView");
    const checkout = $("#checkoutForm");
    const success = $("#cartSuccess");
    const hasItems = cart.length > 0;

    if (!hasItems && cartStep === "checkout") cartStep = "cart";

    items.innerHTML = cart
      .map((item) => {
        const product = bySlug(item.slug);
        if (!product) return "";
        const label = productLabel(product);
        return `
          <li class="cart-item" data-slug="${product.slug}">
            <div class="cart-item__media">
              <img src="${product.images[0]}" alt="" loading="lazy" decoding="async">
            </div>
            <div class="cart-item__body">
              <span class="cart-item__brand">${esc(product.brand)} · ${esc(product.catLabel)}</span>
              <strong class="cart-item__title">${esc(product.model)}</strong>
              <div class="cart-item__row">
                <span class="cart-item__price">${priceLabel(product)} <small>c/u</small></span>
                <button class="cart-item__remove" type="button" data-cart-remove="${product.slug}" aria-label="Eliminar ${esc(label)} del carrito">Eliminar</button>
              </div>
              <div class="cart-item__row">
                <div class="qty" role="group" aria-label="Cantidad de ${esc(label)}">
                  <button type="button" data-cart-qty="-1" aria-label="Quitar una unidad de ${esc(label)}" ${item.qty <= 1 ? "disabled" : ""}>−</button>
                  <span>${item.qty}</span>
                  <button type="button" data-cart-qty="1" aria-label="Añadir una unidad de ${esc(label)}" ${item.qty >= 99 ? "disabled" : ""}>+</button>
                </div>
                <span class="cart-item__line">${priceLabel({ price: product.price * item.qty })}</span>
              </div>
            </div>
          </li>`;
      })
      .join("");

    if (empty) empty.hidden = hasItems;
    if (view) view.hidden = cartStep !== "cart";
    if (checkout) checkout.hidden = cartStep !== "checkout";
    if (success) success.hidden = cartStep !== "success";
    if (foot) foot.hidden = cartStep !== "cart" || !hasItems;

    const count = cartQuantity();
    const badge = $("#cartCount");
    if (badge) {
      badge.textContent = count > 9 ? "9+" : String(count);
      badge.hidden = count === 0;
    }
    $$("[data-cart-count]").forEach((node) => {
      node.textContent = String(count);
    });
    const headCount = $("#cartHeadCount");
    if (headCount) headCount.textContent = `(${count})`;
    const cartButton = $("#cartBtn");
    if (cartButton) {
      cartButton.setAttribute(
        "aria-label",
        count
          ? `Abrir carrito de compras, ${count} artículo${plural(count)}`
          : "Abrir carrito de compras"
      );
    }

    const subtotal = cartSubtotal();
    const subtotalNode = $("#cartSubtotal");
    if (subtotalNode) subtotalNode.textContent = `$${money(subtotal)}`;
    const totalNode = $("#cartTotal");
    if (totalNode) totalNode.innerHTML = `$${money(subtotal)} <small>USD</small>`;
  }

  /* ---------- Capas (modales y carrito) ---------- */
  function isOpen(node) {
    return Boolean(node && node.classList.contains("is-open"));
  }

  function syncBodyLock() {
    const other = isOpen($("#lightbox")) || isOpen($("#mobileMenu"));
    document.body.classList.toggle("is-locked", overlayStack.length > 0 || other);
  }

  function focusablesIn(node) {
    return $$(
      'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])',
      node
    ).filter((item) => !item.disabled && item.offsetParent !== null);
  }

  function openOverlay(node, trigger = null) {
    if (!node || isOpen(node)) return;
    overlayStack.push({ node, trigger: trigger || document.activeElement });
    node.classList.add("is-open");
    node.setAttribute("aria-hidden", "false");
    syncBodyLock();

    const target = node.querySelector("[data-autofocus]") || focusablesIn(node)[0];
    window.setTimeout(() => {
      if (isOpen(node) && target) target.focus();
    }, 60);
  }

  function closeOverlay(node) {
    if (!node) return;
    const index = overlayStack.findIndex((entry) => entry.node === node);
    const entry = index >= 0 ? overlayStack.splice(index, 1)[0] : null;
    node.classList.remove("is-open");
    node.setAttribute("aria-hidden", "true");
    syncBodyLock();

    const trigger = entry && entry.trigger;
    if (trigger && typeof trigger.focus === "function" && document.contains(trigger)) {
      window.setTimeout(() => trigger.focus(), 30);
    }
  }

  function closeIfOpen(node) {
    if (isOpen(node)) closeOverlay(node);
  }

  function closeMobileMenu() {
    if (!isOpen($("#mobileMenu"))) return;
    const button = $("#menuClose");
    if (button) button.click();
  }

  function initOverlays() {
    document.addEventListener("keydown", (event) => {
      const top = overlayStack[overlayStack.length - 1];
      if (!top) return;
      const node = top.node;

      if (event.key === "Escape") {
        event.preventDefault();
        closeOverlay(node);
        return;
      }

      if (event.key !== "Tab") return;
      const focusables = focusablesIn(node);
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (!node.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  /* ---------- Autenticación ---------- */
  function showError(node, message) {
    if (!node) return;
    node.textContent = message;
    node.hidden = false;
  }

  function clearError(node) {
    if (!node) return;
    node.textContent = "";
    node.hidden = true;
  }

  function setAuthTab(tab) {
    const isRegister = tab === "register";

    $$("[data-auth-tab]").forEach((button) => {
      const active = button.dataset.authTab === tab;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });

    const loginPanel = $("#loginPanel");
    const registerPanel = $("#registerPanel");
    if (loginPanel) loginPanel.hidden = isRegister;
    if (registerPanel) registerPanel.hidden = !isRegister;

    const title = $("#authTitle");
    const subtitle = $("#authSubtitle");
    if (title) title.textContent = isRegister ? "Crea tu cuenta" : "Inicia sesión";
    if (subtitle) {
      subtitle.textContent = isRegister
        ? "Solo necesitas un correo. Tus datos quedan en este navegador."
        : "Guarda tu carrito y da seguimiento a tus pedidos.";
    }

    clearError($("#loginError"));
    clearError($("#registerError"));
  }

  function openAuth(tab = "login", trigger = null) {
    if (isOpen($("#accountModal"))) closeAccount();
    closeMobileMenu();
    setAuthTab(tab);
    openOverlay($("#authModal"), trigger);

    const button = $("#accountBtn");
    if (button) button.setAttribute("aria-expanded", "true");

    window.setTimeout(() => {
      const field = tab === "register" ? $("#registerName") : $("#loginEmail");
      if (field) field.focus();
    }, 90);
  }

  function closeAuth() {
    closeOverlay($("#authModal"));
    if (!isOpen($("#accountModal"))) {
      const button = $("#accountBtn");
      if (button) button.setAttribute("aria-expanded", "false");
    }
  }

  function openAccount(trigger = null) {
    if (!account.user) {
      openAuth("login", trigger);
      return;
    }
    if (isOpen($("#authModal"))) closeAuth();
    closeMobileMenu();
    renderAccount();
    openOverlay($("#accountModal"), trigger);

    const button = $("#accountBtn");
    if (button) button.setAttribute("aria-expanded", "true");
  }

  function closeAccount() {
    closeOverlay($("#accountModal"));
    if (!isOpen($("#authModal"))) {
      const button = $("#accountBtn");
      if (button) button.setAttribute("aria-expanded", "false");
    }
  }

  function getOrders() {
    const orders = storage.get(STORE.orders, []);
    return Array.isArray(orders) ? orders : [];
  }

  function saveOrder(order) {
    const orders = getOrders();
    orders.unshift(order);
    storage.set(STORE.orders, orders.slice(0, 60));
  }

  function userOrders() {
    if (!account.user) return [];
    return getOrders().filter((order) => order.userId === account.user.id);
  }

  function renderAccount() {
    if (!account.user) return;

    const title = $("#accountTitle");
    const email = $("#accountEmail");
    const avatar = $("#accountAvatar");
    if (title) title.textContent = `Hola, ${account.user.name.split(/\s+/)[0]}`;
    if (email) email.textContent = account.user.email;
    if (avatar) avatar.textContent = initials(account.user.name);

    const meta = $("#accountMeta");
    if (meta) {
      const since = account.user.since ? new Date(account.user.since) : null;
      const sinceLabel =
        since && !Number.isNaN(since.getTime())
          ? since.toLocaleDateString("es-VE", { month: "long", year: "numeric" })
          : "";
      meta.innerHTML = `
        <span class="badge">${icon("shield", "icon--sm")} Sesión local</span>
        ${
          sinceLabel
            ? `<span class="badge">${icon("package", "icon--sm")} Miembro desde ${esc(sinceLabel)}</span>`
            : ""
        }`;
    }

    const orders = userOrders();
    const list = $("#accountOrders");
    const empty = $("#ordersEmpty");
    const count = $("#ordersCount");
    if (count) count.textContent = `${orders.length} pedido${plural(orders.length)}`;

    if (list) {
      list.innerHTML = orders
        .slice(0, 6)
        .map((order) => {
          const date = new Date(order.createdAt);
          const dateLabel = Number.isNaN(date.getTime())
            ? ""
            : date.toLocaleDateString("es-VE", {
                day: "2-digit",
                month: "short",
                year: "numeric"
              });
          return `
            <li class="order">
              <div>
                <strong class="order__id">${esc(order.id)}</strong>
                <span class="order__meta">${esc(dateLabel)} · ${esc(
                  PAYMENT_LABELS[order.payment] || order.payment
                )}</span>
              </div>
              <span class="order__total">$${money(order.total)}<span class="order__status">Pendiente</span></span>
            </li>`;
        })
        .join("");
    }

    if (empty) empty.hidden = orders.length > 0;
    if (list) list.hidden = orders.length === 0;
  }

  async function handleLogin(event) {
    event.preventDefault();

    const emailField = $("#loginEmail");
    const passwordField = $("#loginPassword");
    const error = $("#loginError");
    if (!emailField || !passwordField) return;

    clearError(error);
    const email = emailField.value.trim().toLowerCase();
    const password = passwordField.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(error, "Escribe un correo electrónico válido.");
      emailField.focus();
      return;
    }
    if (!password) {
      showError(error, "Escribe tu contraseña.");
      passwordField.focus();
      return;
    }

    const user = findUser(email);
    const hash = await hashPassword(password);

    if (!user || user.passwordHash !== hash) {
      showError(error, "Correo o contraseña incorrectos. Revisa los datos o crea una cuenta.");
      passwordField.focus();
      return;
    }

    completeLogin(user);
  }

  async function handleRegister(event) {
    event.preventDefault();

    const nameField = $("#registerName");
    const phoneField = $("#registerPhone");
    const emailField = $("#registerEmail");
    const passwordField = $("#registerPassword");
    const confirmField = $("#registerConfirm");
    const error = $("#registerError");
    if (!nameField || !emailField || !passwordField || !confirmField) return;

    clearError(error);
    const name = nameField.value.trim();
    const phone = phoneField ? phoneField.value.trim() : "";
    const email = emailField.value.trim().toLowerCase();
    const password = passwordField.value;
    const confirm = confirmField.value;

    if (name.length < 3) {
      showError(error, "Escribe tu nombre completo.");
      nameField.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(error, "Escribe un correo electrónico válido.");
      emailField.focus();
      return;
    }
    if (phone && phone.replace(/\D/g, "").length < 7) {
      showError(error, "Escribe un teléfono válido o déjalo vacío.");
      if (phoneField) phoneField.focus();
      return;
    }
    if (password.length < 6) {
      showError(error, "La contraseña debe tener al menos 6 caracteres.");
      passwordField.focus();
      return;
    }
    if (password !== confirm) {
      showError(error, "Las contraseñas no coinciden.");
      confirmField.focus();
      return;
    }
    if (findUser(email)) {
      showError(error, "Ya existe una cuenta con ese correo. Inicia sesión.");
      emailField.focus();
      return;
    }

    const users = getUsers();
    const user = {
      id: `usr_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
      name,
      email,
      phone,
      passwordHash: await hashPassword(password),
      createdAt: new Date().toISOString()
    };
    users.push(user);
    storage.set(STORE.users, users);
    completeLogin(user);
  }

  function completeLogin(user) {
    setSession(user);
    activateUserCart();
    renderAuthState();
    renderCart();
    closeAuth();
    toast(`Bienvenido, ${user.name.split(/\s+/)[0]}.`);

    if (cartStep === "checkout") {
      prefillCheckout();
      renderCheckoutSummary();
    }
  }

  function initAuth() {
    ensureDemoUser();
    restoreSession();
    renderAuthState();

    const accountButton = $("#accountBtn");
    if (accountButton) {
      accountButton.addEventListener("click", () => {
        if (account.user) openAccount(accountButton);
        else openAuth("login", accountButton);
      });
    }

    $$("[data-auth-tab]").forEach((button) => {
      button.addEventListener("click", () => setAuthTab(button.dataset.authTab));
    });

    const loginForm = $("#loginForm");
    if (loginForm) loginForm.addEventListener("submit", handleLogin);

    const registerForm = $("#registerForm");
    if (registerForm) registerForm.addEventListener("submit", handleRegister);

    const demoButton = $("#demoLogin");
    if (demoButton) {
      demoButton.addEventListener("click", async () => {
        await ensureDemoUser();
        const email = $("#loginEmail");
        const password = $("#loginPassword");
        if (email) email.value = "demo@rvpc.com";
        if (password) password.value = "demo1234";
        if (loginForm) loginForm.requestSubmit();
      });
    }

    $$("[data-toggle-password]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const input = document.getElementById(button.dataset.togglePassword);
        if (!input) return;
        const show = input.type === "password";
        input.type = show ? "text" : "password";
        button.setAttribute("aria-pressed", String(show));
        button.setAttribute("aria-label", show ? "Ocultar contraseña" : "Mostrar contraseña");
        button.classList.toggle("is-on", show);
        input.focus();
      });
    });

    const logout = $("#logoutBtn");
    if (logout) {
      logout.addEventListener("click", () => {
        clearSession();
        cart = normalizeCart(storage.get(STORE.guestCart, []));
        saveCart();
        renderAuthState();
        renderCart();
        closeAccount();
        toast("Sesión cerrada. Vuelve cuando quieras.");
      });
    }
  }

  /* ---------- Carrito y checkout ---------- */
  function openCart(trigger = null) {
    if (isOpen($("#accountModal"))) closeAccount();
    if (isOpen($("#authModal"))) closeAuth();
    closeMobileMenu();

    if (cartStep === "success") cartStep = "cart";
    renderCart();
    openOverlay($("#cartDrawer"), trigger);

    const button = $("#cartBtn");
    if (button) button.setAttribute("aria-expanded", "true");
  }

  function closeCart() {
    closeOverlay($("#cartDrawer"));
    if (cartStep === "success") cartStep = "cart";
    renderCart();

    const button = $("#cartBtn");
    if (button) button.setAttribute("aria-expanded", "false");
  }

  function updatePaymentHint(value) {
    const hint = $("#paymentHint");
    if (hint) hint.textContent = PAYMENT_HINTS[value] || PAYMENT_DEFAULT_HINT;
  }

  function renderCheckoutSummary() {
    const summary = $("#checkoutSummary");
    if (!summary) return;

    summary.innerHTML = cart
      .map((item) => {
        const product = bySlug(item.slug);
        if (!product) return "";
        return `<li><strong>${item.qty}× ${esc(product.model)}</strong><span>$${money(
          product.price * item.qty
        )}</span></li>`;
      })
      .join("");
  }

  function prefillCheckout() {
    const guestNote = $("#checkoutGuest");
    if (!account.user) {
      if (guestNote) guestNote.hidden = false;
      return;
    }
    if (guestNote) guestNote.hidden = true;

    const name = $("#checkoutName");
    const phone = $("#checkoutPhone");
    if (name && !name.value.trim()) name.value = account.user.name;
    if (phone && !phone.value.trim()) phone.value = account.user.phone || "";
  }

  function startCheckout() {
    if (!cart.length) return;
    cartStep = "checkout";
    renderCart();
    renderCheckoutSummary();
    prefillCheckout();
    clearError($("#checkoutError"));

    const body = $("#cartBody");
    if (body) body.scrollTop = 0;
    window.setTimeout(() => {
      const name = $("#checkoutName");
      if (name) name.focus();
    }, 80);
  }

  function backToCart() {
    cartStep = "cart";
    renderCart();
    window.setTimeout(() => {
      const button = $("#checkoutStart");
      if (button) button.focus();
    }, 40);
  }

  function makeOrderId() {
    const now = new Date();
    const pad = (value) => String(value).padStart(2, "0");
    const stamp = `${String(now.getFullYear()).slice(2)}${pad(now.getMonth() + 1)}${pad(
      now.getDate()
    )}`;
    return `RV-${stamp}-${Math.floor(1000 + Math.random() * 9000)}`;
  }

  function buildOrderMessage(order) {
    const lines = [
      `Hola R.V.PC Technology, quiero confirmar el pedido ${order.id}.`,
      "",
      ...order.items.map(
        (item) => `• ${item.qty}× ${item.label} — $${money(item.price * item.qty)}`
      ),
      "",
      `Total: $${money(order.total)} USD`,
      `Pago: ${PAYMENT_LABELS[order.payment]}`,
      `Entrega: ${DELIVERY_LABELS[order.delivery]}`
    ];
    if (order.delivery === "envio" && order.address) {
      lines.push(`Dirección: ${order.address}`);
    }
    lines.push(`Cliente: ${order.customer.name} · ${order.customer.phone}`);
    if (order.note) lines.push(`Nota: ${order.note}`);
    lines.push("", "¿Me confirman disponibilidad y los datos de pago?");
    return lines.join("\n");
  }

  function renderSuccess(order) {
    const title = $("#successTitle");
    const text = $("#successText");
    const box = $("#successBox");
    const wa = $("#successWa");

    if (title) title.textContent = `Pedido ${order.id} registrado`;
    if (text) {
      text.textContent =
        order.payment === "binance"
          ? "Te enviamos el ID de Binance Pay por WhatsApp para transferir en USDT. El pedido queda reservado por 24 horas."
          : "Puedes pagar en efectivo USD al retirar en San Cristóbal o al recibir tu equipo. Coordinamos la entrega por WhatsApp.";
    }
    if (box) {
      const units = order.items.reduce((total, item) => total + item.qty, 0);
      box.innerHTML = `
        <div class="row"><span>Total</span><strong>$${money(order.total)} USD</strong></div>
        <div class="row"><span>Pago</span><strong>${esc(
          PAYMENT_LABELS[order.payment]
        )}</strong></div>
        <div class="row"><span>Entrega</span><strong>${esc(
          DELIVERY_LABELS[order.delivery]
        )}</strong></div>
        <div class="row"><span>Cliente</span><strong>${esc(order.customer.name)}</strong></div>
        <div class="row"><span>Artículos</span><strong>${units}</strong></div>`;
    }
    if (wa) wa.href = WHATSAPP(buildOrderMessage(order));
  }

  function confirmOrder(event) {
    event.preventDefault();

    const error = $("#checkoutError");
    clearError(error);
    if (!cart.length) {
      showError(error, "Tu carrito está vacío.");
      return;
    }

    const nameField = $("#checkoutName");
    const phoneField = $("#checkoutPhone");
    const name = nameField ? nameField.value.trim() : "";
    const phone = phoneField ? phoneField.value.trim() : "";
    const deliveryInput = $('input[name="delivery"]:checked');
    const delivery = deliveryInput ? deliveryInput.value : "retiro";
    const paymentInput = $('input[name="payment"]:checked');
    const payment = paymentInput ? paymentInput.value : "";
    const addressField = $("#checkoutAddress");
    const address = addressField ? addressField.value.trim() : "";
    const noteField = $("#checkoutNote");
    const note = noteField ? noteField.value.trim() : "";

    if (name.length < 3) {
      showError(error, "Escribe tu nombre y apellido.");
      if (nameField) nameField.focus();
      return;
    }
    if (phone.replace(/\D/g, "").length < 7) {
      showError(error, "Escribe un teléfono de contacto válido.");
      if (phoneField) phoneField.focus();
      return;
    }
    if (delivery === "envio" && address.length < 8) {
      showError(error, "Indica la dirección de entrega.");
      if (addressField) addressField.focus();
      return;
    }
    if (!PAYMENT_LABELS[payment]) {
      showError(error, "Elige Binance Pay o Efectivo USD como método de pago.");
      const paymentChoice = $('input[name="payment"]');
      if (paymentChoice) paymentChoice.focus();
      return;
    }

    const order = {
      id: makeOrderId(),
      userId: account.user ? account.user.id : null,
      customer: { name, phone },
      items: cart.map((item) => {
        const product = bySlug(item.slug);
        return {
          slug: item.slug,
          label: productLabel(product),
          qty: item.qty,
          price: product.price
        };
      }),
      total: cartSubtotal(),
      payment,
      delivery,
      address,
      note,
      status: "pendiente",
      createdAt: new Date().toISOString()
    };

    saveOrder(order);
    cart = [];
    saveCart();
    cartStep = "success";
    renderCart();
    renderSuccess(order);
    if (account.user) renderAccount();

    const body = $("#cartBody");
    if (body) body.scrollTop = 0;
    const heading = $("#successTitle");
    if (heading) heading.focus();
  }

  function initCart() {
    loadCart();
    renderCart();

    const cartButton = $("#cartBtn");
    if (cartButton) {
      cartButton.addEventListener("click", () => openCart(cartButton));
    }

    const items = $("#cartItems");
    if (items) {
      items.addEventListener("click", (event) => {
        const qtyButton = event.target.closest("[data-cart-qty]");
        if (qtyButton) {
          const row = qtyButton.closest(".cart-item");
          if (row) changeQuantity(row.dataset.slug, Number(qtyButton.dataset.cartQty));
          return;
        }
        const removeButton = event.target.closest("[data-cart-remove]");
        if (removeButton) removeFromCart(removeButton.dataset.cartRemove);
      });
    }

    const start = $("#checkoutStart");
    if (start) start.addEventListener("click", startCheckout);

    const back = $("#checkoutBack");
    if (back) back.addEventListener("click", backToCart);

    const form = $("#checkoutForm");
    if (form) form.addEventListener("submit", confirmOrder);

    const successClose = $("#successClose");
    if (successClose) {
      successClose.addEventListener("click", () => {
        closeCart();
        const catalog = $("#catalogo");
        if (catalog) catalog.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    $$('input[name="delivery"]').forEach((input) => {
      input.addEventListener("change", () => {
        const field = $("#addressField");
        if (field) field.hidden = !(input.checked && input.value === "envio");
      });
    });

    $$('input[name="payment"]').forEach((input) => {
      input.addEventListener("change", () => {
        if (input.checked) updatePaymentHint(input.value);
      });
    });
  }

  /* ---------- Arranque ---------- */
  function init() {
    initOverlays();
    initAuth();
    initCart();
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
