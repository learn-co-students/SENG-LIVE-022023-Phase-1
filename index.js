function loadPage() {
  console.log("page has loaded, run the program");
  return "this is a return value";
}

// console.log(loadPage) // referencing the function**
// loadPage() // invoking the function

function renderPokemon(){ 
    console.log(`rendering ${character}`)
}

function compareFunctions(firstFunction, secondFunction) {
    const firstReturn = firstFunction();
    const secondReturn = secondFunction();

    if (firstReturn > secondReturn) {
        return "First Function Return is Higher!";
    } else if (secondReturn > firstReturn) {
        return "Second Function Return is Higher!";
    } else {
        return "Draw!";
    }
}

    console.log(compareFunctions(() => 10, () => 1));
    console.log(compareFunctions(() => 1, () => 10));
    console.log(compareFunctions(() => 10, () => 10));