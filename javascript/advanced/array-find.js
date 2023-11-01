// ke 56
//findIndex() adalah metode pada objek array pada JavaScript yang digunakan untuk mencari index dari elemen pertama pada array yang memenuhi kondisi yang ditentukan dalam fungsi callback.

let data1 = [1,3,2,4,5,6,72]

function ind(index){
    return index >=3
}
console.log(data1.findIndex(ind))

//othe example

const numbers = [1, 3, 4, 6, 8, 9];

const index = numbers.findIndex(num => num >= 5);

console.log(index); // Output: 3
