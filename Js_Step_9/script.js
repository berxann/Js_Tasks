"use strict"

const box = document.getElementById('box')
const wrap = document.querySelector('.wrapper')
const btns = document.querySelectorAll('button')               //возможности обращения к элементам страницы
const heart = document.querySelectorAll('.heart')
console.log(btns)

document.body.style.backgroundColor = 'pink'
box.style.backgroundColor = 'red';                                  //изменеие стилей через js
box.style.width = '500px'
box.style.cssText = 'background-color: gray; width: 500px'

btns[1].style.backgroundColor = 'purple'

btns.forEach(item => {
    item.style.backgroundColor = '#b5c10c'
})

const divDoc = document.createElement('div')
// const text = document.createTextNode('Это текст нод')

divDoc.classList.add('black')                                       //добавление класса объекту

btns[0].before(divDoc)                                              //позиционирование объекта с помощью before

heart[0].replaceWith(btns[0]);
// divDoc.innerText = 'Hello World'

divDoc.insertAdjacentElement('after-end', divDoc)
