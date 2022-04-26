// destructuring 

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b]
// }

// // const [jumlah, kai] = penjumlahanperkalian(2, 3)
// const [tambah, kurang, kali, bagi] = kalkulasi(2, 8)
// console.log(tambah)


// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b,
//     }
// }

// const {
//     kurang,
//     tambah,
//     bagi,
//     kali
// } = kalkulasi(2, 6)

// console.log(kali)


const mhs1 = {
    nama: 'jordan',
    umur: 22,
    email: 'jordan@gmail.com',
    nilai: {
        tugas: 80,
        uts: 70,
        uas: 80
    }
}

// function cetakmhs(nama, umur) {
//     return `halo nama saya ${nama} umur ${umur}`
// }

// console.log(cetakmhs(mhs1.nama, mhs1.umur))


function cetakmhs({
    nama,
    umur,
    nilai: {
        tugas,
        uts,
        uas
    }
}) {
    return `halo nama saya ${nama} umur ${umur}. nilai Uas ${uas}`
}

console.log(cetakmhs(mhs1))