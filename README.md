# ONV Modal Library

ONV Modal adalah library modal ringan dan dapat disesuaikan untuk aplikasi web. Library ini menyediakan cara mudah untuk membuat dan mengelola dialog modal dengan berbagai ukuran dan posisi.

## Fitur

- API sederhana untuk membuat dan mengelola modal
- Beberapa ukuran modal: Default, Extra Large, Large, Small, dan Fullscreen
- Desain responsif
- Styling yang dapat disesuaikan
- Kemampuan untuk menutup modal dengan mengklik di luar atau menggunakan tombol tutup

## Instalasi

1. Unduh file `onv-modal.js` dan `onv-modal.css`.
2. Sertakan file-file tersebut dalam file HTML Anda:

```html
<link rel="stylesheet" href="path/to/onv-modal.css">
<script src="path/to/onv-modal.js"></script>
```

## Penggunaan

### Struktur HTML

Gunakan struktur HTML berikut untuk modal Anda:

```html
<button type="button" data-onv-toggle="modal" data-onv-target="#modalId">Buka Modal</button>

<div id="modalId" class="onv-modal">
    <div class="onv-modal-wrapper">
        <div class="onv-modal-content">
            <div class="onv-modal-header">
                <span class="onv-modal-title">Judul Modal</span>
                <button type="button" data-onv-dismiss="modal">&times;</button>
            </div>
            <div class="onv-modal-body">
                <!-- Konten modal di sini -->
            </div>
            <div class="onv-modal-footer">
                <button type="button">Submit</button>
                <button type="button" data-onv-dismiss="modal">Tutup</button>
            </div>
        </div>
    </div>
</div>
```

### Ukuran Modal

Untuk menggunakan ukuran modal yang berbeda, tambahkan kelas yang sesuai ke `onv-modal-wrapper`:

- Default: Tidak perlu kelas tambahan
- Extra Large: `onv-modal-xl`
- Large: `onv-modal-lg`
- Small: `onv-modal-sm`
- Fullscreen: `onv-modal-fs`

Contoh:

```html
<div class="onv-modal-wrapper onv-modal-lg">
    <!-- Konten modal -->
</div>
```

### Modal Centered

Untuk memusatkan modal secara vertikal dan horizontal, tambahkan kelas `onv-modal-centered` ke `onv-modal-wrapper`:

```html
<div class="onv-modal-wrapper onv-modal-centered">
    <!-- Konten modal -->
</div>
```

### Inisialisasi JavaScript

Modal-modal berikut diinisialisasi secara otomatis dalam file `onv-modal.js`:

- onvModal
- onvModalXl
- onvModalLg
- onvModalSm
- onvModalFs
- onvModalPositionTop

Jika Anda perlu menginisialisasi modal secara manual (misalnya, jika Anda menambahkan modal baru ke halaman secara dinamis), Anda dapat menggunakan fungsi `initializeModal`:

```javascript
<!-- Buka Modal Kustom -->
<script>
    document.addEventListener("DOMContentLoaded", function () {
        var modal = document.getElementById("onvModal");
        modal.style.display = "block";
    });
</script>
```

Ganti `'#modalId'` dengan selector untuk tombol buka modal Anda, dan `'modalId'` dengan ID modal Anda.

### Membuka Modal Secara Otomatis

Jika Anda ingin modal terbuka secara otomatis saat halaman dimuat, Anda dapat menambahkan script berikut ke HTML Anda:

```html
<script>
    document.addEventListener("DOMContentLoaded", function() {
        var modal = document.getElementById("yourModalId");
        modal.style.display = "block";
    });
</script>
```

Ganti `"yourModalId"` dengan ID modal yang ingin Anda buka secara otomatis.

## Kustomisasi

Anda dapat menyesuaikan tampilan modal dengan memodifikasi file `onv-modal.css`. File ini mencakup komentar untuk membantu Anda mengidentifikasi berbagai bagian untuk styling.

## Browser yang Didukung

ONV Modal mendukung semua browser modern, termasuk:

- Chrome
- Firefox
- Safari
- Edge

## Lisensi

[Sertakan informasi lisensi yang Anda pilih di sini]

## Kontribusi

[Sertakan informasi tentang bagaimana orang lain dapat berkontribusi pada proyek Anda, jika berlaku]

## Dukungan

[Berikan informasi tentang cara pengguna dapat mendapatkan dukungan atau melaporkan masalah]