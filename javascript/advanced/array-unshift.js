// ke 7
// melakukan unshift atau menyisipkan data ke dalam array pada index awal
function getdata(){
    let kota = ['Kota A','Kota B','Kota C']
    console.log(kota)
    kota.unshift('Kota E','Kota G')//akan menambahkan kota e dan g ke dalam index array
    return kota
}
console.log(getdata())