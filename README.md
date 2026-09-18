# 🚀 Modern Full-Stack Developer & IT Programmer Portfolio

Sebuah web portofolio modern, profesional, dan responsif yang dibangun khusus untuk menampilkan profil keahlian teknis end-to-end, arsitektur sistem, dan portofolio proyek bagi seorang **Full-Stack Developer & IT Programmer**.

---

## 🎨 Konsep Desain & Visual (UI/UX)
- **Tema Visual**: Clean Dark Mode Aesthetic (`#0b0f19` & `#0d1322`) dengan kontras teks terang (`#f8fafc`).
- **Aksen Warna**: Neon Emerald (`#10b981`) dan Electric Cyan (`#06b6d4`).
- **Komponen Interaktif**: Card modern dengan efek hover halus, badge/pills kategori tech stack, timeline pengalaman kerja, code snippet terminal mockup, dan responsif di seluruh ukuran layar (Mobile-First).
- **Smooth Navigation**: Sticky header dengan efek glassmorphism (backdrop blur) dan menu navigasi responsif.

---

## 📁 Struktur Folder & Arsitektur Kode

```text
my-portfolio/
├── client/                     # Frontend Application (React + Vite + Tailwind CSS)
│   ├── public/
│   │   └── cv-Muhamad Taufiq Akbar.pdf # Sample PDF CV untuk tombol CTA
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Sticky navigation bar dengan mobile menu
│   │   │   ├── Hero.jsx        # Hero section, headline, CTA, & code terminal mockup
│   │   │   ├── About.jsx       # Narasi profesional & 3 highlight cards
│   │   │   ├── Skills.jsx      # Tech stack & developer tooling grid
│   │   │   ├── ProjectCard.jsx # Reusable project card dengan badge, problem/solution & link
│   │   │   ├── Projects.jsx    # Featured projects section dengan filter kategori
│   │   │   ├── Experience.jsx  # Career timeline & track record
│   │   │   ├── Contact.jsx     # Formulir kontak terintegrasi dengan backend Express
│   │   │   └── Footer.jsx      # Footer, quick links, copyright & watermark
│   │   ├── data/
│   │   │   ├── projectsData.js # Data proyek full-stack lengkap
│   │   │   └── skillsData.js   # Pengelompokan tech stack & tools
│   │   ├── App.jsx             # SPA Root Component
│   │   ├── main.jsx            # React 18 Entry Point
│   │   └── index.css           # Tailwind base styles & custom animations
│   ├── index.html              # HTML5 template dengan Google Fonts (Inter & JetBrains Mono)
│   ├── vite.config.js          # Konfigurasi Vite & proxy server
│   ├── tailwind.config.js      # Konfigurasi tema Tailwind CSS
│   └── package.json
│
├── server/                     # Backend API (Node.js + Express.js)
│   ├── config/
│   │   └── corsOptions.js      # Konfigurasi CORS & whitelist origin
│   ├── controllers/
│   │   └── contactController.js# Handler validasi form kontak & response JSON
│   ├── routes/
│   │   └── contactRoutes.js    # Routing endpoint /api/contact & /api/health
│   ├── .env                    # Environment variables (PORT, CLIENT_URL)
│   ├── .env.example
│   ├── index.js                # Server entry point & Express middlewares
│   └── package.json
│
├── package.json                # Root package script runner
└── README.md                   # Dokumentasi lengkap
```

---

## 🛠️ Prasyarat (Prerequisites)
Pastikan di komputer Anda telah terpasang:
- **Node.js** (versi 18.x atau lebih baru disarankan)
- **npm** (versi 9.x atau lebih baru)

---

## ⚡ Panduan Menjalankan Secara Lokal (Quick Start)

### 1. Menjalankan Backend Server (Express.js)
Buka terminal baru di folder `server`:
```bash
cd server
npm install
npm run dev
```
> Server akan berjalan di `http://localhost:5000`. Endpoint `/api/contact` dan health check `/api/health` akan langsung aktif.

### 2. Menjalankan Frontend Client (React + Vite)
Buka terminal baru kedua di folder `client`:
```bash
cd client
npm install
npm run dev
```
> Aplikasi web akan terbuka di browser Anda pada alamat: `http://localhost:5173`.

---

## 📡 Dokumentasi Endpoint API Backend

### 1. Submit Formulir Kontak
- **URL**: `/api/contact`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "Budi Santoso",
    "email": "budi@example.com",
    "subject": "Penawaran Proyek Full-Stack",
    "message": "Halo Alex, kami tertarik mendiskusikan peluang kerja sama sistem SaaS..."
  }
  ```
- **Response Sukses (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Thank you, Budi Santoso! Your message has been received successfully...",
    "data": {
      "name": "Budi Santoso",
      "email": "budi@example.com",
      "subject": "Penawaran Proyek Full-Stack",
      "receivedAt": "2026-09-16T14:15:00.000Z"
    }
  }
  ```

### 2. Health Check
- **URL**: `/api/health`
- **Method**: `GET`
- **Response (200 OK)**:
  ```json
  {
    "status": "online",
    "uptime": 124.5,
    "timestamp": "2026-09-16T14:15:00.000Z"
  }
  ```

---

## ✏️ Cara Mengkustomisasi Data Portofolio

1. **Mengubah Nama & Profil Utama**:
   - Buka `client/src/components/Hero.jsx` dan sesuaikan nama, headline peran, dan tautan sosial (GitHub, LinkedIn, Email).
   - Simpan file CV Anda di `client/public/` dan perbarui tautan tombol "Download CV".

2. **Menambah atau Mengubah Proyek**:
   - Buka `client/src/data/projectsData.js`. Anda dapat menambah atau mengedit objek proyek (judul, kategori, deskripsi problem & solution, daftar badges tech stack, fitur utama, serta link demo/github).

3. **Menyesuaikan Tech Stack & Tools**:
   - Buka `client/src/data/skillsData.js` untuk menambah bahasa pemrograman, framework, atau tools baru ke dalam kategori Frontend, Backend, Database, atau DevOps.

---

## 🚢 Panduan Deployment ke Production

- **Frontend (Client)**:
  - Jalankan `npm run build` di folder `client`.
  - Folder `dist` yang dihasilkan siap dideploy ke **Vercel**, **Netlify**, atau **Cloudflare Pages**.
- **Backend (Server)**:
  - Deploy folder `server` ke platform gratis/terjangkau seperti **Render**, **Railway**, atau **Fly.io**.
  - Pasang environment variable `PORT=5000` dan `CLIENT_URL=https://nama-domain-frontend-anda.vercel.app` pada pengaturan hosting backend Anda.
