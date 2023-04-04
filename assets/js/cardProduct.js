
let productsInCardLocal = localStorage.getItem("productsInCard");
let allProducts = document.querySelector(".products");
let productItem = document.querySelectorAll(".products .product-item");
let cardsProdBox = document.querySelector(".cards-prod div")
let itm = JSON.parse(productsInCardLocal);

if (productsInCardLocal) { 
    drowCardProducts(itm);
}
 
function drowCardProducts(prd) {
     
 let x = prd.map( (i)=>{
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
    
    allProducts.innerHTML = x ;
        // console.log( localStorage.removeItem("y"))


}
 
// ------------------------------------------------------------------

function removeFromCard(id) {

//تحديد العنصر المراد حذفه من الصفحة ومن اللوكل ستورج
    // الحدث المسؤول عن الحذف 
    //   مطابقة لازم احط اتنين يساوي == || اما لو يساوي واحد اسناد  
    if (allProducts.innerHTML != "") {
             //   مطابقة لازم احط اتنين يساوي == || اما لو يساوي واحد اسناد  
        if(cardsProdBox.style.display == "block") {
            cardsProdBox.style.display = "none"
        }else{
            cardsProdBox.style.display = "block"
        }
    }
}

    // console.log(itm);






//     let choosItem = itm.find((i) => i.id === id);
// let itemid = choosItem.id;
     



    // console.log(itemid)
    // console.log(choosItem.remove())
    // console.log(choosItem.remove(id))
    // console.log( remove(choosItem) )
    // console.log(choosItem.localStorage.remove())


    // console.log( localStorage.removeItem(y))



    // console.log(localStorage.removeItem("itemid"))

    // productItem.innerHTML += `<p> ${choosItem.title} </p>  `;
    // console.log(  choosItem.id  )
    // choosItem.id.remove()
    // console.log( localStorage.removeItem(choosItem.id) )
    // console.log( localStorage.removeItem("itm") )
    


    // productItem.innerHTML = "";
    // cardsProdBox.innerHTML= "";
    // localStorage.removeItem("productItem");
    // localStorage.removeItem("cardsProdBox");
    // localStorage.removeItem("itm");
    // localStorage.removeItem("choosItem")
    // itm.localStorage.removeItem("productItem");
    // itm.localStorage.removeItem("cardsProdBox");
    // itm.removeItem


    

    // console.log(choosItem);
    
    


