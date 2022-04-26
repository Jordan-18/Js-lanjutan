// destrucruting variabel / assisgement

// destructuring Array //

// const perkenalan = ['halo', 'nama', 'saya', 'Jordan'];

// const [salam, satu, dua, nama] = perkenalan;

// skip array //
// const [salam, , , nama] = perkenalan;

// console.log(nama);


// swap items //
// let a = 1
// let b = 2
// [a, b] = [b, a];
// console.log(a)

// return value pada function //
// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba()
// console.log(a)

// rest parameter //
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(values)


// Destructuring Object //
// const mhs = {
//     nama: 'Jordan Istiqlal',
//     umur: 22
// }

// const {
//     nama,
//     umur
// } = mhs

// console.log(nama)

// assigment tanpa deklarasi object //
// ({nama,umur} = {nama: 'Jordan Istiqlal',umur: 22})

// console.log(nama)

// assigemnt ke variabel baru //
// const mhs = {
//     nama: 'Jordan Istiqlal',
//     umur: 22
// }

// const {nama: n,umur: u} = mhs

// console.log(n)

// memebrikan  dafault value //
// const mhs = {
//     nama: 'Jordan Istiqlal',
//     umur: 22,
//     email: 'jordan@gmail.com'
// }

// const {
//     nama,
//     umur,
//     email = 'email@default.com'
// } = mhs

// console.log(email)


// rest parameter //
// const mhs = {
//     nama: 'Jordan Istiqlal',
//     umur: 22,
//     email: 'jordan@gmail.com'
// }

// const {
//     nama,
//     ...values
// } = mhs

// console.log(values)

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id: 123,
//     nama: 'Jordan Istiqlal',
//     umur: 22,
//     email: 'jordan@gmail.com'
// }

// function getid({id}) {
//     return id;
// }


// console.log(getid(mhs))