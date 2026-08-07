# StarCell

**StarCell** es un sitio web interactivo y adaptativo (responsive) diseñado para la exhibición y gestión de productos, accesorios y tecnología móvil. Integra funciones de comercio/catálogo interactivo, un módulo de estadísticas dinámicas sobre ventas y productos destacados, así como un formulario de contacto con validación de datos.

---

## 📋 Descripción General

El proyecto **StarCell** ofrece una plataforma web moderna e intuitiva orientada a tiendas de telefonía y accesorios electrónicos. Entre sus características principales se encuentran:

- **Catálogo de Productos:** Presentación visual de accesorios como cargadores, forros, memorias SD, audífonos, protectores de cámara y más.
- **Panel de Estadísticas Interactivas (`estadisticas.js`):** Análisis dinámico de métricas del negocio (unidades vendidas, calificaciones promedio, ingresos generados y distribución por categoría) con filtros en tiempo real y gráficos interactivos utilizando **Chart.js**.
- **Formulario de Contacto Dinámico (`formulario.js`):** Formulario interactivo para soporte y pedidos con validaciones personalizadas.
- **Diseño Responsive:** Layout adaptativo implementado con **Bootstrap 5** y estilos CSS personalizados (`styles.css`), optimizado para móviles, tabletas y ordenadores.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica de la aplicación web.
- **CSS3 / Bootstrap 5:** Estilizado, maquetación adaptativa, rejilla responsive y componentes de interfaz.
- **JavaScript (ES6+):** Lógica e interactividad del sitio web.
- **Chart.js:** Librería para la representación gráfica y visualización de datos estadísticos.
- **SVG / Recursos Multimedia:** Iconos vectoriales e imágenes optimizadas para accesorios y encabezados.

---

## 📌 Requisitos Previos

Para ejecutar y visualizar este proyecto no se requiere un entorno de servidor complejo ni dependencias backend. Únicamente necesitas:

- Un **navegador web moderno** (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave, etc.).
- Opcional: **Visual Studio Code** con la extensión *Live Server* para pruebas en entorno local.

---

## 🚀 Instrucciones de Instalación y Ejecución

1. **Clonar o descargar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/StarCell.git
   ```
   *(O simplemente descomprime el archivo ZIP del proyecto en tu equipo).*

2. **Abrir el proyecto:**
   - Navega hasta la carpeta del proyecto `StarCell-main/`.
   - Haz doble clic sobre el archivo `index.html` para abrirlo directamente en tu navegador web predeterminado.
   
3. **Uso de Live Server (Opcional):**
   - Si utilizas Visual Studio Code, abre la carpeta raíz del proyecto.
   - Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

---

## 📁 Estructura Básica del Código

```txt
StarCell-main/
│
├── index.html                  # Página principal del sitio web
│
└── assets/                     # Recursos y archivos estáticos
    ├── css/
    │   ├── bootstrap.min.css   # Framework Bootstrap minificado
    │   └── styles.css          # Estilos personalizados del proyecto
    │
    ├── js/
    │   ├── me.js               # Bootstrap bundle (JS)
    │   ├── botones.js          # Control de interacción de botones e interfaz
    │   ├── formulario.js       # Validación y manejo del formulario de contacto
    │   └── estadisticas.js     # Lógica de cálculo y renderizado de gráficos (Chart.js)
    │
    └── img/                    # Archivos de imagen y recursos gráficos
        ├── Icono.svg           # Icono de la marca
        ├── Logo.svg            # Logotipo principal
        ├── footer/             # Iconos de redes sociales (Facebook, Instagram, WhatsApp, X)
        ├── header/             # Banners promocionales del encabezado
        ├── intro/              # Imagen promocional de sección intro
        └── productos/          # Galería de imágenes de los productos
```
