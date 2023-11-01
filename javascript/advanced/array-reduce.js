// ke 57
// reduce() adalah metode pada objek array di JavaScript yang dapat digunakan untuk melakukan iterasi pada setiap elemen dalam array dan kemudian mengembalikan nilai akhir tunggal.
// Metode ini dapat digunakan untuk berbagai tujuan, seperti menghitung jumlah, mencari nilai maksimum atau minimum, menghitung rata-rata, dan banyak lagi.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

console.log("================")
const data1 = [1, 2, 3, 4, 5]
const reducer = (acumulator, currentValue) => acumulator + currentValue

console.log(data1.reduce(reducer))