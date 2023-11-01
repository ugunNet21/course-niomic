// ke 6
// menghapus data di dalam array sesuai kebutuhan
function splice2(){
    let kota = ['Malang','Jawa','Surabaya','Jakarta']
    console.log(kota)
    // kota.splice(3,0,'index ke 3 dihapus (Jakarta)')//menghapus inex ke 3 sebanyak 1 data
    // kota.splice(1,1)//menghapus inex ke 1 sebanyak 1 data
    kota.splice(1,2)//menghapus inex ke 1 sebanyak 2 data
    return kota //akan mengembalikan variabel kota yang sudah di splice
}
console.log(splice2())