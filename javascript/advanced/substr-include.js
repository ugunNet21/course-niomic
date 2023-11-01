// ke 31
// fungsinya untuk melakukan pengecekan atau mencocokan string di dalam sebuah variabel

function termasuk(){
    let data = 'Saya jago ngoding'
    console.log(data.includes('Jago'))//apakah ada kat jago di dalam variabel data - false
    console.log(data.includes('jago'))//apakah ada kat jago di dalam variabel data - true
    console.log(data.includes('go'))//apakah ada kat jago di dalam variabel data - true
}
termasuk()