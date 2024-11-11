document.querySelectorAll('.wcu-card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        card.querySelector('.popup').style.display = 'none';
    });
    card.addEventListener('mouseenter', () => {
        card.querySelector('.popup').style.display = 'block';
    });
});
function toggleDarkMode() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("bg-white-mode");
  navbar.classList.toggle("bg-dark-mode");
  
  document.body.classList.toggle("dark-mode");
  
}