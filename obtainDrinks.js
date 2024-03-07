import { createHTMLElement } from "./ParseData.js";

async function fetchData(){
    console.log("aqui") 
    
    const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php");
    const data = await response.json();

    const id = data.drinks[0].idDrink;
    const ingredients = [];
    const instructions = data.drinks[0].strInstructions;
    const image = data.drinks[0].strDrinkThumb;
    const name = data.drinks[0].strDrink;

    for (let i=0;i<15;i++){
        if(data.drinks[0][`strIngredient${i}`] !== null && data.drinks[0][`strIngredient${i}`] !== undefined){
            ingredients.push(data.drinks[0][`strIngredient${i}`]);
            console.log(data.drinks[0][`strIngredient${i}`]);
        }
    }

    console.log(data);
    console.log(id);
    console.log(ingredients); 

    const drink = { id,name, ingredients, instructions,image}
    createHTMLElement(drink);
}

export{fetchData}

