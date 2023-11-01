// ke 57
// reduceRight() adalah metode pada array di JavaScript yang berfungsi untuk mengurangi setiap elemen dalam array menjadi sebuah nilai tunggal dari kanan ke kiri (dari elemen terakhir ke elemen pertama).

const numbers = [5, 10, 15, 20]; //akan menjumlahkan dari kanan ke kiri

const result = numbers.reduceRight(function(total, currentValue) {
  return total + currentValue;
});

console.log(result); // Output: 50
