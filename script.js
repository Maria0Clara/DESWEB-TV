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

    box.innerHTML = "";

    cart.forEach((item,i)=>{
        box.innerHTML += `
        <div style="display:flex;justify-content:space-between;margin:5px 0;">
            <span>${item.name}</span>
            <button onclick="removeItem(${i})">X</button>
        </div>`;
    });

    box.innerHTML += `<hr><b>Total: R$ ${total}</b>
    <button onclick="finalizar()">Finalizar</button>`;
}

function finalizar(){
    alert("Compra finalizada! Total: R$ " + total);
    cart = [];
    total = 0;
    updateCart();
}