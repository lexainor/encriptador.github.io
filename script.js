//ELEMENTOS A OCULTAR//
const imgMunheco = document.querySelector(".imagenMunheco");
const ningunMensaje = document.querySelector(".ningunMensaje");
const ingreseTexto = document.querySelector(".ingreseTexto");
ingreseTexto.style.display = 'none';
ningunMensaje.style.display = 'none';

//ELEMENTOS QUE TRABAJARAN DURANTE LA EJECUCIÓN DEL ENCRIPTADO O DESENCRIPTADO
var resultado = document.querySelector(".resultado");
var textArea = document.querySelector(".ingreseAqui");
resultado.style.display = 'none';

var matrizEncriptado = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
var encontrado = true;


function encriptar(){
    resultado.innerText = '';
    var textoCapturado = textArea.value;
    if(textoCapturado == ''){
        imgMunheco.style.display = 'block';
        ningunMensaje.style.display = 'block';
        ingreseTexto.style.display = 'block';
    }

   else{
        //CICLO PARA RECORRER LA PALABRA DEL TEXTAREA
        for(var indice = 0;indice < textoCapturado.length; indice++){
            
            //CICLO PARA RECORRER LA MATRIZ DE ENCRIPTADO
            for(var busqueda = 0; busqueda < matrizEncriptado.length; busqueda++){
                encontrado = true;
                if(textoCapturado.charAt(indice) == matrizEncriptado[busqueda][0]){
                    resultado.innerText = resultado.textContent + matrizEncriptado[busqueda][1];
                    break;
                }
                else{
                    encontrado = false;
                }
            }

            if(encontrado == false){
                resultado.innerText = resultado.textContent + textoCapturado.charAt(indice);
            } 
        }

        imgMunheco.style.display = 'none';
        ningunMensaje.style.display = 'none';
        ingreseTexto.style.display = 'none';
        resultado.style.display = 'block';
        textArea.value = '';
    }    
}

function desencriptar(){
    resultado.innerText = '';
    var textoCapturado = textArea.value;
    if(textoCapturado == ''){
        imgMunheco.style.display = 'block';
        ningunMensaje.style.display = 'block';
        ingreseTexto.style.display = 'block';
    }

   else{
        //CICLO PARA RECORRER LA PALABRA DEL TEXTAREA
        for(var indice = 0;indice < textoCapturado.length; indice++){
            
            //CICLO PARA RECORRER LA MATRIZ DE ENCRIPTADO
            for(var busqueda = 0; busqueda < matrizEncriptado.length; busqueda++){
                var aux = indice;
                if(textoCapturado.charAt(indice) == matrizEncriptado[busqueda][0]){
                    encontrado = true;
                    //CICLO PARA COMPARAR SI LAS PALABRAS ENCRIPATADAS COINCIDEN
                    for(var comparacion = 0; comparacion < matrizEncriptado[busqueda][1].length; comparacion++){
                        if(matrizEncriptado[busqueda][1].charAt(comparacion) != textoCapturado.charAt(aux)){
                            encontrado = false;
                            break;                            
                        }
                        aux++;
                    }
                    if(encontrado == false){
                        resultado.innerText = resultado.textContent + textoCapturado.charAt(indice); 
                       encontrado = true;                        
                    }
                    else{
                        resultado.innerText = resultado.textContent + matrizEncriptado[busqueda][0];
                        indice = aux-1;
                    }
                    break;
                } 
                else{
                    encontrado = false;
                }
            } 
            if(encontrado == false){
                resultado.innerText = resultado.textContent + textoCapturado.charAt(indice);
            }
        }

        imgMunheco.style.display = 'none';
        ningunMensaje.style.display = 'none';
        ingreseTexto.style.display = 'none';
        //resultado.innerText = resultado.textContent.toLowerCase();
        resultado.style.display = 'block';
        textArea.value = '';
    }
}

function copiar(){
    var areaCopia = document.createElement("textarea");
    areaCopia.style.display = 'none';
    document.body.appendChild(areaCopia);
    areaCopia.value = resultado.innerText;
    if(areaCopia.value == ''){
        
    }
    else{
        areaCopia.select();
        navigator.clipboard.writeText(areaCopia.value);
        document.body.removeChild(areaCopia);
    }
}