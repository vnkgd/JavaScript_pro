// Задание 1
// Создать механизм для безопасного добавления метаданных к
// объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы,
// рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных)
// и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на
// консоль.

// Мой вариант - не только на запись, на чтение не получилось.

// const feedbackID = Symbol('feedback');
// const ratingID = Symbol('rating');
// const tagID = Symbol('tag');
// // console.log(feedbackID);
// // console.log(feedbackID.description);

// const books = [];

// function addMetadata(feedback, rating, tag) {
//     feedback = feedbackID.description;
//     rating = ratingID.description;
//     tag = tagID.description;
//     books.push(feedback, rating, tag)
// }

// function getMetadata(feedback, rating, tag) {
//     feedback = books.feedback;
//     rating = books.rating;
//     tag = books.tag;
//     // books.push(feedback, rating, tag)
// }

// console.log(addMetadata());
// console.log(books);
// console.log(getMetadata());

// вариант с семинара

// // Функция для добавления метаданных к объектам
// function addMetadata(book, metadataType, data) {
//     // book[metadataType] = data; // Добавить код
//     if (book[metadataType]) {
//         book[metadataType].push(data);
//     } else {
//         book[metadataType] = [data];
//     }
// }



// // Функция для извлечения метаданных из объекта
// function getMetadata(book, metadataType) {
//     return book[metadataType]; // вернуть
// }

// // Создание объекта книги и добавление метаданных
// const book = {
//     title: "Евгений Онеги, 1833",
//     author: "Пушкин"
// };

// const reviewSymbol = Symbol('review');
// const ratingSymbol = Symbol('rating');
// const tagsSymbol = Symbol('‘tags');

// //Добавление метаданных для книги
// addMetadata(book, reviewSymbol, "Отличная книга о русской эпохе!");
// addMetadata(book, ratingSymbol, 5);
// addMetadata(book, tagsSymbol, "литература");

// //Вывод (получение) метаданных для книги в консоль
// console.log(getMetadata(book, reviewSymbol)); //Отличная книга о русской эпохе!
// console.log(getMetadata(book, ratingSymbol)); //5
// console.log(getMetadata(book, tagsSymbol)); //литература

// Задание 2
// Используя Symbol.iterator, создайте объект "Библиотека", который можно
// итерировать.Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойство символ Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library.Итератор должен
// перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на
// консоль.
// // Массив книг:
// const books = [
//     { title: "1984", author: "George Orwell" },
//     { title: "Brave New World", author: "Aldous Huxley" },
//     { title: "Fahrenheit 451", author: "Ray Bradbury" }
// ];

// const books = [
//     { title: "1984", author: "George Orwell" },
//     { title: "Brave New World", author: "Aldous Huxley" },
//     { title: "Fahrenheit 451", author: "Ray Bradbury" }
// ];

// books[Symbol.iterator] = function () {
//     return {
//         current: 0,
//         to: this.length,
//         next() {
//             return this.current < this.to
//                 ? { done: false, value: books[this.current++] }
//                 : { done: true };
//         }
//     }
// }

// for (let book of books) {
//     console.log(`Название: ${book.title}, Автор: ${book.author}`);
// }


// Задание 3
// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными
// массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит
// Array.from. В этом задании вы научитесь конвертировать коллекции DOM - элементов в массивы и работать
// с ними.
// Дан код html
// <div>Element 1</div>
// <div data-active="true">Element 2</div>
// <div>Element 3</div>
// <div data-active="true">Element 4</div>
// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и
// фильтрует только те из них, у которых есть атрибут data-active.
// Выведите результат на консоль.


// const divElements = Array.from(document.querySelectorAll('div'));

// // const activeDivs = divElements.filter(element => element.dataset.active);
// // а лучше так
// const activeDivs = divElements.filter(element => element.hasAttribute('data-active'));

// activeDivs.forEach(element => {
//     console.log(element);
// });


// // Задание 4 (тайминг 20 минут)
// //  Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
// // кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// // 1. Map будет использоваться для хранения соответствия между уроком и
// // преподавателем.
// // 2. Set будет использоваться для хранения уникальных уроков, которые
// // посетил каждый студент.
// // let lessons = new Map();
// // 1. Map: урок => преподаватель ("Математика", "Смирнов"), ("История","Иванова")
// // 2. Map: студент => Set уроков
// // Проверка:
// // console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); //Смирнов
// // console.log(`Уроки Ивана: тут вывод уроков Ивана`); // Математика История

// const lessons = new Map(); //объявляем мапу. т.е. создаём пустую мапу.
// lessons.set("Математика", "Смирнов"); //добавляем ключ (Матматика) и значение (Смирнов) в мапу
// lessons.set("История", "Иванова"); //добавляем ключ и значение в мапу

// const ivanLessons = new Set().add('Математика') //создаём отдельный сет уроков Ивана по Матиматике
//     .add('История'); //создаём отдельный сет уроков Ивана по Истории

// // либо так: более читаемо
// // const ivanLessons = new Set()
// // ivanLessons.add('Математика') //создаём отдельный сет уроков Ивана по Матиматике
// // ivanLessons.add('История'); //создаём отдельный сет уроков Ивана по Истории

// const students = new Map(); //создаём мапу для всех студентов.
// students.set("Иван", ivanLessons); //указывем, что ивана вот такой набор уроков (из Set).

// console.log(`Преподаватель по Математике: ${lessons.get("Матматика")}`); // Преподаватель по Математике: Смирнов
// console.log(`Уроки Ивана: ${[...students.get("Иван")]}`); //Уроки Ивана: Матматика,История
