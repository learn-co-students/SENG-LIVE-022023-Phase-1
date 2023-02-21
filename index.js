const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");

function getPokemon() {
  fetch("http://localhost:3000/characters")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (characters) {
      characters.forEach(function (character) {
        renderPokemon(character);
      });
    });
}

getPokemon();

pokeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = document.querySelector("#img-input").value;

  let newChar = {
    id: 6, // WILL CHANGE,
    name: name,
    img: img,
    likes: 0,
  };

  renderPokemon(newChar);
  pokeForm.reset();
});

pokemon.forEach(function (character) {
  renderPokemon(character);
});

function renderPokemon(char) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${char.id}`;
  pokeCard.className = "poke-card";
  pokeCard.addEventListener("click", () => showCharacter(char));

  const pokeImg = document.createElement("img");
  pokeImg.src = char.img;
  pokeImg.alt = `${char.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = char.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likeNum = document.createElement("h3");
  likeNum.className = "likes-num";
  likeNum.textContent = char.likes;

  const likesBttn = document.createElement("button");
  likesBttn.className = "like-bttn";
  likesBttn.textContent = "♥";
  likesBttn.addEventListener("click", function (e) {
    e.stopPropagation();
    ++char.likes;
    likeNum.textContent = char.likes;
  });

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "delete";
  deleteBttn.addEventListener("click", function (e) {
    e.stopPropagation();
    pokeCard.remove();
  });

  pokeCard.append(pokeImg, pokeName, pokeLikes, likeNum, likesBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
  return pokeCard;
}

function showCharacter(character) {
  // fetch the characters info from the server
  // endpoint that we are using is going to be tied to the character using their id number
  // retrieve the info for one resource with the supplied id: "http://localhost:3000/characters/:id"
  fetch(`http://localhost:3000/characters/${character.id}`)
    .then((resp) => resp.json())
    .then((character) => {
      const pokeCard = renderPokemon(character);
      pokeCard.id = "poke-show-card";
      pokeContainer.replaceChildren(pokeCard);
    });
}
