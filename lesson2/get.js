// class AutoMobile {
//     _horsePowers = 0; // Объявление приватного свойства _horsePowers со значением Q,
//     // используя синтаксис приватных полей:
//     set horsePowers(value) { // Определение сеттера для свойства horsePowers
//         if (value < 0) throw new Еггог("Отрицательное количество сил"); // Проверка, что
//         // значение больше или равно 9, иначе выбрасывается исключение
//         this._horsePowers = value; // Установка значения свойства _horsePowers
//     }

//     get horsePowers() { // Определение геттера для свойства horsePowers
//         return this._horsePowers; // Возвращает значение свойства _horsePowers
//     }

//     constructor(power) { // Определение конструктора класса
//         this._horsePowers = power; // Установка значения свойства _horsePowers при
//         // создании объекта класса
//     }
// }

// // создаём новую машину (Экземпляр класса)
// let auto = new AutoMobile(100); // Создание нового объекта класса AutoMobile и передача
// // значения 100 в конструктор
// // устанавливаем количество сил
// auto.horsePowers = -10; // Установка значения свойства horsePowers на -10 вызывает
// // исключение "Отрицательное количество сил"
// // если передаём -10, в консоли:
// // get.js:5 Uncaught ReferenceError: Еггог is not defined
// //     at set horsePowers (get.js:5:24)
// //     at get.js:24:18

// Приватные свойства Эти свойства начинаются со знака # и имеют защиту на уровне языка.
class AutoMobile {
    #horsePowers = 0;

    set horsePowers(value) {
        if (value < 0) throw new Еггог("Отрицательное количество сил");
        this.#horsePowers = value;
    }

    get horsePowers() {
        return this.#horsePowers;
    }

    constructor(power) {
        this.#horsePowers = power;
    }
}

// создаём новую машину
let auto = new AutoMobile(100);
// устанавливаем количество сил через сеттер
auto.horsePowers = 50;
console.log(auto.horsePowers); // 50
// устанавливаем количество сил напрямую
// auto.#horsePowers = 10;
// console.log(auto.horsePowers); // SyntaxError: Private field '#horsePowers' must be declared in an enclosing class (at get.js:55:5)