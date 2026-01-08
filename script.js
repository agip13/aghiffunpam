// Data Materi Kuliah (Array of Objects)
// Kamu bisa menambahkan materi baru di sini dengan mudah.
const materiKuliah = [
    {
        id: 1,
        pertemuan: 1,
        judul: "Sejarah dan Kedudukan Bahasa Indonesia",
        preview: "Mempelajari asal-usul bahasa Indonesia dari bahasa Melayu serta fungsinya sebagai bahasa nasional.",
        isi: `
            <p><strong>A. Sejarah Singkat</strong><br>
            Bahasa Indonesia lahir pada tanggal 28 Oktober 1928. Pada saat itu, para pemuda dari berbagai pelosok Nusantara berkumpul dalam Kerapatan Pemuda dan berikrar (Sumpah Pemuda).</p>
            <p><strong>B. Kedudukan Bahasa Indonesia</strong><br>
            1. Sebagai Bahasa Nasional (dipakai dalam pergaulan antarsuku).<br>
            2. Sebagai Bahasa Negara (dipakai dalam administrasi pemerintahan).</p>
        `
    },
    {
        id: 2,
        pertemuan: 2,
        judul: "Ejaan Bahasa Indonesia (EBI)",
        preview: "Memahami aturan penulisan huruf kapital, tanda baca, dan penulisan kata serapan yang benar.",
        isi: `
            <p><strong>Penggunaan Huruf Kapital:</strong><br>
            Huruf kapital dipakai sebagai huruf pertama awal kalimat, nama orang, nama geografi, dan nama bangsa.</p>
            <p><strong>Penulisan Kata Depan:</strong><br>
            Kata depan 'di', 'ke', dan 'dari' ditulis terpisah dari kata yang mengikutinya, kecuali di dalam gabungan kata yang sudah lazim dianggap sebagai satu kata seperti 'kepada' dan 'daripada'.</p>
        `
    },
    {
        id: 3,
        pertemuan: 3,
        judul: "Diksi (Pilihan Kata)",
        preview: "Mempelajari ketepatan pemilihan kata untuk mengungkapkan gagasan agar memperoleh efek tertentu.",
        isi: `
            <p><strong>Syarat Ketepatan Diksi:</strong><br>
            1. Membedakan makna denotasi dan konotasi.<br>
            2. Membedakan kata-kata yang hampir mirip ejaannya.<br>
            3. Memahami kata umum dan kata khusus.</p>
            <p>Contoh: Kata 'melihat' (umum) bisa diganti dengan 'memandang', 'menatap', atau 'melirik' (khusus) sesuai konteks.</p>
        `
    },
    {
        id: 4,
        pertemuan: 4,
        judul: "Kalimat Efektif",
        preview: "Kalimat yang dapat mengungkapkan gagasan penutur/penulisnya secara tepat sehingga dapat dipahami pendengar/pembaca.",
        isi: `
            <p><strong>Ciri-ciri Kalimat Efektif:</strong><br>
            1. <strong>Kesepadanan:</strong> Memiliki subjek dan predikat yang jelas.<br>
            2. <strong>Kepararelan:</strong> Kesamaan bentuk kata yang digunakan dalam kalimat.<br>
            3. <strong>Kehematan:</strong> Tidak menggunakan kata-kata mubazir.<br>
            4. <strong>Kelogisan:</strong> Ide kalimat dapat diterima oleh akal.</p>
        `
    },
    {
        id: 5,
        pertemuan: 5,
        judul: "Paragraf dan Pengembangan",
        preview: "Satuan bahasa yang terdiri atas beberapa kalimat yang saling berkaitan dalam satu gagasan utama.",
        isi: `
            <p><strong>Unsur Paragraf:</strong><br>
            1. Kalimat Utama (Gagasan Pokok).<br>
            2. Kalimat Penjelas.</p>
            <p><strong>Jenis Paragraf Berdasarkan Letak Kalimat Utama:</strong><br>
            - Deduktif (Awal)<br>
            - Induktif (Akhir)<br>
            - Campuran</p>
        `
    },
    {
        id: 6,
        pertemuan: 6,
        judul: "Penulisan Karya Ilmiah",
        preview: "Sistematika penulisan skripsi, makalah, dan jurnal sesuai kaidah akademik.",
        isi: `
            <p><strong>Struktur Umum Karya Ilmiah:</strong><br>
            BAB I: Pendahuluan (Latar Belakang, Rumusan Masalah).<br>
            BAB II: Landasan Teori.<br>
            BAB III: Metodologi Penelitian.<br>
            BAB IV: Pembahasan.<br>
            BAB V: Penutup (Kesimpulan & Saran).</p>
        `
    }
];

// Fungsi untuk Menampilkan Daftar Materi (Render)
const materiContainer = document.getElementById('materi-container');

function renderMateri() {
    materiContainer.innerHTML = '';
    materiKuliah.forEach(materi => {
        const card = document.createElement('div');
        card.classList.add('card');
        // Saat kartu diklik, buka modal
        card.onclick = () => openModal(materi);

        card.innerHTML = `
            <div>
                <h3>${materi.judul}</h3>
                <p class="card-preview">${materi.preview}</p>
            </div>
            <div class="card-footer">
                <span class="badge">Pertemuan ${materi.pertemuan}</span>
                <span class="read-btn">Baca Materi &rarr;</span>
            </div>
        `;
        materiContainer.appendChild(card);
    });
}

// Panggil fungsi render saat halaman dimuat
document.addEventListener('DOMContentLoaded', renderMateri);

// --- Logika Modal (Pop-up) ---
const modal = document.getElementById("materiModal");
const closeBtn = document.getElementsByClassName("close-btn")[0];

const modalJudul = document.getElementById("modal-judul");
const modalPertemuan = document.getElementById("modal-pertemuan");
const modalIsi = document.getElementById("modal-isi");

function openModal(data) {
    modalJudul.innerText = data.judul;
    modalPertemuan.innerText = `Pertemuan ${data.pertemuan}`;
    modalIsi.innerHTML = data.isi;
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Tutup modal jika klik di luar area konten
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- Logika Hamburger Menu (Mobile) ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "60px";
        navLinks.style.right = "0";
        navLinks.style.backgroundColor = "white";
        navLinks.style.width = "100%";
        navLinks.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
    }
});