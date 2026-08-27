/*operadores de comparacion*/

/*

==        (igualdad)
!=        (diferente)  
>         (mayor)
<         (menor) 
>=        (mayor o igual que)
<=        (menor a igual que)

*/

/*operadores logico*/

// &&      (and)
// ||      (OR)

const a = 10;
const b = 20;
const c= "10";

a == b; // false 

a === b;// false

a != b ; // true

a !== c ; // true

a > b; // false

b < a; // false

a == b && a === c; // false
a != b || a === c; // true