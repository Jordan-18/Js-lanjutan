// const nama = 'Jordan istiqlal'
// const umur = 22

// function coba(strings, ...values) {
//     // dengan mengabungkan str + values
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });

//     // return result;

//     // dengan menggunakan reduce
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }
// const str = coba `halo, nama saya ${nama}, saya ${umur} tahun.`

// console.log(str)


// jika ingin Highlight
const nama = 'Jordan istiqlal'
const umur = 22
const email = 'jordan@gmail.com'

function highlight(strings, ...values) {
    // dengan menggunakan reduce
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}
const str = highlight `halo, nama saya ${nama}, saya ${umur} tahun. dan email saya ${email}`

document.body.innerHTML = str