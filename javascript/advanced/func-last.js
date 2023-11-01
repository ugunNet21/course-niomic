// ke 37
// berfungsi untuk mencari mirip dengan index of, hanya saja pencariannya diacri dari index akhir
function lastIn(){
    let data = 'Saya senang belajar koding'
    // console.log(data.lastIndexOf())
    console.log(data.lastIndexOf('senang'))
    console.log(data.lastIndexOf('koding',8))
}
lastIn()