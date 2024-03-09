import {createFavoriteHTMLDrink} from "./ParseData.js"
import {fetchFavoriteData} from "./obtainDrinks.js"
let counter = 0;
let drink = {};
let favoriteList = [];
function setDrink(adrink){
    drink = adrink;
}

function addDrink(){
    let name = drink.name;
    let id = drink.id;
    let saveData = {name,id};

    if(!verifyExistinceOfDrink()){
        localStorage.setItem(`Coctail${counter}`,JSON.stringify(saveData));
        counter+=1;
        favoriteList.push(drink);
        createFavoriteHTMLDrink(drink);
        
    } else{
        alert("This coctail is already in your favorite list of Coctails");
    }
}   

function bringFavoriteDrinks(){
    let favoriteDrink;

    for(let i=0;i<12000;i++){
        favoriteDrink = JSON.parse(window.localStorage.getItem(`Coctail${i}`));
        if(favoriteDrink !== null){
            favoriteList.push(favoriteDrink);
            fetchFavoriteData(favoriteDrink); 
            counter+=1;
        } else{
            break;
        }
    }
}

function verifyExistinceOfDrink(){
    let existence = false;;
    favoriteList.forEach(element => {
        if(element.name === `${drink.name}`){
            existence = true;
        }
    });
    return existence;
}

export{addDrink, setDrink, bringFavoriteDrinks}