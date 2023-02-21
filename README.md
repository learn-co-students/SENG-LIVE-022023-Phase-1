# Functions

## SWBAT

- [ ] Understand the difference between declaring and invoking a function
- [ ] Implement Function Declarations, Function Expressions, and Arrow Functions
- [ ] Explain the difference between Function Declarations, Function Expressions, and Arrow Functions
- [ ] Explain the difference between Parameters and arguments
- [ ] Explain what First Class Function means
- [ ] Implement Higher Order Functions and Callback Functions

<p align="center">
    <img src="./assets/functions.jpeg" width="250" height="250">
</p>

## Deliverables

We will be building a web application that display a list of Pokemon characters:

1. In the event of a web page first loading, we might want to perform some logic.

Define a function `loadPage()` using function declaration that will:

- Console.log(): "page has loaded, run the program"

2. To render each Pokemon character to the web page, we will need to create a method that creates HTML elements including details about a given character.

Write a function `renderPokemon()` using function declaration that will:

- Accept 'character' as a parameter.
- Console.log(): 'Rendering <character>' NOTE: 'character' should be return the value of the parameter the function receives.

- Example: `renderPokemon("Pikachu")` ➞ 'Rendering Pikachu'

3. Write a function `compareFunctions()` that will:

- Be passed two functions:`first` and `second`.
- `compareFunctions()` should call each function and return a string indicating which function returned the larger number.

- If `first()` returns the larger number, return the string "First Function is Higher!".
- If `second()` returns the larger number, return the string "Second Function is Higher!".
- If the functions return the same number, return the string "Draw!".

- Example: compareFunctions(() => 1, () => 10) ➞ "Second Function is Higher!"
- Example: compareFunctions(() => 10, () => 1) ➞ "First Function is Higher!"
- Example: compareFunctions(() => 10, () => 10) ➞ "Draw!"

## Functions

Functions are like a little program. They consist of a set of statements/tasks and return a value or undefined.

```
// This is a function delcoration
// This function is returning the string of 'hi'
function sayHi() {
    return 'hi'
}
//This is a function reference but it doesn't acutally run the funciton.
sayhi

// To run or call or invoke (all the same thing). Write the functions name and add a pair of ()
sayHi()

// This functions console.logs the string of 'hello' but returns undefined because it does not have the return keyword.

function sayHello(){
    console.log('hello')
}

sayHello()

// logging and returning are not the same thing. A return value becomes the value of an invoked function, while a console.log only logs something to the console.

```

Functions can take special localized variables called paramaters. When the function is invoked it's passed an argument which becomes the value of the parameter.

```

function squareNumb(num){
    //num is the parameter, it is scoped to the inside of the function
    return num*num
}
// 2 is the argument, the value of num in the above function becomes 2.
squareNumb(2)


// functions can take multiple parameters.
function addTwo(num1, numb2){
    return num1 + num2
}
addTwo(5,10)

```

Arrow functions are another way to declare functions with some added benifits.

```
// An arrow function can avoid {} if it's return done on a single line or with ()
// An arrow function with a single paramater doesn't need the () around the paramater.
const faveFood = food =>  `My fave food is ${food}`
const faveFood = food => (
     `My fave food is ${food}`
)
faveFood('cookies')

```

Arrow functions also have the added benifit of passing context but we won't be covering that today.

## Callbacks and HigherOrder Functions

Functions in JavaScript are treated like any other variable. When functions are treated like this we refer to them as First class. One of the greatest benifits of this, is that functions in JavaScript can be passed as arguments to other functions.

```
// A function that returns a function is called a Higher-Order Function.

const outsideFunction = () => {
    return () => {
        //inside function
    }
}

//A function that is taken as an argument is a callback

const opening => (openingVideo, credits){
    return openingVideo(credits)
}

const taskingHistory(){
    //... video functionality here
}

const crashCourse(){
    //... video functionality here
}

opening(crashCourse, 'Hank Green')

```
