const closeMovie = document.querySelector('.close-btn');
const movie = document.querySelector('.movie')
const closeSecond = document.querySelector('.close--btn');
const movieSecond = document.querySelector('.list--item');


closeMovie.addEventListener('click', () => {
    movie.classList.add('d-none');
})

closeSecond.addEventListener('click', () => {
    movieSecond.classList.add('d-none');
})
