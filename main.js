//Задание_1
/*const num1 = Math.round(5.4);
console.log(num1);
const num2 = Math.ceil(5.4);
console.log(num2);
const num3 = Math.floor(5.4);
console.log(num3);
const num4 = Math.round(5.5);
console.log(num4);
const num5 = Math.ceil(5.5);
console.log(num5);
const num6 = Math.floor(5.5);
console.log(num6);
const num7 = Math.round(5.6);
console.log(num7);
const num8 = Math.ceil(5.6);
console.log(num8);
const num9 = Math.floor(5.6);
console.log(num9);*/

//Задание_2
const now = new Date();
const options = { year: "numeric", month: "long", day: "numeric" };
const formDate = now.toLocaleDateString("ru-RU", options);
const hours = now.getHours();
const minutes = now.getMinutes();
console.log(`Сегодня ${formDate}`);
console.log(`${hours} часов ${minutes} минут`);
