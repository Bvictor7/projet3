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
const modal = document.getElementById("modal");

const modalTxt = document.getElementById("textModal");

const containerCard = document.getElementById("containerCard");

let carteRetourne1 = null ;

let carteRetourne2 = null ;

let objCarte1;

let objCarte2;

let maCartedevant1;

let maCartedevant2;

let nbReussite = 0;

cartes.sort(() => Math.random() - 0.5);


cartes.forEach(carte => {
    containerCard.innerHTML += `<div class="une-card" id="${carte.id}">
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
        let monId = card.getAttribute("id");
        let maCarte = document.getElementById(monId);
        if (!carteRetourne1) {
            carteRetourne1 = maCarte;
            objCarte1 = cartes.find(({ id }) => id === parseInt(card.getAttribute("id")));
            carteRetourne1.classList.add("selected");
            maCartedevant1 = carteRetourne1.getElementsByClassName('une-card-devant').item(0);
            maCartedevant1.classList.add("rotate");
            
            
        } else {
            carteRetourne2 = maCarte;
            objCarte2 = cartes.find(({ id }) => id === parseInt(card.getAttribute("id")));
            maCartedevant2 = carteRetourne2.getElementsByClassName('une-card-devant').item(0);
            maCartedevant2.classList.add("rotate");

            document.body.classList.add("selected");
            setTimeout(() => {
                if (objCarte1.nom === objCarte2.nom) {
                
                    eggModal("bien joué");
                    nbReussite++
                    carteRetourne1.classList.add("hidden");
                    carteRetourne2.classList.add("hidden");
                    if (nbReussite>=6) {
                            setTimeout(() => {
                                if(confirm(`bien joué! voulez vous rejouer?`)){
                                    window.location.reload();
                                }
                            }, 50);
                    }
                } else {
                    eggModal("raté");
                    console.log("raté");
                    maCartedevant1.classList.remove("rotate");
                    maCartedevant2.classList.remove("rotate");
    
                }  
                
            carteRetourne1.classList.remove("selected", "rotate");
            carteRetourne1 = null;
            carteRetourne2 = null;
            document.body.classList.remove("selected");
            }, 1000);

        }

        
    })
});

//fonction qui gere la modal
function eggModal(msg) {
    modalTxt.innerText=msg;
    modal.classList.remove("open");
    setTimeout(() => {
        modal.classList.add("open");
    }, 50);

};

//detection de la disparition de la modal
modal.addEventListener("animationend", () => {
    modal.classList.remove("open");
});

