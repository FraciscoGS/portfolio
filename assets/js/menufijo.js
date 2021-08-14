const header = document.getElementById("mineMenu");

document.addEventListener("scroll",scrollHeaderTop);

function scrollHeaderTop(){
   
    if(window.scrollY > 20){
        header.classList.add("menuOutTop");
    }else if(window.scrollY===0){
        header.classList.remove("menuOutTop");
    }
}
