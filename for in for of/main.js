// FOr OF

// const mhs = ['jordan', 'imam', 'yusuf']

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i])
// }

// mhs.forEach(m => console.log(m))

// for (const m of mhs) {
//     console.log(m)
// }

// String 
// const nama = 'Jordan';
// for (const n of nama) {
//     console.log(n)
// }

// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke ${i +1}`)
// })

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke ${i +1}`)
// }


// nodelist

// const linama = document.querySelectorAll('.nama')
// linama.forEach(n => console.log(n.textContent))

// for (n of linama) {
//     console.log(n.innerHTML)
// }


// argument //
// function jumlahkanangka() {
//     // g bisa akses argument 
//     // return arguments.reduce((a, i) => a + i)
//     // arguments.forEach(a => jumlah += a)

//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a
//     }
//     return jumlah
// }
// console.log(jumlahkanangka(1, 2, 3, 4, 5))

const mhs = {
    nama: 'jordan',
    umur: 22,
    email: 'jordan@gmail.com'
}

for (m in mhs) {
    console.log(m)
    console.log(mhs[m])
}