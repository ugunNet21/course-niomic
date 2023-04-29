// function tugas4(){
//     var tinggi = [1,4,5,5]
//     const max = Math.max(tinggi)

//     if(tinggi === 10){
//         // return
//         console.log(max)
//     }else{
//         return "Tidak ada tinggi badan yang sama dengan yang anda masukan,"
//     }
// }
// console.log(tugas4())


// const tinggi1 = 160;
// const tinggi2 = 170;
// const tinggi3 = 165;

// if (tinggi1 > tinggi2 && tinggi1 > tinggi3) {
//   console.log("Siswa 1 memiliki tinggi badan tertinggi");
//   if (tinggi2 > tinggi3) {
//     console.log("Urutan tinggi badan siswa dari tertinggi ke terpendek: 1, 2, 3");
//   } else {
//     console.log("Urutan tinggi badan siswa dari tertinggi ke terpendek: 1, 3, 2");
//   }
// } else if (tinggi2 > tinggi1 && tinggi2 > tinggi3) {
//   console.log("Siswa 2 memiliki tinggi badan tertinggi");
//   if (tinggi1 > tinggi3) {
//     console.log("Urutan tinggi badan siswa dari tertinggi ke terpendek: 2, 1, 3");
//   } else {
//     console.log("Urutan tinggi badan siswa dari tertinggi ke terpendek: 2, 3, 1");
//   }
// } else {
//   console.log("Siswa 3 memiliki tinggi badan tertinggi");
//   if (tinggi1 > tinggi2) {
//     console.log("Urutan tinggi badan siswa dari tertinggi ke terpendek: 3, 1, 2");
//   } else {
//     console.log("Urutan tinggi badan siswa dari tertinggi ke terpendek: 3, 2, 1");
//   }
// }


    // var tinggi1 = 120
    // var tinggi2 = 130
    // var tinggi3 = 150

    // if(tinggi1 > tinggi2 && tinggi1 > tinggi3){
    //     console.log("Siswa ke 1 memiliki tinggi badan yang lebih dari siswa 2 dan 3")
    // }if(tinggi2 > tinggi3){
    //     console.log("Urutan tinggi badan siswa dari tertinggi ke terpendek: 1, 2, 3")
    // }else{
    //     console.log("Urutan tinggi badan siswa dari tertinggi ke terpendek: 1, 2, 3")
    // }

    const siswa1 = 180;
    const siswa2 = 130;
    const siswa3 = 150;
    
    const tinggi = [180,130,150]
    tinggi.sort((a, b) => b - a);
    let max;
    
    if (siswa1 >= siswa2 && siswa1 >= siswa3) {
      max = siswa1;
    } else if (siswa2 >= siswa1 && siswa2 >= siswa3) {
      max = siswa2;
    } else {
      max = siswa3;
    }
    
    let urutan = "";
    
    if (max === siswa1) {
      urutan += "Siswa 1, ";
    }
    
    if (max === siswa2) {
      urutan += "Siswa 2, ";
    }
    
    if (max === siswa3) {
      urutan += "Siswa 3, ";
    }
    console.log("Urutan tinggi badan siswa tertinggi adalah :"+urutan);
    console.log("Urutan tinggi badan siswa dari tertinggi ke terpendek: " + urutan.slice(0, -2));
    console.log("urutan nilai tertinggi ke terkecil : "+tinggi)
    