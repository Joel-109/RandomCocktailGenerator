import { fetchData } from "./obtainDrinks.js";
import {putFavorite} from "./display.js"

let randomButton = document.getElementById("random-button");
let imgClick = document.getElementById("favorite-image");
let addButton = document.getElementById("add-button");

window.addEventListener("load", () => {
    fetchData();
})

randomButton.addEventListener("click", () => {
   fetchData();
})

imgClick.addEventListener("click", () => {
    putFavorite();
})

addButton.addEventListener("click", )


