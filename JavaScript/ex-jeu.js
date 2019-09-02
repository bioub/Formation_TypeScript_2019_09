const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const nbAlea = Math.floor(Math.random() * 101);
const essais = [];

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }
  rl.question('Quel est le nombre à deviner ? ', (line) => {
    console.log('Vous avez saisi : ' + line);
    const nbSaisi = parseInt(line);

    if (isNaN(nbSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(nbSaisi);

    if (nbSaisi < nbAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (nbSaisi > nbAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné');
    rl.close(); // fin de partie
  });
}

jouer();

// pile
// ^
// |             question
// |question     jouer
// |jouer    ... =>       ...
// +----------------------> temps
//
