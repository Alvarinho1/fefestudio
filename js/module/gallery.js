export default function initGallery() {
    // Seleccionar los elementos de navegación y las galerías
    const navGallery = document.querySelectorAll('[data-galleryNav] li');
    const galleries = document.querySelectorAll('[data-gallery] > div');
  
    if (navGallery.length && galleries.length) {
      // Función para mostrar galería específica y ocultar las demás
      function activateGallery(category) {
        // Remover clases activas de todos los elementos
        navGallery.forEach(nav => nav.classList.remove('active-nav'));
        galleries.forEach(gallery => gallery.classList.remove('active'));
        
        // Activar el nav y la galería correspondiente
        const selectedNav = document.querySelector(`[data-category="${category}"]`);
        const selectedGallery = document.querySelector(`[data-gallery] > div[data-category="${category}"]`);
        
        if (selectedNav && selectedGallery) {
          selectedNav.classList.add('active-nav');
          selectedGallery.classList.add('active');
        }
      }
  
      // Activar primera categoría por defecto
      const firstCategory = navGallery[0].getAttribute('data-category');
      activateGallery(firstCategory);
      
      // Agregar evento click a elementos de navegación
      navGallery.forEach((item) => {
        item.addEventListener('click', () => {
          const category = item.getAttribute('data-category');
          activateGallery(category);
        });
      });
    }
  }
