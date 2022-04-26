// Rest PArameter //
// function myfunc(...myargs) {
//     // return `a = ${a}, b = ${b}, myargs = ${myargs}`
//     return myargs
//     // return arguments
// }
// console.log(myfunc(1, 2, 3, 4, 5, 6))


// function jumlahkan(...angka) {
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a
//     // }

//     // return total

//     return angka.reduce((a, b) => a + b)
// }


// console.log(jumlahkan(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


// // srray dixtruction
// const kelompok1 = ['jordan', 'imem', 'imam', 'yusuf']
// const [ketua, wakil, ...anggota] = kelompok1

// console.log(anggota)

// object destructuring
// const team = {
//     pm: 'sandhika',
//     frontend: 'doddy',
//     backend: 'fajar',
//     ux: 'hendra',
//     devops: 'ferry'
// }

// const {
//     pm,
//     ...myteam
// } = team

// console.log(myteam)


// filtering
function filterby(type, ...values) {
    return values.filter(v => typeof v === type)
}

console.log(filterby('string', 1, 2, 'jordan', false, 10, true, 'doddy'))