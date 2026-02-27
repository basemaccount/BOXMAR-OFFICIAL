/* ============================================
   BOXMAR GLOBAL LOGISTICS — Application Logic
   All interactive behaviour: navbar, mobile menu,
   scroll animations, counters, FAQ accordion,
   quote form steps, testimonials carousel,
   language switcher, tracking demo, smooth scroll,
   scroll-to-top button.

   Depends on: translations.js (must be loaded first).
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initCounters();
  initAccordion();
  initQuoteForm();
  initTestimonials();
  initLanguageSwitcher();
  initTrackingDemo();
  initSmoothScroll();
  initScrollTop();
});

let currentLang = 'en';

/* ============================================
   NAVBAR — add .scrolled class on scroll
   ============================================ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const update = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', update, { passive: true });
  update(); // apply on initial load
}

/* ============================================
   MOBILE MENU — hamburger toggle
   ============================================ */
function initMobileMenu() {
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================
   SCROLL ANIMATIONS — IntersectionObserver
   ============================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ============================================
   ANIMATED COUNTERS — [data-count] elements
   ============================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el        = entry.target;
      const target    = parseInt(el.dataset.count, 10);
      const suffix    = el.dataset.suffix || '';
      const prefix    = el.dataset.prefix || '';
      let current     = 0;
      const increment = Math.ceil(target / 60);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = prefix + current.toLocaleString() + suffix;
      }, 30);

      observer.unobserve(el);
    }),
    { threshold: 0.3 }
  );

  counters.forEach(el => observer.observe(el));
}

/* ============================================
   FAQ ACCORDION — single-open behaviour
   ============================================ */
function initAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item     = btn.closest('.faq-item');
      const answer   = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');

      // Close all open items
      document.querySelectorAll('.faq-item.active').forEach(open => {
        open.classList.remove('active');
        open.querySelector('.faq-answer').style.maxHeight = '0';
      });

      // Open clicked item (unless it was already open)
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ============================================
   MULTI-STEP QUOTE FORM
   ============================================ */
function initQuoteForm() {
  const form = document.querySelector('.quote-form');
  if (!form) return;

  const panels   = form.querySelectorAll('.form-panel');
  const steps    = form.querySelectorAll('.form-step');
  const nextBtns = form.querySelectorAll('[data-next]');
  const prevBtns = form.querySelectorAll('[data-prev]');
  let currentStep = 0;

  function showStep(n) {
    panels.forEach((panel, i) => {
      panel.classList.toggle('active', i === n);
      steps[i].classList.toggle('active', i === n);
      if (i < n) steps[i].classList.add('completed');
      else       steps[i].classList.remove('completed');
    });
    currentStep = n;
  }

  nextBtns.forEach(btn => btn.addEventListener('click', () => {
    if (currentStep < panels.length - 1) showStep(currentStep + 1);
  }));

  prevBtns.forEach(btn => btn.addEventListener('click', () => {
    if (currentStep > 0) showStep(currentStep - 1);
  }));

  form.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = form.querySelector('[type="submit"]');
    if (!submitBtn) return;

    submitBtn.textContent = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';
    submitBtn.disabled = true;

    const formData = new FormData(form);
    const params = {};
    formData.forEach((v, k) => { params[k] = v; });

    // Try EmailJS first, fall back to mailto
    if (typeof emailjs !== 'undefined') {
      emailjs.send('service_boxmar', 'template_quote', params)
        .then(() => {
          submitBtn.textContent = currentLang === 'tr' ? 'Gönderildi! \u2713' : 'Submitted! \u2713';
          submitBtn.style.background = 'var(--grad-gold)';
          submitBtn.disabled = false;
          setTimeout(() => {
            submitBtn.textContent = translations[currentLang]['quote.submit'];
            submitBtn.style.background = '';
            showStep(0);
            form.reset();
          }, 3000);
        })
        .catch(() => {
          // Fallback to mailto
          const subject = encodeURIComponent('Quote Request from ' + (params.from_name || 'Website'));
          const body = encodeURIComponent(Object.entries(params).map(([k,v]) => k + ': ' + v).join('\n'));
          window.location.href = 'mailto:info@boxmar.com.tr?subject=' + subject + '&body=' + body;
          submitBtn.textContent = translations[currentLang]['quote.submit'];
          submitBtn.disabled = false;
        });
    } else {
      // Direct mailto fallback
      const subject = encodeURIComponent('Quote Request from ' + (params.from_name || 'Website'));
      const body = encodeURIComponent(Object.entries(params).map(([k,v]) => k + ': ' + v).join('\n'));
      window.location.href = 'mailto:info@boxmar.com.tr?subject=' + subject + '&body=' + body;
      submitBtn.textContent = currentLang === 'tr' ? 'Gönderildi! \u2713' : 'Submitted! \u2713';
      submitBtn.style.background = 'var(--grad-gold)';
      submitBtn.disabled = false;
      setTimeout(() => {
        submitBtn.textContent = translations[currentLang]['quote.submit'];
        submitBtn.style.background = '';
        showStep(0);
        form.reset();
      }, 3000);
    }
  });
}

/* ============================================
   TESTIMONIALS CAROUSEL — auto-rotate + dots
   ============================================ */
function initTestimonials() {
  const track = document.querySelector('.testimonials-track');
  const dots  = document.querySelectorAll('.testimonial-dot');
  if (!track || !dots.length) return;

  let current = 0;
  const total = dots.length;

  function goTo(n) {
    current = n;
    track.style.transform = `translateX(-${n * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === n));
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
  setInterval(() => goTo((current + 1) % total), 5000);
}

/* ============================================
   LANGUAGE SWITCHER — EN / TR
   ============================================ */
function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;

      currentLang = lang;
      document.querySelectorAll('.lang-btn')
        .forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

      applyTranslations(lang);
    });
  });
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!t[key]) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t[key];
    } else if (t[key].includes('<')) {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });
}

/* ============================================
   TRACKING DEMO — animate steps on button click
   ============================================ */
function initTrackingDemo() {
  const btn      = document.querySelector('.tracking-btn');
  const timeline = document.querySelector('.tracking-timeline');
  if (!btn || !timeline) return;

  btn.addEventListener('click', () => {
    const steps = timeline.querySelectorAll('.tracking-step');
    steps.forEach(s => s.classList.remove('completed', 'active'));

    steps.forEach((step, i) => {
      setTimeout(() => {
        if (i < steps.length - 1) step.classList.add('completed');
        else                       step.classList.add('active');
        if (i > 0) steps[i - 1].classList.add('completed');
      }, i * 800);
    });
  });
}

/* ============================================
   SMOOTH SCROLL — anchor links
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ============================================
   SCROLL-TO-TOP BUTTON
   ============================================ */
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
