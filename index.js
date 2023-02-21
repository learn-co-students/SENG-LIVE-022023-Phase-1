const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];

// What is the DOM?
// Document Object Model
// A representation of our HTML
// Something we are going to interact with to Create, Read, Update and Delete [CRUD]

// READ: how do we select elements on the DOM

// using selectors:
// id: no element should share the same id on the DOM, notation: #
// class: notation: dot
// tag name

// document.getElementById();
// will accept the elements ID as an argument
// used the elements id property to select and return
// Returns a single element, the first match
// restriction: it can only be called on the document object

const pokeForm = document.getElementById("poke-form");

// document.getElementsByClassname
// returns a list of elements, returns all the elements with the same class name
// return a HTMLcollection
// Can convert to an array using the Array.from()

const labels = document.getElementsByClassName("form-label");

// document.querySelector()
// not limited to just Id, we can pass in class names, ids and tags
// returns one element
// need to include the selector notation in the argument i.e #id, .class
// we can call these on descendants of document

const lectureDiv = document.querySelector("#lecture-goals");

// document.querySelectorAll()
// can be used for tags and classes... if you're using it for ID's re-evaluate
// still returns a list: NodeList, forEach works on a nodelist

const allDivs = document.querySelectorAll("div");

const pokeContainer = document.querySelector("#poke-container");

// method used to create a new element is: document.createElement(element)

// i have an array of pokemon characters: pokemon
// I need to generate a card for each character inside this array

pokemon.forEach((character) => renderPokemon(character));

// a function responsible for creating each character called renderPokemon()

function renderPokemon(char) {
  // create the card is a div  pokeCard

  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${char.id}`;
  pokeCard.className = "poke-card";

  // inside the pokeCard, need to create an img element
  const pokeImg = document.createElement("img");
  pokeImg.src = char.img;
  pokeImg.alt = `${char.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = char.name;

  // add the img to the DOM
  pokeCard.append(pokeImg);

  // slap the pokeCard on the DOM
  pokeContainer.appendChild(pokeCard);
}
