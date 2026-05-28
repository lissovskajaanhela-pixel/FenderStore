let cart = [];

try {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
} catch (e) {
    cart = [];
}

let products = [];

const categoriesData = {

    models: [
        {
            title: "Stratocaster",
            image: "categories/stratocaster.png",
            type: "Stratocaster"
        },
        {
            title: "Telecaster",
            image: "categories/telecaster.png",
            type: "Telecaster"
        },
        {
            title: "Jazzmaster",
            image: "categories/jazzmaster.png",
            type: "Jazzmaster"
        },
        {
            title: "Jaguar",
            image: "categories/jaguar.png",
            type: "Jaguar"
        },
        {
            title: "Mustang",
            image: "categories/mustang.png",
            type: "Mustang"
        },
        {
            title: "Meteora",
            image: "categories/meteora.png",
            type: "Meteora"
        },
        {
            title: "Starcaster",
            image: "categories/starcaster.png",
            type: "Starcaster"
        },
    ],

    bass: [
        {
            title: "Jazz Bass",
            image: "categories/jazzbass.png",
            type: "Jazz Bass"
        },
        {
            title: "Jaguar Bass",
            image: "categories/jaguarbass.png",
            type: "Jaguar Bass"
        },
        {
            title: "Meteora Bass",
            image: "categories/meteorabass.png",
            type: "Meteora Bass"
        }
    ],

    squier: [
        {
            title: "Stratocaster",
            image: "categories/sqstrat.png",
            type: "Squier Stratocaster"
        },
        {
            title: "Telecaster",
            image: "categories/sqtele.png",
            type: "Squier Telecaster"
        },
        {
            title: "Jazzmaster",
            image: "categories/sqjazzmaster.png",
            type: "Squier Jazzmaster"
        },
        {
            title: "Jaguar",
            image: "categories/sqjaguar.png",
            type: "Squier Jaguar"
        },
        {
            title: "Mustang",
            image: "categories/sqmustang.png",
            type: "Squier Mustang"
        },
        {
            title: "Starcaster",
            image: "categories/sqstarcaster.png",
            type: "Squier Starcaster"
        },
        {
            title: "Jazz Bass",
            image: "categories/sqjazzbass.png",
            type: "Squier Jazz Bass"
        },
        {
            title: "Jaguar Bass",
            image: "categories/sqjaguarbass.png",
            type: "Squier Jaguar Bass"
        },
    ]

};

let categoriesPinned = false;
let activeCategory = null;

function showCategories(category) {
    const container = document.getElementById("categories");
    if (!container || !categoriesData[category]) return;

    container.style.display = "grid";

    container.innerHTML = categoriesData[category].map(item => `
        <a href="catalog.html?type=${item.type}" class="category-card">
            <img src="${item.image}" class="category-card__image">
            <p class="category-card__title">${item.title}</p>
        </a>
    `).join("");
}

window.addEventListener("beforeunload", () => {
    categoriesPinned = false;
});

function openCategory(category) {
    if (categoriesPinned) return;
    showCategories(category);
}

function toggleCategory(category, el) {
    const container = document.getElementById("categories");
    if (!container) return;

    if (categoriesPinned && activeCategory === category) {
        categoriesPinned = false;
        activeCategory = null;
        container.style.display = "none";

        document.querySelectorAll(".catalog-menu button")
            .forEach(b => b.classList.remove("active"));

        return;
    }

    categoriesPinned = true;
    activeCategory = category;

    document.querySelectorAll(".catalog-menu button")
        .forEach(b => b.classList.remove("active"));

    el.classList.add("active");

    showCategories(category);
}

function closeCategoryHover() {
    if (categoriesPinned) return;

    const container = document.getElementById("categories");
    if (!container) return;

    container.style.display = "none";
    container.innerHTML = "";
}

function updateView() {
    let list = getVisibleProducts();
    const select = document.getElementById("sortSelect");
    const value = select?.value;

    if (value === "asc") {
        list = list.slice().sort((a, b) => a.price - b.price);
    } else if (value === "desc") {
        list = list.slice().sort((a, b) => b.price - a.price);
    }

    renderCatalog(list);
}

function sortCatalog() {
    updateView();
}

function renderCatalog(list = products) {
    const container = document.getElementById("catalog");
    if (!container) return;

    container.innerHTML = list.map(p => `
        <div class="product-card" data-name="${p.name}" data-image="${p.image}">
            <img src="${p.image}" class="product-card__image">

            <div class="product-card__info">
                <h3>${p.name}</h3>

                <div class="product-card__bottom">
                    <p class="product-card__price">${p.price.toLocaleString()} ₽</p>
                    <button class="product-card__button" onclick="addToCart(this)">
                        Купить
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

function addToCart(btn) {
    const card = btn.closest(".product-card");
    if (!card) return;

    const name = card.dataset.name;
    const image = card.dataset.image;

    const priceText = card.querySelector(".product-card__price")?.textContent || "0 ₽";
    const price = parseInt(priceText.replace(/\D/g, ""));

    cart.push({ name, image, price });

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function clearCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function updateCart() {

    const counters = document.querySelectorAll(".cart-count");
    counters.forEach(el => el.textContent = cart.length);

    const cartItems = document.getElementById("cart-items");
    const emptyText = document.getElementById("empty-cart");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        if (emptyText) emptyText.style.display = "block";

        const totalEl = document.getElementById("cart-total");
        if (totalEl) totalEl.textContent = "Итого: 0 ₽";

        return;
    }

    if (emptyText) emptyText.style.display = "none";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price || 0;

        const div = document.createElement("div");
        div.className = "product-card";

        div.innerHTML = `
            <div class="product-card__image-wrap">
                <img src="${item.image}" class="product-card__image">
            </div>

            <div class="product-card__info">

                <h3>${item.name}</h3>

                <div class="product-card__bottom">

                    <p class="product-card__price">
                        ${item.price.toLocaleString()} ₽
                    </p>

                    <button class="product-card__button"
                        onclick="removeFromCart(${index})">
                        Удалить
                    </button>

                </div>

            </div>
        `;

        cartItems.appendChild(div);
    });

    const totalEl = document.getElementById("cart-total");
    if (totalEl) {
        totalEl.textContent = `Итого: ${total.toLocaleString()} ₽`;
    }
}

let activeTypeFilter = null;
let searchQuery = null;

function getVisibleProducts() {
    let result = [...products];

    if (activeTypeFilter) {
        result = result.filter(p =>
            p.types && p.types.includes(activeTypeFilter)
        );
    }

    if (searchQuery) {
        result = result.filter(p =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return result;
}

function filterCatalog(type) {
    activeTypeFilter = type || null;

    const url = new URL(window.location.href);

    if (type) {
        url.searchParams.set("type", type);
    } else {
        url.searchParams.delete("type");
    }

    history.pushState({}, "", url);

    updateView();
}

document.addEventListener("DOMContentLoaded", () => {

fetch("products.json")
    .then(response => response.json())
    .then(data => {

        products = data;

        const params = new URLSearchParams(window.location.search);

        const search = params.get("search");
        const type = params.get("type");

        searchQuery = search || null;
        activeTypeFilter = type || null;

        updateView();
        updateCart();

        const searchInput = document.getElementById("searchInput");

        if (search && searchInput) {
            searchInput.value = search;
        }

    })
    .catch(error => {
        console.error("Ошибка загрузки JSON:", error);
    });

});


function searchModel(event) {
    event.preventDefault();

    const input = document.getElementById("searchInput");

    if (!input) return;

    const query = input.value.trim();

    if (!query) return;

    window.location.href =
        `catalog.html?search=${encodeURIComponent(query)}`;
}

function clearSearch() {
    const input = document.getElementById("searchInput");
    if (input) input.value = "";

    searchQuery = null;

    const url = new URL(window.location.href);
    url.searchParams.delete("search");
    window.history.replaceState({}, "", url);

    updateView();
}