/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB["movies"].sort()


const deleteAd = document.querySelectorAll('.promo__adv > img')
const poster = document.querySelector('.promo__bg')
const changeGenre = document.querySelector('.promo__genre')
const sortSel = document.querySelector('.promo__interactive-list')

deleteAd.forEach(item => {
    item.remove()                  //удаление блоков рекламы, но не самого блока с рекламой
})

changeGenre.textContent = 'Драма'  //смена жанра через текстконтент метод
poster.style.backgroundImage = 'url("img/bg.jpg")';

sortSel.innerHTML = "";

movieDB.movies.forEach((film, i) => {                                   //замена листа с жанрами и их сортировка по порядку
    sortSel.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}        
            <div class="delete"></div>
        </li> `

});
