// 2.1 execute AudioContext, hoisting & scope
// console.log(nama);
// var nama = "jordan";

// creation phase pada global context
// nama var = undifined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase








// var nama = "jordan"
// var umur = 22
// console.log(sayhay())

// function sayhay() {
//     return `Halo, Nama saya ${nama} umur ${umur}`
// }


var nama = "jordan istiqlal";
var username = "@jordanistiqlal";

function cetakURL(username) {
    var instragramURL = 'http://instagram.com/'
    return instragramURL + username;
}

console.log(cetakURL(username))