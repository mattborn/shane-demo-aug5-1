document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Button click handlers
  const primaryBtn = document.querySelector('.btn-primary');
  const secondaryBtn = document.querySelector('.btn-secondary');
  
  if (primaryBtn) {
    primaryBtn.addEventListener('click', function() {
      console.log('Start researching cities clicked');
      // Add your navigation logic here
    });
  }
  
  if (secondaryBtn) {
    secondaryBtn.addEventListener('click', function() {
      console.log('View sample report clicked');
      // Add your navigation logic here
    });
  }

  // Add active state to current nav item
  const currentHash = window.location.hash;
  if (currentHash) {
    const activeLink = document.querySelector(`.nav a[href="${currentHash}"]`);
    if (activeLink) {
      activeLink.style.color = 'var(--primary)';
    }
  }
});