/* =====================================================
   DATA: edit di sini
   ===================================================== */

// Tambah layanan baru cukup dengan menambah satu objek di array ini.
// thumb kosong atau gagal dimuat: kartu menampilkan inisial (ikon).
const layanan = [
  {
    nama: "Presensi",
    ikon: "PR",
    url: "https://presensi.sisdm-ppnp.id",
    thumb: "https://i.ibb.co.com/rRZyGb1J/presensi.png",
    desk: "Sistem presensi dan pengelolaan kehadiran Dosen di lingkungan PPNP.",
  },
  {
    nama: "SIADIK",
    ikon: "SI",
    url: "https://siadik.sisdm-ppnp.id",
    thumb: "https://i.ibb.co.com/K3VCNTR/Siadik.png",
    desk: "Sistem Informasi Arsip Digital Kepegawaian untuk menyimpan, mencari, dan mengelola dokumen kepegawaian PPNP.",
  },
  {
    nama: "SPMI",
    ikon: "SP",
    url: "https://spmi.sisdm-ppnp.id",
    thumb: "https://i.ibb.co.com/nM6n3Kj4/SPMI.png",
    desk: "Kuesioner kepuasan layanan untuk mendukung Sistem Penjaminan Mutu Internal PPNP.",
  },
];

// Contoh isi: silakan sesuaikan dengan tugas dan fungsi yang sebenarnya.
const fungsi = [
  {
    ikon: "pegawai",
    judul: "Administrasi Kepegawaian",
    desk: "Mengelola data pegawai, pengangkatan, mutasi, promosi, kenaikan pangkat, hingga pemberhentian dan pensiun.",
  },
  {
    ikon: "sdm",
    judul: "Pengembangan SDM",
    desk: "Merencanakan kebutuhan pegawai, mengidentifikasi kebutuhan pelatihan, serta memfasilitasi pengembangan kompetensi.",
  },
  {
    ikon: "kinerja",
    judul: "Kinerja dan Disiplin",
    desk: "Mengelola SKP, presensi, pelaporan kewajiban pegawai, serta pembinaan disiplin dan kode etik.",
  },
  {
    ikon: "sejahtera",
    judul: "Kesejahteraan Pegawai",
    desk: "Mengelola layanan cuti, izin, serta administrasi kesejahteraan dan hak-hak pegawai.",
  },
  {
    ikon: "organisasi",
    judul: "Penataan Organisasi",
    desk: "Menyiapkan bahan penataan kelembagaan, struktur organisasi, peta jabatan, dan uraian jabatan.",
  },
  {
    ikon: "sop",
    judul: "Tatalaksana dan SOP",
    desk: "Menyusun, membakukan, dan mengevaluasi prosedur kerja serta standar operasional pelayanan.",
  },
  {
    ikon: "jabatan",
    judul: "Analisis Jabatan dan Beban Kerja",
    desk: "Melaksanakan Anjab dan ABK untuk mendukung efektivitas organisasi dan optimalisasi kebutuhan pegawai.",
  },
  {
    ikon: "reformasi",
    judul: "Reformasi Birokrasi dan Zona Integritas",
    desk: "Mengoordinasikan pemenuhan dokumen, program, dan target reformasi birokrasi serta pembangunan Zona Integritas.",
  },
];

// Contoh isi: ganti dengan data kontak yang sebenarnya.
const kontak = {
  jam: "Senin–Jumat, pukul 08.00–16.00 WIB",
  alamat:
    "Gedung A Lantai 3, Jalan Raya Negara KM.7 Tanjung Pati, Harau, Limapuluh Kota, Sumatera Barat 26271",
  telepon: "To Be Announced",
  email: "kepegawaianpolitanipyk@gmail.com",
};

document.querySelectorAll("[data-k]").forEach((el) => {
  const isi = kontak[el.dataset.k] || "";
  el.textContent = isi;
  if (el.dataset.link === "tel") el.href = "tel:" + isi.replace(/[^\d+]/g, "");
  if (el.dataset.link === "mailto") el.href = "mailto:" + isi;
});

/* =====================================================
   KODE
   ===================================================== */

const ikonSvg = {
  pegawai:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M16 11l2 2 4-4"/>',
  sdm: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  kinerja: '<path d="M18 20V10M12 20V4M6 20v-6"/>',
  sejahtera:
    '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  organisasi:
    '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  sop: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
  jabatan:
    '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  reformasi:
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
};

function esc(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );
}

/* ---------- Kartu layanan + pencarian ---------- */
function renderLayanan(grid, empty, kata) {
  const k = kata.trim().toLowerCase();
  const list = layanan.filter((l) =>
    (l.nama + " " + l.desk).toLowerCase().includes(k),
  );
  grid.innerHTML = list
    .map(
      (l) => `
    <article class="card">
      <div class="thumb">${
        l.thumb
          ? `<img src="${esc(l.thumb)}" alt="Tampilan ${esc(l.nama)}" data-ikon="${esc(l.ikon)}" loading="lazy">`
          : esc(l.ikon)
      }</div>
      <div class="body"><h3>${esc(l.nama)}</h3><p>${esc(l.desk)}</p>
      <a href="${esc(l.url)}" target="_blank" rel="noopener">Selengkapnya ↗</a></div>
    </article>`,
    )
    .join("");
  grid.querySelectorAll("img").forEach((img) =>
    img.addEventListener(
      "error",
      () => {
        img.parentNode.textContent = img.dataset.ikon;
      },
      { once: true },
    ),
  );
  empty.hidden = list.length > 0;
}

function pasangPencarian(inputId, gridId, emptyId) {
  const input = document.getElementById(inputId);
  const grid = document.getElementById(gridId);
  const empty = document.getElementById(emptyId);
  const jalankan = () => renderLayanan(grid, empty, input.value);
  input.addEventListener("input", jalankan);
  jalankan();
}

pasangPencarian("q-home", "grid-home", "empty-home");
pasangPencarian("q-layanan", "grid-layanan", "empty-layanan");

/* ---------- Kartu fungsi ---------- */
document.getElementById("fgrid").innerHTML = fungsi
  .map(
    (f) => `
  <article class="fcard">
    <div class="ficon"><svg viewBox="0 0 24 24" aria-hidden="true">${ikonSvg[f.ikon] || ""}</svg></div>
    <h3>${esc(f.judul)}</h3>
    <p>${esc(f.desk)}</p>
  </article>`,
  )
  .join("");

/* ---------- Kontak ---------- */
document.querySelectorAll("[data-k]").forEach((el) => {
  el.textContent = kontak[el.dataset.k] || "";
});

/* ---------- Pergantian halaman lewat menu (hash) ---------- */
const judulHalaman = {
  beranda: "Layanan Kepegawaian PPNP",
  layanan: "Layanan | Kepegawaian PPNP",
  tentang: "Tentang | Kepegawaian PPNP",
};

function route() {
  let h = location.hash.replace(/^#\/?/, "") || "beranda";
  if (!(h in judulHalaman)) h = "beranda";
  document.querySelectorAll("[data-page]").forEach((p) => {
    p.hidden = p.dataset.page !== h;
  });
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const aktif = a.dataset.nav === h;
    a.classList.toggle("on", aktif);
    if (aktif) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  document.title = judulHalaman[h];
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", route);
route();

document.querySelectorAll("[data-k]").forEach((el) => {
  const isi = kontak[el.dataset.k] || "";
  el.textContent = isi;
  const angka = isi.replace(/[^\d+]/g, "");
  if (el.dataset.link === "tel" && angka.length >= 6) el.href = "tel:" + angka;
  if (el.dataset.link === "mailto") el.href = "mailto:" + isi;
});
