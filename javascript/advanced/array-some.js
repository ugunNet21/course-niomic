// ke 54
// some() adalah sebuah metode pada objek array di JavaScript yang digunakan untuk memeriksa apakah setidaknya satu elemen dalam array memenuhi kondisi yang diberikan. 
let data = [
    {
        nama : 'Nanda',
        jk : 'Laki-laki',
        usia : 54
    },
    {
        nama : 'riki',
        jk : 'Laki-laki',
        usia : 54
    },
    {
        nama : 'Riska',
        jk : 'perempuan',
        usia : 54
    }
]
console.log(
    data.some(obj=>obj.name === 'Laki-laki') //penulisan harus sama dengan data yan ada di dalam data array
)
console.log("===============================")
const numbers = [1, 2, 5, 7, 9]; // terdapat angka genap
const isEven = (number) => number % 2 === 0;

const hasEvenNumber = numbers.some(isEven);
console.log(hasEvenNumber); // false
