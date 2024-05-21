// Задание 1
// Давайте создадим класс для управления банковским счетом.В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// 1. Класс должен содержать приватное свойство #balance, которое инициализируется
// значением 0 и представляет собой текущий баланс счета.
// 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
//     Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
// ошибку.
// 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
//     Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в
// противном случае выбрасывайте ошибку.
// 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
//     Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
// ошибку.

// class BankAccount {
//     #balance = 0;
//     constructor(amount) {
//         if (amount < 0) {
//             throw new Еггог('Отрицательный баланс для иннициализации счета');
//         }
//         this.#balance = amount;
//     }

//     get balance() {//т.к. баланс это приватное свойство, изменить его можем только через Сеттер (set)
//         return this.#balance;
//     }

//     // set balance(amount) {//т.к. баланс это приватное свойство, изменить его можем только через Сеттер (set)
//     //     this.#balance = amount;
//     // }
//     // отключаем, т.к. есть возможность изменить баланс

//     deposit(cash) {
//         if (cash <= 0) {
//             throw new Error('Cyммa для депозита должна быть больше 0');
//         }
//         this.#balance += cash;
//         return this.#balance;
//     }

//     withdraw(cash) {
//         if (cash <= 0) {
//             throw new Error('Cyммa для снятия должна быть больше 0');
//         }
//         if (this.#balance - cash < 0) {
//             throw new Error('Cyммa для снятия больше суммы счета');
//         }
//         this.#balance -= cash;
//         return this.#balance;
//     }
// }

// let account = new BankAccount(500);
// account.balance = 200; //пробуем присвоить значение напрямую.
// // без set не меняет баланс, а с set меняет, отключили сеттер
// console.log(account);
// console.log(account.balance); // Выводит: 500
// account.deposit(200);
// console.log(account.balance); // Выводит: 700
// account.withdraw(100);
// console.log(account.balance); // Выбодит: 600


// Задание 2
// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
// некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
// наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
// и instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
// PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
// действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
// возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного
// пользователя и дайте соответствующий ответ.

// class User {
//     name = 'Игорь';
//     female = 'Иванов'
// }

// // console.log(User);

// class PremiumUser extends User {
//     premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
//     // Пример: установите срок действия на год вперед
// }

// // // создать RegularUser
// class RegularUser extends User {

// }

// function getAccountInfo(user) {
//     // Премиум аккаунт действителен до такой-то даты или информация отсутствует
//     // пользователь без премиум аккаунта
//     // Тип пользователя не определен"
// }
// // // Проверка

// // Создадим экземпляр класса.
// const user2 = new User();

// class User {
//     #name;
//     #family;
//     constructor(name, family) {
//         this.#name = name;
//         this.#family = family;
//     }

//     get name() {
//         return this.#name;
//     }

//     get family() {
//         return this.#family;
//     }
// }

// class RegularUser extends User {
//     constructor(name, family) {
//         super(name, family);
//     }
// }

// class PremiumUser extends User {
//     constructor(name, family) {
//         super(name, family);
//     }
//     premiumAccount = null;
//     setPremiumAccount() {
//         this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год вперед
//     }
// }

// // создать RegularUser
// function getAccountInfo(user) {
//     // Премиум аккаунт действителен до такой-то даты или информация отсутствует
//     // пользователь без премиум аккаунта
//     // Тип пользователя не определен“
//     if (user instanceof PremiumUser) {
//         //console.log(`Премиум аккаунт действителен до ${new Date(user.premiumAccount).getFullYear()}` ?? 'Информация отсутствует', user.name, user.family);
//         // // или так
//         // console.log(
//         //     new Date(user.premiumAccount).getFullYear() ?? 'Информация отсутствует',
//         //     user.name,
//         //     user.family
//         // );
//         // или так
//         console.log(
//             `${new Date(user.premiumAccount).toLocaleDateString()}` ?? 'Информация отсутствует',
//             user.name,
//             user.family
//         );
//     } else if (user instanceof RegularUser) {
//         console.log('Пользователm без премиум аккаунта', user.name, user.family);
//     } else {
//         console.log('Tип пользователя не определен');
//     }
// }

// // Проверка
// const regular = new RegularUser('Bacя', 'Иванов');
// const premium = new PremiumUser('Oля', 'Олина');
// premium.setPremiumAccount();
// const premiumLim = new PremiumUser('Поля', 'Гагарина');
// premiumLim.premiumiccount = undefined;
// getAccountInfo(regular);
// getAccountInfo(premium);
// getAccountInfo(premiumLim);


// Задание 3
// Вы создаете интерфейс, где пользователь вводит число.
// Ваша задача — проверить, является ли введенное значение числом или нет, и дать
// соответствующий ответ.
// 1. Создайте HTML - структуру: текстовое поле для ввода числа и кнопку
// "Проверить".
// 2. Добавьте место(например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку.Эта функция
// должна использовать try и catch для проверки вводимого значения


// const comment = document.querySelector('.comment');
// const btn = document.querySelector('.btn');
// const num = document.querySelector('.num');

// btn.addEventListener('click', function (e) {
//     try {
//         const inputElement = num.value;
//         if (isNaN(inputElement)) {
//             throw new Error('Это не число');
//         }
//         comment.textContent = 'Молодец';
//     } catch (error) {
//         comment.textContent = error.message;
//     }
// });


// Задание 4
// Пользователи вашего сайта могут добавлять элементы в список.Но есть условие:
// введенное значение должно содержать от 3 до 10 символов.
// 1. Создайте HTML - структуру с текстовым полем, кнопкой и списком.
// 2. Напишите функцию, которая будет добавлять элементы в список или
// генерировать исключение, если длина введенного значения не соответствует
// требованиям.

// Функция для добавления элементов в список
function addItemToList() {
    const inputField = document.getElementById('inputField');
    const value = inputField.value.trim();

    if (value.length >= 3 && value.length <= 10) {
        const list = document.getElementById('list');
        const newItem = document.createElement('li');
        newItem.textContent = value;
        list.appendChild(newItem);
        inputField.value = '';
    } else {
        throw new Error('Длина введенного значения должна быть от 3 до 10 символов.');
    }
}

// Обработчик события для кнопки
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', function () {
    try {
        addItemToList();
    } catch (error) {
        alert(error.message);
    }
});

