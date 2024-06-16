const characters = {
  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 18,
      name: "Wedge Antilles",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
      homeworld: "corellia",
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
      homeworld: "other",
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ],
};

const homeworldsRaw = characters.characters.map((character) =>
  character.homeworld ? character.homeworld : "other" 
);

const homeworldsUnique = [...new Set(homeworldsRaw)];
console.log(homeworldsUnique);
const homeworldsLowercase = homeworldsUnique.map((element) => {
  return element.toLowerCase();
});

const homeworlds = homeworldsLowercase;

function charactersFilter() {
  const markup = document.getElementById("wrapper");
  for (let i = 0; i < homeworlds.length; i++) {
    let input = ` 
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="homeworld-${homeworlds[i]}" value="${homeworlds[i]}" checked>
        <label class="form-check-label" for="homeworld-${homeworlds[i]}">
          ${homeworlds[i]}  
        </label>
      </div>
    `;
    document.getElementById("homeworlds-filter-container").innerHTML += input;
  }
}

let filteredHomeworld = null; 

function handleHomeworldSelection(event) {
  filteredHomeworld = event.target.value; 
  const filteredCharacters = characters.characters.filter(
    (character) => character.homeworld.toLowerCase() === filteredHomeworld
  );
  
  if (filteredHomeworld != null) {
    let charactersMarkup = "";
    filteredCharacters.forEach((character) => {
      charactersMarkup += `
        <div class="card card_characters col-lg-4" style="width: 18rem;">
          <img src="${character.pic}" class=" img-fluidd card-img-top" alt="${character.name}">
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">Homeworld: ${character.homeworld}</p>
          </div>
        </div>
      `;
    });
    const charactersContainer = document.getElementById("characters-row");
    charactersContainer.innerHTML = charactersMarkup;
  }
}

const characterButton = document.getElementById("toggler-button");
let show_characters = false;

const filterContainer = document.getElementById("homeworlds-filter-container")

function showButton() {
  if (show_characters == false) {
    characterButton.innerText = "Karakterleri Gizle";
    characterButton.style.backgroundColor = "rgba(204,37,37,1)";
    characterButton.style.color="white"
    filterContainer.style.padding="15px"
    charactersFilter();
    showElement();
    const inputs = document.querySelectorAll(".form-check-input");
    inputs.forEach((input) => {
      input.addEventListener("change", handleHomeworldSelection);
    });
  } else {
    characterButton.innerText = "Karakterleri Göster";
    characterButton.style.backgroundColor ="";
    hideElement();
  }
  show_characters = !show_characters;
}

function showElement() {
  document.getElementById("wrapper").style.display = "block";
}

function hideElement() {
  document.getElementById("wrapper").style.display = "none";
  document.getElementById("homeworlds-filter-container").innerHTML = "";
}


