
// localStorage.setItem("firstcarkey", "value");
// console.log(localStorage.getItem("firstcar"));


let userInfo = document.querySelector(".user-info");
// let userdata = document.querySelector(".user-info .user");
let links = document.querySelector("#links");

if (localStorage.getItem("userName") ) {
    
    links.remove();

    userInfo.style.display = "flex";
    userInfo.innerHTML = localStorage.getItem("userName");

}





