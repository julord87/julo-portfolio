export function handleScroll() {
    const elements = document.querySelectorAll('.to-fade-in');
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        element.classList.add('scroll-fade-in');
      }
    });
  }

export function initScrollFadeIn() {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Elementos ya visibles al cargar
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }
