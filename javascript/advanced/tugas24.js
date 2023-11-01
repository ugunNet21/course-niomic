// ke 59

const array = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

// Sebelumnya
console.log("Sebelumnya:", array);

// Ascending
const ascendingArray = array.sort((a, b) => a - b);
console.log("Ascending:", ascendingArray);

// Descending
const descendingArray = array.sort((a, b) => b - a);
console.log("Descending:", descendingArray);

// Reverse
const reversedArray = array.reverse();
console.log("Reverse:", reversedArray);

