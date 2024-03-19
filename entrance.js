import { fetchData, fetchFavorites } from "./obtainDrinks.js";
import {putFavorite} from "./display.js"
import {addDrink, bringFavoriteDrinks} from "./saveDrinks.js"

let randomButton = document.getElementById("random-button");
let imgClick = document.getElementById("favorite-image");
let addButton = document.getElementById("add-button");
let favoriteClass = document.getElementsByClassName("favorite-coctail");


window.addEventListener("load", () => {
    process();
    bringFavoriteDrinks();
})

randomButton.addEventListener("click", () => {
    process();
})

imgClick.addEventListener("click", () => {
    putFavorite();
})

function process(){ 
    fetchData();
}

addButton.addEventListener("click" , () => {
    addDrink();
})

document.addEventListener("click", function(event) {
    console.log("asasassasa");
    if (event.target.classList.contains("favorite-coctail")) {
        let id = event.target.getAttribute('id');
        fetchFavorites(id);
    }
});


