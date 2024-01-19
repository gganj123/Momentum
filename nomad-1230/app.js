const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

function onLoginBtnClick(){
    const value = loginInput.value;
    if(value ===""){
        alert("pleasr write your name");
    }else if (username.length<= 15){
        alert("you name is too long.");
    }
}

loginButton.addEventListener("click",onLoginBtnClick);