# Configuración de Empírica Legal Lab Website

## 🎨 Logos

Los logos se encuentran en `assets/images/`:
- `logo.svg` - Logo principal para el hero section
- `favicon.svg` - Favicon optimizado

**Acción requerida**: Si deseas usar logos personalizados, reemplaza estos archivos SVG con tus propios diseños manteniendo los mismos nombres.

## 📧 Configuración de Formularios con Web3Forms

Los formularios están configurados para usar **Web3Forms**, un servicio gratuito y simple que no requiere backend.

### Pasos para activar los formularios:

1. **Regístrate en Web3Forms** (gratis):
   - Ve a: https://web3forms.com
   - Crea una cuenta gratuita
   - Obtén tu Access Key

2. **Configura tu Access Key**:
   - Abre `index.html`
   - Busca `YOUR_ACCESS_KEY_HERE` (aparece 2 veces)
   - Reemplázala con tu Access Key de Web3Forms

   Ejemplo:
   ```html
   <!-- Antes -->
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">

   <!-- Después -->
   <input type="hidden" name="access_key" value="tu-access-key-real-aqui">
   ```

3. **Configura el email de destino**:
   - En tu panel de Web3Forms, configura el email donde quieres recibir los mensajes
   - Por defecto será: contacto@empirica.mx

### Características de los formularios:

✅ **Newsletter Form**:
- Captura nombre y email
- Envía notificación de suscripción
- Protección anti-spam incluida

✅ **Contact Form**:
- Captura nombre, email, servicio de interés y mensaje
- Pre-llena automáticamente el servicio cuando el usuario hace clic en "Comprar ahora"
- Validación de campos
- Feedback visual con notificaciones

✅ **Características incluidas**:
- Loading states en botones
- Notificaciones de éxito/error elegantes
- Protección contra bots
- Diseño responsive
- Sin necesidad de backend o servidor

## 🔍 SEO Optimización

El sitio incluye:
- ✅ Meta tags completos (description, keywords, author)
- ✅ Open Graph para compartir en redes sociales
- ✅ Twitter Cards
- ✅ Schema.org JSON-LD para mejor indexación
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Favicon en múltiples formatos
- ✅ Canonical URLs

## 🚀 Despliegue

El sitio está listo para desplegarse en GitHub Pages:

1. Asegúrate de que el archivo `CNAME` contenga tu dominio: `empirica.mx`
2. Push a tu repositorio
3. Habilita GitHub Pages en la configuración del repositorio
4. ¡Listo!

## 📱 Características Modernas

- ✅ Diseño responsive (mobile-first)
- ✅ Animaciones suaves y modernas
- ✅ Performance optimizado
- ✅ Lazy loading de imágenes
- ✅ Accesibilidad mejorada
- ✅ Cross-browser compatible

## 🎯 Próximos Pasos Recomendados

1. **Configura Web3Forms** (5 minutos)
2. **Reemplaza los logos** si deseas usar diseños personalizados
3. **Verifica el email de contacto** en todas las meta tags
4. **Agrega Google Analytics** (opcional) - código preparado en script.js línea 228
5. **Crea imagen Open Graph** - crea `assets/images/og-image.jpg` (1200x630px) para mejor compartir en redes

## 📞 Soporte

Para cualquier duda o personalización adicional, contacta al equipo de desarrollo.

---

**Desarrollado con las mejores prácticas de 2024** ✨
