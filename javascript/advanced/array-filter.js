// ke 52

let data = [
    {name : 'Agus', jk : 'laki-laki'},
    {name : 'Leni', jk : 'perempuan'},
    {name : 'Friska', jk : 'waria'}
]
let prindata = data.filter(Objec =>{
    return Objec.jk === 'perempuan'
})

console.log(prindata)