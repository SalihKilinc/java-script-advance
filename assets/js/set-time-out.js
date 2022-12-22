let menuTimeOut= null;
document.querySelector("#menu").addEventListener("mouseenter" , (e)=>{
  menuTimeOut=   setTimeout(()=>{
        e.target.classList.add("opened")
    },300)    // mause uzerine geldiginde ne kadar duracagini yazdik
   // fakat mause ok uzerine gelince yinede de ani hareket edr bunun icin asgidaki clear koduna ihtiyac duyduk
})


document.querySelector("#menu").addEventListener("mouseleave" , (e)=>{
    e.target.classList.remove("opened")
    if(menuTimeOut !== null){
clearTimeout(menuTimeOut)}  // mausun ok uzerine geldiginde zamanla durmasini saglayan kisim
   
})