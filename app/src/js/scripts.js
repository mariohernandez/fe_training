'use strict';

const card = document.querySelector('.card');
const button = document.querySelector('button');

function toggleButton() {
  card.classList.toggle('is-expanded');

  if (button.getAttribute('aria-expanded') === 'false') {
    button.setAttribute('aria-expanded', 'true');
  } else {
    button.setAttribute('aria-expanded', 'false');
  }
}

button.addEventListener('click', toggleButton);
