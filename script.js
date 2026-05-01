let cart = [];
let total = 0;

function addToCart(name, price){
    cart.push({name, price});
    total += price;
    updateCart();
}

function removeItem(i){
    total -= cart[i].price;
    cart.splice(i,1);
    updateCart();
}

function updateCart(){

    const count = document.getElementById("cartCount");
    if(count) count.innerText = cart.length;

    const box = document.getElementById("cartBox");
    if(!box) return;

    box.innerHTML = "<h3>🛒 Carrinho</h3>";

    if(cart.length === 0){
        box.innerHTML += "<p>Vazio</p>";
        return;
    }

    cart.forEach((item,i)=>{
        box.innerHTML += `
        <div style="display:flex;justify-content:space-between;margin:5px 0;">
        <span>${item.name} - R$ ${item.price}</span>
        <button onclick="removeItem(${i})">X</button>
        </div>`;
    });

    box.innerHTML += `<hr><b>Total: R$ ${total}</b>`;
}

window.onload = updateCart;