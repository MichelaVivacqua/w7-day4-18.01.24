const apiKey = "dnoqOhApwlIdRdgmyW8eoIrAk2AzKuhMEONMXt4dfEp9j8QrKgtfU4UH";
const query = "sea";
document.getElementById("load-images").addEventListener("click", function () {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  const dogs = document.querySelectorAll("img");
  const srcSea =
    "https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&h=350";
  dogs.forEach((dog) => {
    dog.src = srcSea;
  });
  cambioTesto();
});

document.getElementById("secondary").addEventListener("click", function () {
  const apiKey = "dnoqOhApwlIdRdgmyW8eoIrAk2AzKuhMEONMXt4dfEp9j8QrKgtfU4UH";
  const query = "palm";

  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  const dogs = document.querySelectorAll("img");
  const srcPalm =
    "https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?auto=compress&cs=tinysrgb&h=350";
  dogs.forEach((dog) => {
    dog.src = srcPalm;
  });
  cambioTesto2();
});

document.addEventListener("DOMContentLoaded", function () {
  // Seleziono tutti i bottoni con il testo "Edit"
  const bottoniEdit = document.querySelectorAll(".secondButton");

  // Sostituisco il testo
  bottoniEdit.forEach(function (pulsante) {
    pulsante.innerHTML = "Hide";
    const card = pulsante.closest(".card");
    pulsante.onclick = function () {
      hideCard(card);
    };
  });
});
//NON HA FUNZIONATO
// const removeCardFromDOM = function (event) {
//   // questo elimina la card dal DOM
//   event.target.closest(".col").remove();
// };

const hideCard = function (card) {
  // Nascondi la card associata
  card.style.display = "none";
};

const cambioTesto = function () {
  //selezioni tutti i 9mins
  const mins = document.querySelectorAll("small");
  const idSea = "457881";
  mins.forEach((testo) => {
    testo.innerHTML = idSea;
  });
};

const cambioTesto2 = function () {
  //selezioni tutti i 9mins
  const minns = document.querySelectorAll("small");
  const idPalm = "1152359";
  minns.forEach((testo) => {
    testo.innerHTML = idPalm;
  });
};

const searchImages = function () {
  // Ottengo il valore del campo di ricerca
  const searchQuery = document.getElementById("searchInput").value;
  // Effettuo la richiesta all'API di Pexels
  fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}`,
    {
      headers: {
        Authorization: apiKey,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // Rimuovo le immagini esistenti
      const imageContainer = document.querySelectorAll(".bd-placeholder-img");
      imageContainer.innerHTML = "";
      // Aggiungo le nuove immagini
      data.photos.forEach((photo) => {
        const imgElement = document.createElement("img");
        imgElement.src = photo.src.medium;
        imgElement.alt = photo.url;
        imageContainer.appendChild(imgElement);
      });
    })
    .catch((error) => {
      console.error("Errore nella richiesta API:", error);
    });
};

// import { createClient } from 'pexels';

// const client = createClient('dnoqOhApwlIdRdgmyW8eoIrAk2AzKuhMEONMXt4dfEp9j8QrKgtfU4UH');
// const query = 'Nature';

// client.photos.search({ query, per_page: 1 }).then(photos => {...});
