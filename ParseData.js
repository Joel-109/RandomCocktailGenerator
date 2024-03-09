import { showDrink , showFavoriteDrink} from "./display.js";

let drink={};

function recieveDrink(oneDrink){
    drink = oneDrink;
    createHTMLElement();
}

function createHTMLElement(){
    let ingredients = organizeList(drink.ingredients);
    let instructions = makeList(drink.instructions);
    console.log(ingredients);
    const innerHTML = 
    `
        <img src="${drink.image}" alt="coctail">
        <div id="description">
            <h1 id="coctailName"> ${drink.name} - ${drink.id}</h1>
            <div>
                <h1> Category </h1>
                <ul>   
                    <li>${drink.category}</li>
                </ul>
            </div>
            <div>
                <h1>Ingredients</h2>
                <ul> 
                   ${ingredients}
                </ul>
            </div>
            <div>
                <h1>Instructions</h2>
                <ol> 
                   ${instructions}
                </ol>   
            </div>
       </div>
    `
    showDrink(innerHTML);
}

function makeList(instructions){
    let newList = organizeList(instructions.split(".").slice(0,-1));
    return newList;
}

function organizeList(list){
    let innerHTML="";
    list.forEach(element => {
        innerHTML += "<li>"+element+"</li>"+"\n";
    }); 
    return innerHTML;
}

function createFavoriteHTMLDrink(favoriteDrink){
    let innerHTML =
    `
    <article class="favorite-coctail">
        <img src="${favoriteDrink.image}" alt="">
        <h1> ${favoriteDrink.name} - ${favoriteDrink.id}</h1> 
    </article>
    `
    showFavoriteDrink(innerHTML);
}

export{recieveDrink, createFavoriteHTMLDrink}