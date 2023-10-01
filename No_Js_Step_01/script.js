// Задача 1

const text = document.getElementById('p1')

text.createElement = 'p'
text.innerHTML = 'Этот текст был создан динамически'        //создание динамического текста на странице
text.classList.add('paragraph')

// Задача 2

const listOf = document.querySelectorAll('.links > li')



listOf.forEach((links, i) => {
    links.innerHTML = `<li>${i + 1} Ссылка 5</li>`;          //добавление нумерации элементам

});

listOf.forEach((item, i) =>{
    item.classList.add('list-item')          //добавление класса list-item каждому li объекту

})