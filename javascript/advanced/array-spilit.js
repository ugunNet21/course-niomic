// ke 47
// Array split() adalah metode bawaan pada objek String dalam JavaScript yang digunakan untuk memisahkan string menjadi array substring dengan memecah string ke dalam array. 
//Metode ini mengambil satu argumen yang berupa string pemisah dan mengembalikan array substring.

// function split(){
//     let data = 'Ini adalah kalimat contoh'
//     let data2 = ('10','11')
//     let data3 = ('1,2,3,4,5')
//     console.log(data.split()) //normal
//     console.log(data2.split('1')) //split dengan 1
//     console.log(data3.split(',')) //split dengan koma
// }
// split()

function split2(){
    let data = "Saya sangat senang bermain komputer"
    let hasil = data.split(" ") //ini akan memberikan koma
    return hasil
}
console.log(split2())