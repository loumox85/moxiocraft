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
