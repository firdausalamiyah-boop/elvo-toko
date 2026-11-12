/* kredit-maliki: Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id. Lisensi MIT + wajib atribusi (lihat LICENSE). */
/* =========================================================
   PENGATURAN TOKO & DATA PRODUK — cukup ubah berkas ini.
   ========================================================= */
window.TOKO = {
  nama: (window.TEMA && TEMA.nama) || 'elvo puding', // nama toko diambil dari tema.js
  slogan: 'makanan puding enak, dibuat santai',
  // Nomor WhatsApp format internasional tanpa + dan tanpa spasi (62 = Indonesia)
  wa: '6282264621278',
  mataUang: 'Rp',
  // Ongkir sederhana per kota (rupiah). "Ambil di toko" = 0.
  ongkir: [
    { kota: 'Ambil di toko', biaya: 0 },
     { kota: 'Ongkos kirim', biaya:10000},
    { kota: 'Kota lain (cek ongkir via chat)', biaya: 0, tanya: true }
  ],
  gratisOngkirMin: 0, // belanja >= angka ini gratis ongkir (0 = nonaktif)
  // OPSIONAL: ambil produk dari Google Sheet (File → Bagikan → Publikasikan ke web → CSV).
  // Kolom: id,nama,kategori,harga,hargaCoret,deskripsi,varian,gambar,stok,label
  // varian: "Ukuran:S,M,L;Warna:Hitam,Putih"   gambar: url1|url2 (kosongkan = gambar ilustrasi)
  sheetCSV: '',
  // LOGO & FOTO — ganti cukup timpa berkas di img/ atau ubah path di sini.
  logo: 'img/logo.svg',              // tampil di header; kosongkan '' = inisial nama toko
  fotoKosong: 'puding-coklat.webp'  // dipakai bila produk tanpa gambar / foto gagal dimuat
};

/* Gambar: isi dengan URL foto (mis. "img/kaos-1.jpg") ATAU objek ilustrasi
   { bentuk: 'kaos'|'tote'|'mug'|'topi'|'botol'|'buku'|'lilin'|'tas'|'tatakan', warna: '#hex', aksen: '#hex' }. */
window.PRODUK = [
  {
    id: 'puding coklat', nama: 'puding coklat', kategori: 'puding', harga: 5000, label: 'Terlaris', stok: 10,
    deskripsi: 'puding coklat lembut di mulut.',
    varian: [{ nama: 'Ukuran', opsi: ['cup 120','cup 200'], tambah: {'Cup 200 ml': 5000 } }],
   gambar: ['puding-coklat.webp']
  },
  {
    id: 'tote-kanvas', nama: 'Tote Bag Kanvas Tebal', kategori: 'Tas', harga: 65000, stok: 25,
    deskripsi: 'Kanvas 12 oz dengan saku dalam dan resleting. Muat laptop 14 inci, tali panjang nyaman di bahu.',
    varian: [{ nama: 'Warna', opsi: ['Natural', 'Hitam'] }],
    gambar: [{ bentuk: 'tote', warna: '#e6d8bd', aksen: '#b4532a' }, { bentuk: 'tote', warna: '#262626', aksen: '#e6d8bd' }]
  },
  {
    id: 'mug-keramik', nama: 'Mug Keramik Glasir', kategori: 'Dapur', harga: 75000, label: 'Baru', stok: 18,
    deskripsi: 'Mug keramik buatan tangan, glasir food grade. Kapasitas 300 ml, aman untuk microwave.',
    varian: [{ nama: 'Warna', opsi: ['Terakota', 'Biru Laut', 'Putih Gading'] }],
    gambar: [{ bentuk: 'mug', warna: '#b4532a', aksen: '#f2e8d5' }, { bentuk: 'mug', warna: '#2f5d7c', aksen: '#f2e8d5' }, { bentuk: 'mug', warna: '#efe6d2', aksen: '#b4532a' }]
  },
  {
    id: 'topi-corduroy', nama: 'Topi Corduroy', kategori: 'Pakaian', harga: 79000, stok: 12,
    deskripsi: 'Topi bahan corduroy lembut dengan strap kuningan yang bisa diatur. Satu ukuran untuk dewasa.',
    varian: [{ nama: 'Warna', opsi: ['Cokelat', 'Hijau Zaitun', 'Krem'] }],
    gambar: [{ bentuk: 'topi', warna: '#7a4b2a', aksen: '#e7c9a0' }, { bentuk: 'topi', warna: '#5f6b3a', aksen: '#f2e8d5' }]
  },
  {
    id: 'botol-minum', nama: 'Botol Minum Stainless 600 ml', kategori: 'Dapur', harga: 119000, hargaCoret: 139000, stok: 30,
    deskripsi: 'Dinding ganda, dingin 24 jam dan panas 12 jam. Tutup anti tumpah, muat di cup holder mobil.',
    varian: [{ nama: 'Warna', opsi: ['Hijau', 'Pasir', 'Hitam'] }],
    gambar: [{ bentuk: 'botol', warna: '#3f5b45', aksen: '#f2e8d5' }, { bentuk: 'botol', warna: '#d8c3a0', aksen: '#3f5b45' }]
  },
  {
    id: 'buku-catatan', nama: 'Buku Catatan Kertas Daur Ulang', kategori: 'Alat Tulis', harga: 45000, label: 'Ramah lingkungan', stok: 50,
    deskripsi: 'Sampul karton tebal, 120 halaman kertas daur ulang 100 gsm. Jilid benang, bisa terbuka rata.',
    varian: [{ nama: 'Isi', opsi: ['Polos', 'Bergaris', 'Titik'] }, { nama: 'Ukuran', opsi: ['A6', 'A5'], tambah: { A5: 15000 } }],
    gambar: [{ bentuk: 'buku', warna: '#b4532a', aksen: '#f2e8d5' }, { bentuk: 'buku', warna: '#2f5d7c', aksen: '#f2e8d5' }, { bentuk: 'buku', warna: '#d8c3a0', aksen: '#262626' }]
  },
  {
    id: 'lilin-aroma', nama: 'Lilin Aromaterapi Soy Wax', kategori: 'Rumah', harga: 69000, stok: 0,
    deskripsi: 'Lilin soy wax dengan sumbu katun, durasi bakar ±25 jam. Wangi lembut, tidak bikin pusing.',
    varian: [{ nama: 'Aroma', opsi: ['Lavender', 'Kopi', 'Sereh'] }],
    gambar: [{ bentuk: 'lilin', warna: '#efe6d2', aksen: '#7a4b2a' }, { bentuk: 'lilin', warna: '#cfd8c6', aksen: '#3f5b45' }]
  },
  {
    id: 'tas-selempang', nama: 'Tas Selempang Mini', kategori: 'Tas', harga: 135000, stok: 9,
    deskripsi: 'Muat HP, dompet, dan kunci. Bahan kanvas waxed tahan cipratan air, tali bisa diatur.',
    varian: [{ nama: 'Warna', opsi: ['Hitam', 'Zaitun', 'Cokelat'] }],
    gambar: [{ bentuk: 'tas', warna: '#262626', aksen: '#c99a5b' }, { bentuk: 'tas', warna: '#5f6b3a', aksen: '#e7c9a0' }, { bentuk: 'tas', warna: '#7a4b2a', aksen: '#f2e8d5' }]
  },
  {
    id: 'piring-rotan', nama: 'Tatakan Gelas Rotan (isi 4)', kategori: 'Rumah', harga: 39000, stok: 60,
    deskripsi: 'Anyaman rotan asli diameter 10 cm. Menyerap embun gelas dan bikin meja makin hangat.',
    varian: [],
    gambar: [{ bentuk: 'tatakan', warna: '#c99a5b', aksen: '#7a4b2a' }, { bentuk: 'tatakan', warna: '#a87a45', aksen: '#f2e8d5' }]
  }
];
