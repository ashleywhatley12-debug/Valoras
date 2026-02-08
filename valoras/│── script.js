const cartLink = document.querySelector("nav a:last-child");
const buttons = document.querySelectorAll(".add-to-cart");

// Load existing cart from localStorage
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let cartCount = cartItems.length;
cartLink.textContent = `Cart (${cartCount})`;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const productDiv = e.target.parentElement;
        const name = productDiv.querySelector("h2").textContent;
        const price = parseFloat(productDiv.querySelector("p").textContent.replace("$",""));

        cartItems.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cartItems));

        cartCount++;
        cartLink.textContent = `Cart (${cartCount})`;

        // Redirect to cart page
        window.location.href = "cart.html";
    });
});
