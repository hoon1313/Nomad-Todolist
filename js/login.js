const loginForm = document.querySelector("#userInput");
const loginInput = document.querySelector("#userInput input");

const userNamesave = document.querySelector("#nameAppend");
const HIDDEN_CLASSSNAME = "hidden";
const USERNAME_KEY = "id";

function btnClick(event) {
  event.preventDefault();
  const UserID = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSSNAME);
  const LoginClick = localStorage.setItem(USERNAME_KEY, UserID);
  const userName = localStorage.getItem(USERNAME_KEY);
  userNamesave.innerText = `Hello, ${userName}`;
  userNamesave.classList.remove(HIDDEN_CLASSSNAME);
}

const checkLocalStorage = localStorage.getItem(USERNAME_KEY);
if (checkLocalStorage === null) {
  loginForm.classList.remove(HIDDEN_CLASSSNAME);
  loginForm.addEventListener("submit", btnClick);
} else {
  userNamesave.classList.remove(HIDDEN_CLASSSNAME);
  userNamesave.innerText = `Welcome, ${checkLocalStorage}`;
}
