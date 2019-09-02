setTimeout(() => console.log('A'), 100);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 100);
setTimeout(() => console.log('D'), 200);
console.log('E')

// pile
// ^
// |
// |                           lg      lg    lg
// |st - st - st - st - lg ... cbB ... cbA - cbC
// +-----0---------------------3---------------------------> temps
//                      E      B       A     C          D
//
// file d'attente (0ms) : cbB
// file d'attente (3ms) :
// file d'attente (100ms) : cbA - cbC

