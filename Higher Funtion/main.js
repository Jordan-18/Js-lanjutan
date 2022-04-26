// ambil semua elemen video 
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//  pilih hanya yang JS lanjutan 
let jslanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    // ambil durasi masing2 video 
    .map(item => item.dataset.duration)

    // ubah durasi => float, ubah menit ke detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return parts[0] * 60 + parts[1];
    })
    // jumlahin semua detik 
    .reduce((total, detik) => total + detik);

// ubah format jam, menit, detik
const jam = Math.floor(jslanjut / 3600);
jslanjut = jslanjut - jam * 3600;

const menit = Math.floor(jslanjut / 60);
const detik = jslanjut - menit * 60

//  simpan di DOM
const pdurasi = document.querySelector('.total-durasi');
pdurasi.textContent = `${jam} Jam , ${menit} Menit, ${detik} Detik.`;

const jmlvideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pjmlvideo = document.querySelector('.jumlah-video');
pjmlvideo.textContent = `${jmlvideo} Jumlah Video`

console.log(jmlvideo)