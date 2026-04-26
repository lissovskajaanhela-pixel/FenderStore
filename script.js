let cart = [];

try {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
} catch (e) {
    cart = [];
}

function addToCart(btn) {
    const card = btn.closest(".product-card");
    if (!card) return;

    const name = card.dataset.name || "Unknown";
    const image = card.dataset.image || "";

    cart.push({ name, image });

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

    counters.forEach(el => {
        el.textContent = cart.length;
    });

    const cartItems = document.getElementById("cart-items");
    if (!cartItems) return;

    const emptyText = document.getElementById("empty-cart");
    const clearBtn = document.querySelector(".cart__clear");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        if (emptyText) emptyText.style.display = "block";
        if (clearBtn) clearBtn.style.display = "none";
        return;
    }

    if (emptyText) emptyText.style.display = "none";
    if (clearBtn) clearBtn.style.display = "block";

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "product-card";

        div.innerHTML = `
            <img src="${item.image}" class="product-card__image">
            <h3>${item.name}</h3>
            <button onclick="removeFromCart(${index})">Удалить</button>
        `;

        cartItems.appendChild(div);
    });
}

updateCart();