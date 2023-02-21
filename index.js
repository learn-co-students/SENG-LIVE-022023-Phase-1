const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");
const pokeFormContainer = document.querySelector("#poke-form-container");

const getPokemon = () => {
  fetch("http://localhost:3000/characters")
    .then((resp) => resp.json())
    .then((characters) => {
      characters.forEach(renderPokemon);
    });
};

getPokemon();

const createPokemon = (e) => {
  e.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = document.querySelector("#img-input").value;

  let newChar = {
    id: 6, // NEEDS TO CHANGE,
    name,
    img,
    likes: 0,
  };

  // Make a POST request to persist the new character

  renderPokemon(newChar);
  pokeForm.reset();
};

pokeForm.addEventListener("submit", createPokemon);

const increaseLikes = (char, likeNum) => {
  ++char.likes;
  likeNum.textContent = char.likes;
};

const renderComment = (comment) => {
  let li = document.createElement("li");
  li.textContent = comment.content;

  return li;
};

const commentsForm = () => {
  let form = document.createElement("form");
  form.id = "comment-form";

  // This is where we are going to attach an event listener to the comment form and POST a new comment.

  let commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.id = "comment-input";

  let label = document.createElement("label");
  label.className = "form-label";
  label.textContent = "Leave a comment: ";
  form.appendChild(label);

  let submit = document.createElement("input");
  submit.type = "submit";
  submit.id = "submit";

  form.append(commentInput, submit);

  return form;
};

function loadComments(pokeCard, char) {
  const commentsDiv = document.createElement("div");
  commentsDiv.id = `comment-card-${char.id}`;

  const h4 = document.createElement("h4");
  h4.textContent = `${char.comments.length} comments:`;

  commentsDiv.append(h4);
  pokeCard.append(commentsDiv);

  char.comments.forEach(function (comment) {
    return renderComment(commentsDiv, comment);
  });
}

const showCharacter = (character) => {
  fetch(`http://localhost:3000/characters/${character.id}`)
    .then((resp) => resp.json())
    .then((character) => {
      const pokeCard = renderPokemon(character);
      pokeCard.id = "poke-show-card";
      pokeCard.dataset.id = character.id;
      loadComments(pokeCard, character);
      pokeContainer.replaceChildren(pokeCard);
      pokeFormContainer.replaceChildren(commentsForm());
      pokeContainer.replaceChildren(pokeCard);
    });
};

const renderPokemon = (char) => {
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
  likesBttn.addEventListener("click", (e) => {
    e.stopPropagation();
    increaseLikes(char, likeNum);
  });

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "delete";
  deleteBttn.addEventListener("click", (e) => {
    e.stopPropagation();
    pokeCard.remove();
  });

  pokeCard.append(pokeImg, pokeName, pokeLikes, likeNum, likesBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
  return pokeCard;
};
