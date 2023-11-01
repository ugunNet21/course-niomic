// ke 48
// Array indexOf() adalah sebuah metode pada objek array pada JavaScript yang digunakan untuk mencari elemen tertentu dalam array 
//dan mengembalikan indeks dari elemen tersebut jika ditemukan atau mengembalikan nilai -1 jika elemen tersebut tidak ditemukan dalam array.

function arrinof(){
    let data = ["Jakarta","Medan","Surabya"] //data array
    console.log(data)
    let hasil = data.indexOf("Surabya") //menampilkan index ke 2
    return hasil
}
console.log(arrinof())