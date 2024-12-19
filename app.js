let cartes = [
    { id: 1, nom: "apple", img: "apple.svg" },
    { id: 2, nom: "apple", img: "apple.svg" },
    { id: 3, nom: "banana", img: "banana.svg" },
    { id: 4, nom: "banana", img: "banana.svg" },
    { id: 5, nom: "brocoli", img: "brocoli.svg" },
    { id: 6, nom: "brocoli", img: "brocoli.svg" },
    { id: 7, nom: "cherry", img: "cherry.svg" },
    { id: 8, nom: "cherry", img: "cherry.svg" },
    { id: 9, nom: "pepper", img: "pepper.svg" },
    { id: 10, nom: "pepper", img: "pepper.svg" },
    { id: 11, nom: "straw", img: "straw.svg" },
    { id: 12, nom: "straw", img: "straw.svg" }
]

const containerCard = document.getElementById("containerCard");

let carteRetourne1 ;

let carteRetourne2 ;

cartes.sort(() => Math.random() - 0.5);


cartes.forEach(carte => {
    containerCard.innerHTML += `<div class="une-card" carteid="${carte.id}">
              <div class="une-card-inter">
                <div class="une-card-devant">
                    <p class="?">?</p>
                </div>
                <div class="une-card-derrier">
                  <img class="une-card-img" src="./images/${carte.img}" alt="">
                </div>  
              </div>
            </div>`
});

const allCards = document.querySelectorAll(".une-card");

allCards.forEach(card => {
    card.addEventListener("click", () => {
        console.log(this);
        
    })
});
