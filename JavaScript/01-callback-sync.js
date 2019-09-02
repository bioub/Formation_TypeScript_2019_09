const nbs = [2, 3, 4];

nbs.forEach((nb, i) => {
  console.log(nb);
});

console.log('Fin');

// pile
// ^
// |log  log  log
// |=> - => - =>
// |forEach       - log
// +-------------------------------> temps
//  2    3    4     Fin
