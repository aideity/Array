let electrodomesticos = ["lavadora", "microondas","notebook", "netbook", "batidor", "heladera"];

console.log(electrodomesticos.length);
console.log(electrodomesticos[2]);
let sacarElectrodomesticos = electrodomesticos.shift();
let ponerElectrodomesticos = electrodomesticos.push("lavadora");
let newElectrodomesticos = electrodomesticos.unshift("plancha para el pelo", "vaporera");
console.log(electrodomesticos.length);

// ** Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
//“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado no existe”.
function electrodomesticosDisponibles(electrodomestico) {
    let electrodomestico = " ";
    switch (electrodomestico) {
        case electrodomesticos:
            "Producto encontrado"
            break;
        default:
            "El producto buscado no existe"
            break;
    }
};
// tira error en la parte de let, revisar

console.log(electrodomesticosDisponibles("lavadora"));

let unirElectrodomesticos = electrodomesticos.join(" ");
console.log(unirElectrodomesticos);
console.log(unirElectrodomesticos.length);

//let replaceElectrodomesticos = electrodomesticos.replace('plancha para el pelo', '0PC'); // tira error, revisar

console.log(electrodomesticos);

let separarCadena = unirElectrodomesticos.split(" ");
console.log(separarCadena);