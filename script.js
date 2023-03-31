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