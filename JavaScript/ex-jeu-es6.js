const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Method properties
const random = {
  getInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

// Class

class Jeu {
  constructor(options = {}) {
    options = options || {};

    // destructurer options en min et max (avec default param)
    // const min = options.min || 0;
    // const max = (options.max !== undefined) ? options.max : 100;
    const { min = 0, max = 100 } = options;

    this._nbAlea = random.getInt(0, 100);
    this._essais = [];
  }

  jouer() {
    if (this._essais.length) {
      // Template literal
      console.log(`Vous avez déjà joué : ${this._essais.join(' - ')}...`);
    }
    rl.question('Quel est le nombre à deviner ? ', (line) => {
      console.log('Vous avez saisi : ' + line);
      const nbSaisi = Number.parseInt(line);

      if (Number.isNaN(nbSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      // Créer un nouveau tableau avec nbSaisi à la fin
      // (faire un changement immuable)
      // Spread Operator
      // this._essais.push(nbSaisi);
      this._essais = [...this._essais, nbSaisi];

      if (nbSaisi < this._nbAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (nbSaisi > this._nbAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Gagné');
      rl.close(); // fin de partie
    });
  }
}

const game = new Jeu();
game.jouer();
