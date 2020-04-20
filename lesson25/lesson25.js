// Завдання 1 - Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

let n1 = prompt("Введіть перше число");
let n2 = prompt("Введіть друге число");

function task1(a, b) {
    if (n1 < n2) {
        return -1;
    } else if (n1 == n2) {
        return 0;
    } else(n1 > n2)
        return 1;
}
alert(task1(n1, n2));

// Завдання 2 - Написать функцию, которая вычисляет факториал переданного ей числа.

let n = prompt("Введіть число для обчислення факторіала");

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else
        return (n * factorial(n - 1));
}

alert(factorial(n));

// Завдання 3 - Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

let a = prompt("Введіть перше число");
let b = prompt("Введіть друге число");
let c = prompt("Введіть третє число");

function concat(a, b, c) {
    alert(a.concat(b, c));
}
concat(a, b, c);

// Чому якщо викликати функцію concat(); - вона не працює?

// Завдання 4 - Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

let num1 = +prompt("Введіть перше значення");
let num2 = +prompt("Введіть друге значення");

function square(num1, num2) {
    if (num1 !== 0 && num2 !== 0) return num1 * num2;
    else if (num1 == 0) return num2 * num2;
    else if (num2 == 0) return num1 * num1;
    else return 'Введіть хоча б одне число.';
}
square();
alert(`Площа: ${square(num1, num2)}`);

// Чому функція працює навіть коли я її не викликаю? 
// Як правильно викликати функцію square() чи square(num1, num2)?
// Чому якщо задати змінні let num1 i let num2 всередині функції то мені видає помилку що змінні вже були задекларовані?

// Завдання 5 - Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

let num5 = +prompt("Введіть число для перевірки на досконалість");

    function task5(num5) {
        let result = 0;
        for (let i = 1; i < num5; i++) {
            if (num5 % i == 0) {
                result += i;
            }
        };

        if (result == num5) {
            alert(`Ваше число: ${num5} - досконале!`);
        } else
            alert(`Ваше число: ${num5} - недосконале!`);
    }
    task5(num5);

// Завдання 6 - Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 


// Завдання 7 - Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function task7() {
    let hours = +prompt("години");
    let minutes = +prompt("хвилини");
    let seconds = +prompt("секунди");

    hours = (!!hours) ? hours : "00";
    minutes = (!!minutes) ? minutes : "00";
    seconds = (!!seconds) ? seconds : "00";

    function concat(a, b, c) {
        alert(`${a}:${b}:${c}`);
    }
    concat(hours, minutes, seconds);
}
task7();

// Завдання 8 - Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function task8() {
    let hours = +prompt("години");
    let minutes = +prompt("хвилини");
    let seconds = +prompt("секунди");

    function concat(a, b, c) {
        alert(`секунд: ${ a * 3600 + b * 60 + c }`);
        return (a * 3600 + b * 60 + c);
    }
    concat(hours, minutes, seconds);
}
task8();

// Завдання 9 - Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

// Завдання 10 - Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»