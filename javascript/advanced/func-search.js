// ke 38
// mencari index ke di dalam string
function cari(){
    let data = "Saya senang belajar programming"
    console.log(data.search())//akan menghasilkan data 0
    console.log(data.search("senang"))//akan mneghasillkan index string ke 5
    console.log(data.search(/senang/))//akan mneghasillkan index string ke 5
    console.log(data.search(/program/))//akan mneghasillkan index string ke 20

}
cari()