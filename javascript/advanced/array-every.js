// ke 53

//Fungsi every() pada JavaScript digunakan untuk mengecek apakah semua elemen dalam sebuah array memenuhi kondisi tertentu. 
//Fungsi ini akan mengembalikan nilai boolean true jika semua elemen pada array memenuhi kondisi, dan akan mengembalikan false jika minimal satu elemen tidak memenuhi kondisi.

// let produk = [
//     {
//         name: 'monitor',
//         qty: 10,
//         stok: 'tersedia',

//     }
// ]
// console.log(produk.every(data => data.name === 'monitor'))

const numbers = [2, 4, 6, 8];

// Memeriksa apakah semua elemen pada array bernilai genap
const allEven = numbers.every(function(number) {
  return number % 2 === 0;
});

console.log(allEven); // true
