# Task Backend Massive

## Deskripsi

**Task Backend Massive** adalah proyek backend sederhana yang dibuat sebagai bagian dari tugas untuk program Studi Independen di Infinite Learning. Aplikasi ini dibuat menggunakan ExpressJS, Aplikasi ini menyediakan RESTful API untuk mengelola notes. Aplikasi ini memungkinkan pengguna untuk membuat, menampilkan, mengubah, dan menghapus notes yang disimpan di database MySQL.

## Fitur

1. **Membuat notes baru**: Menyimpan notes baru dengan judul, tanggal, dan isi.
2. **Membaca semua notes**: Menampilkan daftar semua notes yang ada.
3. **Membaca notes berdasarkan ID**: Mengambil detail notes tertentu berdasarkan ID.
4. **Memperbarui notes**: Memperbarui salah satu atau semua atribut notes yang ada.
5. **Menghapus notes**: Menghapus notes berdasarkan ID.

## Instalasi

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lokal Anda:

1. **Clone Repository**

```bash
git clone https://github.com/username/task-backend-massive.git
cd task-backend-massive
```

2. **Instal Dependensi** Jalankan perintah berikut untuk menginstal semua dependensi:

```bash
npm install
```

3. Konfigurasi Environment Buat file .env di root folder proyek dan isi dengan konfigurasi berikut:

```bash
APP_PORT=8080
HOST=localhost
USER=root
PASSWORD=your_password
DATABASE=notes_db
```

4. Setup Database Jalankan SQL berikut di MySQL untuk membuat database dan tabel:

```bash
CREATE DATABASE notes_db;
USE notes_db;
CREATE TABLE notes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title TEXT NOT NULL,
    datetime DATETIME NOT NULL,
    note LONGTEXT NOT NULL
);
```

5. Jalankan Server Gunakan salah satu perintah berikut:
6. Jalankan Server Gunakan salah satu perintah berikut:

   - Mode Development (menggunakan `nodemon`):

   ```bash
   npm run dev
   ```

   - Mode Production:

   ```bash
   npm start
   ```

Server akan berjalan di `http://localhost:8080/`.

## API Endpoints

Berikut adalah daftar endpoint yang tersedia:

**1. GET /notes**

- Menampilkan semua notes

**2. GET /notes/:id**

- Menampilkan detail notes berdasarkan ID.

**3. POST /notes**

- Membuat notes baru.

**4. PUT /notes/:id**

- Memperbarui notes berdasarkan ID.

**5. DELETE /notes/:id**

- Menghapus notes berdasarkan ID.
