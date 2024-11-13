"use strict"

const menuList = $("#menu-list");
const menuButton = $("#menu-button");

menuButton.addEventListener('click', ()=>{
    menuList.classList.toggle('menuHider');

    if(menuList.classList.contains('menuHider')){
        menuButton.innerHTML= `<img src="./assets/images/menuIcon.svg" alt="svg">`;
    }else{
         menuButton.innerHTML=`<i class="bi bi-x "></i>`;
    }
});