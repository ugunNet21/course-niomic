// ke 32
// akan mengecek awal dan akhir daalm variabel data
function cekString(){
    let data = "Saya senang sekali membaca al-Qur'an"
    console.log(data.startsWith('Saya')) //mengecek apakah ada string Saya pada awal string di dalam  variabel data
    console.log(data.startsWith('senang',9)) //mengecek apakah ada string Saya pada awal string di dalam  variabel data pada karakter ke 9
    console.log(data.endsWith('an')) //mengecek di akhir string variabel data
    console.log(data.endsWith('a')) //mengecek di akhir string variabel data
    console.log(data.endsWith('a',3)) //mengecek di akhir string variabel data

}
cekString()