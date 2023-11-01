// ke 5
// splice untuk menyisipkan data di dalam array
function splices(){
    let produk = ['Kaca mata','Gelang','Kalung']
    console.log(produk)
    produk.splice(2,0,'Cincin') //akan menyisipkan pada index ke 2, 0 supaya tidak terhapus
    return produk
}
console.log(splices())