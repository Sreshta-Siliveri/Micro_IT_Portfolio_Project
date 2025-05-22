document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission
  
    // Show a success message
    document.getElementById("form-message").style.display = "block";
  
    // Optionally reset the form
    this.reset();
  });
  // Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Toggle dark mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.innerHTML = document.body.classList.contains('dark-mode')
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});
