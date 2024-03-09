import { recieveDrink, createFavoriteHTMLDrink } from "./ParseData.js";
import { loadAnimation } from "./display.js";
import { setDrink } from "./saveDrinks.js";

async function fetchData(){
    loadAnimation(true);
    const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php");
    const data = await response.json();
    loadAnimation(false);

    recieveDrink(drinkAttributes(data));
    setDrink(drinkAttributes(data));
}

async function fetchFavoriteData(drink){

    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink.name}`);
    const data = await response.json();

    createFavoriteHTMLDrink(drinkAttributes(data));
}

async function fetchFavorites(id){
    loadAnimation(true);
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    loadAnimation(false);
    console.log(data);

    recieveDrink(drinkAttributes(data));
    setDrink(drinkAttributes(data));
}

function drinkAttributes(data){
    const id = data.drinks[0].idDrink;
    const ingredients = [];
    const instructions = data.drinks[0].strInstructions;
    const image = data.drinks[0].strDrinkThumb;
    const name = data.drinks[0].strDrink;
    const category = data.drinks[0].strCategory;
    console.log("nnn");

    for (let i=0;i<15;i++){
        if(data.drinks[0][`strIngredient${i}`] !== null && data.drinks[0][`strIngredient${i}`] !== undefined){
            ingredients.push(data.drinks[0][`strIngredient${i}`]);
        }
    }
    const oneDrink = {id,name, ingredients, instructions,image, category}
    return oneDrink;
}
export{fetchData,fetchFavoriteData,fetchFavorites}

