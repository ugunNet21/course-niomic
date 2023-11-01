// ke 39 dan 40
// akan menampilkan objek
// menampilkan array dalam objek

function objek() {
    let tbBaju = {
        Merek: 'Adidas',
        Warna: 'Merah',
        Harga: [150.000]
    }
    let b = []
    for (let a = 1; a <=5; a++) {
        // console.log(tbBaju)
        // console.log(tbBaju.Harga[0]) //menampilkan index array
        console.log("Merek :",tbBaju.Merek) 
        console.log("Warna :",tbBaju.Warna) 
        console.log("Harga :",tbBaju.Harga[0]) 
    }if(b <1 && b === tbBaju){
        console.log("Produk masih bisa dibeli")
    }else{
        console.log("Produk sisa 1")
    }

}
objek()