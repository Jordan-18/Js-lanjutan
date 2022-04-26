// $('.search-button').on('click', function () {
//     $.ajax({
//         url: "http://www.omdbapi.com/?apikey=bf4a8f17&s=" + $('.input-keyword').val(),
//         success: result => {
//             const movie = result.Search
//             let cards = ''
//             movie.forEach(m => {
//                 cards += showcards(m)
//             })
//             $('.movie-container').html(cards)
//             // ketika tombol detail di klik
//             $('.modal-detail-button').on('click', function () {
//                 $.ajax({
//                     url: "http://www.omdbapi.com/?apikey=bf4a8f17&i=" + $(this).data('imdbid'),
//                     success: m => {
//                         const moviedetail = showmoviemodal(m)
//                         $('.modal-body').html(moviedetail)
//                     },
//                     error: (e) => {
//                         console.log(e.responseText)
//                     }
//                 })
//             })
//         },
//         error: (e) => {
//             console.log(e.responseText)
//         }
//     })
// })

// fetch  
const SearchButton = document.querySelector('.search-button')
SearchButton.addEventListener('click', function () {
    const inputkeyword = document.querySelector('.input-keyword')
    fetch("http://www.omdbapi.com/?apikey=bf4a8f17&s=" + inputkeyword.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search
            let cards = ''
            movies.forEach(m => cards += showcards(m))
            const movieContainer = document.querySelector('.movie-container')
            movieContainer.innerHTML = cards


            // ketika tombol detail di klik 
            const modaldetailbutton = document.querySelectorAll('.modal-detail-button')
            modaldetailbutton.forEach(btn => {
                btn.addEventListener('click', function () {
                    const imdbid = this.dataset.imdbid
                    fetch("http://www.omdbapi.com/?apikey=bf4a8f17&i=" + imdbid)
                        .then(response => response.json())
                        .then(m => {
                            const moviedetail = showmoviemodal(m)
                            const modalbody = document.querySelector('.modal-body')
                            modalbody.innerHTML = moviedetail
                        })
                })
            })
        })
})

function showcards(m) {
    return `
        <div class="col-md-4 my-2">
            <div class="card">
                <img src="${m.Poster}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#moviedetail" data-imdbid="${m.imdbID}">Show Details</a>
                </div>
            </div>
        </div>
        `;
}

function showmoviemodal(m) {
    return `
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item">
                        <h4>${m.Title} ${m.Year}</h4>
                    </li>
                    <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                    <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                    <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                    <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
}