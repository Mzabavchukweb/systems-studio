/* ============================================
   Systems Studio — Main JS
   Sticky nav, smooth scroll, mobile menu,
   scroll animations, active link highlight
   ============================================ */

(function () {
  'use strict';

  // --- Sticky Navbar ---
  const navbar = document.getElementById('navbar');

  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Mobile Menu Toggle ---
  const navToggle = document.getElementById('navToggle');
  const mobileOverlay = document.getElementById('mobileOverlay');

  if (navToggle && mobileOverlay) {
    function closeMenu() {
      mobileOverlay.classList.remove('open');
      navToggle.classList.remove('open');
      document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', () => {
      const isOpen = mobileOverlay.classList.contains('open');
      if (!isOpen) {
        mobileOverlay.classList.add('open');
        navToggle.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        closeMenu();
      }
    });

    // Close mobile menu on link click
    mobileOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close mobile menu on language switch
    mobileOverlay.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', closeMenu);
    });
  }

  // --- Smooth Scroll (for anchor links) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight + 16 : 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- Scroll-based Fade-in Animations ---
  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    fadeEls.forEach(el => observer.observe(el));
  }

  // --- Active Nav Link Highlight on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.navbar__links a[href^="#"]');

  function highlightNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(a => {
          a.style.color = '';
          if (a.getAttribute('href') === '#' + id) {
            a.style.color = '#f0f0f0';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  // --- Animated Counter (Hero "60 minut") ---
  const counters = document.querySelectorAll('.hero__counter');

  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'), 10);
            const duration = 1200;
            const start = performance.now();

            function animate(now) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // easeOutQuart
              const ease = 1 - Math.pow(1 - progress, 4);
              el.textContent = Math.round(target * ease);
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                el.textContent = target;
              }
            }

            requestAnimationFrame(animate);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(el => counterObserver.observe(el));
  }

})();
