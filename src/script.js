/**
 * ==================================================================
 * ASHFACOMP - MAIN JAVASCRIPT FILE
 * ==================================================================
 * File ini berisi semua fungsi interaktif untuk website:
 * - Hamburger menu toggle (mobile)
 * - Smooth scrolling untuk anchor links
 * - Form submission handler
 * - Tombol telepon interaksi
 * ==================================================================
 */
// navbar

window.addEventListener('scroll', () => {
  document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 10);
})


// ========== HAMBURGER MENU TOGGLE ==========
// Menunggu hingga DOM sepenuhnya dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function () {
  // Ambil elemen-elemen yang diperlukan
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.getElementById('menuOverlay');

  // Fungsi untuk menutup menu mobile
  function closeMenu() {
    if (mobileNav) mobileNav.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (hamburger) hamburger.classList.remove('active');
    document.body.style.overflow = ''; // Mengembalikan scroll body
  }

  // Fungsi untuk membuka menu mobile
  function openMenu() {
    if (mobileNav) mobileNav.classList.add('active');
    if (overlay) overlay.classList.add('active');
    if (hamburger) hamburger.classList.add('active');
    document.body.style.overflow = 'hidden'; // Mencegah scroll saat menu terbuka
  }

  // Event listener untuk tombol hamburger
  if (hamburger) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      if (mobileNav && mobileNav.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Tutup menu ketika overlay diklik
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }


  // Tutup menu ketika link di mobile nav diklik (dengan smooth scroll)
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        closeMenu(); // Tutup menu dulu

        // Scroll ke target setelah menu tertutup (sedikit delay untuk UX)
        setTimeout(function () {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        closeMenu();
      }
    });
  });

  window.addEventListener('resize', () => {
  if (window.innerWidth >= 825) {
    closeMenu();
  }
});




  // ========== SMOOTH SCROLL UNTUK SEMUA ANCHOR LINK ==========
  // Melakukan smooth scroll ke section ketika link dengan href="#..." diklik
  const allAnchorLinks = document.querySelectorAll('a[href^="#"]');
  allAnchorLinks.forEach(function (anchor) {
    // Skip jika link tidak memiliki href yang valid
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ========== FORM SUBMIT HANDLER ==========
  // Menangani pengiriman form perbaikanconst form = document.getElementById('repairForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();

      if (!name || !email) {
        alert('Harap isi nama lengkap dan alamat email Anda.');
        return;
      }
      form.reset();
    });
  }

  // ========== PREVENT DEFAULT UNTUK LINK KOSONG ==========
  // Mencegah link dengan href="#" agar tidak scroll ke atas
  const emptyLinks = document.querySelectorAll('a[href="#"]');
  emptyLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });
});

// ========== END OF FILE ==========
