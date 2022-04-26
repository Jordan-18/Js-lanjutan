// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=bf4a8f17&s=anime",
//     success: movies => console.log(movies)
// })

// let xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(JSON.parse(xhr.response))
//         }
//     } else if (xhr.status === 404) {
//         error()
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=bf4a8f17&s=anime')
// xhr.send()

// const movies = fetch('http://www.omdbapi.com/?apikey=bf4a8f17&s=anime').then(response => response.json()).then(response => console.log(response))


// Promise
// object yang merepresentasikan keberhasilan / kegagalan sebuah event yang Asynchronous yang terjadi di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fullfiled / Rejected / pending)
//  callback ( resolve / reject/ finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditetapi!!')
//     } else {
//         reject('Ingkar Janji...')
//     }
// })

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response))

// contoh2 
// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu')
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject(' Tidak ditepati setelah beberapa waktu')
//         }, 2000);
//     }
// })

// console.log('Mulai')
// console.log(janji2.then(() => console.log(janji2)))
// janji2
//     .finally(() => console.log('Selesai Menunggu'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response))
// console.log('Selesai')


// Promise.all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutrdara: 'Jordan',
            pemeran: 'doddy, imam'
        }])
    }, 5000);
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Surabaya',
            temp: 30,
            kondisi: 'Panas Luar Biasa'
        }])
    }, 2000);
})

// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))

Promise.all([film, cuaca])
    // .then(response => console.log(response))
    .then(response => {
        const [film, cuaca] = response
        console.log(film)
        console.log(cuaca)
    })