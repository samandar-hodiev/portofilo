"use strict"

const menuList = $("#menu-list");
const menuButton = $("#menu-button");

menuButton.addEventListener('click', ()=>{
    menuList.classList.toggle('menuHider');

    if(menuList.classList.contains('menuHider')){
        menuButton.innerHTML= `<i class="bi bi-list"></i>`;
    }else{
         menuButton.innerHTML=`<i class="bi bi-x "></i>`;
    }
});