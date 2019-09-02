// REST Params (... à gauche)
// conversion d'une liste -> tableau
function sum1(...nbs) {
  return nbs.reduce((acc, nb) => acc + nb);
}

console.log(sum1(2, 3, 4)); // 9

// SPREAD (... à droite du égal)
// conversion d'un tableau -> liste
function sum2(a, b, c) {
  return a + b + c;
}

const nbs = [2, 3, 4];
console.log(sum2(...nbs)); // 9

// Destructurer
//    {x: 10  , y: 20  }
const {x: varX, y: varY} = {x: 10, y: 20};
console.log(varX); // 10
console.log(varY); // 20
