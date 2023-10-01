const btn = document.querySelectorAll('button')
const behavior = document.querySelector('a')

btn.addEventListener('mouseenter', () => {              //функция без Event объекта
   console.log('Шмекинбокс')

})

btn.addEventListener('click',(e) => {
    e.target.style.backgroundColor = 'red'

});

btn.forEach(item => {
    item.addEventListener('click',(e) => {            //использование forEach() для всех объектов в псевдомассиве,с Event в параметрах
       console.log(e.target)
    })

})


behavior.addEventListener('click', (e) =>{          //без forEach для querySelector
    e.preventDefault();
    console.log(e.target)
})

let i = 0
const restriction = (e) =>{
    console.log(e.currentTarget)                    //тут мы помещаем колбэк функцию в переменную для ее равенства и для убодства

    i++;
    if (i === 10){
        btn.removeEventListener('mouseenter',restriction)
    }
}

//нормальный такой addEventListener получился за сегодня 30.09.2023
//не хватает опций addEventListenera: capture, once, passive