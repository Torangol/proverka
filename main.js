//вывод в консоль
// console.log()

//let = int


// новый стандарт let и const, в старых var

// let id = 10;
// console.log(id);
// id = 5;
// console.log(id);

// const нельзя менять, он 1

// const bar = 10;
// console.log(bar);

//у var глобальная зона видимости
// {
//     let vadas = "asa"
//     console.log(vadas)

//     var soon = "sson";
// }

// console.log(soon)

// null = ничего или пусто

// let userName = 151;
// userName = null;

// undefined - ничего не задано

// let black;
// console.log(black)

//оператор typeof
// let bob = "Bob"
// console.log(typeof bob)



const time = 17;
if (time < 12) {
    console.log("Good morning")
} else if (time >= 12 && time < 18){
    console.log("Good day")
} else {
    console.log("Good night")
}



// function Run() {
//     alert("Это ваши друзья? Советую найти побольше")
// }

function SayHi(name){
    console.log(`Привет ${name}! Как поживаешь?`)
}

SayHi("KAKASKS");


function sum(a, b){
    const res = a + b;
    return res;
}

function min(a, b){
    const res = a - b;
    return res;
}

function doSomething(func){
    const res = func(x = 10, y = 80)
    console.log(res);
}

doSomething(sum);
doSomething(min);

// самовызывающаяся фуникция
(function user(name) {
    console.log(`Hi ${name} My friend`)
})("MAKAS");

// стрелочная функция

const SayBay = (name) => {
    console.log(`Hello ${name}! How are you?`)
}
SayBay("Ilya");


const sea = (a, b) => {
    const res = a + b;
    console.log (res);
}
sea(1,1);

const sea1 = (a, b) => {
    const res = a + b;
    return res;
}

const mark = sea1(1,1);
console.log(mark);
