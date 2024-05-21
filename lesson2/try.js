// // Обработка ошибок в JavaScript
// // Первый пример
// try {
//     undefined = 1;
// }
// catch {
//     console.log('Что-то произошло');
// }
// finally {
//     console.log('Отличный результат');
// }

// // // Пример 2: Работа с делением чисел
// function divideNumbers(a, b) {
//     try {
//         const result = a / b; // Попытка выполнить деление
//         if (isNaN(result)) {
//             throw new Еггог('Результат не является числом');
//         }
//         console.log('Результат деления:', result);
//     } catch (error) {
//         console.error('Ошибка деления:', error);
//     } finally {
//         console.log('Onepaция деления завершена');
//     }
// }

// divideNumbers(10, 2); // Пример корректного деления
// divideNumbers(10, 0); // Пример деления на 0 // Результат деления: Infinity
// divideNumbers(10, '0'); // Пример не корректного деления // Результат деления: Infinity
// divideNumbers('10', '0'); // Пример не корректного деления // Результат деления: Infinity
// divideNumbers('sdfs', 'sdf'); // Пример не корректного деления // eferenceError: Еггог is not defined


// Пользовательские ошибки
// Создание пользовательской ошибки
class CustomError extends Error {
    constructor(message) {
        super(message); // Вызов конструктора родительского класса (Error) с переданным сообщением
        this.name = 'CustomError'; // Установка имени ошибки
    }
}

function validateNumber(value) {
    if (typeof value !== 'number') {
        throw new CustomError('Значение должно быть числом');
        // Выбрасывание пользовательской ошибки с сообщением
    }
    console.log('Валидация успешна');
}
try {
    validateNumber('42'); // Проверка на число с передачей строки вместо числа.
} catch (error) {
    if (error instanceof CustomError) { // Проверка, является ли ошибка экземпляром
        // пользовательской ошибки
        console.error('Ошибка:', error.message); // Вывод сообщения об ошибке 
        console.log('Tun ошибки:', error.name); // Вывод имени ошибки
    } else {
        console.error('Произошла ошибка:', error); // Вывод сообщения об ошибке по умолчанию
    }
}

// если ставим 42 вместо '42' //Валидация успешна