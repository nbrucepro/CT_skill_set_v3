const toggleButton = document.querySelector('.toggle-button');
const slideshowContainer = document.querySelector('.slideshow-container');

toggleButton.addEventListener('click', () => {
  slideshowContainer.classList.toggle('active');
});
