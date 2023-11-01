// ke 45
function objek(){
    let data = {
        a : halo(), //ini adalah fungsi di dalam objek
    }

    console.log(data.a)
}

function halo(){ //dipanggil oleh fungsi halo
    return "hallo,"
}

objek()