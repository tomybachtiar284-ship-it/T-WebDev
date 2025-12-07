import { ServicePackage } from './types';

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'landing-page',
    title: 'Landing Page Sederhana',
    shortDescription: 'Satu halaman fokus konversi untuk promosi produk atau jasa spesifik.',
    icon: 'LayoutTemplate',
    priceRange: 'Rp 1.000.000 - Rp 2.500.000',
    details: {
      structure: [
        'Hero Section (Headline, Subheading, CTA WhatsApp)',
        'Section Keunggulan (3-5 Poin)',
        'Section Testimoni',
        'Section Harga/Penawaran Spesial',
        'Footer & Kontak Sederhana'
      ],
      features: [
        'Desain Responsive (Mobile Friendly)',
        'Sticky CTA Button (WhatsApp)',
        'Form Kontak Sederhana (Email/WA)',
        'Fast Loading',
        'Integrasi Pixel Marketing (Optional)'
      ],
      dummyContent: [
        'Hero: "Tingkatkan Penjualan Anda 3x Lipat dengan Solusi Kami"',
        'Keunggulan: "Garansi 30 Hari", "Support 24/7", "Teknologi Terbaru"',
        'CTA: "Konsultasi Gratis Sekarang"'
      ],
      designStyle: 'Modern, Clean, Bold Typography, Fokus pada Kontras Warna Tombol CTA.',
      techStack: 'HTML5, Tailwind CSS, Vanilla JS (Tanpa Bloatware Framework untuk kecepatan maksimal).',
      editingGuide: 'Teks dan gambar dapat diedit langsung melalui file HTML atau menggunakan CMS ringan (optional) jika diminta.'
    }
  },
  {
    id: 'company-profile',
    title: 'Company Profile UMKM',
    shortDescription: 'Website profesional multi-halaman untuk membangun kredibilitas bisnis.',
    icon: 'Building2',
    priceRange: 'Rp 3.000.000 - Rp 5.000.000',
    details: {
      structure: [
        'Home: Ringkasan bisnis & USP',
        'Tentang Kami: Sejarah, Visi Misi, Tim',
        'Layanan/Produk: Katalog detail',
        'Galeri/Portofolio: Bukti kerja',
        'Kontak: Alamat, Peta, Form'
      ],
      features: [
        'Google Maps Embed',
        'Banner Hero Dinamis di setiap halaman',
        'SEO Basic (Meta tags, Alt text)',
        'Form Kontak terhubung ke Email',
        'Tombol WhatsApp Floating'
      ],
      dummyContent: [
        'About: "Berdiri sejak 2010, kami berkomitmen memberikan layanan terbaik..."',
        'Service: "Jasa Konsultasi", "Pengadaan Barang", "Maintenance"'
      ],
      designStyle: 'Korporat, Terpercaya, Warna Branding Konsisten (Biru/Navi/Gold), Layout Grid Rapi.',
      techStack: 'React (Gatsby/Next.js) atau WordPress (jika klien butuh CMS penuh).',
      editingGuide: 'Disediakan dashboard admin (jika WordPress) atau file konfigurasi JSON sederhana untuk mengubah teks banner dan kontak.'
    }
  },
  {
    id: 'personal-portfolio',
    title: 'Website Portofolio Pribadi',
    shortDescription: 'Tampilkan karya dan skill Anda dengan gaya minimalis dan elegan.',
    icon: 'UserCircle',
    priceRange: 'Rp 1.500.000 - Rp 3.000.000',
    details: {
      structure: [
        'Home: Intro personal & Foto profil artistik',
        'Portofolio: Grid gallery dengan filter kategori',
        'Tentang: Bio singkat, Skill bar, Link CV Download',
        'Kontak: Link Email & Social Media'
      ],
      features: [
        'Filter Kategori Proyek (React State)',
        'Lightbox / Modal untuk detail gambar proyek',
        'Smooth Scrolling Navigation',
        'Animasi Masuk (Fade-in) saat scroll',
        'Downloadable CV PDF'
      ],
      dummyContent: [
        'Intro: "Hi, Saya Andi. UI/UX Designer berbasis di Jakarta."',
        'Skill: Figma (90%), React (80%), Photoshop (85%)'
      ],
      designStyle: 'Minimalis, Modern, Whitespace Dominan, Typography Artistik.',
      techStack: 'React, Framer Motion (untuk animasi), Tailwind CSS.',
      editingGuide: 'Data proyek disimpan dalam file `data.js` terpisah. User cukup menambah entri baru di file tersebut untuk menambah portofolio.'
    }
  },
  {
    id: 'digital-invitation',
    title: 'Undangan Digital (Wedding)',
    shortDescription: 'Undangan modern, hemat biaya, dan mudah dibagikan via WhatsApp.',
    icon: 'HeartHandshake',
    priceRange: 'Rp 500.000 - Rp 1.500.000',
    details: {
      structure: [
        'Cover: Nama Pasangan & Tanggal',
        'Mempelai: Profil singkat Pria & Wanita',
        'Acara: Akad & Resepsi (Waktu & Tempat)',
        'Lokasi: Peta Google Maps',
        'RSVP & Ucapan: Form kehadiran',
        'Galeri Pre-wedding',
        'Amplop Digital (QRIS/No Rek)'
      ],
      features: [
        'Countdown Timer Real-time',
        'Backsound Autoplay (dengan kontrol)',
        'Animasi Undangan (Parallax/Fade)',
        'Tombol "Save the Date" (Google Calendar)',
        'RSVP terhubung ke Google Sheets'
      ],
      dummyContent: [
        'Romeo & Juliet',
        'Minggu, 20 Oktober 2024',
        'Ucapan: "Mohon doa restu..."'
      ],
      designStyle: 'Elegan, Romantis, Floral/Rustic Theme, Typography Script/Serif.',
      techStack: 'HTML/CSS/JS (Static) untuk kecepatan load maksimal di mobile.',
      editingGuide: 'Teks nama dan tanggal diganti di variabel config awal. Tema warna menggunakan CSS Variables.'
    }
  },
  {
    id: 'website-repair',
    title: 'Jasa Perbaikan Website',
    shortDescription: 'Optimasi dan perbaikan website error, lambat, atau tidak responsive.',
    icon: 'Wrench',
    priceRange: 'Mulai dari Rp 500.000 (Tergantung Kasus)',
    details: {
      structure: [
        'Audit Report (Sebelum)',
        'Daftar Perbaikan (Checklist)',
        'Report Hasil (Sesudah + Skor Speed)'
      ],
      features: [
        'Bug Fixing (Console errors, Broken links)',
        'Responsive Fix (Memperbaiki tampilan berantakan di HP)',
        'Speed Optimization (Image compression, Minify CSS/JS)',
        'Security Patch Sederhana',
        'Penambahan Fitur Kecil (Tombol WA)'
      ],
      dummyContent: [
        'Masalah: "Website berantakan saat dibuka di iPhone"',
        'Solusi: "Perbaikan CSS Flexbox dan Media Queries"'
      ],
      designStyle: 'Technical, Dashboard-view untuk report, Sebelum/Sesudah Comparison.',
      techStack: 'Sesuai teknologi website klien (PHP/WordPress/Node.js). Tools: Lighthouse, GTMetrix.',
      editingGuide: 'Klien menerima dokumen laporan PDF berisi log perubahan dan instruksi maintenance ke depan.'
    }
  }
];
