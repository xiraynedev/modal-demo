// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
const body = document.getElementById('body');
const overlay = document.querySelector('.overlay');

body.addEventListener('click', (e) => {
  if (e.target.classList.contains('open')) {
    const modal = document.querySelector(e.target.dataset.modalTarget);
    openModal(modal);
  } else if (e.target.classList.contains('close-button')) {
    const modal = e.target.closest('.modal');
    closeModal(modal);
  } else if (e.target.classList.contains('overlay')) {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach((modal) => {
      closeModal(modal);
    });
  }
});

const openModal = (modal) => {
  console.log(modal);
  if (modal === null) return;

  modal.classList.add('active');
  overlay.classList.add('active');
};

const closeModal = (modal) => {
  if (modal === null) return;

  modal.classList.remove('active');
  overlay.classList.remove('active');
};
