const menu=document.querySelector("#sandwich");
const crossElement=document.querySelector("#bar img");
const mobileMenu=document.querySelector("#mobile-menu");
//const menuItems= document.querySelector("options");

const displayMenu=()=>{
    
    menu.addEventListener("click",function(event){
        document.querySelector("#mobile-menu").classList.remove("hidden");
    })
}
const hideMenu=()=>{
    crossElement.addEventListener("click",function(){
        mobileMenu.classList.add("hidden")
        console.log(document.querySelector(".tunaweza-menu").classList);
        console.log(mobileMenu.className);
        //e.preventDefault();
    });
}
const menuItemsClicked=()=>{
    let anchors=document.querySelectorAll(".options li a");
    console.log(anchors);
    anchors.forEach((anchor)=>{
        anchor.addEventListener("click",function(e){
            mobileMenu.classList.add("hidden")
            //e.preventDefault();
        });
    })
}
hideMenu();
displayMenu();
menuItemsClicked();
