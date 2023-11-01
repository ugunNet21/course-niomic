// ke 48

// Buatlah sebuah variabel object versi teman teman.
// Tampilkan berikan nilai pada masing masing properti objek yang teman teman buat
// Setelah itu tampilkan objectnya dengan perulangan for in.

function tugas9(){
    let drinks = {
        title : 'Cocacolus',
        price : 180,
        stock : '-'
    }
    for(let a in drinks){
        console.log(drinks[a])
    }
}
tugas9()