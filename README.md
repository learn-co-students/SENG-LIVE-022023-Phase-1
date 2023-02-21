# DOM Manipulation

### What we will build today:

<p align="center">
    <img src="./assets/endgoal.png" width="850" height="450">
</p>

## SWBAT

- [ ] Explain what the DOM is
- [ ] Traverse the DOM tree
- [ ] Select single dom elements with .querySelector() and getElementById()
- [ ] Select multiple elements with .querySelectorAll() and .getElementsByClassName()
- [ ] Add context with .textContent
- [ ] Create elements with .createElement
- [ ] Append elements to the dom with .appendChild and .append
- [ ] Explain the dangers of .innerHTML and when it's safe to use
- [ ] Remove content with .remove

### Deliverables

1. Select the form element with id `poke-form` using the .getElementById() method and store in the variable `pokeForm`. 

2. Select the div element with id `poke-container` using the .querySelector() method and store in the variable `pokeContainer`.

3. Select the label elements with class name `form-label` using the .getElementsByClassName() and store in the variable `labels`.

4. Select all the div elements using the .querySelectorAll() method and store in the variable `allDivs`.

5. Select the div element with id `lecture-goals` and use the .remove() method to remove the element from the DOM.

6. Define a function `renderPokemon()` that will generate the HTML for each character card as seen in the image below:

<p align="center">
    <img src="./assets/wireframe.png" width="550" height="400">
</p>

## Document Object Model

The DOM is an interface for web documents. A tree of Node objects that represent a web page. These Nodes allow access and change to the Document.

```
//The window is an object with methods and properties attached to the DOM
window

//The Document is an object inside the window that allows us to manipulate the dom
document

```

## Selecting DOM elements

To manipulate the DOM, we need to use methods to traverse it and find the elements we are looking for.

```
// Single elements
// Query Selector will traverse the DOM and return the first element of the matching tag, class, or id passed as an argument
//'tag' looks for the first matching tag
.querySelector('div')

// '.class' will look for the first matching class
.querySelector('.someClass')

// '#id' will look for the first matching id
.querySelector('#someID')

// getElementById traverse the dom and returns the first element with the matching id. IDs should be unique, so it should be the only element with that ID. Note: the '#' is not necessary.
getElementById('someId')


// Multiple elements
// querySelectorAll gets multiple elements of the matching tag or class
//It returns a NodeList, which can be iterated over with a forEach and for... loops.
querySelectorAll('div')

// getElementsByTagName and getElementsByClassName get every element by the matching class/tag.
// They both return HTML collections which can only be iterated over with for... loops.
getElementsByTagName()
getElementsByClassName()

```

## Changing and Creating DOM Elements

Once a DOM element is selected, there are several ways of changing the content in that Node.

```
const div = document.querySelector('div')

// Text content returns the full text of a node. It's less performance heavy and works for all nodes.

div.textContent = 'some text'


// Inner text only grabs visible text is performance heavy and only works on htmlelements
div.innerText = 'some text'

// createElement creates a new element when provided a tag name
// A created element can be set with content just as a element selected by the dom can.
const newDiv = document.createElement('div')
newDiv.textContent = 'my text'

// innerHTML can add HTML content to an element. Use of this should be limited as it's slow, it clears out everything, removes event listeners, and most importantly, is vulnerable to cross-site-scripting attacks

div.innerHTML = `
 <p> use this with caution </p>
`

```

## Removing elements

Once selected, elements can be removed in a couple ways.

```
// will remove the element
div.remove()

// will clear the element of all it's nested children
div.innerHTML = ''

```
