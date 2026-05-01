let cart = [];
let total = 0;

function addToCart(name, price){
    cart.push({name, price});
    total += price;
    updateCart();
}

function removeItem(index){
    total -= cart[index].price;
    cart.splice(index,1);
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

    box.innerHTML += `
    <hr>
    <b>Total: R$ ${total}</b><br><br>
    <button onclick="finalizar()">Finalizar Compra</button>
    `;
}

function finalizar(){
    alert("Compra finalizada! Total: R$ " + total);
    cart = [];
    total = 0;
    updateCart();
}

window.onload = updateCart;