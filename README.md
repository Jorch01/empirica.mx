# 🌟 Empírica Legal Lab

Sitio web oficial de **Empírica Legal Lab** - Empowering entrepreneurs with legal insights.

## 📋 Descripción

Sitio web profesional para Empírica Legal Lab, un despacho de servicios legales especializados que ayuda a emprendedores y empresas en México. El sitio presenta todos nuestros servicios, permite a los clientes conocer nuestras ofertas y facilita el contacto directo.

## ✨ Características

- **Diseño Moderno y Elegante**: Inspirado en el diseño original de Beacons pero mejorado con animaciones y transiciones suaves
- **Totalmente Responsive**: Optimizado para dispositivos móviles, tablets y escritorio
- **10 Servicios Destacados**:
  - Legal English for Real Estate ($499)
  - Transcripciones de Audio & Audiencias ($100)
  - Corresponsalías ($2,500/mes)
  - LITIGIO/JUICIO DE AMPARO ($7,000)
  - Aviso de Privacidad ($2,000)
  - Consulta personalizada 60min ($1,000)
  - Registro de Marca ($4,000)
  - Creación de Sociedad Jurídica Express ($4,000)
  - Derechos de Autor ($2,000)
  - Contratos personalizados ($1,499)
- **Formulario de Contacto**: Integración fácil con servicios de email
- **Newsletter**: Sistema de suscripción para tips y promociones
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Cumple con estándares WCAG

## 🎨 Paleta de Colores

- **Verde Oscuro Principal**: `#1a3a38`
- **Beige/Dorado (Acento)**: `#b8936c`
- **Crema (Fondo)**: `#f5f5f0`
- **Blanco**: `#ffffff`

## 🚀 Configuración de GitHub Pages

### Paso 1: Habilitar GitHub Pages

1. Ve a la configuración del repositorio en GitHub
2. Navega a **Settings** > **Pages**
3. En **Source**, selecciona la rama `claude/migrate-beacons-github-01BX2zmwSuPXQb9fycoTBjR1` (o main)
4. Guarda los cambios

### Paso 2: Configurar el Dominio Personalizado

El archivo `CNAME` ya está configurado con `www.empirica.mx`. Ahora necesitas:

1. En tu proveedor de dominio, configura los siguientes registros DNS:

   **Para www.empirica.mx:**
   ```
   Tipo: CNAME
   Nombre: www
   Valor: [tu-usuario].github.io
   ```

   **Para empirica.mx (apex domain):**
   ```
   Tipo: A
   Registro 1: 185.199.108.153
   Registro 2: 185.199.109.153
   Registro 3: 185.199.110.153
   Registro 4: 185.199.111.153
   ```

2. En GitHub Pages (Settings > Pages), ingresa `www.empirica.mx` en el campo **Custom domain**
3. Marca la casilla **Enforce HTTPS** (puede tomar unas horas en activarse)

### Paso 3: Verificar

Espera de 10 minutos a 48 horas para que los cambios de DNS se propaguen. Luego visita:
- https://www.empirica.mx
- https://empirica.mx

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS, Grid, Flexbox
- **JavaScript (Vanilla)**: Interactividad sin dependencias
- **Google Fonts**: Playfair Display & Poppins
- **Unsplash**: Imágenes de alta calidad (pueden ser reemplazadas)

## 📁 Estructura del Proyecto

```
empirica.mx/
├── index.html          # Página principal
├── styles.css          # Estilos globales
├── script.js           # JavaScript para interactividad
├── CNAME              # Configuración de dominio personalizado
└── README.md          # Este archivo
```

## 🔧 Personalización

### Cambiar Imágenes de Servicios

Las imágenes actuales son de Unsplash (placeholders). Para usar tus propias imágenes:

1. Crea una carpeta `assets/images/`
2. Agrega tus imágenes
3. Actualiza las rutas en `index.html`:

```html
<!-- Antes -->
<img src="https://images.unsplash.com/..." alt="...">

<!-- Después -->
<img src="assets/images/tu-imagen.jpg" alt="...">
```

### Integrar Formularios

#### Opción 1: FormSpree (Recomendado)

1. Regístrate en [FormSpree](https://formspree.io/)
2. Crea un formulario y obtén tu endpoint
3. En `script.js`, descomenta y configura:

```javascript
fetch('https://formspree.io/f/TU-FORM-ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

#### Opción 2: EmailJS

1. Regístrate en [EmailJS](https://www.emailjs.com/)
2. Configura tu servicio de email
3. Implementa según su documentación

### Integrar Newsletter

Puedes integrar con:
- **Mailchimp**: Para listas de correo profesionales
- **ConvertKit**: Ideal para creadores de contenido
- **Sendinblue**: Opción gratuita con buenas características

## 📱 Redes Sociales

Actualiza los enlaces en `index.html`:

```html
<!-- Email -->
<a href="mailto:tu-email@empirica.mx">

<!-- Instagram -->
<a href="https://instagram.com/tu-usuario">
```

## 🔒 HTTPS

GitHub Pages proporciona HTTPS automáticamente una vez que:
1. El dominio esté verificado
2. Se haya habilitado "Enforce HTTPS" en la configuración

## 📊 Analytics (Opcional)

Para agregar Google Analytics o Plausible:

1. Agrega el código de tracking antes de `</head>` en `index.html`
2. Descomenta la función `trackEvent` en `script.js`

## 🤝 Contribuciones

Este es un proyecto privado para Empírica Legal Lab.

## 📄 Licencia

© 2024 Empírica Legal Lab. Todos los derechos reservados.

## 📞 Soporte

Para preguntas o soporte, contacta a través de:
- Email: contacto@empirica.mx
- Instagram: @empiricalegallab

---

**Desarrollado con ❤️ para Empírica Legal Lab**