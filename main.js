


// const time = 17;
// if (time < 12) {
//     console.log("Good morning")
// } else if (time >= 12 && time < 18){
//     console.log("Good day")
// } else {
//     console.log("Good night")
// }



// function Run() {
//     alert("Это ваши друзья? Советую найти побольше")
// }

// function SayHi(name){
//     console.log(`Привет ${name}! Как поживаешь?`)
// }

// SayHi("KAKASKS");


// function sum(a, b){
//     const res = a + b;
//     return res;
// }

// function min(a, b){
//     const res = a - b;
//     return res;
// }

// function doSomething(func){
//     const res = func(x = 10, y = 80)
//     console.log(res);
// }

// doSomething(sum);
// doSomething(min);

// // самовызывающаяся фуникция
// (function user(name) {
//     console.log(`Hi ${name} My friend`)
// })("MAKAS");

// // стрелочная функция

// const SayBay = (name) => {
//     console.log(`Hello ${name}! How are you?`)
// }
// SayBay("Ilya");


// const sea = (a, b) => {
//     const res = a + b;
//     console.log (res);
// }
// sea(1,1);

// const sea1 = (a, b) => {
//     const res = a + b;
//     return res;
// }

// const mark = sea1(1,1);
// console.log(mark);

// const Ball = 3;

// switch (Ball) {
//     case 1:
//         console.log("Хуево братан, тебе 1 (кол)");
//         break;
//     case 2:
//         console.log("Хуево братан, но но хоть не кол, тебе 2");
//         break;
//     case 3:
//         console.log("Красава, ты смог получить 3");
//         break;
//     case 4:
//         console.log("Задрот, у тебя 4");
//         break;
//     case 5:
//         console.log("тебе 5");
//         break;
//     default:
//         console.log("Нет такой оценки, ты меня скамишь")
//     };

// const arr = ["vav", "vava", "asaa"];
// arr.push("asaaaa");
// console.log(arr)
// arr.splice(1, 2)
// console.log(arr)

// function massa(a, b){
//     return a * b;
// }

// let vivod = massa(10, 22);
// console.log(vivod);

// /////////////////////////////////////////////
// console.log("ALL INTELECT down");


// let word = "Word";
// console.log(word);


// const userName = "Ilyaa";

// if (userName == "Ilya"){
//     console.log("Login compleated")
// } else {
//     console.log("Not")
// }


// let Vibe = 2;

// switch (Vibe) {
//     case 1: 
//         console.log("+ Vibe");
//         break;
//     case 2:
//         console.log("- Vibe");
//         break;
//     default:
//         console.log("I Don,t understand")
//         break;
//     };


// function BB(a, b){
//     const GG = a + b; 
//     return GG;
// }

// const GGG = BB("Шляпа ", "Шалава");
// console.log(GGG);

// const Massiv = ["NANA", "GAGA", "DAADA", "hagha", "agavs"];
// Massiv.push("nnnnnn");
// console.log(Massiv);
// Massiv.splice(2, 1);
// console.log(Massiv);
// console.log(Massiv[2]);

// for (let item of Massiv) {
//     console.log(item);
// }




const list = document.querySelectorAll("ul")
console.log(list)

list.forEach(function (list, index) {
    console.log(`${list} => ${index}`)
})

let gas = ["ga", "gasdg", "gasaaaaaa"];

let users;

async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return response.json();
}

const setUserHTML = user =>
`<li>
${index}
<li>`

const SetAllUsers = users => {
    const list = document.querySelector("ul")
    users.forEach(user => {
        list.innerHTML += setUserHTML(user)
    })
}

async function actions(){
    const featchedUser = await getUsers();
    if(featchedUser.lenght) {
        SetAllUsers(featchedUser)
    }
}