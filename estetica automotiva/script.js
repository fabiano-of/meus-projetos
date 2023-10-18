let menu = document.querySelector('.menu-list');
menu.style.maxHeight = "0"

function showMenu() {
    if(menu.style.maxHeight == "0px"){
        menu.style.maxHeight = "120px"
    }else{
        menu.style.maxHeight = "0px"
    }
}

    
