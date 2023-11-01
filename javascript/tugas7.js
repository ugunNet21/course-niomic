// ke 38

let tinggi = [
    [160, 120, 130, 145, 134, 155, 166, 156, 156, 133], 
    [150, 120, 160, 175, 194, 155, 146, 176, 196, 103], 
    [150, 124, 110, 185, 194, 155, 166, 156, 156, 133]
]
// for biasa
for (let a = 1; a <= tinggi.length; a++) {
    console.log("Tinggi Badan Kategori Ke :", a, tinggi[0][1])
}

// for of
for(let a of tinggi ){
    a++
    console.log("Tinggi Badan Kategori Ke :", a, tinggi[0][1])
}



//======================================================================
// let tinggiBadan = [170, 165, 172, 160, 175, 168, 171, 178, 180, 163];

// menggunakan perulangan biasa
// for (let i = 0; i < tinggiBadan.length; i++) {
//   console.log(tinggiBadan[i]);
// }

// menggunakan perulangan for of
// for (let tinggi of tinggiBadan) {
//   console.log(tinggi);
// }
