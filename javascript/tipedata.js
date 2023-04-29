// mengecek jenis tipe data
// mengecek perbedaan === dan ==

// video 24
function tipedata(){
    const data = 3
    console.log(typeof(data))

    if(data === 2){
        return 'Sukses'
    }else{
        return 'Gagal'
    }
}
console.log(tipedata()) //benar
console.log(tipedata) //salah

// penjelsan di atas adalah:
// pada fungsi tipedata, cek typedata pada const data
// jika data sama dengan === 2 atau adalah string / number , tampilkan sukses. jika bukan, tampilkan gagal
// jika inputan variabel berbeda dengan kondisi pada if maka akan gagal dan mengikuti jenis tipedata nya