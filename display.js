let container = document.getElementById("main-container");
let imgClick = document.getElementById("favorite-zone");

let hidden = true;

function showDrink(htmlElement){
    container.innerHTML="";
    container.innerHTML+= htmlElement;
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

export{showDrink,putFavorite}