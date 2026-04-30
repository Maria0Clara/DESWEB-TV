let cartCount = 0;

function addToCart(product){
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
    alert(product + " adicionado ao carrinho!");
}