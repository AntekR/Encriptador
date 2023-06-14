/* Clave de encriptacion

a  -> enter
e  -> imes
i  -> ai
o  -> ober
u  -> ufat

*/

const textoArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

function validar() {
  let text = document.querySelector(".text-area").value;
  let validador = text.match(/[^a-z\s]/g);
  console.log(validador);
  if (!validador == false) {
    alert("Solo son permitidas letras minúsculas y sin acentos");
    location.reload();
    return true;
  }
}

function encriptar(textEncriptado) {
  let clave = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  texto = textEncriptado.toLowerCase();
  for (let i = 0; i < clave.length; i++) {
    if (texto.includes(clave[i][0])) {
      texto = texto.replaceAll(clave[i][0], clave[i][1]);
    }
  }
  return texto;
}

function desencriptar(textEncriptado) {
  let clave = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  texto = textEncriptado.toLowerCase();
  for (let i = 0; i < clave.length; i++) {
    if (texto.includes(clave[i][1])) {
      texto = texto.replaceAll(clave[i][1], clave[i][0]);
    }
  }
  return texto;
}

function btEncriptar() {
  if (!validar() == true) {
    const textoEncriptado = encriptar(textoArea.value);
    mensaje.style.backgroundImage = "none";
    mensaje.value = textoEncriptado;
    textoArea.value = "";
    copia.style.display = "block";
  }
}

function btDesencriptar() {
  if (!validar() == true) {
    const textoDesencriptado = desencriptar(textoArea.value);
    mensaje.style.backgroundImage = "none";
    mensaje.value = textoDesencriptado;
    textoArea.value = "";
    copia.style.display = "block";
  }
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto copiado");

}
