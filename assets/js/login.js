let userName = document.querySelector("#username");
let pass = document.querySelector("#pass");
let btnLogin = document.getElementById("submit");

let userlocalN = localStorage.getItem("userName");
let passLocalP = localStorage.getItem("pass");

btnLogin.addEventListener("click", (e) => {

    e.preventDefault();
    if (userName.value === "" || pass.value === "") {
        alert("plz enter the data");
    }else{
        //prop in css deleted the spaces --- trim ---
        // if ( (userName.value.trim() ) && (userlocalN.trim() && userlocalN)  ===  (passLocalP && passLocalP.trim()  ) ===  pass.value) {
        if ( userlocalN && userlocalN.trim() === userName.value && passLocalP && passLocalP.trim() === pass.value) {
            setTimeout(() => {
                window.location = "index.html";
            }, 1000);
            }else{
                alert("ur pass or email is not correct");
            }
    }
    

});