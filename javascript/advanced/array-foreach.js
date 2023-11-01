// ke 49
// Perulangan forEach pada array adalah cara untuk melakukan iterasi atau pengulangan pada setiap elemen di dalam array. 
//Metode ini memungkinkan kita untuk mengeksekusi suatu fungsi pada setiap elemen dalam array.
function arrfor(){
    let data = ['a','b','c']
    data.forEach(function(item,index, array){
        console.log(item, index,array )
        console.log("====================")
        console.log(item )
        console.log(index)
        console.log(array )
    })
}
arrfor()