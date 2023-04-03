
// localStorage.setItem("firstcarkey", "value");
// console.log(localStorage.getItem("firstcar"));

let  userInfoUser = document.querySelector(".user-info .user");
let  userInfo = document.querySelector(".user-info");
let links = document.querySelector("#links");

if (localStorage.getItem("userName") ) {
    
    links.remove();

    userInfo.style.display = "flex";
    userInfoUser.style.display = "flex";
    userInfoUser.style.color = "#9b916e";

    userInfoUser.innerHTML = "Welcome  " + localStorage.getItem( "userName");
}
// ---------------------------------------------------------------------------------------------
let logout = document.querySelector(".logout");
logout.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
        window.location = "login.html";
    }, 1200);
});
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

function check() {
    
    if (localStorage.getItem("userName")) {
        window.location = "cardProduct.html";
    } else {
        window.location = "login.html";
    }

}
// --------------------------------------------------------------------------------------------

// let cardsProd = document.querySelector(".cards-prod");
let cardsProdBox = document.querySelector(".cards-prod div");

function addToCard(id) {
    // console.log(id)
    let choosItem = proudcts.find( (item) => item.id === id  );    
        // console.log(choosItem)
    
    
    cardsProdBox.innerHTML += `<p> ${choosItem.title} </p>  `;

}