let container = document.getElementById("main-container");
let imgClick = document.getElementById("favorite-zone");
let loader = document.getElementById("load");
let favoriteDrinks = document.getElementById("favorite-zone");
let hidden = true;


function showDrink(htmlElement){
    container.innerHTML="";
    container.innerHTML+= htmlElement;
}

function showFavoriteDrink(htmlElement){
    favoriteDrinks.innerHTML +=htmlElement;
}

function putFavorite(){
    if(hidden==true){
        imgClick.classList.remove("hide-favorite");
        hidden = false;
    } else{
        imgClick.classList.add("hide-favorite");
        hidden = true;
    }
}

function loadAnimation(boolean){
    if(boolean==true){
        loader.classList.remove("loader--hidden");
    } else{
        loader.classList.add("loader--hidden");
    }
}

export{showDrink,putFavorite,loadAnimation,showFavoriteDrink}