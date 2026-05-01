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

    if(cart.length === 0){
        box.innerHTML += "<p>Vazio</p>";
        return;
    }

    cart.forEach((item)=>{
        box.innerHTML += `
        <div style="display:flex;justify-content:space-between;margin:5px 0;">
        <span>${item.name}</span>
        <b>R$ ${item.price}</b>
        </div>`;
    });

    box.innerHTML += `<hr><b>Total: R$ ${total}</b>`;
}

window.onload = updateCart;