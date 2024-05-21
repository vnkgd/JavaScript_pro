// // Работа с window
// console.log(window); //выводит всё что есть в глобальном объекте windows
// const newWindow = window.open('https://www.example.com', '_blank');
// Открывает сайт в новой вкладке браузера
// window.close(); // Закрывает текущее окно
// window.resizeTo(800, 600); // Изменяет размер окна Ha 800х600 пикселей
// window.location.href = 'https://www.example.com'; // Перенаправляет на другую страницу в той же кладке
// const windowWidth = window.innerWidth; // Получает ширину окна

// Работа с window.window
// const isWindowOpen = window.window.open('https://www.example.com') !== null;
// Проверяет, открыто ли окно
// const windowHeight = window.window.innerHeight; // Получает высоту окна
// console.log(window.window.innerHeight); // Получает высоту окна
// console.log(window.window.innerWidth); // Получает ширину окна
// window.window.location.href = 'https://www.example.com';
// Перенаправляет на другую страницу в той же вкладке

// // Работа с self
// const newWindowSelf = self.open('https://www.example.com', '_blank');
// Открывает новое окно браузера с использованием self
// self.close(); // Закрывает текущее окно с использованием self
// self.resizeTo(800, 600); // Изменяет размер окна на 800х600 пикселей с использованием self
// self.location.href = 'https://www.example.com'; // Перенаправляет на другую страницу с
// использованием Self

// Работа с frames - устаревшая технология, от неё отказались.
// const frame = frames[0]; // Получает ссылку на фрейм по индексу
// frames[0].location.href = 'https://www.example.com'; // Перенаправляет на другую страницу во фрейме
// const frameCount = frames.length; // Получает количество фреймов на странице
// const parentWindow = window.parent; // Получает доступ к родительскому окну из фрейма

// // Работа с globalThis
// const globalObject = globalThis; // Получает глобальный объект
// globalThis.newVariable = 'Hello, world!'; // Определяет новую глобальную переменную
// console.log(newVariable);
// const globalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker';
// Получает доступ к глобальным переменным из разных сред исполнения

// // Глобальная переменная var. Лучше так не делать, иначе забивается глабальный объект window
// // var
// var glob = 5;
// //function
// function increment(val) {
//     return val + 1;
// }
// console.log(window.glob); //5
// console.log(window.increment);

// //alert
// console.log(alert() === window.alert()); // true
// alert('Можно так');
// window.alert('A можно и так');


// // // const let и стрелочные функции => это лучше, чем использовать window
// const local = 5;
// let localFunc = () => 'localFunc';
// console.log(local); // 5
// console.log(localFunc()); // localFunc
// console.log(window.local); // undefined
// console.log(window.localFunc); // undefined

// // // Из прошлой части
// console.log(window.Symbol.for); // f for() { [native code] }
// console.log(window.Symbol.iterator); // Symbol(Symbol. iterator).
// console.log(window.Array.from); // f from() { [native code] }


