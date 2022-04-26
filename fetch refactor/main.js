// fetch  
// const SearchButton = document.querySelector('.search-button')
// SearchButton.addEventListener('click', function () {
//     const inputkeyword = document.querySelector('.input-keyword')
//     fetch("http://www.omdbapi.com/?apikey=bf4a8f17&s=" + inputkeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search
//             let cards = ''
//             movies.forEach(m => cards += showcards(m))
//             const movieContainer = document.querySelector('.movie-container')
//             movieContainer.innerHTML = cards


//             // ketika tombol detail di klik 
//             const modaldetailbutton = document.querySelectorAll('.modal-detail-button')
//             modaldetailbutton.forEach(btn => {
//                 btn.addEventListener('click', function () {
//                     const imdbid = this.dataset.imdbid
//                     fetch("http://www.omdbapi.com/?apikey=bf4a8f17&i=" + imdbid)
//                         .then(response => response.json())
//                         .then(m => {
//                             const moviedetail = showmoviemodal(m)
//                             const modalbody = document.querySelector('.modal-body')
//                             modalbody.innerHTML = moviedetail
//                         })
//                 })
//             })
//         })
// })

const SearchButton = document.querySelector('.search-button')
SearchButton.addEventListener('click', async function () {
    try {
        const inputkeyword = document.querySelector('.input-keyword')
        const movies = await getMovies(inputkeyword.value)
        updateUI(movies)
    } catch (error) {
        alert(error)
    }

})

function getMovies(keyword) {
    return fetch("http://www.omdbapi.com/?apikey=bf4a8f17&s=" + keyword)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(response => {
            if (response.Response === "False") {
                throw new Error(response.Error)
            }
            return response.Search
        })
}

function updateUI(movies) {
    let cards = ''
    movies.forEach(m => cards += showcards(m))
    const movieContainer = document.querySelector('.movie-container')
    movieContainer.innerHTML = cards
}

// event binding
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid
        const moviedetail = await getMoviedetail(imdbid)
        updateUIDetail(moviedetail)
    }
})

function getMoviedetail(imdbid) {
    return fetch("http://www.omdbapi.com/?apikey=bf4a8f17&i=" + imdbid)
        .then(response => response.json())
        .then(m => m)
}

function updateUIDetail(m) {
    const moviedetail = showmoviemodal(m)
    const modalbody = document.querySelector('.modal-body')
    modalbody.innerHTML = moviedetail
}

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