// Напишите функцию generateRandomNumber(), которая возвращает Promise, выполняющийся
// через 1 секунду и резолвит случайное число от 1 до 19. Если возникла ошибка при генерации
// числа, Promise должен быть отклонен с сообщением об ошибке.

// let generateRandomNumber = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * 10) + 1;
//             if (randomNumber) {
//                 resolve(randomNumber);
//             } else {
//                 reject('Ошбика генерации случайного числа');
//             }
//         }, 1000);
//     });
// };

// generateRandomNumber()
//     .then((number) => {
//         console.log('Сгенерировано случайное число:', number);
//     })
//     .catch((error) => {
//         console.log('Ошибка:', error);
//     });
// //Сгенерировано случайное число: 4


// // Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и
// возвращает Promise, выполняющий запрос данных по указанному URL.Если запрос завершается
// успешно, Promise лолжен резолвить полученные данные.В случае ошибки запроса, Promise
// должен быть отклонен с сообщением об ошибке.

// let fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => resolve(data))
//             .catch((error) => reject('Ошибка загрузки данных'));
//     });
// };
// //https://randombig.cat/roar.json - перестала работать
// //не рабочая ссылка: https://api.example.com/data
// fetchData('https://api.coindesk.com/v1/bpi/currentprice.json')

//     .then((data) => {
//         console.log('Получены  данные:', data);
//     })
//     .catch((error) => {
//         console.log('Ошибка:', error);
//     });

// Напишите функцию checkFileExists(file), которая принимает имя файла в качестве
// аргумента и возвращает Promise, выполняющийся через 2 секунды. Promise должен
// резолвиться, если файл существует, и отклониться, если файла нет.

// let checkIfFileExists = (file) => {

// };

// let checkFileExists = (file) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const fileExists = checkIfFileExists(file);
//             if (fileExists) {
//                 resolve('Файл существует');
//             } else {
//                 reject('Файл не существует');
//             }
//         }, 2000);
//     });
// };

// checkFileExists('example.txt')
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log('Ошибка:', error);
//     });


// // then Напишите функцию calculateSum(a, 6), которая принимает два числа в качестве
// // аргументов и возвращает Promise. Promise должен быть выполнен суммой двух чисел.
// let calculateSum = (a, b) => {
//     return new Promise((resolve, reject) => {
//         const sum = a + b;
//         resolve(sum);
//     });
// };
// calculateSum(3, 7) //тут простой пример без проверки, если ввели текст вместо чисел
//     .then((result) => {
//         console.log('Cymma чисел:', result);
//     });

// Напишите функцию divideNumbers(a, b), которая принимает два числа в качестве
// аргументов и возвращает Promise. Promise должен выполнять деление первого числа на
// второе. Если второе число равно 0, Ргот15е должен быть отклонен с сообщением о
// невозможности деления на 09.
// let divideNumbers = (a, b) => {
//     return new Promise((resolve, reject) => {
//         if (b === 0) {
//             reject('Невозможно делить на 0');
//         } else {
//             resolve(a / b);
//         }
//     });
// };

// divideNumbers(10, 2)
//     .then((result) => {
//         console.log('Результат деления:', result);
//     })
//     .catch((error) => {
//         console.log('Ошибка:', error);
//     });


// // Цепочки промисов
// new Promise(function (resolve) {
//     setTimeout(() => resolve(1), 1000);
// }).then(function (result) {
//     console.log(result);
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
// }).then(function (result) {
//     console.log(result);
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
// }).then(function (result) {
//     console.log(result);
// });

// // finally
// let processData = (data) => {

// };

// let performOperation = (data) => {
//     return new Promise((resolve, reject) => {
//         // Perform the operation with the data
//         let result = processData(data);
//         // Complete the Promise
//         if (result) {
//             resolve(result);
//         } else {
//             reject('Ошибка операции');
//         }
//     }).finally(() => {
//         console.log('Операция завершена');
//     });
// };

// performOperation('example')
//     .then((result) => {
//         console.log('результат операции:', result);
//     })
//     .catch((error) => {
//         console.log('Ошибка:', error);
//     });


// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     // new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), //(3) [1, 2, 3]
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")),
//         2000)), //Error: Ошибка!
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ])
//     .then(console.log)
//     .catch(console.log);

// // будет ошибка


// Вы разрабатываете приложение, которое отправляет запросы к разным серверам и хотите
// определить, какой сервер отвечает быстрее. Напишите функцию checkServerResponse(urls),
// которая принимает массив ИВЁ-адресов в качестве аргумента и возвращает Promise. Promise
// должен быть выполнен с ИВ! -адресом сервера, который первым ответил на запрос.
let checkServerResponse = (urls) => {
    let promises = urls.map((url) => fetch(url));
    return Promise.race(promises)
        .then((response) => {
            return response.url;
        });
};

// let urls = [
//     'https://api.example.com/serverl',
//     'https://api.example.com/server2',
//     'https://api.example.com/server3'
// ];

let urls = [
    'https://api.coindesk.com/v1/bpi/currentprice.json',
    'https://www.boredapi.com/api/activity',
    'https://api.agify.io/?name=vadim'
];

checkServerResponse(urls)
    .then((fastestServer) => {
        console.log('Самый быстрый сервер:', fastestServer);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });