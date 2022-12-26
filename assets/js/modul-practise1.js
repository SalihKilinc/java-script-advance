import { sSortASC ,sSortDESC ,nSortASC , nSortDESC } from "./modules/practise.js";

const arr = ["Ali", "Veli", "Şeyma", "Çiçek", "Bülent"];
const arr2 =[12,21,23,13,31,25,22]
document.getElementById("btn1").addEventListener("click", ()=>{
   
    const newArr = sSortASC(arr);
    console.log(arr);
    console.log(newArr);
});
document.getElementById("btn2").addEventListener("click", ()=>{
   
    const newArr = sSortDESC(arr);
    console.log(arr);
    console.log(newArr);
});
document.getElementById("btn3").addEventListener("click", ()=>{
    
    const newArr = nSortASC(arr2);
    console.log(arr2);
    console.log(newArr);
});
document.getElementById("btn4").addEventListener("click", ()=>{
    const newArr = nSortDESC(arr2);
    console.log(arr2);
    console.log(newArr);
});