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

const contentBox = document.getElementsByClassName('contentBx');
const btn = document.getElementsByClassName('btn');

for(let i=0; i<contentBox.length; i++){
    contentBox[i].addEventListener('click', function(){
        this.classList.toggle('actived')
        // if(contentBox[i].classList.contains('ctived')){
        //     btn[i].innerHTML=`   <img src="./assets/images/plas.svg" alt="svg">`
        // }else{
            
        //      btn[i].innerHTML=`<img src="./assets/images/iks.svg" alt="svg">`
        // }
    });
};





