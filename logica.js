

let entrada_texto = document.querySelector('textarea');
let texto_encriptado = document.getElementById('texto-encriptado');
let elemento_divarea = document.getElementById('contenedor-imagen');
let boton_copiar = document.getElementById('boton-copiar');

function encriptar() {
    let valorIngresado = entrada_texto.value.split('');

    for (let i = 0; i < valorIngresado.length; i++) {
        switch (valorIngresado[i]) {
            case 'a':
                valorIngresado[i] = "ai";
                break;
            case 'e':
                valorIngresado[i] = "enter";
                break;
            case 'i':
                valorIngresado[i] = "imes";
                break;
            case 'o':
                valorIngresado[i] = "ober";
                break;
            case 'u':
                valorIngresado[i] = "ufat";
                break;
        }
    }

    texto_encriptado.innerHTML = valorIngresado.join('');
    entrada_texto.value = "";

    verificarContenidoEncriptado(); 
}

function desencriptar() {
    let valorIngresado = entrada_texto.value;
    let palabrasBuscadas = ["ai", "enter", "imes", "ober", "ufat"];
    let palabrasReemplazadas = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < palabrasBuscadas.length; i++) {
        let buscador = new RegExp(palabrasBuscadas[i], "g");
        valorIngresado = valorIngresado.replace(buscador, palabrasReemplazadas[i]);
    }

    texto_encriptado.innerHTML = valorIngresado;
    entrada_texto.value = "";

    verificarContenidoEncriptado(); 
}

function verificarContenidoEncriptado() {
    if (texto_encriptado.innerHTML.trim() === "") {
        elemento_divarea.style.display = "flex"; 
        boton_copiar.style.display = "none"; 
    } else {
        elemento_divarea.style.display = "none"; 
        boton_copiar.style.display = "block"; 
    }
}

function copiarTexto() {
    navigator.clipboard.writeText(texto_encriptado.innerText);
}

boton_copiar.addEventListener('click', copiarTexto);


verificarContenidoEncriptado();
