// Получаем ссылки на элементы страницы
const inputField = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const itemList = document.getElementById('item-List');

// Получаем сохраненный список покупок из LocalStorage (если есть)
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

// Функция для обновления списка покупок на странице и сохранения его в localStorage
const updateShoppingList = () => {
    // Очищаем список покупок на странице
    itemList.innerHTML = '';

    // Создаем новые элементы списка для каждого пункта
    shoppingList.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemList.append(listItem);
    });

    // Сохраняем обновленный список покупок в LocalStorage
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
};

// Обработчик события для кнопки "Добавить"
addButton.addEventListener('click', () => {
    const newItem = inputField.value.trim();

    if (newItem !== '') {
        // Добавляем новый пункт в список покулок
        shoppingList.push(newItem);
        inputField.value = '';
        updateShoppingList();
    }
});

// Обновляем список покупок при загрузке страницы
updateShoppingList(); 