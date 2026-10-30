// ================================================
// DATA PORTFOLIO RAYHAN DANDY RAMADIANSYAH
// (disesuaikan dengan isi CV)
// ================================================

export const PROFILE = {
  name: "Rayhan Dandy Ramadiansyah",
  fullName: "Rayhan Dandy Ramadiansyah",
  photo: "profile.jpg", // file ada di folder public/
  title: "Information Systems Graduate & Web Developer",
  tagline: "Menghubungkan data, sistem, dan web menjadi solusi nyata.",
  description:
    "Lulusan Sistem Informasi Universitas Gunadarma (2026) dengan IPK 3.66. Terbiasa bekerja efektif dan efisien, punya inisiatif tinggi, dapat bekerja mandiri maupun dalam tim, serta antusias mengembangkan skill dan mempelajari hal baru.",
  email: "rayhandandyy1@gmail.com",
  whatsapp: "+62 878-7115-8404",
  location: "Bekasi, Jawa Barat",
  github: "https://github.com/Silenttt8",
  linkedin: "https://linkedin.com/in/rayhandandy",
  instagram: "https://www.instagram.com/dandyrayhan_/",
  cvUrl: "CV-Rayhan-Dandy-Ramadiansyah.pdf?v=2",
  spotifyPlaylistId: "48NGluouXyjFOZvO3jXz2O", // Playlist Spotify Rayhan Dandy
  typedTexts: [
    "Information Systems Graduate",
    "Web Developer",
    "Data Enthusiast",
  ],
  education: {
    university: "Universitas Gunadarma",
    major: "Sistem Informasi",
    period: "September 2022 – Sekarang",
    gpa: "3.66 / 4.00",
    school: "SMKN 3 Bekasi — Teknik Komputer & Jaringan (2019 – 2022)",
  },
  stats: {
    gpa: "3.66",
    courses: 9,
    projects: 2,
  },
};

// ================================================
// DATA SKILLS (dari bagian "Additional Skills" di CV)
// ================================================

export const SKILLS = [
  { name: "HTML, CSS, JavaScript", icon: "🌐", color: "#e34f26" },
  { name: "Web Development", icon: "💻", color: "#8b5cf6" },
  { name: "Python", icon: "🐍", color: "#3776ab" },
  { name: "PHP", icon: "🐘", color: "#777bb4" },
  { name: "Java", icon: "☕", color: "#f89820" },
  { name: "Database & SQL", icon: "🗄️", color: "#4479a1" },
  { name: "Business Intelligence", icon: "📊", color: "#f2c811" },
  { name: "Data Preparation", icon: "🧹", color: "#06b6d4" },
  { name: "Computer Vision", icon: "👁️", color: "#ec4899" },
  { name: "Jaringan (Cisco)", icon: "🛰️", color: "#1ba0d7" },
  { name: "Microsoft Office", icon: "📝", color: "#2b7cd3" },
  { name: "Problem Solving", icon: "🧩", color: "#22c55e" },
];

// ================================================
// DATA PROJECTS (dari bagian "Academic Project & Research")
// Untuk image: letakkan file di public/projects/ lalu isi "image",
// contoh: "projects/namafile.png"
// ================================================

export const PROJECTS = [
  {
    id: 1,
    title: "AWK Sport Center — Futsal Booking Website",
    category: "Academic Research · Web App",
    description:
      "Website pemesanan lapangan futsal online agar pengguna bisa melihat info lapangan dan booking tanpa datang langsung ke lokasi.",
    longDescription:
      "Mengembangkan sistem reservasi lapangan futsal berbasis web untuk AWK Sport Center yang memungkinkan pengguna melihat jadwal/informasi lapangan dan melakukan pemesanan serta pembayaran online tanpa harus datang ke lokasi.",
    image: "projects/awk-sport-center.png",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
    emoji: "⚽",
    tags: ["PHP", "MySQL", "Bootstrap", "Web Development"],
    demoUrl: "#",
    githubUrl: "https://github.com/Silenttt8/AWK-Sport-Center",
    featured: true,
  },
  {
    id: 2,
    title: "Deteksi Penyakit Daun Jagung (YOLOv8)",
    category: "Final Project / Thesis · Computer Vision",
    description:
      "Sistem berbasis Computer Vision menggunakan YOLOv8 untuk mendeteksi penyakit pada daun jagung secara otomatis.",
    longDescription:
      "Penelitian akademik / tugas akhir Sistem Informasi yang menerapkan model deep learning YOLOv8 dan TensorFlow.js untuk mendeteksi penyakit daun jagung (Blight, Gray Leaf Spot, Common Rust, Healthy) langsung melalui antarmuka web interaktif.",
    image: "projects/deteksi-jagung.png",
    gradient: "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)",
    emoji: "🌽",
    tags: ["YOLOv8", "Computer Vision", "Python", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Silenttt8/Jagung-Deteksi",
    featured: true,
  },
];

// ================================================
// DATA COURSES & WORKSHOPS (dari bagian "Courses & Workshops")
// ================================================

export const CERTIFICATES = [
  { id: 1, name: "Creating Business Intelligence", issuer: "Course & Workshop", date: "25 Mei 2026", credential: "Business Intelligence", image: "certificates/1-business-intelligence.jpg", url: "certificates/1-business-intelligence.pdf", color: "#f59e0b" },
  { id: 2, name: "Data Preparation for Business Processes", issuer: "Course & Workshop", date: "22 Sep 2025", credential: "Data", image: "certificates/2-data-preparation.jpg", url: "certificates/2-data-preparation.pdf", color: "#06b6d4" },
  { id: 3, name: "Java for Intermediate", issuer: "Course & Workshop", date: "18 Agu 2025", credential: "Programming", image: "certificates/3-java-intermediate.jpg", url: "certificates/3-java-intermediate.pdf", color: "#f97316" },
  { id: 4, name: "Wide Area Network Using Cisco Router (Intermediate)", issuer: "Course & Workshop", date: "24 Feb 2025", credential: "Networking", image: "certificates/4-wan-cisco.jpg", url: "certificates/4-wan-cisco.pdf", color: "#3b82f6" },
  { id: 5, name: "Introduction to Wireless LAN Installation", issuer: "Course & Workshop", date: "28 Nov 2024", credential: "Networking", image: "certificates/5-wireless-lan.jpg", url: "certificates/5-wireless-lan.pdf", color: "#8b5cf6" },
  { id: 6, name: "Java Programming for Beginner", issuer: "Course & Workshop", date: "19 Agu 2024", credential: "Programming", image: "certificates/6-java-beginner.jpg", url: "certificates/6-java-beginner.pdf", color: "#ec4899" },
  { id: 7, name: "Local Area Network Using Cisco Router", issuer: "Course & Workshop", date: "19 Feb 2024", credential: "Networking", image: "certificates/7-lan-cisco.jpg", url: "certificates/7-lan-cisco.pdf", color: "#22c55e" },
  { id: 8, name: "Fundamental Desktop Programming", issuer: "Course & Workshop", date: "21 Agu 2023", credential: "Programming", image: "certificates/8-desktop-programming.jpg", url: "certificates/8-desktop-programming.pdf", color: "#a855f7" },
  { id: 9, name: "Fundamental Networking", issuer: "Course & Workshop", date: "20 Feb 2023", credential: "Networking", image: "certificates/9-fundamental-networking.jpg", url: "certificates/9-fundamental-networking.pdf", color: "#14b8a6" },
];
