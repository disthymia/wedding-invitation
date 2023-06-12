// Select all the card elements
const cards = document.querySelectorAll('.card');

// Add event listeners to each card
cards.forEach((card) => {
  // Toggle the active class on click
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });

  // Remove the active class when the transition ends
  card.addEventListener('transitionend', () => {
    if (!card.classList.contains('active')) {
      card.classList.remove('active');
    }
  });
});
