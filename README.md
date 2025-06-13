# CatarakSense: Deteksi Katarak dari Citra Mata secara Digital 👁️🩺

**CatarakSense** adalah sebuah platform berbasis website yang bertujuan untuk membantu masyarakat dalam melakukan deteksi dini terhadap penyakit **katarak** hanya melalui citra mata yang diunggah secara mandiri. Dengan mengintegrasikan teknologi **pemrosesan citra** dan **kecerdasan buatan**, aplikasi ini memberikan layanan deteksi awal yang cepat, mudah, dan terjangkau — terutama bagi mereka yang memiliki keterbatasan akses ke layanan medis.



## 📑 Latar Belakang
Penyakit katarak menjadi salah satu penyebab utama kebutaan di Indonesia, terutama di wilayah non-perkotaan yang minim fasilitas kesehatan mata. Pemeriksaan mata profesional memerlukan alat khusus dan biaya yang tidak sedikit, membuat banyak orang menunda atau bahkan mengabaikan pemeriksaan mata secara dini.

Melihat kondisi ini, tim kami mengajukan pertanyaan:
**Mungkinkah mendeteksi katarak hanya melalui foto mata biasa tanpa alat medis?**



## 🔍 Permasalahan yang Ditemukan
- **Biaya pemeriksaan** mata profesional cukup tinggi.
- **Akses ke dokter spesialis** mata terbatas di daerah pelosok.
- **Kurangnya edukasi dan kesadaran** masyarakat terhadap deteksi dini katarak.
- Alat deteksi otomatis yang ada **masih bergantung pada peralatan klinis**.
- Aplikasi serupa memiliki kompleksitas model yang tinggi dan **cenderung membutuhkan waktu yang lama untuk memproses hasil**



## 💡 Solusi yang Diberikan
CatarakSense hadir sebagai solusi dengan fitur utama:
- Upload gambar mata langsung dari perangkat pengguna.
- Deteksi otomatis risiko katarak dengan model AI yang telah dilatih.
- Website yang ramah pengguna, bahkan untuk kalangan awam.
- Prediksi instan tanpa perlu alat medis khusus.



## 🚀 Keunggulan Proyek
- 💻 **Praktis**: Cukup unggah foto mata untuk mendeteksi kemungkinan katarak.
- 📱 **Aksesibel**: Bisa digunakan siapa saja, kapan saja melalui website.
- 💡 **Berbasis AI**: Didukung oleh model machine learning terkini namun tetap sederhana / tidak terlalu kompleks.
- 🎯 **Akurasi Tinggi**: Akurasi mencapai 95% pada data uji internal.
- 🔒 **Tanpa Data Medis Khusus**: Hanya memerlukan foto mata biasa.



## 👨🏻‍💻👩‍💻 Teknologi yang Digunakan
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express, SQLite
- **Model AI**: VGG16, sebagai sebuah model jaringan saraf konvolusional (CNN)
- **Library ML**: Python, TensorFlow/Keras, OpenCV, NumPy, Scikit-Learn
- **API**: FastAPI untuk pengiriman gambar dan hasil prediksi
- **IDE**: Google Colab, Visual Studio Code, Kaggle, Postman
- **Collaboration Platform**: Github, Figma
- **Deployment**: Railway Deployment Tools



## ⚙️ Cara Menggunakan Aplikasi CatarakSense

Berikut langkah-langkah menggunakan platform CatarakSense:

- **1. Buka Website CatarakSense di browser favorit Anda.**
- **2. Pada halaman utama, klik tombol "Unggah Gambar Mata"**.
- **3. Pilih foto mata dari perangkat Anda.**
- **4. Klik tombol "Prediksi Sekarang".**
- **5. Tunggu beberapa detik, hasil prediksi akan muncul:**
   - ✅ *"Tidak Katarak"*
   - ⚠️ *"Kemungkinan Katarak"* → Disarankan periksa lanjutan ke dokter.
- **6. (Opsional) Anda dapat mengulangi proses untuk foto mata lain.**



## 🧪 Struktur dan Alur Proyek

- **1. Pengumpulan Dataset**: Mengambil data citra mata dari sumber publik seperti Kaggle.
- **2. Preprocessing Data**: Normalisasi, augmentasi, resize citra.
- **3. Pembuatan Model CNN**: Arsitektur dengan convolution, pooling, dan dense layers.
- **4. Pelatihan & Evaluasi Model**: Split data, training dengan optimisasi akurasi, validasi silang.
- **5. Pembuatan Website**: Desain antarmuka, integrasi API, pengujian fungsionalitas.
- **6. Integrasi & Deployment**: Penggabungan frontend, backend, dan model AI ke dalam satu sistem.
- **7. Pengujian Akhir**: Uji performa sistem secara menyeluruh sebelum publikasi.



## 📦 Output Proyek
| No | Komponen                | Deskripsi                                                       |
|----|-------------------------|-----------------------------------------------------------------|
| 1  | Dataset                 | Kumpulan >1000 foto mata (label: katarak / tidak katarak)      |
| 2  | Model AI                | Model klasifikasi VGG16 berbasis CNN                                 |
| 3  | Website CatarakSense    | Web interaktif untuk upload gambar dan lihat hasil prediksi    |
| 4  | Dokumentasi Proyek     | Panduan teknis dan manual pengguna                             |



## 🧑‍💼 Tim Pengembang
- **ML Engineers**: Alfonso Clement Sutantio, Ferdita Lusiana, Abisatya Hastarangga Pradana
- **Frontend & Backend Engineers**: Najiyatu Khasna’Ul Fauziyyah, Ratna Amaliyah Mahmudah, Dimas Yudha Saputra



## 📎 Referensi Ilmiah
- Kumar et al. (2025). *GLAAM and GLAAI: Robust Automated Cataract Detection.*
- Vadduri, M. (2025). *DAUCD: Deep Attention U-Net for Cataract Detection.*
- Pateda & Mahdang (2023). *Deteksi Dini Penyakit Katarak dengan Metode LIHAT.*



## 📬 Kontak
Untuk pertanyaan lebih lanjut, hubungi tim kami di:

📧 [alfonsocs@students.undip.ac.id]  
🌐 Website: *(URL menyusul setelah deployment)*

---

**2025, CatarakSense©️** — Menuju deteksi katarak yang cepat, murah, dan mudah untuk semua.
