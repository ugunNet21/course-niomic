// ke 35
// nested array adalah, array di dalam array

function nestedArray() {
    let dataUsia =
        [
            ["21", "25"],
            [["17", "18"]],
            ["10", "12"]
        ]
    let inisial = [
        ["A", ["AB"]],
        ["B", "BA"],
        ["C", "CA"]
    ]
    console.log("Usia sejumlah :", dataUsia.length, "Ketogori Golongan")
    // console.log("Usia :", dataUsia +[[0]])
    console.log("Daftar Usia :", dataUsia)
    console.log("Daftar Inisial :", inisial)
}
nestedArray()