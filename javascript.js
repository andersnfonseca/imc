
function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var alturafinal = Math.pow(altura, 2);
    var IMC = ((peso / alturafinal) * 10000).toFixed(2);

    if (IMC < 18.5) {
        document.getElementById("resultado").innerHTML = `Seu IMC é ${IMC}, você está abaixo do peso.`;
    }else if (IMC > 18.5 && IMC <= 24.9) {
        document.getElementById("resultado").innerHTML = `Seu IMC é ${IMC}, você está com peso normal.`;        
    }else if (IMC > 25 && IMC <= 29.9) {
        document.getElementById("resultado").innerHTML = `Seu IMC é ${IMC}, você está com sobrepeso.`;
    }else if (IMC > 30 && IMC <= 34.9) {
        document.getElementById("resultado").innerHTML = `Seu IMC é ${IMC}, você está com obesidade grau I.`;
    }else if (IMC > 35 && IMC <= 39.9) {
        document.getElementById("resultado").innerHTML = `Seu IMC é ${IMC}, você está com obesidade grau II.`;
    }
    
}