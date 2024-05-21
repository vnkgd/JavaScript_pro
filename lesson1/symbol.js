// const symbol = Symbol(); // объявление
// const dogID = Symbol('dog'); // значение уникально, даже если мы создадим несколько символов с одинаковым описанием

// const dogl = Symbol('dog');
// const dog2 = Symbol('dog');
// console.log(dogl);
// console.log(dog2);

// console.log(dogl == dog2); // false

// const dogID = Symbol('dog');
// // // alert(dogID); // TypeError: Cannot convert a Symbol value to a string
// // console.log(dogID);
// // Symbol(dog)
// console.log(dogID.description); // dog можно посмотреть описание
// let id = Symbol('id');
// // let id = Symbol('dogID');
// let buddy = {
//     [id]: 'Жучка'
// }
// console.log(buddy[id]); //Жучка

// // let id = Symbol('id');
// buddy[id] = "Бобик"; //Cannot access 'id' before initialization поставил let id = Symbol('id'); выше
// // Identifier 'id' has already been declared (at symbol.js:23:5)
// //Идентификаторы создаются уникальными всегда
// console.log(buddy[id]); //Бобик идентификатор перезаписался

// // Проблемы которые могут возникнуть, без использования Symbol
// let buddy = { name: 'Тузик' }; // Объявляем в нашем скрипте свойство 'id'
// buddy.id = 'Наш идентификатор';// ...другой скрипт тоже хочет свой идентификатор
// buddy.id = 'Их идентификатор'; // Ой! Свойство перезаписано сторонней библиотекой!
// console.log(buddy.id); //Их идентификатор - т.е. видим, что идентификатор перезаписался.
// // Как решить?
// let buddies = {
//     [Symbol('Жучка')]: 'Жучка',
//     [Symbol('Мурка')]: 'Мурка',
//     [Symbol('Таракашка')]: 'Таракашка',
//     elephant: 'Слон',

// }
// console.log(buddies); //{elephant: 'Слон', Symbol(Жучка): 'Жучка', Symbol(Мурка): 'Мурка', Symbol(Таракашка): 'Таракашка'}
// let newBuddies = {};
// Object.assign(newBuddies, buddies); // Object.assign скопирует все свойства, в том числе, и символьные.

// buddies.cat = 'Барсик'

// console.log(newBuddies);
// console.log(buddies);

// //----- Symbol, for 	  -----
// // читаем символ из глобального реестра и записываем его в переменную
// let id = Symbol.for("id"); // если символа не существует, он будет создан
// // // читаем его снова и записываем в другую переменную (возможно, из другого места кода)
// let idAgain = Symbol.for("id");
// // // проверяем: это один и тот же символ
// alert(id === idAgain); // true

// //----Symbol.keyFor ---- описание символа по идентификатору
// // // получаем символ по имени
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");
// // // получаем имя по символу
// console.log(Symbol.keyFor(sym)); // name
// console.log(Symbol.keyFor(sym2)); // id