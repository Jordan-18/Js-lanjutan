// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai ')
//     }, 2000);
// })
// coba.then(() => console.log(coba))


function cobapromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai ')
            }, 2000);
        } else {
            reject('kelamaan')
        }
    })
}

// const coba = cobapromise()
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba))


async function cobaasych() {
    try {
        const coba = await cobapromise()
        console.log(coba)
    } catch (error) {
        console.log(error)
    }
}

cobaasych()