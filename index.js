// Select all the card elements
const cards = document.querySelectorAll('.card');

// Add event listeners to each card
cards.forEach((card) => {
  // Get the after element of the card
  const afterElement = card.querySelector('::after');

  // Flag to track the after card state
  let afterCardActive = false;

  // Function to toggle the after card state
  const toggleAfterCard = () => {
    if (afterCardActive) {
      // Remove the active class from the card and after element
      card.classList.remove('active');
      afterElement.classList.remove('active');
      afterCardActive = false;
    } else {
      // Add the active class to the card and after element
      card.classList.add('active');
      afterElement.classList.add('active');
      afterCardActive = true;
    }
  };

  // Add event listeners to toggle the after card state
  card.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleAfterCard();
  });

  afterElement.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleAfterCard();
  });

  // Prevent the after card from changing state when moving the mouse
  afterElement.addEventListener('mousemove', (event) => {
    event.stopPropagation();
  });
});

function openExternalLink(url) {
    window.open(url, '_blank');
  }
  
  function downloadPNG() {
    // Create a link element
    var link = document.createElement('a');

    // Set the download attribute and file name
    link.setAttribute('download', 'image.png');

    // Set the URL of the .png file
    link.setAttribute('href', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.15752-9/354031466_2135367400001333_1151528875357010124_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MTSWbH7U-s4AX9P5XUQ&_nc_ht=scontent-sea1-1.xx&oh=03_AdRVjQ5za74uGbouadgCnmzRJCm8z5wjqho6xMa2h8rljA&oe=64AEF353');

    // Set the target attribute to '_blank' to open in a new tab
    link.setAttribute('target', '_blank');

    // Simulate a click on the link to trigger the download
    link.click();
  }