let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const cartList = document.getElementById("cart-items");
const emptyMsg = document.getElementById("empty-message");
const totalEl = document.getElementById("total");
const clearBtn = document.getElementById("clear-cart");

function renderCart() {
    cartList.innerHTML = "";
    if (cartItems.length === 0) {
        emptyMsg.style.display = "block";
        totalEl.textContent = "";
    } else {
        emptyMsg.style.display = "none";
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartList.appendChild(li);
            total += item.price;
        });
        totalEl.textContent = `Total: $${total}`;
    }
}

clearBtn.addEventListener("click", () => {
    cartItems = [];
    localStorage.setItem("cart", JSON.stringify(cartItems));
    renderCart();
});

renderCart();
