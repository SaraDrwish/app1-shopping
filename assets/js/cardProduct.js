
let productsInCardLocal = localStorage.getItem("productsInCard");
let allProducts = document.querySelector(".products");

if (productsInCardLocal) { 
    let itm = JSON.parse(productsInCardLocal);
    drowCardProducts(itm);
}

function drowCardProducts(prd) {
     
 let y = prd.map( (i)=>{
        return ` 
         <div class="product-item">
                        <img src="${i.img}" alt="coco">
                        <div class="prod-item-des">
                            <h2>${i.title} </h2>
                            <p>${i.desc}</p>
                            <span>${i.color}</span>
                        </div>  
                        <div class="prod-item-action">
                             <button class = "removeFromCard" onclick="removeFromCard(${i.id})"> Remove from card </button>
                        </div>  
         </div> 
        `
    })
    allProducts.innerHTML = y;

 }
