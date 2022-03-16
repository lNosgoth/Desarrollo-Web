let words =["Enero","Febrero","Marzo","Abril"];
//words.splice(2,0,"Diciembre","Agosto");
//console.log(words);
// Retitar del Array

//words.splice(2,3,);
//console.log(words);

const esPar = (numero) => numero%2 == 0;

let imprimirResultado = (funcionPar,num) =>{
    const esParNumero=funcionPar(num);
    console.log(`El numero ${num} es par: ${esPArNumero}`);
}

imprimirResultado(esPar,8);

const numeros =[1,2,3,4,10,15,30];

const arregloAplicandoMetodo= numeros.filter((n)=>n>5);
console,log(arregloAplicandoMetodo);

const meses =words.filter((mes)=>mes==="Abril");
console.log(meses);

const libro={
libro1:{
    titulo:"javascript",
    autor:"Pascual Bravo",
    añopublicacion: 2021,
    descripcion:"problemas javascript"
},
libro2:{
    titulo:"Python",
    autor:"Pascual Bravo",
    añopublicacion:2020,
    descripcion:"Problemas Python"
}
}

const libros=[libro.libro1,libro.libro2];
console.log(libros);

const libros2021=libros.filter((Libro)=>libros.añopublicacion===2021)