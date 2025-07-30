function changerCouleur() {
    // Générer une couleur aléatoire
    const couleurFond = couleurAleatoire();

    // Appliquer les couleurs au body
    document.body.style.backgroundColor = couleurFond;
}

function couleurAleatoire() {
    // Générer une couleur hexadécimale aléatoire
    const lettres = '0123456789ABCDEF';
    let couleur = '#';
    for (let i = 0; i < 6; i++) {
        couleur += lettres[Math.floor(Math.random() * 16)];
    }
    return couleur;
}

document.addEventListener('DOMContentLoaded', function() {
    var texteSuiveur = document.getElementById('blocSuiveur');

    document.addEventListener('mousemove', function(e) {
        // Met à jour la position du texte pour suivre la souris
        texteSuiveur.style.left = (e.pageX + 10) + 'px';
        texteSuiveur.style.top = (e.pageY + 10) + 'px';
    });
});

