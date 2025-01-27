'use strict';

const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

// function to open the modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// event handler on the three Show Modal buttons
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}

// event handler to the button to close the modal
btnCloseModal.addEventListener('click', closeModal);

// event handler to close the modal when user clicks on the overlay screen
overlay.addEventListener('click', closeModal);

// event handler to close the modal when escape key is pressed
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
