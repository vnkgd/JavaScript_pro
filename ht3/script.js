// Получаем DOM elements
const productNameInput = document.getElementById('product-name');
const reviewTextInput = document.getElementById('review-text');
const addReviewBtn = document.getElementById('add-review-btn');
const productList = document.getElementById('product-list');
const reviewList = document.getElementById('review-list');

// Инициализировать объект отзывов из localStorage
let reviews = JSON.parse(localStorage.getItem('reviews')) || {};

// Функция для отображения списка продуктов
function renderProductList() {
    productList.innerHTML = '';
    const products = Object.keys(reviews);
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        li.addEventListener('click', () => renderReviewList(product));
        productList.appendChild(li);
    });
}

// Функция для отображения списка отзывов о продукте
function renderReviewList(product) {
    reviewList.innerHTML = '';
    if (reviews[product]) {
        const h3 = document.createElement('h3');
        h3.textContent = `Reviews for ${product}`;
        reviewList.appendChild(h3);
        reviews[product].forEach((review, index) => {
            const div = document.createElement('div');
            div.classList.add('review');
            div.innerHTML = `${review}<button class="delete-btn" data-product="${product}" data-index="${index}">Delete</button>`;
            reviewList.appendChild(div);
        });
    } else {
        const p = document.createElement('p');
        p.textContent = 'No reviews for this product yet.';
        reviewList.appendChild(p);
    }
}

// Функция добавления отзыва
function addReview() {
    const product = productNameInput.value.trim();
    const review = reviewTextInput.value.trim();
    if (product && review) {
        if (!reviews[product]) {
            reviews[product] = [];
        }
        reviews[product].push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        productNameInput.value = '';
        reviewTextInput.value = '';
        renderProductList();
    }
}

// Функция удаления отзыва
function deleteReview(e) {
    if (e.target.classList.contains('delete-btn')) {
        const product = e.target.dataset.product;
        const index = e.target.dataset.index;
        reviews[product].splice(index, 1);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        renderReviewList(product);
    }
}

// Добавить прослушиватели событий
addReviewBtn.addEventListener('click', addReview);
reviewList.addEventListener('click', deleteReview);

// Отображение списка продуктов при загрузке страницы
renderProductList();