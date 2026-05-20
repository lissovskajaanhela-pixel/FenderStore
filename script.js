let cart = [];

try {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
} catch (e) {
    cart = [];
}

let products = [
    {
        name: "Vintera® II '70s Stratocaster®",
        price: 97700,
        types: ["Stratocaster"],
        image: "guitars/Vintera® II '70s Stratocaster®.png"
    },
    {
        name: "American Ultra II Stratocaster® HSS",
        price: 224200,
        types: ["Stratocaster"],
        image: "guitars/American Ultra II Stratocaster® HSS.png"
    },
    {
        name: "Limited Edition American Ultra II Stratocaster® HSS, Sinister Red",
        price: 245500,
        types: ["Stratocaster"],
        image: "guitars/Limited Edition American Ultra II Stratocaster® HSS, Sinister Red.png"
    },
    {
        name: "Fender® x Hello Kitty® Black Stratocaster®",
        price: 44800,
        types: ["Stratocaster"],
        image: "guitars/Fender® x Hello Kitty® Black Stratocaster®.png"
    },
    {   name: "American Professional Classic Stratocaster®",
        price: 144900,
        types: ["Stratocaster"],
        image: "guitars/American Professional Classic Stratocaster®.png"
    },
    {   name: "Vintera® III Late '50s Stratocaster®",
        price: 105900,
        types: ["Stratocaster"],
        image: "guitars/Vintera® III Late '50s Stratocaster®.png"
    },
    {   name: "Made in Japan Limited Stratocaster®, Raw Ash",
        price: 143800,
        types: ["Stratocaster"],
        image: "guitars/Made in Japan Limited Stratocaster®, Raw Ash.png"
    },
    {   name: "Vintera® III Late '60s Stratocaster®",
        price: 105900,
        types: ["Stratocaster"],
        image: "guitars/Vintera® III Late '60s Stratocaster®.png"
    },
    {   name: "Classic Vibe '60s Jazzmaster®",
        price: 45500,
        types: ["Jazzmaster", "Squier Jazzmaster"],
        image: "guitars/Classic Vibe '60s Jazzmaster®.png"
    },
    {   name: "Made in Japan Traditional 2025 Collection, 60s Jazzmaster®",
        price: 136600,
        types: ["Jazzmaster"],
        image: "guitars/Made in Japan Traditional 2025 Collection, 60s Jazzmaster®.png"
    },
    {   name: "Gold Foil Jazzmaster®",
        price: 139000,
        types: ["Jazzmaster"],
        image: "guitars/Gold Foil Jazzmaster®.png"
    },
    {   name: "American Professional II Jazzmaster® Left-Hand",
        price: 187000,
        types: ["Jazzmaster"],
        image: "guitars/American Professional II Jazzmaster® Left-Hand.png"
    },
    {   name: "American Vintage II 1966 Jazzmaster®",
        price: 236000,
        types: ["Jazzmaster"],
        image: "guitars/American Vintage II 1966 Jazzmaster®.png"
    },
    {   name: "Vintera® II '50s Jazzmaster®",
        price: 101000,
        types: ["Jazzmaster"],
        image: "guitars/Vintera® II '50s Jazzmaster®.png"
    },
    {   name: "Limited Edition Player II Jazzmaster®, Shell Pink",
        price: 80000,
        types: ["Jazzmaster"],
        image: "guitars/Limited Edition Player II Jazzmaster®, Shell Pink.png"
    },
    {   name: "American Professional Classic Jazzmaster®",
        price: 148200,
        types: ["Jazzmaster"],
        image: "guitars/American Professional Classic Jazzmaster®.png"
    },
    {   name: "Vintera® III Mid '60s Jazzmaster®",
        price: 112000,
        types: ["Jazzmaster"],
        image: "guitars/Vintera® III Mid '60s Jazzmaster®.png"
    },
    {   name: "Jason Isbell Custom Telecaster®",
        price: 156500,
        types: ["Telecaster"],
        image: "guitars/Jason Isbell Custom Telecaster®.png"
    },
    {   name: "American Professional Classic Hotshot Telecaster®",
        price: 145700,
        types: ["Telecaster"],
        image: "guitars/American Professional Classic Hotshot Telecaster®.png"
    },
    {   name: "75th Anniversary Player II Telecaster®",
        price: 91000,
        types: ["Telecaster"],
        image: "guitars/75th Anniversary Player II Telecaster®.png"
    },
    {   name: "Limited Edition Fender® x PAC-MAN™ Player II Telecaster®",
        price: 91000,
        types: ["Telecaster"],
        image: "guitars/Limited Edition Fender® x PAC-MAN™ Player II Telecaster®.png"
    },
    {   name: "Vintera® III Mid '60s Telecaster®",
        price: 108000,
        types: ["Telecaster"],
        image: "guitars/Vintera® III Mid '60s Telecaster®.png"
    },
    {   name: "75th Anniversary Vintera® Road Worn® 1951 Telecaster®",
        price: 158000,
        types: ["Telecaster"],
        image: "guitars/75th Anniversary Vintera® Road Worn® 1951 Telecaster®.png"
    },
    {   name: "Limited Edition Affinity Series® Jaguar®",
        price: 28000,
        types: ["Jaguar", "Squier Jaguar"],
        image: "guitars/Limited Edition Affinity Series® Jaguar®.png"
    },
    {   name: "Made in Japan Traditional 2025 Collection, 60s Jaguar®",
        price: 137000,
        types: ["Jaguar"],
        image: "guitars/Made in Japan Traditional 2025 Collection, 60s Jaguar®.png"
    },
    {   name: "Limited Edition Affinity™ Jaguar®, Shell Pink",
        price: 28000,
        types: ["Jaguar", "Squier Jaguar"],
        image: "guitars/Limited Edition Affinity™ Jaguar®, Shell Pink.png"
    },
    {   name: "Limited Edition Johnny Marr Signature Special Jaguar®",
        price: 280800,
        types: ["Jaguar"],
        image: "guitars/Limited Edition Johnny Marr Signature Special Jaguar®.png"
    },
    {   name: "Vintera® III Mid '60s Jaguar®",
        price: 112900,
        types: ["Jaguar"],
        image: "guitars/Vintera® III Mid '60s Jaguar®.png"
    },
    {   name: "Affinity Series® Starcaster®",
        price: 26200,
        types: ["Starcaster", "Squier Starcaster"],
        image: "guitars/Affinity Series® Starcaster®.png"
    },
    {   name: "Affinity Series® Starcaster® Deluxe",
        price: 31200,
        types: ["Starcaster", "Squier Starcaster"],
        image: "guitars/Affinity Series® Starcaster® Deluxe.png"
    },
    {   name: "Tom DeLonge Starcaster®",
        price: 99800,
        types: ["Starcaster"],
        image: "guitars/Tom DeLonge Starcaster®.png"
    },
    {   name: "Player Mustang®",
        price: 62500,
        types: ["Mustang"],
        image: "guitars/Player Mustang®.png"
    },
    {   name: "Limited Edition Squier Sonic® Mustang® HH",
        price: 15900,
        types: ["Mustang", "Squier Mustang"],
        image: "guitars/Limited Edition Squier Sonic® Mustang® HH.png"
    },
    {   name: "Limited Edition Squier Sonic® Mustang®",
        price: 18900,
        types: ["Mustang", "Squier Mustang"],
        image: "guitars/Limited Edition Squier Sonic® Mustang®.png"
    },
    {   name: "American Performer Mustang®",
        price: 138000,
        types: ["Mustang"],
        image: "guitars/American Performer Mustang®.png"
    },
    {   name: "Limited Edition Vintera® II '70s Mustang®, Sherwood Green Metallic",
        price: 103900,
        types: ["Mustang"],
        image: "guitars/Limited Edition Vintera® II '70s Mustang®, Sherwood Green Metallic.png"
    },
    {   name: "Made in Japan Traditional 2025 Collection '60s Mustang®",
        price: 137000,
        types: ["Mustang"],
        image: "guitars/Made in Japan Traditional 2025 Collection '60s Mustang®.png"
    },
    {   name: "Ben Gibbard Mustang®",
        price: 115500,
        types: ["Mustang"],
        image: "guitars/Ben Gibbard Mustang®.png"
    },
    {   name: "Player II Mustang®",
        price: 62000,
        types: ["Mustang"],
        image: "guitars/Player II Mustang®.png"
    },
    {   name: "Vintera® II '70s Competition Mustang®",
        price: 96000,
        types: ["Mustang"],
        image: "guitars/Vintera® II '70s Competition Mustang®.png"
    },
    {   name: "American Ultra II Meteora®",
        price: 227700,
        types: ["Meteora"],
        image: "guitars/American Ultra II Meteora®.png"
    },
    {   name: "Limited Edition Player Plus Meteora",
        price: 110500,
        types: ["Meteora"],
        image: "guitars/Limited Edition Player Plus Meteora.png"
    },
    {   name: "American Professional Classic Jazz Bass®",
        price: 147000,
        types: ["Jazz Bass"],
        image: "guitars/American Professional Classic Jazz Bass®.png"
    },
    {   name: "Vintera® III Early '70s Jazz Bass®",
        price: 116400,
        types: ["Jazz Bass"],
        image: "guitars/Vintera® III Early '70s Jazz Bass®.png"
    },
    {   name: "Vintera® III Early '60s Jazz Bass®",
        price: 108000,
        types: ["Jazz Bass"],
        image: "guitars/Vintera® III Early '60s Jazz Bass®.png"
    },
    {   name: "Limited Edition Player II Jazz Bass® Plus Top, Blue Burst",
        price: 80000,
        types: ["Jazz Bass"],
        image: "guitars/Limited Edition Player II Jazz Bass® Plus Top, Blue Burst.png"
    },
    {   name: "Made in Japan Limited Jazz Bass®, Raw Ash",
        price: 141000,
        types: ["Jazz Bass"],
        image: "guitars/Made in Japan Limited Jazz Bass®, Raw Ash.png"
    },
    {   name: "American Professional II Jazz Bass®",
        price: 198900,
        types: ["Jazz Bass"],
        image: "guitars/American Professional II Jazz Bass®.png"
    },
    {   name: "American Professional II Jazz Bass® V",
        price: 198900,
        types: ["Jazz Bass"],
        image: "guitars/American Professional II Jazz Bass® V.png"
    },
    {   name: "American Vintage II 1966 Jazz Bass®",
        price: 227700,
        types: ["Jazz Bass"],
        image: "guitars/American Vintage II 1966 Jazz Bass®.png"
    },
    {   name: "Player II Jazz Bass®",
        price: 80500,
        types: ["Jazz Bass"],
        image: "guitars/Player II Jazz Bass®.png"
    },
    {   name: "Standard Jazz Bass®",
        price: 54000,
        types: ["Jazz Bass"],
        image: "guitars/Standard Jazz Bass®.png"
    },
    {   name: "American Ultra II Jazz Bass®",
        price: 227600,
        types: ["Jazz Bass"],
        image: "guitars/American Ultra II Jazz Bass®.png"
    },
    {   name: "Limited Edition Player II Jazz Bass®, British Racing Green",
        price: 88800,
        types: ["Jazz Bass"],
        image: "guitars/Limited Edition Player II Jazz Bass®, British Racing Green.png"
    },
    {   name: "American Ultra II Meteora® Bass",
        price: 227600,
        types: ["Meteora Bass"],
        image: "guitars/American Ultra II Meteora® Bass.png"
    },
    {   name: "Player Plus Active Meteora® Bass",
        price: 113000,
        types: ["Meteora Bass"],
        image: "guitars/Player Plus Active Meteora® Bass.png"
    },
    {   name: "Player Jaguar® Bass",
        price: 82000,
        types: ["Jaguar Bass"],
        image: "guitars/Player Jaguar® Bass.png"
    },
    {   name: "Limited Edition Mike Kerr Jaguar® Bass",
        price: 158000,
        types: ["Jaguar Bass"],
        image: "guitars/Limited Edition Mike Kerr Jaguar® Bass.png"
    },
    {   name: "Affinity Series® Jaguar® Bass H",
        price: 24000,
        types: ["Jaguar Bass", "Squier Jaguar Bass"],
        image: "guitars/Affinity Series® Jaguar® Bass H.png"
    },
    {   name: "Limited Edition Mark Hoppus Jaguar® Bass",
        price: 130000,
        types: ["Jaguar Bass"],
        image: "guitars/Limited Edition Mark Hoppus Jaguar® Bass.png"
    },
    {   name: "Tom Morello's Arm The Homeless Guitar",
        price: 154000,
        image: "guitars/Tom Morello's Arm The Homeless Guitar.png"
    },
    {   name: "Squier Sonic® Stratocaster® HT",
        price: 16000,
        types: ["Stratocaster", "Squier Stratocaster"],
        image: "guitars/Squier Sonic® Stratocaster® HT.png"
    },
    {   name: "Squier Sonic® Stratocaster® HSS",
        price: 18000,
        types: ["Stratocaster", "Squier Stratocaster"],
        image: "guitars/Squier Sonic® Stratocaster® HSS.png"
    },
    {   name: "Squier Sonic® Stratocaster® HT H",
        price: 15300,
        types: ["Stratocaster", "Squier Stratocaster"],
        image: "guitars/Squier Sonic® Stratocaster® HT H.png"
    },
    {   name: "Squier Sonic® Stratocaster®",
        price: 16600,
        types: ["Stratocaster", "Squier Stratocaster"],
        image: "guitars/Squier Sonic® Stratocaster®.png"
    },
    {   name: "Squier Sonic® Stratocaster® Left-Handed",
        price: 16600,
        types: ["Stratocaster", "Squier Stratocaster"],
        image: "guitars/Squier Sonic® Stratocaster® Left-Handed.png"
    },
    {   name: "Affinity Series® Stratocaster® Junior HSS",
        price: 22800,
        types: ["Stratocaster", "Squier Stratocaster"],
        image: "guitars/Affinity Series® Stratocaster® Junior HSS.png"
    },
    {   name: "Affinity Series® Stratocaster® FMT HSS",
        price: 25800,
        types: ["Stratocaster", "Squier Stratocaster"],
        image: "guitars/Affinity Series® Stratocaster® FMT HSS.png"
    },
    {   name: "Affinity Series® Stratocaster®",
        price: 24000,
        types: ["Stratocaster", "Squier Stratocaster"],
        image: "guitars/Affinity Series® Stratocaster®.png"
    },
    {   name: "Squier Sonic® Telecaster®",
        price: 17000,
        types: ["Telecaster", "Squier Telecaster"],
        image: "guitars/Squier Sonic® Telecaster®.png"
    },
    {   name: "Squier Sonic® Esquire® H",
        price: 15500,
        types: ["Telecaster", "Squier Telecaster"],
        image: "guitars/Squier Sonic® Esquire® H.png"
    },
    {   name: "Affinity Series® Telecaster® Thinline",
        price: 25800,
        types: ["Telecaster", "Squier Telecaster"],
        image: "guitars/Affinity Series® Telecaster® Thinline.png"
    },
    {   name: "Affinity Series® Telecaster® FMT SH",
        price: 25800,
        types: ["Telecaster", "Squier Telecaster"],
        image: "guitars/Affinity Series® Telecaster® FMT SH.png"
    },
    {   name: "Affinity Series® Telecaster® Left-Handed",
        price: 24000,
        types: ["Telecaster", "Squier Telecaster"],
        image: "guitars/Affinity Series® Telecaster® Left-Handed.png"
    },
    {   name: "Affinity Series® Telecaster® Deluxe",
        price: 29000,
        types: ["Telecaster", "Squier Telecaster"],
        image: "guitars/Affinity Series® Telecaster® Deluxe.png"
    },
    {   name: "Affinity Series® Telecaster®",
        price: 24000,
        types: ["Telecaster", "Squier Telecaster"],
        image: "guitars/Affinity Series® Telecaster®.png"
    },
    {   name: "Limited Edition Affinity Series® Jazzmaster®, Metallic Black",
        price: 27000,
        types: ["Jazzmaster", "Squier Jazzmaster"],
        image: "guitars/Limited Edition Affinity Series® Jazzmaster®, Metallic Black.png"
    },
    {   name: "Limited Edition Affinity™ Jaguar®, Daphne Blue",
        price: 29000,
        types: ["Jaguar", "Squier Jaguar"],
        image: "guitars/Limited Edition Affinity™ Jaguar®, Daphne Blue.png"
    },
    {   name: "Affinity Series® Jaguar®",
        price: 26000,
        types: ["Jaguar", "Squier Jaguar"],
        image: "guitars/Affinity Series® Jaguar®.png"
    },
    {   name: "Classic Vibe Starcaster®",
        price: 44000,
        types: ["Starcaster", "Squier Starcaster"],
        image: "guitars/Classic Vibe Starcaster®.png"
    },
    {   name: "Affinity Series® Jazz Bass®",
        price: 26000,
        types: ["Jazz Bass", "Squier Jazz Bass"],
        image: "guitars/Affinity Series® Jazz Bass®.png"
    },
    {   name: "Affinity Series® Jazz Bass® V",
        price: 29000,
        types: ["Jazz Bass", "Squier Jazz Bass"],
        image: "guitars/Affinity Series® Jazz Bass® V.png"
    },
    {   name: "Affinity Series® Active Jazz Bass® V",
        price: 28000,
        types: ["Jazz Bass", "Squier Jazz Bass"],
        image: "guitars/Affinity Series® Active Jazz Bass® V.png"
    },
    {   name: "Affinity Series® Jazz Bass® VI",
        price: 29000,
        types: ["Jazz Bass", "Squier Jazz Bass"],
        image: "guitars/Affinity Series® Jazz Bass® VI.png"
    },
    {   name: "Affinity Series® Active Jazz Bass®",
        price: 27000,
        types: ["Jazz Bass", "Squier Jazz Bass"],
        image: "guitars/Affinity Series® Active Jazz Bass®.png"
    }
];

let originalProducts = [...products];

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

function renderCategories(category) {

    const container = document.getElementById("categories");

    if (!container) return;

    const current = categoriesData[category];

    container.style.display = "grid";

    container.innerHTML = current.map(item => `

        <a href="catalog.html?type=${item.type}"
           class="category-card">

            <img src="${item.image}"
                 class="category-card__image">

            <p class="category-card__title">
                ${item.title}
            </p>

        </a>

    `).join("");
}

document.addEventListener("mousemove", (e) => {

    const menu = document.querySelector(".catalog-menu");
    const categories = document.getElementById("categories");

    if (!menu.contains(e.target) &&
        !categories.contains(e.target)) {

        categories.style.display = "none";
    }

});

function sortCatalog() {
    const value = document.getElementById("sortSelect").value;

    if (value === "asc") {
        products.sort((a, b) => a.price - b.price);
    } 
    else if (value === "desc") {
        products.sort((a, b) => b.price - a.price);
    } 
    else {
        products = [...originalProducts];
    }

    renderCatalog();
}


function renderCatalog() {
    const container = document.getElementById("catalog");
    if (!container) return;

    container.innerHTML = products.map(p => `
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

function filterCatalog(type) {

    if (!type) {
 
        document.querySelectorAll(".product-card")
            .forEach(card => card.style.display = "flex");
        return;
    }

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        const name = card.dataset.name;
        const product = products.find(p => p.name === name);

        if (!product || !product.types) return;

        const match = product.types.includes(type);

        card.style.display = match ? "flex" : "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    renderCatalog();
    updateCart();

    if (type) {
        filterCatalog(type);
    }
});