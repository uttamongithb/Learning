const cart = JSON.parse(localStorage.getItem("cart") || "[]")
const cartDiv = document.getElementById("cart")
const total = document.getElementById("total")


if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty.</p>"
    total.textContent = "Total: $0.00"
} else {
    cartDiv.innerHTML = cart.map(x => `
        <div class='card'>
          <img src=${x.image}>
          <h4>${x.title}</h4>
          <p>${x.price}</p>
        </div>
        `).join('')

    total.textContent = `Total: $` + cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)
}