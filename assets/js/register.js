
//var declration

var btnReg = document.getElementById("submit");
var userName = document.getElementById("username");
var email = document.querySelector("#email");
var pass = document.querySelector("#pass");

btnReg.addEventListener("click", (e) => {
    // because the page reloaded when I make sign up so the settime code  will be deleted  ,, and the fun must have inside param e..
     e.preventDefault();
     // === عشان المطابقة مش اسناد قيمة 
    if (userName.value=== "" || pass.value=== "" || email.value === "") {
        alert("plz fill the all data");
    } else {

        localStorage.setItem("userName" , userName.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("pass", pass.value);
        
        setTimeout(() => {
            //go to another page
            window.location = "login.html";
        }, 1200);
        
    }
    

});

