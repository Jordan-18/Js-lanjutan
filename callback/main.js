// callback
// Synckronus callback
// function hallo(nama) {
//     alert(`hallo ${nama}`)
// }

// function tampilkanpesan(callback) {
//     const nama = prompt('Masukkan Nama :')
//     callback(nama)
// }

// tampilkanpesan(hallo)

// ashyncronus
// const mhs = [{
//         nama: 'Jordan Istiqlal',
//         semester: 5,
//         email: "Jordanistiqlal18@gmail.com",
//         jurusan: "Teknik Informatika",
//         iddosenwali: 1
//     },
//     {
//         nama: 'Imam',
//         semester: 6,
//         email: "imam@gmail.com",
//         jurusan: "Teknik Informatika",
//         iddosenwali: 2
//     },
//     {
//         nama: 'yusuf',
//         semester: 2,
//         email: "yusuf@gmail.com",
//         jurusan: "Teknik Informatika",
//         iddosenwali: 3
//     },
//     {
//         nama: 'abied',
//         semester: 8,
//         email: "abied@gmail.com",
//         jurusan: "Teknik Informatika",
//         iddosenwali: 4
//     },
// ]

// console.log("mulai")
// mhs.forEach(m => {
//     for (let i = 0; i < 1000000; i++) {
//         let date = new Date()
//     }
//     console.log(m.nama)
// })
// console.log("Selesai")

// ashyncronus callback
// function getdatamahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response)
//             }
//         } else if (xhr.status === 404) {
//             error()
//         }
//     }

//     xhr.open('get', url)
//     xhr.send()
// }

// console.log("Mulai")
// getdatamahasiswa('data.json', (result) => {
//     const mhs = JSON.parse(result)
//     mhs.forEach(m => console.log(m.nama))
// }, () => {})
// console.log("selesai")

//  JQuery
console.log('mulai')
$.ajax({
    url: 'data.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama))

    },
    error: () => {
        console.log("Error")
    }
})
console.log("Selesai")