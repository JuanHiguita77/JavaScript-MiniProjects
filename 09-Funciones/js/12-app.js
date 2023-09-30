const staff = 
[
	{nombre: 'televisor', precio: 123},
	{nombre: 'celular', precio: 433},
	{nombre: 'audifonos', precio: 123},
	{nombre: 'tablet', precio: 313},
	{nombre: 'ps5', precio: 453},
	{nombre: 'computador', precio: 3123},
];

//Diferencia entre forEach y map

		//forEach no es capaz de crear un nuevo arreglo
const nuevoArreglo = staff.forEach( (producto) =>
{
	return `Producto: ${producto.nombre} - - - Precio: ${producto.precio}`;
});

staff.forEach( (producto) => console.log(`Producto: ${producto.nombre} - - - Precio: ${producto.precio}`));


		//map es capaz de crear un nuevo arreglo
const nuevoArreglo2 = staff.map( (producto) =>
{
	return `Producto: ${producto.nombre} - - - Precio: ${producto.precio}`;
});

const nuevoArreglo3 = staff.map( (producto) => `Producto: ${producto.nombre} - - - Precio: ${producto.precio}`);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);