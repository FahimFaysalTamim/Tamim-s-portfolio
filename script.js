// =========================================================
// TAMIM — Personal Homepage
// Shared JS: footer stamp, theme toggle, scroll reveal
// =========================================================

// --- Part 3.5: show page location + last modified date ---
document.addEventListener('DOMContentLoaded', function () {
  var locationEl = document.getElementById('page-location');
  var modifiedEl = document.getElementById('last-modified');

  if (locationEl) {
    locationEl.textContent = window.location.href;
  }
  if (modifiedEl) {
    modifiedEl.textContent = document.lastModified;
  }

  // --- Bonus: dark / light mode toggle ---
  var toggleBtn = document.getElementById('theme-toggle');
  var savedTheme = localStorage.getItem('tamim-theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light');
  }
  updateToggleLabel();

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      document.body.classList.toggle('light');
      var isLight = document.body.classList.contains('light');
      localStorage.setItem('tamim-theme', isLight ? 'light' : 'dark');
      updateToggleLabel();
    });
  }

  function updateToggleLabel() {
    if (!toggleBtn) return;
    var isLight = document.body.classList.contains('light');
    toggleBtn.textContent = isLight ? '☾ DARK' : '☀ LIGHT';
  }

  // --- Bonus: simple scroll-reveal animation ---
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }
});
