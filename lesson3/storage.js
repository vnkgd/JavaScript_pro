// Установка значения в LocalStorage
localStorage.setItem('username', 'Dima');

// Получение значения из LocalStorage
let storedUsername = localStorage.getItem('username');
console.log('Значение из LocalStorage:', storedUsername);

// Удаление значения из LocalStorage
localStorage.removeItem('username');
console.log('Значение из LocalStorage:', storedUsername); //здесь значение в перменной, но нужно смотреть в сам сторедж, там пусто

// Проверка, что значение удалено
let storedUsername2 = localStorage.getItem('username');
console.log('Значение из LocalStorage:', storedUsername2);

// Очистка LocalStorage
// localStorage.clear();

// Проверка, что LocalStorage пустой
console.log('LocalStorage:', localStorage); //LocalStorage: Storage {length: 0}




// // Проверяем, есть ли значение счетчика в LocalStorage
// if (localStorage.getItem('counter')) {
//     // Если значение счетчика уже есть, увеличиваем его на 1
//     let counter = parseInt(localStorage.getItem('counter')) + 1;
//     localStorage.setItem('counter', counter.toString());
// } else {
//     // Если значение счетчика не существует, устанавливаем его в 1
//     localStorage.setItem('counter', '1');
// }

// // Выводим значение счетчика в консоль
// console.log('Счетчик посещений:', localStorage.getItem('counter'));
// localStorage.clear();


// Проверяем, есть ли значение счетчика в LocalStorage
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// Обновляем значение счетчика и сохраняем ero в LocalStorage
const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString());
};

// Выводим текущее значение счетчика на страницу
document.querySelector('.counter').textContent = counter;

// Обработчик события для кнопки "Увеличить счетчик"
document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
});