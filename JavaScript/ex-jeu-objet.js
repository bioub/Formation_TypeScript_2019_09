const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const random = {
  getInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

function Jeu(options) {
  options = options || {};
  const min = options.min || 0;
  const max = (options.max !== undefined) ? options.max : 100;

  this._nbAlea = random.getInt(0, 100);
  this._essais = [];
}

Jeu.prototype.jouer = function jouer() {
  if (this._essais.length) {
    console.log('Vous avez déjà joué : ' + this._essais.join(' - '));
  }
  rl.question('Quel est le nombre à deviner ? ', (line) => {
    console.log('Vous avez saisi : ' + line);
    const nbSaisi = parseInt(line);

    if (isNaN(nbSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this._essais.push(nbSaisi);

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

const game = new Jeu();
game.jouer();
