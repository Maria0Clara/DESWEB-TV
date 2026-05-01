let cart = [];
let total = 0;

function addToCart(name, price){
    cart.push({name, price});
    total += price;
    updateCart();
}

function updateCart(){

    const box = document.getElementById("cartBox");
    if(!box) return;

    box.innerHTML = "<h3>🛒 Carrinho</h3>";

    cart.forEach((item)=>{
        box.innerHTML += `<p>${item.name} - R$ ${item.price}</p>`;
    });

    box.innerHTML += `<hr><b>Total: R$ ${total}</b>`;
}