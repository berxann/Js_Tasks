function checkCB(src, callback) {
    console.log(src)
    callback();
}
checkCB('Moscow calling!', function (){
    console.log('Callback is calling!')
})

function checkCB(src, callback){
    console.log(src)
    callback(1,2)
}
checkCB('fuck yea', (a, b)=> console.log(a+b))

let str = "test"
 console.log(str[2])

if (str.indexOf("barbie") === -1) {
    console.log("такого слова/символа нет в строке")
}// -1

let strong = "hello Russia"
console.log(strong.slice(6, 12))


let string = "12, 10, 30"
let nan4ik = parseInt(string)
console.log(nan4ik)
