let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price){
    cart.push({name, price});
    saveCart();
    updateCart();
}

function updateCart(){

    const box = document.getElementById("cartBox");
    if(!box) return;

    let total = 0;

    box.innerHTML = "<h3>🛒 Carrinho</h3>";

    if(cart.length === 0){
        box.innerHTML += "<p>Vazio</p>";
        return;
    }

    cart.forEach((item)=>{
        total += item.price;

        box.innerHTML += `
        <div style="display:flex;justify-content:space-between;margin:5px 0;">
        <span>${item.name}</span>
        <b>R$ ${item.price}</b>
        </div>`;
    });

    box.innerHTML += `<hr><b>Total: R$ ${total}</b>`;

    box.innerHTML += `
        <button onclick="finishBuy()" style="margin-top:10px;background:green;color:white;">
            Finalizar Compra
        </button>
        <button onclick="clearCart()" style="margin-top:5px;background:red;color:white;">
            Limpar Carrinho
        </button>
    `;
}

function clearCart(){
    cart = [];
    saveCart();
    updateCart();
}

function finishBuy(){
    if(cart.length === 0){
        alert("Carrinho vazio!");
        return;
    }

    alert("Compra finalizada com sucesso! 🎉");

    cart = [];
    saveCart();
    updateCart();
}

window.onload = updateCart;