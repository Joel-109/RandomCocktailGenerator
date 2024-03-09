import {createFavoriteHTMLDrink} from "./ParseData.js"
import {fetchFavoriteData} from "./obtainDrinks.js"

let counter = 0;
let drink = {};

function setDrink(adrink){
    drink = adrink;
}

function addDrink(){
    let name = drink.name;
    let id = drink.id;
    let saveData = {name,id};

    localStorage.setItem(`Coctail${counter}`,JSON.stringify(saveData));
    counter+=1;
    createFavoriteHTMLDrink(drink);
}   

function bringFavoriteDrinks(){
    let favoriteDrink;

    for(let i=0;i<12000;i++){
        favoriteDrink = JSON.parse(window.localStorage.getItem(`Coctail${i}`));
        console.log(favoriteDrink);
        if(favoriteDrink !== null){
            fetchFavoriteData(favoriteDrink); 
            console.log("here");
        } else{
            break;
        }
    }
}

function verifyExistinceOfDrink(){
    
    
}

export{addDrink, setDrink, bringFavoriteDrinks}