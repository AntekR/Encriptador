/* Clave de encriptacion

a  -> enter
e  -> imes
i  -> ai
o  -> ober
u  -> ufat

*/

const textoArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const copia = document.querySelector('.copiar');
copia.style.display = 'none';

function validar_texto(textoArea);
    

function encriptar(textEncriptado){
    let clave = [['a','enter'],['e','imes'],['i','ai'],['o','ober'],['u','ufat']]
    let letra = 'aeiou'
    textEncriptado = textEncriptado.toLowerCase()
    var textDesencriptado = ''
    for(let i=0; i < textEncriptado.length; i++){
        
        for(let j=0; j< clave.length; j++){

            if (textEncriptado[i]==clave[j][0]) {
                textDesencriptado+=clave[j][1]
            }else if(textDesencriptado.includes(textEncriptado[i]) && textEncriptado[i]!=' '){
                continue
            }else if(!(letra.includes(textEncriptado[i]))) {
                textDesencriptado+=textEncriptado[i]
            }
        }

    }
    return textDesencriptado
}
