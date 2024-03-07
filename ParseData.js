import { showDrink } from "./display.js";

function createHTMLElement(drink){
    let ingredients = organizeList(drink.ingredients);
    let instructions = makeList(drink.instructions);
    console.log(ingredients);
    const innerHTML = 
    `<article>
        <img src="${drink.image}" alt="coctail">
        <div id="description">
            <h1 id="coctailName"> ${drink.name} </h1>
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
            <div>
                <button id="random-button"> Generate Random </button>
                <button id="add-button"> ADD </button>
            </div>
       </div>
    </article>`
    showDrink(innerHTML);
}

function makeList(instructions){
    let newList = organizeList(instructions.split("."));
    return newList;
}

function organizeList(list){
    let innerHTML="";
    list.forEach(element => {
        innerHTML += "<li>"+element+"</li>"+"\n";
    }); 
    return innerHTML.slice(0,-1);
}

export{createHTMLElement}