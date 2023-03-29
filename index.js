const BASE_URL = "https://pokeapi.co/api/v2";
let data = "";
const cardArea = document.querySelector(".paint-area");
const total_pokemons = 1008;
let imageUrl = ``;

function aleatorio(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(aleatorio(0, total_pokemons));

const getPokeData = async (id) => {
  try {
    data = await axios.get(`${BASE_URL}/pokemon/${id}/`);
    imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    printOnScreen(data.data);
  } catch (e) {
    console.log(e);
  }
};

const getRandom = () => {
  getPokeData(aleatorio(0, total_pokemons));
};

const printOnScreen = (data) => {
  console.log(cardArea);
  cardArea.innerHTML = `<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
  <div class="card-header">Pokemon</div>
  <div class="card-body">
    <h4 class="card-title">${data.name.toUpperCase()}</h4>
    <img src="${imageUrl}" >
  </div>
</div>`;
};
