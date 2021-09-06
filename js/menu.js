const displayMenu=()=>{
    //console.log("sarting the operation...");
    let menu=document.querySelector(".mobile-menu");
    menu.addEventListener("click",function(event){
        document.querySelector(".tunaweza-menu").classList.remove("hidden");
        event.stopPropagation();
        //console.log(event);
    },true)
}
const hideMenu=()=>{

}
displayMenu();