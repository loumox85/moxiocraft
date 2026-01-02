// Hamburger / mobile off-canvas menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileOverlay = document.getElementById('mobile-overlay');

  if (!hamburger || !mobileNav) return;

  const openMenu = () => {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    if (mobileOverlay) mobileOverlay.classList.add('show');
    if (mobileOverlay) mobileOverlay.setAttribute('aria-hidden', 'false');
  };

  const closeMenu = () => {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    if (mobileOverlay) mobileOverlay.classList.remove('show');
    if (mobileOverlay) mobileOverlay.setAttribute('aria-hidden', 'true');
  };

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (mobileNav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking on a link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setTimeout(closeMenu, 150));
  });

  // Close button in header
  const closeMobileBtn = mobileNav.querySelector('.close-mobile');
  if (closeMobileBtn) {
    closeMobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  // Close when clicking the overlay
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => closeMenu());
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});

// Modrinth Modal
const modrinthBtn = document.getElementById('modrinth-btn');
const modrinthModal = document.getElementById('confirm-modal-modrinth');

if (modrinthBtn && modrinthModal) {
  const closeModrinthBtn = modrinthModal.querySelector('.close-btn');
  const confirmYesModrinthBtn = document.getElementById('confirm-yes-modrinth');
  const confirmCancelModrinthBtn = document.getElementById('confirm-cancel-modrinth');

  if (closeModrinthBtn && confirmYesModrinthBtn && confirmCancelModrinthBtn) {
    const modrinthRedirectUrl = modrinthBtn.getAttribute('data-url');

    const showModrinthModal = () => modrinthModal.classList.add('show');
    const hideModrinthModal = () => modrinthModal.classList.remove('show');

    modrinthBtn.addEventListener('click', (event) => {
      event.preventDefault();
      showModrinthModal();
    });

    confirmYesModrinthBtn.addEventListener('click', () => {
      if (modrinthRedirectUrl) {
        window.open(modrinthRedirectUrl, '_blank');
      }
      hideModrinthModal();
    });

    confirmCancelModrinthBtn.addEventListener('click', hideModrinthModal);
    closeModrinthBtn.addEventListener('click', hideModrinthModal);

    window.addEventListener('click', (event) => {
      if (event.target === modrinthModal) {
        hideModrinthModal();
      }
    });
  }
}
