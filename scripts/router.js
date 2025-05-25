// scripts/router.js

export function setupNavigation() {
  const navLinks = document.querySelectorAll('[data-nav]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('data-nav');
      window.location.href = `pages/${target}.html`;
    });
  });
}
