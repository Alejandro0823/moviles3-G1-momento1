function InvertirCadena(CadenaBase) {


    const logitud = CadenaBase.length

    const mitad = logitud % 2;
  
    const medio = mitad ? Math.floor(logitud / 2) : logitud / 2;

    let centro = mitad ? CadenaBase[medio] : undefined;
    let inicio = '';
    let final = '';
    for (let i = 0 ; i < medio ; i++) {

        inicio = inicio.concat(CadenaBase[logitud - (i + 1)]);
        final = final.concat(CadenaBase[medio - (i + 1)]);
    }

    const str = centro ? inicio.concat(centro.concat(final)) : inicio.concat(final); 

    return str;
} 


let CadenaInvertida = '';
const CadenaBase = prompt("Ingrese caualquier numero: ");

CadenaInvertida = InvertirCadena(CadenaBase);
console.log(`NUMERO BASE: ${CadenaBase}`);
console.log(`NUMERO INVERTIDO:${CadenaInvertida}`);
