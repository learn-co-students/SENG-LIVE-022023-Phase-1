# DOM Events

## SWBAT

- [ ] Understand static vs. Dynamic Websites
- [ ] Review JavaScript event types
- [ ] Change the dom with events.
  - [ ] Remove content with a 'click' handler
  - [ ] Add content with a 'submit' handler
  - [ ] Create new data using a form
  - [ ] Prevent the browser from refreshing with .preventDefault
  - [ ] Render data to the dom with optimistic rendering

## Deliverables

### 1. Attach a 'click' event to the `likesBttn` that:

✔️ Increments the character's number of likes by 1

✔️ Updates the DOM to reflect the Pokemon's new number of likes

<p align="center">
    <img src="./assets/addLike.gif" width="200" height="350">
</p>

### 2. Attach a 'click' event to the `deleteBttn` that:

✔️ Removes the pokeCard from the DOM

<p align="center">
    <img src="./assets/delete.gif" width="800" height="500">
</p>

### 3. Attach a 'submit' event to '#poke-form' that:

✔️ Prevents default form submission behavior (i.e., page refresh)

✔️ Creates a new Pokemon object and renders it to the DOM:

    - Use .querySelector() to select and retrieve the value of '#name-input', setting it as the "name" for the new Pokemon object

    - Use .querySelector() to select and retrieve the value of '#img-input', setting it as the "img" for the new Pokemon object

✔️ Resets pokeForm using .reset()

<p align="center">
    <img src="./assets/submit.gif" width="800" height="500">
</p>

## Events

When the user interacts with the dom, it fires events that trigger an effect in our JavaScript code that can do something. Such as updating the dom or adding content to the database.

To pick up events, our code must 'listen' for the event. addEventListener will do just that. It takes 2 arguments, the first is the event it's listening for, and the second is the code that will run once the event is triggered.

```
div.addEventListener('click', () => console.log('hi'))

//When events are triggered, the event object is passed to the second argument as an argument to the callback.
div.addEventListener('click', (e) => console.log(e))

```

There are many event types: [Events](https://developer.mozilla.org/en-US/docs/Web/Events)

## Forms

Forms can have a variety of user inputs a user can interact with.
The submit event can be used to retrieve the value of those inputs.

When a form submits, it will, by default try to send a request and refresh the page. To prevent that, we need to call e.preventDefault(). Afterwords, the event can be used to grab the form values through the target attribute.

```
<form>
    <input type="text" name='favColor'/>
    <input type="submit" />
</form>

form.addEventListener('submit',(e)=> {
    e.preventDefault
    //Here we are using the name property from the form to target the specific input.
    console.log(e.target.faveColor.value)
})

```

### Resources

- [JS Event Delegation vs. Bubble & Capturing](https://medium.com/@marjuhirsh/event-propagation-event-delegation-7d3db1baf02a)

- [Static and Dynamic Websites: What's the Difference?](https://www.mlytics.com/blog/static-and-dynamic-websites-whats-the-difference/)
