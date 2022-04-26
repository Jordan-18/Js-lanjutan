// spread Operators
//  memecah iterabels menjadi sigle elemnt

// const mhs = ['jordan', 'imam', ' yusuf'];

// console.log(...mhs[0])

// mengabungkan 2 array
// const mhs = ['jordan', 'imam', ' yusuf'];
// const dosen = ['ghifary', 'aksanuw', 'faishal']

// const orang = [...mhs, 'aji', ...dosen]
// // const orang = mhs.concat(dosen)

// console.log(orang)


// meng copy array
// const mhs = ['sandhika', 'doddy', 'erika']
// // const mhs1 = mhs
// // mhs1[0] = 'fajar'

// const mhs1 = [...mhs]
// mhs1[0] = 'fajar'
// console.log(mhs1)



// const liMHs = document.querySelectorAll('li')
// const mhs = []
// for (let i = 0; i < liMHs.length; i++) {
//     mhs.push(liMHs[i].textContent)
// }

// console.log(mhs)

// const mhs = [...liMHs].map(m => m.textContent)
// console.log(mhs)

const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')

// console.log(huruf)
nama.innerHTML = huruf