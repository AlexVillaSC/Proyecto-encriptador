

let entrada_texto = document.querySelector('textarea');

let texto_encriptado = document.getElementById('texto-encriptado');

let elemento_divarea = document.getElementById('contenedor-imagen');


function encriptar(){
    let valorIngresado = entrada_texto.value.split('');

    for(let i = 0; i < valorIngresado.length;i++){
        switch(valorIngresado[i]){
            case 'a':
                valorIngresado[i]="ai";
                break;
            case 'e':
                valorIngresado[i]="enter";
                break;
            case 'i':
                valorIngresado[i]="imes";
                break;
            case 'o':
                valorIngresado[i]="ober";
                break;
            case 'u':
                valorIngresado[i]="ufat";
                break;
            
        }

    }

    texto_encriptado.innerHTML = valorIngresado.join('');

}



function desencriptar(){
    let valorIngresado = entrada_texto.value;
    let palabrasBuscadas = ["ai","enter","imes","ober","ufat"];
    let palabrasReemplazadas = ["a","e","i","o","u"];

    for(let i = 0; i < palabrasBuscadas.length; i++){
        let buscador = new RegExp(palabrasBuscadas[i], "g");
        valorIngresado = valorIngresado.replace(buscador, palabrasReemplazadas[i]);
    }

    texto_encriptado.innerHTML = valorIngresado;
}




function verificarTextArea(){
    if(entrada_texto.value.trim()===""){
        elemento_divarea.style.display = "flex";
    }else{
        elemento_divarea.style.display ="none";
    }
}

entrada_texto.addEventListener('input',verificarTextArea);





