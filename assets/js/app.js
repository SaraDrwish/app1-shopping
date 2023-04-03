
// localStorage.setItem("firstcarkey", "value");
// console.log(localStorage.getItem("firstcar"));


let  userInfoUser = document.querySelector(".user-info .user");
let  userInfo = document.querySelector(".user-info");
// let userdata = document.querySelector(".user-info .user");
let links = document.querySelector("#links");

if (localStorage.getItem("userName") ) {
    
    links.remove();

    userInfo.style.display = "flex";
    userInfoUser.style.display = "flex";
    userInfoUser.style.color = "#9b916e";

    userInfoUser.innerHTML = "Welcome  " + localStorage.getItem( "userName");

}

// ---------------------------------------------------------------------------------------------







