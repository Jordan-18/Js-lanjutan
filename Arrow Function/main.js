// const tampilnama = function (nama) {
//     return `Halo, ${nama}`;
// }

// console.log(tampilnama('Jordan'))

// Arrow Function
// const tampilnama = (nama) => {return `Halo, ${nama}`;}

// console.log(tampilnama("Jordan"))

// Arrow Function kalo satu parameter
// implisit return
// const tampilnama = nama => `Halo, ${nama}`;

// console.log(tampilnama("Jordan istiqlal"))


// jika tanpa parameter maka harus diberi ()
// const tampilnama = () => `Halo World`;

// console.log(tampilnama())

// Function Map 
let mhs = [
    'Jordan Istiqlal', 'Imam Fauzi', 'ghifary firdaus'
]

// let jumlahhuruf = mhs.map(function (nama) {
//     return nama.length
// })

// console.log(jumlahhuruf)

// map mengunakan Arrow function
// let jumlahhuruf = mhs.map(nama => nama.length)
// console.log(jumlahhuruf)


let jumlahhuruf = mhs.map(nama => ({
    // nama: nama,
    nama,
    jumlahhuruf: nama.length
}))

console.table(jumlahhuruf)