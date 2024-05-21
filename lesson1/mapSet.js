// let map = new Map();

// map.set("1", "str1"); // строка в качестве ключа
// map.set(1, "num1"); // цифра как ключ
// map.set(true, "bool1"); // булево значение как ключ
// console.log(map); //Map(2) {'1' => 'num1', true => 'bool1'}
// // помните, обычный объект Object приводит ключи к строкам?
// // Мар сохраняет тип ключей, так что в этом случае сохранится 2 разных значения
// console.log(map.get(1)); // "numl"
// console.log(map.get("1")); // "strl"
// console.log(map.size); // 3

// // //get set
// let map = new Map();
// map.set("1", "We")
//     .set(1, "likes")
//     .set(true, "JS");
// console.log(map); //Map(3) {'1' => 'We', 1 => 'likes', true => 'JS'}


// // Перебор коллекции Мар
// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук", 50]
// ]);
// console.log(recipeMap); //Map(3) {'огурец' => 500, 'помидор' => 350, 'лук' => 50}
// // перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // огурец, помидор, лук
// }
// // перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
// }
// // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
//     console.log(entry); // огурец,500 (и так далее)
// }
// // выполняем функцию для каждой пары (ключ, значение)
// recipeMap.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`); // огурец: 500 и так далее
// }
// );


// // Работа с объектами
// //Object.entries поможет создать Мар:
// let map = new Map(Object.entries(obj));
// // Object. fromEntries поможет создать объект из Map:
// let obj = Object.fromEntries(map);


// //----------Set-----------

// let buddies = [
//     'Жучка',
//     'Тузик',
//     'Булька',
//     'Тузик',
//     'Бобик',
//     'Жучка',
//     'Валера',
//     'Жучка',
//     'Тузик',
//     'Манька'
// ];

// let uniqueBuddies = new Set(buddies);
// console.log(uniqueBuddies); //Set(6) {'Жучка', 'Тузик', 'Булька', 'Бобик', 'Валера', …}
// // мы увидим, что у Hac взяли 10 косточек, а собачек было всего 6


// // Перевести обратно в массив нам поможет уже известный нам метод Аггау. Е гот:
// let buddies = [
//     'Жучка',
//     'Тузик',
//     'Булька',
//     'Тузцк',
//     'Бобик',
//     'Жучка',
//     'Валера',
//     'Жучка',
//     'Тузик',
//     'Манька'
// ];
// let uniqueBuddies = new Set(buddies);
// console.log(uniqueBuddies); //Set(7) {'Жучка', 'Тузик', 'Булька', 'Тузцк', 'Бобик', …}
// let arr = Array.from(uniqueBuddies);//убрали дубликаты и перегнали обратно в массив
// console.log(arr); //(7) ['Жучка', 'Тузик', 'Булька', 'Тузцк', 'Бобик', 'Валера', 'Манька']