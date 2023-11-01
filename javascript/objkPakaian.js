// let tbBaju = {
//     merek : 'Conova',
//     Warna : 'Light Blue',
//     harga : 50
// }
// console.log(typeof(tbBaju.merek))
// function getData(){
//     for(let produk in tbBaju){
//         if(tbBaju[produk] >0){
//             console.log(`${produk}: ${tbBaju[produk]} tersedia`)
//         }else{
//             console.log(`${produk}: habis`)
//         }
//     }
// }
// getData()

// ===================================
// di dalam array ada objek
let tabelProduk = [
    { merek: "Nike", warna: "Hitam", ukuran: "L", jenisBaju: "T-Shirt", harga: 150000, stok: 3 },
    { merek: "Adidas", warna: "Putih", ukuran: "M", jenisBaju: "Kaos Polo", harga: 200000, stok: 0 },
    { merek: "Puma", warna: "Merah", ukuran: "S", jenisBaju: "Hoodie", harga: 300000, stok: 5 },
    { merek: "Reebok", warna: "Biru", ukuran: "XL", jenisBaju: "Tank Top", harga: 100000, stok: 2 },
    { merek: "Under Armour", warna: "Hijau", ukuran: "L", jenisBaju: "Kaos Lengan Panjang", harga: 180000, stok: 0 },
    { merek: "New Balance", warna: "Kuning", ukuran: "M", jenisBaju: "Sweatshirt", harga: 250000, stok: 1 },
    { merek: "Asics", warna: "Coklat", ukuran: "S", jenisBaju: "Kemeja", harga: 350000, stok: 4 },
    { merek: "Vans", warna: "Abu-abu", ukuran: "XL", jenisBaju: "Jaket", harga: 400000, stok: 0 },
    { merek: "Converse", warna: "Biru Tua", ukuran: "L", jenisBaju: "Kaos Polos", harga: 120000, stok: 6 },
    { merek: "Fila", warna: "Hitam", ukuran: "M", jenisBaju: "Kemeja Flanel", harga: 280000, stok: 2 }
  ]

  function tampilkanStokProduk() {
    for (let i = 0; i < tabelProduk.length; i++) {
      if (tabelProduk[i].stok > 0 ) {//jika lebih dari 0 maka tersedia
        console.log("Merek :",`${tabelProduk[i].merek} | Kategori : ${tabelProduk[i].jenisBaju} TERSEDIA`)
      } else {//selain itu, habis
        console.log("Merek :", `${tabelProduk[i].merek} | Kategori : ${tabelProduk[i].jenisBaju} HABIS`)
      }
    }
  }
  
  tampilkanStokProduk(tabelProduk.sort)
  