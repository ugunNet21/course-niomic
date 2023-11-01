// ke 46
// Fungsi join() adalah sebuah method pada tipe data Array di JavaScript yang digunakan untuk 
//menggabungkan semua elemen dalam array menjadi sebuah string, dengan memisahkan setiap elemen menggunakan separator tertentu.
function join(){
    let data = ["Bandung","Jakarta","Surabaya"]
    const data2 = "," //ini dijoinkan
    let data3 =data.join(',')//bisa juga seperti ini
    const join = data.join(data2)
    console.log(join)
}
join()