
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
    
    // e.preventDefault();

    localStorage.clear();

    setTimeout(() => {
        window.location = "login.html";
    }, 1200);
});
