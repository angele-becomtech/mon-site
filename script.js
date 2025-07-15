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
