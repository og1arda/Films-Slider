'use strict';

let films = [
  {
    filmName: 'The Prestige',
    IMDB: '8.5',
    filmSubject: 'Science fiction',
    link: 'https://www.imdb.com/title/tt0482571/',
    Image: 'imgs/prestij.jpg',
  },
  {
    filmName: 'Dunkirk',
    IMDB: '7.8',
    filmSubject: 'War movie',
    link: 'https://www.imdb.com/title/tt5013056/',
    Image: 'imgs/dunkirk.jpg',
  },
  {
    filmName: 'Whiplash',
    IMDB: '8.5',
    filmSubject: 'Drama',
    link: 'https://www.imdb.com/title/tt2582802/',
    Image: 'imgs/whiplash.jpg',
  },
  {
    filmName: 'The Shawshank Redemption',
    IMDB: '9.3',
    filmSubject: 'Mystery',
    link: 'https://www.imdb.com/title/tt0111161/',
    Image: 'imgs/esaret.jpg',
  },
  {
    filmName: 'A Beautiful Mind',
    IMDB: '8.2',
    filmSubject: 'Romantic',
    link: 'https://www.imdb.com/title/tt0268978/',
    Image: 'imgs/akiloyunları.jpg',
  },
];

let index = 0;
let slayCount = films.length;
let interval;

function showSlide(index) {
  document
    .querySelector('.card-img-top')
    .setAttribute('src', films[index].Image);
  document.querySelector('.card-title').textContent = films[index].filmName;
  document.querySelector('.card-text').textContent = films[index].filmSubject;
  document.querySelector('.card-imdb').textContent = films[index].IMDB;
  document
    .querySelector('.btn-warning')
    .setAttribute('href', films[index].link);
  document
    .querySelector('.card-img-top')
    .setAttribute('src', films[index].Image);
}

document.querySelector('.fa-backward').addEventListener('click', function () {
  index--;
  if (index < 0) {
    index = slayCount - 1;
  }
  showSlide(index);
});
document.querySelector('.fa-forward').addEventListener('click', function () {
  index++;
  if (index > films.length - 1) {
    index = 0;
  }
  showSlide(index);
});
