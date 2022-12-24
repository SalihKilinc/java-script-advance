
import showAlert ,{  showConfirm } from "./modules/message.js";

document.getElementById("btn").addEventListener("click" ,() => {
    showAlert("Hello js")
})

document.getElementById("btn2").addEventListener("click" ,() => {
    showConfirm("Hello js Repeat")
})