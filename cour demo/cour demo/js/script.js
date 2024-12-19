// Fonction appelée lorsque l'utilisateur clique sur le champ de texte (input)
function input() {
    // Récupère l'élément avec l'id "input"
    let x = document.getElementById("input");

    // Change la couleur de fond de l'élément en jaune
    x.style.background = "yellow";

    // Affiche l'élément dans la console pour le débogage
    console.log(x);
}

// Fonction appelée lorsque l'utilisateur sélectionne une langue dans la liste déroulante (select)
function langues() {
    // Récupère la valeur sélectionnée dans la liste déroulante avec l'id "lang"
    var x = document.getElementById("lang").value;

    // Affiche la valeur sélectionnée dans l'élément avec l'id "demo"
    document.getElementById("demo").innerHTML = x;
}

// Fonction appelée lorsque l'utilisateur clique sur un bouton (valider)
function handleClick() {
    // Affiche une alerte avec la largeur de l'écran de l'utilisateur
    alert('La largeur de votre écran est de : ' + screen.width + ' px');
    
    // Affiche une alerte avec la hauteur de l'écran de l'utilisateur
    alert('La hauteur de votre écran est de : ' + screen.height + ' px');
    
    // Affiche une alerte avec l'OS détecté (grâce à la fonction getOS())
    alert('OS détecté : ' + getOS());
}

// Fonction qui détecte et retourne le type de système d'exploitation de l'utilisateur
function getOS() {
    // Récupère la plate-forme de l'utilisateur (en minuscule)
    let platform = navigator.platform.toLowerCase();
    
    // Vérifie si la plate-forme est Windows
    if (platform.includes('win')) return 'Windows';
    
    // Vérifie si la plate-forme est MacOS
    if (platform.includes('mac')) return 'MacOS';
    
    // Vérifie si la plate-forme est Linux
    if (platform.includes('linux')) return 'Linux';
    
    // Utilise le userAgent pour détecter si c'est un appareil Android
    if (/android/.test(navigator.userAgent)) return 'Android';
    
    // Utilise le userAgent pour détecter si c'est un appareil iOS (iPhone, iPad, iPod)
    if (/iphone|ipad|ipod/.test(navigator.userAgent)) return 'iOS';
    
    // Si l'OS n'est pas détecté, retourne "OS inconnu"
    return 'OS inconnu';
}
