//ke 43

// Buatlah sebuah variabel object versi teman teman.
// Tampilkan nilai awal dari masing masing object yang teman teman buat.
// Setelah itu teman teman lakukan perubahan nilai pada salah satu object yang teman teman buat dan tampilkan kembali.

function tugas8(){
    let makanan = {
        namaMakanan : 'Karedok',
        khas : 'Sunda',
        harga : 15.000
    }
    // merubah
    makanan.namaMakanan = 'Papais'
    // menambah
    makanan.stok = 100
    console.log(makanan)
}
tugas8()