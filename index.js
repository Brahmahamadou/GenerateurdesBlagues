const quotes = [
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.    - Gandhi",
    "La seule façon de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs",
    "Le succès, c'est tomber sept fois et se relever huit. - Proverbe japonais",
    "Il est tombe comme du n'importe quoi, on dirait la girafe qui s'emmele les pattes.",
    "Si un animal vous dit qu'il peut parler, il ment probablement.",
    "L'oiseau sur le Baobab ne doit pas oublier qu'il apporte des Lunettes !"
];

// Fonction pour récupérer aléatoirement une citation du tableau
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
// Gestionnaire d'événements pour le clic sur le bouton
document.getElementById("quoteButton").addEventListener("click", function () {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const newQuote = getRandomQuote();
    quoteDisplay.style.color = "white"
    // Afficher la citation au-dessus du bouton
    quoteDisplay.innerHTML = `<p>${newQuote}</p>`;
});

