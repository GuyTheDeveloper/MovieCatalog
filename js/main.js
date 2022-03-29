const closeMovie = document.querySelector('.close-btn');
const movie = document.querySelector('.movie');
const closeSecond = document.querySelector('.close--btn');
const movieSecond = document.querySelector('.list--item');


closeMovie.addEventListener('click', () => {
    movie.classList.add('d-none');
})

closeSecond.addEventListener('click', () => {
    movieSecond.classList.add('d-none');
})

const btn = document.getElementById('btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');


btn.onclick = function () {
    modal.style.display = "block";
}

closeBtn.onclick =  function () {
    modal.style.display = "none";
}

const mark = document.getElementById('bookmark');

mark.addEventListener('click', () => {
    movie.classList.remove('d-none');
})

const markSecond = document.getElementById('mark');

markSecond.addEventListener('click', () => {
    movieSecond.classList.remove('d-none');
})