const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 1];

// mencari angka >= 3
// // filer -> for 
// const newangka = []
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newangka.push(angka[i]);
//     }
// }

// console.log(newangka)


// filter  //
// versi biasa //
// const newangka = angka.filter(function (a) {
//     return a > 3;
// })

// proses arrow function //
// const newangka = angka.filter(a => a >= 3);

// console.log(newangka)


// map //
// kalikan semua angka dengan 2 //
// const newangka = angka.map(a => a * 2);
// console.log(newangka)


// reduce //
// jumlahkan seluruh elemen pada array //

// const newangka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue);

// console.log(newangka)



// Method Chaining //
// cari angka > 5 
// hasil * 3
// jumlahkan
const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc, cur) => acc + cur);

console.log(hasil)