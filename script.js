const inventarioRefurbished = [
   
    {
        id: 1,
        tipo: "Escritorio",
        marca: "HP",
        modelo: "Z 230 SFF",
        condicion: "GARANTIA INCLUIDA",
        idealPara: "Oficinas, Puntos de venta, Administración,GAMA ENTRADA.",
        procesador: "Xeon 1240v3",
        ram: "16 GB DDR3",
        almacenamiento: "500 GB HDD",
        pantalla: "no incluye",
        Graficos: "Nvidia NS310",
        precio: "170.00 usd",
        imagenes: [
            "imagenes/hpz230.jpg",
            "imagenes/hpz230 1.jpg",
        ]
   
    },

 
    {
        id: 3,
        tipo: "Laptop",
        marca: "HP",
        modelo: "ProBook 640 G8",
        condicion: "GARANTIA INCLUIDA",
        idealPara: "Ejecutivos, Programación, Trabajo remoto",
        procesador: "Intel Core i5-1135G7",
        ram: "16 GB DDR4",
        almacenamiento: "256 GB SSD",
        pantalla: "14\" FHD",
        Graficos: "Intel® Iris Xe Graphics",
        precio: "350,00 usd",
        imagenes: [
            "imagenes/HP ProBook 640 G8 1.jpg",
            "imagenes/HP ProBook 640 G8 2.jpg",
            "imagenes/HP ProBook 640 G8 3.jpg",
            "imagenes/HP ProBook 640 G8 4.jpg",
            "imagenes/HP ProBook 640 G8 5.jpg",
        ]
    },
    {
        id: 4,
        tipo: "Laptop",
        marca: "DELL",
        modelo: "Latitude 7420",
        condicion: "GARANTIA INCLUIDA",
        idealPara: "Gama ejecutiva, oficinista, estudio,",
        procesador: "Intel Core i7-1185G7",
        ram: "16 GB DDR4",
        almacenamiento: "256 GB NVMe",
        pantalla: "14\" FHD",
        Graficos: "Intel® Iris Xe Graphics",
        precio: "390,00 usd",
        imagenes: [
            "imagenes/DELL Latitude 7420 1.jpg ",
            "imagenes/DELL Latitude 7420 2.jpg",
            "imagenes/DELL Latitude 7420 3.jpg",
            "imagenes/DELL Latitude 7420 4.jpg",
            "imagenes/DELL Latitude 7420 5.jpg",
            "imagenes/DELL Latitude 7420 6.jpg",
        ]
    },
    {
        id: 5,
        tipo: "Laptop",
        marca: "LENOVO",
        modelo: "LENOVO T495",
        condicion: "GARANTIA INCLUIDA",
        idealPara: "Ingeniería, Análisis de datos, Contabilidad",
        procesador: "AMD RYZEN 5 3500U",
        ram: "16 GB DDR4",
        almacenamiento: "256 GB NVMe",
        pantalla: "14\" FHD",
        Graficos: "AMD RX VEGA 7",
        precio: "320,00 usd",
        imagenes: [
            "imagenes/lenovot495 2.jpg",
            "imagenes/lenovot495 3.jpg",
            "imagenes/lenovot495 4.jpg",
            "imagenes/lenovot495.jpg",
        ]
    },
    {
        id: 6,
        tipo: "Laptop",
        marca: "DELL",
        modelo: "Inspiron 15 3535 Táctil",
        condicion: "GARANTIA INCLUIDA",
        idealPara: "Diseño interactivo, Multitarea intensiva",
        procesador: "AMD Ryzen 7 7730U",
        ram: "16 GB DDR4",
        almacenamiento: "512 GB NVMe",
        pantalla: "14\" FHD Táctil",
        precio: "490,00 usd",
        imagenes: [
            "imagenes/DELL Inspiron 15 3535 Táctil 1.jpg",
            "imagenes/DELL Inspiron 15 3535 Táctil 2.jpg",
            "imagenes/DELL Inspiron 15 3535 Táctil 3.jpg",
            "imagenes/DELL Inspiron 15 3535 Táctil 4.jpg",
            "imagenes/DELL Inspiron 15 3535 Táctil 5.jpg",
            "imagenes/DELL Inspiron 15 3535 Táctil 6.jpg",
        ]
    },
    {
        id: 7,
        tipo: "Laptop",
        marca: "HP",
        modelo: "EliteBook 845 G8",
        condicion: "GARANTIA INCLUIDA",
        idealPara: "Trabajo corporativo, Productividad avanzada",
        procesador: "AMD Ryzen 5 5650U",
        ram: "16 GB DDR4",
        almacenamiento: "256 GB NVMe",
        pantalla: "14\" FHD",
        Graficos: "AMD RX VEGA 7",
        precio: "400,00 usd",
        imagenes: [
            "imagenes/HP EliteBook 845 G8 1.jpg",
            "imagenes/HP EliteBook 845 G8 2.jpg",
            "imagenes/HP EliteBook 845 G8 3.jpg",
            "imagenes/HP EliteBook 845 G8 4.jpg",
        ]
    },
    {
        id: 8,
        tipo: "Laptop",
        marca: "HP",
        modelo: "ProBook 445 G7",
        condicion: "GARANTIA INCLUIDA",
        idealPara: "Ofimática fluida, Estudiantes",
        procesador: "AMD Ryzen 5 4500U",
        ram: "16 GB DDR4",
        almacenamiento: "256 GB NVMe",
        pantalla: "14\" FHD",
        Graficos: "AMD RX VEGA 7",
        precio: "350.00 usd",
        imagenes: [
            "imagenes/HP ProBook 445 G7 1.jpg",
            "imagenes/HP ProBook 445 G7 2.jpg",
            "imagenes/HP ProBook 445 G7 3.jpg",
            "imagenes/HP ProBook 445 G7 4.jpg",
        ]
    }
];

function obtenerImagenes(equipo) {
    if (equipo.imagenes?.length) return equipo.imagenes;
    if (equipo.imagen) return [equipo.imagen, equipo.imagen, equipo.imagen];
    return [];
}

function crearTarjeta(equipo) {
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta');

    const imagenes = obtenerImagenes(equipo);
    const textoPrecio = equipo.precio === "" ? "Consultar Precio" : `$${equipo.precio}`;
    const iconoTipo = equipo.tipo === "Laptop" ? "fa-laptop" : "fa-desktop";

    tarjeta.innerHTML = `
        <button type="button" class="imagen-wrapper btn-ver-fotos" aria-label="Ver fotos de ${equipo.marca} ${equipo.modelo}">
            <span class="etiqueta-estado">${equipo.condicion}</span>
            <img src="${imagenes[0]}" alt="${equipo.marca} ${equipo.modelo}">
            <span class="overlay-zoom"><i class="fa-solid fa-magnifying-glass-plus"></i> Ver con zoom</span>
        </button>
        
        <div class="info-producto">
            <span class="ideal-para">${equipo.idealPara}</span>
            <h3 class="titulo-prod"><i class="fa-solid ${iconoTipo}" style="color: var(--primary-blue); font-size: 1rem; margin-right: 5px;"></i> ${equipo.marca} ${equipo.modelo}</h3>
            
            <ul class="specs">
                <li><i class="fa-solid fa-microchip"></i> ${equipo.procesador}</li>
                <li><i class="fa-solid fa-memory"></i> ${equipo.ram}</li>
                <li><i class="fa-solid fa-hard-drive"></i> ${equipo.almacenamiento}</li>
                <li><i class="fa-solid fa-display"></i> ${equipo.pantalla}</li>
                 ${equipo.Graficos ? `<li><i class="fa-solid fa-gamepad"></i> ${equipo.Graficos}</li>` : ''}
            </ul>
            
            <div class="precio-btn-container">
                <span class="precio">${textoPrecio}</span>
                <div class="acciones-producto">
                    <button type="button" class="btn-ver-detalle" aria-label="Ver galería">
                        <i class="fa-solid fa-expand"></i>
                    </button>
                    <button type="button" class="btn-comprar">
                        <i class="fa-brands fa-whatsapp"></i> Lo quiero
                    </button>
                </div>
            </div>
        </div>
    `;

    tarjeta.querySelector('.btn-ver-fotos').addEventListener('click', () => abrirVisor(equipo.id));
    tarjeta.querySelector('.btn-ver-detalle').addEventListener('click', () => abrirVisor(equipo.id));
    tarjeta.querySelector('.btn-comprar').addEventListener('click', () => contactarVenta(equipo.marca, equipo.modelo));

    return tarjeta;
}

const visor = {
    equipoId: null,
    indice: 0,
    zoom: 1,
    panX: 0,
    panY: 0,
    arrastrando: false,
    inicioX: 0,
    inicioY: 0
};

function resetZoomVisor() {
    visor.zoom = 1;
    visor.panX = 0;
    visor.panY = 0;
    aplicarTransformacionVisor();
    actualizarControlesZoom();
}

function aplicarTransformacionVisor() {
    const img = document.getElementById('visor-imagen');
    if (!img) return;
    img.style.transform = `translate(${visor.panX}px, ${visor.panY}px) scale(${visor.zoom})`;
    img.style.cursor = visor.zoom > 1 ? 'grab' : 'zoom-in';
}

function actualizarControlesZoom() {
    const nivel = document.getElementById('visor-nivel-zoom');
    if (nivel) nivel.textContent = `${Math.round(visor.zoom * 100)}%`;
}

function cambiarZoomVisor(delta) {
    const nuevoZoom = Math.min(4, Math.max(1, visor.zoom + delta));
    if (nuevoZoom === 1) {
        visor.panX = 0;
        visor.panY = 0;
    }
    visor.zoom = nuevoZoom;
    aplicarTransformacionVisor();
    actualizarControlesZoom();
}

function mostrarImagenVisor(indice) {
    const equipo = inventarioRefurbished.find(e => e.id === visor.equipoId);
    if (!equipo) return;

    const imagenes = obtenerImagenes(equipo);
    visor.indice = (indice + imagenes.length) % imagenes.length;

    const img = document.getElementById('visor-imagen');
    img.src = imagenes[visor.indice];
    img.alt = `${equipo.marca} ${equipo.modelo} - foto ${visor.indice + 1}`;

    document.querySelectorAll('.visor-miniatura').forEach((mini, i) => {
        mini.classList.toggle('activa', i === visor.indice);
    });

    document.getElementById('visor-contador').textContent = `${visor.indice + 1} / ${imagenes.length}`;
    resetZoomVisor();
}

function abrirVisor(equipoId, indiceInicial = 0) {
    const equipo = inventarioRefurbished.find(e => e.id === equipoId);
    if (!equipo) return;

    visor.equipoId = equipoId;
    const modal = document.getElementById('modal-visor');
    const iconoTipo = equipo.tipo === "Laptop" ? "fa-laptop" : "fa-desktop";
    const textoPrecio = equipo.precio === "" ? "Consultar Precio" : `$${equipo.precio}`;

    document.getElementById('visor-titulo').innerHTML =
        `<i class="fa-solid ${iconoTipo}"></i> ${equipo.marca} ${equipo.modelo}`;
    document.getElementById('visor-ideal').textContent = equipo.idealPara;
    document.getElementById('visor-precio').textContent = textoPrecio;
    document.getElementById('visor-specs').innerHTML = `
        <li><i class="fa-solid fa-microchip"></i> ${equipo.procesador}</li>
        <li><i class="fa-solid fa-memory"></i> ${equipo.ram}</li>
        <li><i class="fa-solid fa-hard-drive"></i> ${equipo.almacenamiento}</li>
        <li><i class="fa-solid fa-display"></i> ${equipo.pantalla}</li>
    `;

    const miniaturas = document.getElementById('visor-miniaturas');
    miniaturas.innerHTML = '';
    obtenerImagenes(equipo).forEach((url, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'visor-miniatura';
        btn.innerHTML = `<img src="${url}" alt="Miniatura ${i + 1}">`;
        btn.addEventListener('click', () => mostrarImagenVisor(i));
        miniaturas.appendChild(btn);
    });

    document.getElementById('visor-btn-whatsapp').onclick = () => contactarVenta(equipo.marca, equipo.modelo);

    modal.classList.add('activo');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-abierto');
    mostrarImagenVisor(indiceInicial);
}

function cerrarVisor() {
    const modal = document.getElementById('modal-visor');
    modal.classList.remove('activo');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-abierto');
    visor.equipoId = null;
    resetZoomVisor();
}

function inicializarVisor() {
    const modal = document.getElementById('modal-visor');
    const contenedor = document.getElementById('visor-contenedor-imagen');
    const img = document.getElementById('visor-imagen');

    document.getElementById('visor-cerrar').addEventListener('click', cerrarVisor);
    document.getElementById('visor-fondo').addEventListener('click', cerrarVisor);
    document.getElementById('visor-anterior').addEventListener('click', () => mostrarImagenVisor(visor.indice - 1));
    document.getElementById('visor-siguiente').addEventListener('click', () => mostrarImagenVisor(visor.indice + 1));
    document.getElementById('visor-zoom-in').addEventListener('click', () => cambiarZoomVisor(0.5));
    document.getElementById('visor-zoom-out').addEventListener('click', () => cambiarZoomVisor(-0.5));
    document.getElementById('visor-zoom-reset').addEventListener('click', resetZoomVisor);

    contenedor.addEventListener('wheel', (e) => {
        e.preventDefault();
        cambiarZoomVisor(e.deltaY < 0 ? 0.25 : -0.25);
    }, { passive: false });

    img.addEventListener('dblclick', () => {
        if (visor.zoom === 1) cambiarZoomVisor(1.5);
        else resetZoomVisor();
    });

    contenedor.addEventListener('mousedown', (e) => {
        if (visor.zoom <= 1) return;
        visor.arrastrando = true;
        visor.inicioX = e.clientX - visor.panX;
        visor.inicioY = e.clientY - visor.panY;
        img.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!visor.arrastrando) return;
        visor.panX = e.clientX - visor.inicioX;
        visor.panY = e.clientY - visor.inicioY;
        aplicarTransformacionVisor();
    });

    window.addEventListener('mouseup', () => {
        visor.arrastrando = false;
        if (visor.zoom > 1) img.style.cursor = 'grab';
    });

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('activo')) return;
        if (e.key === 'Escape') cerrarVisor();
        if (e.key === 'ArrowLeft') mostrarImagenVisor(visor.indice - 1);
        if (e.key === 'ArrowRight') mostrarImagenVisor(visor.indice + 1);
        if (e.key === '+' || e.key === '=') cambiarZoomVisor(0.25);
        if (e.key === '-') cambiarZoomVisor(-0.25);
    });
}

function renderizarCatalogo() {
    const contenedor = document.getElementById('grid-productos');
    contenedor.innerHTML = '';

    const categorias = [
        { titulo: "Escritorios (CPUs)", icono: "fa-desktop", filtro: "Escritorio" },
        { titulo: "Laptops Intel", icono: "fa-laptop", filtro: (e) => e.tipo === "Laptop" && e.procesador.includes("Intel") },
        { titulo: "Laptops AMD Ryzen", icono: "fa-laptop", filtro: (e) => e.tipo === "Laptop" && e.procesador.includes("AMD") }
    ];

    categorias.forEach(({ titulo, icono, filtro }) => {
        const productos = inventarioRefurbished.filter(
            typeof filtro === "function" ? filtro : (e) => e.tipo === filtro
        );
        if (productos.length === 0) return;

        const seccion = document.createElement('div');
        seccion.classList.add('categoria-seccion');

        const encabezado = document.createElement('div');
        encabezado.classList.add('categoria-header');
        encabezado.innerHTML = `<h3><i class="fa-solid ${icono}"></i> ${titulo}</h3><span>${productos.length} equipos</span>`;
        seccion.appendChild(encabezado);

        const grid = document.createElement('div');
        grid.classList.add('grid-productos');
        productos.forEach(equipo => grid.appendChild(crearTarjeta(equipo)));
        seccion.appendChild(grid);

        contenedor.appendChild(seccion);
    });
}


function contactarVenta(marca, modelo) {
    const numeroWhatsApp = "584141766272";
    const mensaje = `Hola! Vengo de su catálogo web. Me interesa el equipo reacondicionado: ${marca} ${modelo}. ¿Me pueden dar el precio y disponibilidad actual?`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}


document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo();
    inicializarVisor();
});
