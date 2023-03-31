fetch("https://community-backend-production.up.railway.app/getProducts").then(response => response.json()).then(data => console.log(data))

async function showCartItems() {
    //TODO : getCartItems  
    // this will give us a list of items that are in cart. 
}
window.addEventListener('load', (event) => {
    console.log('page is loaded');
    // console.log(event.target.)
    
    if (event.target.location.pathname === "/shopcart.html") {
        console.log("fetch data and show")
    }
})

function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
displayCart();
console.log('cart-data', cart, typeof cart)

function addToCart(product) {
  cart.push(product);
  displayCart();
  updateLocalStorage();
}

function removeItemFromCard(index) {
    cart.splice(index, 1)
    displayCart(cart)
    updateLocalStorage();
}

function displayCart() {
  const cartList = document.getElementById('cart');
  cartList.innerHTML = '';
  for (let i = 0; i < cart.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = cart[i];
    const button = document.createElement('button')
    button.style = `{background-color: red; text: white;}`
    button.setAttribute('data-index', i);
    button.onclick = (event) => {
        console.log('event triggered', event)
        let index = event.target.getAttribute('data-index')
        removeItemFromCard(index)
    }
    button.textContent = "Delete";
    listItem.appendChild(button)
    cartList.appendChild(listItem);
  }
}
