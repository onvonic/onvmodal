# ONV Modal Library

ONV Modal adalah library modal ringan dan dapat disesuaikan untuk aplikasi web. Library ini menyediakan cara mudah untuk membuat dan mengelola dialog modal dengan berbagai ukuran, posisi, dan fitur interaktif.

## Fitur

- Beberapa ukuran modal: Default, Extra Large, Large, Small, dan Fullscreen
- Desain responsif yang mendukung semua perangkat
- Styling yang dapat disesuaikan
- Kemampuan untuk menutup modal dengan mengklik di luar atau menggunakan tombol tutup
- **Fitur Draggable**: Memungkinkan pengguna untuk memindahkan modal dengan mouse
- Perlindungan scroll untuk mencegah scrolling pada konten di bawah modal
- Dukungan fullscreen yang optimal tanpa scrollbar browser

## Instalasi

1. Unduh file `onv-modal.js` dan `onv-modal.css`.
2. Sertakan file-file tersebut dalam file HTML Anda:

```html
<link rel="stylesheet" href="path/to/onv-modal.css">
<script src="path/to/onv-modal.js"></script>
```

## Penggunaan

### Struktur HTML Dasar

Gunakan struktur HTML berikut untuk modal Anda:

```html
<button type="button" data-onv-toggle="modal" data-onv-target="#modalId">Buka Modal</button>

<div id="modalId" class="onv-modal">
    <div class="onv-modal-wrapper">
        <div class="onv-modal-content">
            <div class="onv-modal-header">
                <span class="onv-modal-title">Judul Modal</span>
                <button type="button" data-onv-dismiss="modal" class="onv-btn-close"></button>
            </div>
            <div class="onv-modal-body">
                <!-- Konten modal di sini -->
            </div>
            <div class="onv-modal-footer">
                <button type="button" class="btn btn-sm btn-primary">Submit</button>
                <button type="button" class="btn btn-sm btn-secondary" data-onv-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
```

### Ukuran Modal

Untuk menggunakan ukuran modal yang berbeda, tambahkan kelas yang sesuai ke `onv-modal-wrapper`:

- **Default**: Tidak perlu kelas tambahan
- **Extra Large**: `onv-modal-xl`
- **Large**: `onv-modal-lg`
- **Small**: `onv-modal-sm`
- **Fullscreen**: `onv-modal-fs`

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

### Modal Draggable

Untuk membuat modal yang bisa dipindahkan dengan mouse, tambahkan kelas `draggable` ke `onv-modal-wrapper`:

```html
<div class="onv-modal-wrapper onv-modal-sm draggable">
    <!-- Konten modal -->
</div>
```

Catatan untuk modal draggable:
- Fitur ini bekerja paling baik pada modal kecil dan sedang
- Header modal digunakan sebagai "handle" untuk menggeser modal
- Modal draggable tidak akan keluar sepenuhnya dari viewport
- Tidak disarankan untuk digunakan dengan modal fullscreen

### Tombol Close

Library ini menyediakan tombol close yang sudah distyle dengan ikon X yang elegan:

```html
<button type="button" data-onv-dismiss="modal" class="onv-btn-close"></button>
```

Untuk tombol close dengan warna putih (untuk header gelap), tambahkan kelas `onv-btn-close-white`:

```html
<button type="button" data-onv-dismiss="modal" class="onv-btn-close onv-btn-close-white"></button>
```

### Inisialisasi JavaScript

Modal akan diinisialisasi secara otomatis untuk elemen dengan atribut `data-onv-target`. Library secara dinamis menemukan semua tombol modal dan mengaitkannya dengan modal target yang sesuai.

Jika Anda perlu menginisialisasi modal secara manual, Anda dapat menggunakan fungsi `showModal`:

```javascript
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("yourModalId");
    showModal(modal);
});
```

### Menutup Modal

Modal dapat ditutup dengan:
1. Mengklik tombol dengan atribut `data-onv-dismiss="modal"`
2. Mengklik di luar area modal
3. Memanggil fungsi `closeModal(modalElement)` dari JavaScript

## Fitur Fullscreen

Modal fullscreen dirancang untuk mengisi seluruh viewport tanpa menimbulkan scrollbar browser. 
Hanya konten di dalam `.onv-modal-body` yang akan dapat di-scroll.

```html
<div class="onv-modal-wrapper onv-modal-fs">
    <!-- Konten modal fullscreen -->
</div>
```

## Kustomisasi

Anda dapat menyesuaikan tampilan modal dengan memodifikasi file `onv-modal.css`. 
Beberapa area umum untuk kustomisasi:

- Warna header dan footer
- Border style dan radius
- Shadow dan efek visual
- Transparansi background overlay

## Browser yang Didukung

ONV Modal mendukung semua browser modern, termasuk:

- Chrome
- Firefox
- Safari
- Edge

## Best Practices

1. Gunakan modal ukuran yang sesuai dengan konten Anda
2. Untuk modal dengan konten panjang, gunakan modal fullscreen
3. Untuk dialog singkat atau konfirmasi, gunakan modal small
4. Gunakan fitur draggable hanya untuk modal kecil dan sedang yang mungkin perlu dipindahkan
5. Pastikan tombol close dan submit memiliki label yang jelas dan aksesibel

## Troubleshooting

**Modal tidak terbuka:**
- Pastikan ID modal cocok dengan atribut `data-onv-target` pada tombol
- Periksa apakah file CSS dan JS sudah disertakan dengan benar

**Modal fullscreen memiliki scrollbar:**
- Pastikan elemen wrapper memiliki class `onv-modal-fs`
- Periksa apakah ada elemen dengan lebar tetap yang melebihi viewport

**Modal draggable tidak berfungsi:**
- Pastikan class `draggable` ditambahkan ke elemen `.onv-modal-wrapper`
- Periksa apakah header modal ada dan dapat diklik
