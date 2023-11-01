
// video ke 30
// nested loop atau perulangan bersarang adalah konsep perulangan bersarang yang digunakan melakukan pengulangan di dalam pengulangan 

// for (var a =0; a <10; ){
//     a++
//     console.log("ini a ke :", a)
//     for (var b =3; b <10;){
//         b++
//         console.log("ini b ke :", b)
//     }
//     console.log("")
// }

const matriksA = [[1, 2], [3, 4]];
const matriksB = [[5, 6], [7, 8]];
const hasil = [];

for (let i = 0; i < matriksA.length; i++) {
  hasil[i] = [];
  for (let j = 0; j < matriksB[0].length; j++) {
    let sum = 0;
    for (let k = 0; k < matriksA[0].length; k++) {
      sum += matriksA[i][k] * matriksB[k][j];
    }
    hasil[i][j] = sum;
  }
}

console.log(hasil); // Output: [[19, 22], [43, 50]]
