# GitHub Pages Deployment Setup

## ✅ Workflow Dibuat

File workflow untuk deployment React ke GitHub Pages telah dibuat di:
- `.github/workflows/deploy-react.yml`

## 📋 Konfigurasi yang Diperlukan

### 1. GitHub Pages Settings
Buka repository settings dan lakukan langkah berikut:

1. Pergi ke **Settings** → **Pages** (di sidebar kiri)
2. Di bawah "Build and deployment":
   - **Source**: Pilih "**GitHub Actions**" (bukan Branch)
3. Klik **Save**

### 2. Verifikasi Konfigurasi

Pastikan `frontend/package.json` memiliki konfigurasi homepage yang benar:

```json
{
  "homepage": "https://gibrigentertainment-musik.github.io/nengsyelfioktora",
  ...
}
```

Saat ini sudah dikonfigurasi dengan benar ✓

## 🚀 Cara Deploy

### Opsi 1: Push ke Main Branch (Otomatis)
```bash
git add .
git commit -m "Trigger GitHub Pages deployment"
git push origin main
```

### Opsi 2: Jalankan Manual dari GitHub UI
1. Buka repository di GitHub
2. Pergi ke **Actions** tab
3. Cari workflow: **"Deploy React to GitHub Pages"**
4. Klik **"Run workflow"** → **"Run workflow"**

## 🔍 Monitor Progress

1. Buka **Actions** tab di repository
2. Lihat workflow run berjalan
3. Tunggu hingga kedua job selesai:
   - ✓ **build** - Build aplikasi React
   - ✓ **deploy** - Deploy ke GitHub Pages

## ✨ Hasil Akhir

Setelah deployment berhasil, aplikasi Anda akan tersedia di:

👉 **https://gibrigentertainment-musik.github.io/nengsyelfioktora/**

## 🐛 Troubleshooting

### Build Gagal
- Pastikan `npm ci --legacy-peer-deps` berjalan tanpa error
- Periksa dependency di `frontend/package.json`

### Deployment Gagal
- Pastikan GitHub Pages source sudah set ke "GitHub Actions"
- Periksa permissions pada repository

### Halaman Tidak Muncul
- Tunggu 2-3 menit setelah deployment selesai
- Clear browser cache atau gunakan incognito mode
- Periksa branch protection rules

## 📝 Workflow Details

**Trigger:**
- Otomatis: Push ke branch `main`
- Manual: Klik "Run workflow" di Actions tab

**Steps:**
1. Checkout code
2. Setup Node.js 20 dengan caching
3. Install dependencies dengan `--legacy-peer-deps`
4. Build aplikasi: `npm run build`
5. Upload artifacts
6. Deploy ke GitHub Pages

---

**Status:** ✅ Ready untuk deployment
