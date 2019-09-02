import { getRandomInt } from "./random";

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export interface JeuOptions {
  min?: number;
  max?: number;
}

export class Jeu {
  private _nbAlea: number;
  private _essais: number[] = [];

  constructor(options: JeuOptions = {}) {
    options = options || {};

    // destructurer options en min et max (avec default param)
    // const min = options.min || 0;
    // const max = (options.max !== undefined) ? options.max : 100;
    const { min = 0, max = 100 } = options;

    this._nbAlea = getRandomInt(min, max);
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
