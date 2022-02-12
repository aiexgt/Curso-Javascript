const container = document.querySelector(".flex-container");

const button = document.querySelector(".send-button");
button.value = button.value.toUpperCase();

function createKey(name,model,price){
    img  = '<img class="llave-img" src="llave.png">';
    name  = `<h2>${name}</h2>`;
    model = `<h2>${model}</h2>`;
    price = `<p>Precio: <b>Q.${price}</b></p>`;
    return[img,name,model,price];
}

let documentFragment = document.createDocumentFragment();

for(let i=1;i<=20;i++){
    let modelRandom = Math.round(Math.random()*10000);
    let priceRandom = Math.round(Math.random()*10+30);
    let key = createKey(`llave ${i}`,`modelo ${modelRandom}`,priceRandom);
    let div = document.createElement("DIV");
    div.addEventListener('click',()=>{
        document.querySelector(".key-data").value = modelRandom;
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    documentFragment.appendChild(div);
};
container.appendChild(documentFragment);