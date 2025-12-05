  // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      });
    });

    // Language toggle (UI only)
    const btnEN = document.getElementById('btnEN');
    const btnID = document.getElementById('btnID');
    btnEN.addEventListener('click', () => {
      btnEN.classList.add('active');
      btnID.classList.remove('active');
      // TODO: ganti teks / muat konten bahasa Inggris
      alert('Switch to English (demo UI only).');
    });
    btnID.addEventListener('click', () => {
      btnID.classList.add('active');
      btnEN.classList.remove('active');
      // TODO: ganti konten ke Bahasa Indonesia
    });

    // Small accessibility: focus outline for keyboard users
    document.body.addEventListener('keydown', (e) => {
      if(e.key === 'Tab') document.documentElement.classList.add('show-focus');
    });
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // cegah reload halaman

    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || email === "" || pesan === "") {
        alert("Semua kolom harus diisi!");
        return;
    }

    // tampilkan pesan sukses
    document.getElementById("successMsg").style.display = "block";

    // kosongkan form
    document.getElementById("contactForm").reset();
});

