// ke 50
// Metode map() pada array digunakan untuk membuat array baru dengan melakukan pemrosesan pada setiap elemen array yang ada. 
//Metode ini memerlukan sebuah fungsi callback yang akan dipanggil untuk setiap elemen array, kemudian mengembalikan nilai yang akan ditambahkan ke array baru.
//item, index, arry dapat diganti
function armap1(){
    let data = ['1','2','3','3']
    data.map((item, index, array) =>{
        console.log(item)
        console.log(index)
        console.log(array)
    })

}
console.log(armap1())