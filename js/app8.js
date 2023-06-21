console.log('Aplicacion calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    // parseInt para cambiar el formato texto a valor numerico
    if(isNaN(resultado)){
        resultado = 'Oparation does not contain numbers';
    }
    document.getElementById('resultado').innerHTML = `Result: ${resultado}`;
    console.log(`Result: ${resultado}`);
}