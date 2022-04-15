const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
loginForm.addEventListener("submit", onLoginSubmit);

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "Hello ! " + username;
    paintGreetings(username);
    
}

function paintGreetings(abc){
    greeting.innerText = `Hello! ${abc}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
      
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
   // show the greeting
   paintGreetings(savedUsername);
}