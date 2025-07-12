const subscribeButton = document.getElementById('subscribe-button');
  let isSubscribed = false; 
  subscribeButton.addEventListener('click', () => {
    isSubscribed = !isSubscribed;
  
    subscribeButton.textContent = isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE';
    subscribeButton.classList.toggle('YT-subscribe-button', !isSubscribed);
    subscribeButton.classList.toggle('YT-subscribed-button', isSubscribed);
  });

  document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.channel-nav .nav-link');   // now only 2 links
  const sections = document.querySelectorAll('.channel-content-grid > section');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      sections.forEach(s => s.style.display = 'none');

      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.style.display = 'block';
    });
  });

  /* Show home on first load */
  document.getElementById('home-section').style.display = 'block';
  });

   // === Theme toggle (Bootstrap 5.3 built‑in) ===
  const themeBtn  = document.querySelector('[aria-label="Toggle theme"]');
  const themeIcon = document.getElementById('theme-icon');

  themeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const html  = document.documentElement;
    const isDark = html.getAttribute('data-bs-theme') === 'dark';

    html.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');

    // swap the icon (moon ↔ sun)
    themeIcon.classList.toggle('fa-moon',  isDark); // show moon in light mode
    themeIcon.classList.toggle('fa-sun',  !isDark); // show sun  in dark mode
  });

  