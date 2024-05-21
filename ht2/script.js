// // Задание 1
// Представьте, что у вас есть класс для управления библиотекой.В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список.Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг(массив) в качестве аргумента.Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

// // Решение Задания 1
// class Library {
//     #books;

//     constructor(initialBooks = []) {
//         // Проверяем, что начальный список книг не содержит дубликатов
//         const uniqueBooks = new Set(initialBooks);
//         if (uniqueBooks.size !== initialBooks.length) {
//             throw new Error('Исходный список книг содержит дубликаты');
//         }
//         this.#books = [...uniqueBooks];
//     }

//     get allBooks() {
//         return [...this.#books];
//     }

//     addBook(title) {
//         if (this.#books.includes(title)) {
//             throw new Error(`Книга "${title}" уже есть в библиотеке`);
//         }
//         this.#books.push(title);
//     }

//     removeBook(title) {
//         const index = this.#books.indexOf(title);
//         if (index === -1) {
//             throw new Error(`Книги "${title}" нет в библиотеке`);
//         }
//         this.#books.splice(index, 1);
//     }

//     hasBook(title) {
//         return this.#books.includes(title);
//     }
// }

// const library = new Library(['Book 1', 'Book 2', 'Book 3']);
// // const library = new Library(['Book 1', 'Book 2', 'Book 3', 'Book 3']);//Error: Исходный список книг содержит дубликаты
// console.log(library.allBooks); // ['Book 1', 'Book 2', 'Book 3']

// library.addBook('Book 4');
// console.log(library.allBooks); // ['Book 1', 'Book 2', 'Book 3', 'Book 4']

// library.removeBook('Book 2');
// console.log(library.allBooks); // ['Book 1', 'Book 3', 'Book 4']

// console.log(library.hasBook('Book 1')); // true
// console.log(library.hasBook('Book 5')); // false
// // library.addBook('Book 4'); //Error: Книга "Book 4" уже есть в библиотеке
// // library.removeBook('Book 2'); //Error: Книги "Book 2" нет в библиотеке


// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// const initialData = [
//     {
//         product: "Apple iPhone 13",
//         reviews: [
//             {
//                 id: "1",
//                 text: "Отличный телефон! Батарея держится долго.",
//             },
//             {
//                 id: "2",
//                 text: "Камера супер, фото выглядят просто потрясающе.",
//             },
//         ],
//     },
//     {
//         product: "Samsung Galaxy Z Fold 3",
//         reviews: [
//             {
//                 id: "3",
//                 text: "Интересный дизайн, но дорогой.",
//             },
//         ],
//     },
//     {
//         product: "Sony PlayStation 5",
//         reviews: [
//             {
//                 id: "4",
//                 text: "Люблю играть на PS5, графика на высоте.",
//             },
//         ],
//     },
// ];

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

// // Решение Задачи 2

// function addReview(text) {
//     if (text.length < 50) {
//         throw new Error("Отзыв должен содержать не менее 50 символов.");
//     } else if (text.length > 500) {
//         throw new Error("Отзыв не должен превышать 500 символов.");
//     }

//     const reviewContainer = document.getElementById("reviewContainer");
//     const reviewElement = document.createElement("div");
//     reviewElement.textContent = text;
//     reviewContainer.appendChild(reviewElement);
// }

// const submitButton = document.getElementById("submitButton");
// const reviewInput = document.getElementById("reviewInput");

// submitButton.addEventListener("click", () => {
//     const reviewText = reviewInput.value.trim();
//     if (reviewText !== "") {
//         try {
//             addReview(reviewText);
//             reviewInput.value = ""; // Очистить текстовое поле после успешного добавления отзыва
//         } catch (error) {
//             alert(error.message);
//         }
//     }
// });

// В консоли:
// Алерты:
//при вводе менее 50 символов: Отзыв должен содержать не менее 50 символов
//При вводе менее 501 символов:  Отзыв не должен превышать 500 символов. 