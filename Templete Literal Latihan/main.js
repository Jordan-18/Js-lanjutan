// 1. HTML Fragment

// const mhs = {
//     nama: 'Jordan Istiqlal',
//     umur: 22,
//     nim: '3920186110295',
//     email: 'jordanistiqlal18@gmail.com'
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim"> ${mhs.nim}</span>
// </div>`;

// 2. Looping
// const mhs = [{
//         nama: 'jordan istiqlal',
//         email: 'jordanistiqlal@gmail.com'
//     },
//     {
//         nama: 'Imam',
//         email: 'Imam@gmail.com'
//     },
//     {
//         nama: 'Yusuf',
//         email: 'Yusuf@gmail.com'
//     },
// ]


// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama }</li>
//         <li>${m.email }</li>
//     </ul>`).join('')}
// </div>`

// 3. Conditions
// tenary
// const lagu = {
//     judul: 'tetap dalam jiwa',
//     penyayi: 'isyana saravati',
//     feat: 'rayi putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyayi} ${lagu.feat ? `(feat.${lagu.feat})` : ``}</li>
//     </ul>

// </div>`

// 4. nested 
// HTML Fragemnt Bersarang

const mhs = {
    nama: 'Jordan Istiqlal',
    semester: 5,
    mtakuliah: [
        'web',
        'analisis',
        'sistem interaktif',
        'OOP'
    ],
}

function cetakmatakuliah(mtakuliah) {
    return `
    <ol>
        ${mtakuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`
}

const el = `<div>
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}</span>
    <h4>Mata kuliah</h4>
    ${cetakmatakuliah(mhs.mtakuliah)}
</div>`
document.body.innerHTML = el;