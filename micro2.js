let movies =  ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick','Elvis','Thor: amor y trueno'];
// Más tarde desde la producción indicaron que la película más vendida era: ‘Thor:
// amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha
// película y con letras en mayúsculas. Para ello el tech leader, te solicita que crees
// una función, la cual recibirá por parámetro la película indicada y deberá retornar la
// misma pero en mayúscula. Para ello sería bueno que investigues sobre el método
// .toUpperCase(). Con ese valor recibido, deberás colocarla primera en la estructura creada.
let pelicula = 'Thor: amor y trueno';
function mayus(peli) {
    let peliculaMayus = pelicula.toUpperCase;
    return peliculaMayus
}; // revisar bien esta parte y por qué no funciona 
let moverThor = movies.pop();
let lamejorPeli = movies.unshift("peliculaMayus");

console.log(mayus(pelicula));

let newMovies = ['Counter-Strike', 'NOP', 'Vértigo', 'Nick', 'Avatar'];
let errorMovies = newMovies.shift();

console.log(errorMovies);
console.log(newMovies);