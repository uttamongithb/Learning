let data = [];
let cart = JSON.parse(localStorage.getItem("cart") || "[]")

const p = document.getElementById('products');
const count = document.getElementById('count');
const searchEl = document.getElementById('search');
const sortEl = document.getElementById('sort');
const cartBtn = document.getElementById('cartBtn');

count.textContent = cart.length;

cartBtn.addEventListener('click', () => {
    location.href = 'cart.html'
});

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(d => {
        data = d;
        render(data);
    })



function render(data) {
    p.innerHTML = data.map(curele => `
        <div class='card'>
             <img src=${curele.image}>
             <h4>${curele.title.slice(0, 40)}</h4>
             <p class='price'>${curele.price}</p>
             <button data-id=${curele.id}>Add</button>
        </div> 
        `

    ).join('')
}

document.body.addEventListener('click', (e) => {
    if (e.target.dataset.id) {
        let item = data.find(x => x.id == e.target.dataset.id)

        cart.push(item)
        localStorage.setItem('cart', JSON.stringify(cart));

        count.textContent = cart.length;
    }
})

searchEl.oninput = e => {
    render(data.filter(x => x.title.toLowerCase().includes(e.target.value.toLowerCase())))
}

sortEl.onchange = e =>{
    let d = [...data]
    if(e.target.value == 'low') d.sort((a, b) => a.price - b.price);
    if(e.target.value == 'high') d.sort((a, b) => b.price - a.price);
    render(d)
}