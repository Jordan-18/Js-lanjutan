// templete Literal / templete String

const name = 'Jordan'
const umur = 22

// embedded
// console.log(`Hai ${name} apakah benar umur anda ${umur} tahun?`)

// embendded Expression
// console.log(`${1+1}`)

// const x = 9
// console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'} `)


// HTML Fragment
const mhs = {
    name: 'Jordan Istiqlal',
    umur: 22,
    nim: '3920186110295',
    email: 'jordanistiqlal18@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.name}</h2>
    <span class="nrp">${mhs.nim}</span>
</div>
`;

console.log(el)