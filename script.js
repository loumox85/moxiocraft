// CurseForge Modal
const curseforgeBtn = document.getElementById('curseforge-btn');
const curseforgeModal = document.getElementById('confirm-modal-curseforge');

if (curseforgeBtn && curseforgeModal) {
  const closeCurseforgeBtn = curseforgeModal.querySelector('.close-btn');
  const confirmYesCurseforgeBtn = document.getElementById('confirm-yes-curseforge');
  const confirmCancelCurseforgeBtn = document.getElementById('confirm-cancel-curseforge');

  if (closeCurseforgeBtn && confirmYesCurseforgeBtn && confirmCancelCurseforgeBtn) {
    const curseforgeRedirectUrl = curseforgeBtn.getAttribute('data-url');

    const showCurseforgeModal = () => curseforgeModal.classList.add('show');
    const hideCurseforgeModal = () => curseforgeModal.classList.remove('show');

    curseforgeBtn.addEventListener('click', (event) => {
      event.preventDefault();
      showCurseforgeModal();
    });

    confirmYesCurseforgeBtn.addEventListener('click', () => {
      if (curseforgeRedirectUrl) {
        window.open(curseforgeRedirectUrl, '_blank');
      }
      hideCurseforgeModal();
    });

    confirmCancelCurseforgeBtn.addEventListener('click', hideCurseforgeModal);
    closeCurseforgeBtn.addEventListener('click', hideCurseforgeModal);

    window.addEventListener('click', (event) => {
      if (event.target === curseforgeModal) {
        hideCurseforgeModal();
      }
    });
  }
}

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