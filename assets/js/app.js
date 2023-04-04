// localStorage.setItem("firstcarkey", "value");
// console.log(localStorage.getItem("firstcar"));

// ----------------------------------------------------------------------------------------------
let allProducts = document.querySelector(".products");
let proudcts = [
    {
        id: 1,
        title: "car",
        desc: "bmw",
        color: "red",
        img: "./img/coco.jpg "
    },
    {
        id: 2,
        title: "perfum",
        desc: "perfun channel",
        color: "blue",
        img: "./img/car.jpeg "
    },
    {
        id: 3,
        title: "iphone",
        desc: "ihpne 14 pro max",
        color: "yellow",
        img: "./img/iphon.jpg "
    },
] 
function drowProducts() {
    let y = proudcts.map((itm) => {
        return ` 
         <div class="product-item">
                        <img src="${itm.img}" alt="coco">
                        <div class="prod-item-des">
                            <h2>${itm.title} </h2>
                            <p>${itm.desc}</p>
                            <span>${itm.color}</span>
                        </div>  
                        <div class="prod-item-action">
                       <!-- /* //intercew Qstionnnnnnnnn// */ -->
                            <!-- // <button onclick="check()"> add to card</button> -->
                             <button class = "addToCard" onclick="addToCard(${itm.id})"> add to card</button>
                            <i class="fa fa-heart"></i>
                        </div>  
         </div> 
        `
    });
    allProducts.innerHTML = y;
}
drowProducts();
//-----------------------------------------------------------------------------------------------
let cardsProdBox = document.querySelector(".cards-prod div");
let padge = document.querySelector(".padge");

let addedItemLocal = localStorage.getItem("productsInCard") ? JSON.parse(localStorage.getItem("productsInCard")) : [];
if (addedItemLocal) {
    addedItemLocal.map( i=> {
        cardsProdBox.innerHTML += `<p> ${i.title} </p>  `;
    })

        padge.style.display = "block";
        padge.innerHTML = addedItemLocal.length;
}

if (localStorage.getItem("userName")) {

    function addToCard(id) {
        let choosItem = proudcts.find((item) => item.id === id);
        cardsProdBox.innerHTML += `<p> ${choosItem.title} </p>  `;

        addedItemLocal = [...addedItemLocal, choosItem];
        localStorage.setItem("productsInCard", JSON.stringify(addedItemLocal));
                
        let cardProdLength = document.querySelectorAll(".cards-prod div p")

        padge.style.display = "block";
        padge.innerHTML = cardProdLength.length;

    }
}else{
        window.location = "login.html";
}

// --------------------------------------------------------------------------------------------

let cardsProd = document.querySelector(".cards-prod");
let shoppingCartIcon = document.querySelector(".shoppingCart");
shoppingCartIcon.addEventListener("click", openCart );

function openCart() {
    //   مطابقة لازم احط اتنين يساوي == || اما لو يساوي واحد اسناد  
    if (cardsProdBox.innerHTML != "") {
             //   مطابقة لازم احط اتنين يساوي == || اما لو يساوي واحد اسناد  
        if(cardsProd.style.display == "block") {
            cardsProd.style.display = "none"
        }else{
            cardsProd.style.display = "block"
        }
    }
}

// ----------------------------------------------------------------------------------------------


