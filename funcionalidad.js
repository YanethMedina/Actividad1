

//Funcion para inicializar variables y limpiar articulos y mostrar cajas
function temaseleccionado(){
    //Limpiar textbox
    document.getElementById("numero").value=null;
    document.getElementById("color").value=null;
    document.getElementById("borde").value=null;
    document.getElementById("resultado").innerHTML="¡Resultados!";

    //getElementsByTagName convierte en arreglo porque guarda mas de un elemento
    capas = document.getElementsByTagName("article");
    //Oocultar varios elementos
    for(i=0; i < capas.length; i++){
        capas[i].style.display="none";
    }
    //Almacenar el dato de la opcion del usuario
    var articulo=document.getElementById("temas").value;
    document.getElementById(articulo).style.display="block";
}
function mostrarDatos(){
    //Almacenar la palabra
    var n1=document.getElementById("numero").value;
    
    for(cajita in n1){
        cajitas= 'Usted indico ' + n1 + ' cajitas';
    var cajita=0;
    while(cajita < n1){
        cajitas+='<article id="numcajas">'+cajita+'</article>';
        cajita++;
        }  
}

document.getElementById("resultado").innerHTML=cajitas; 
}

function verificarRespuestas(){
    var res = null;
    var total = 5;
    var puntos = 0;

    var myform = document.forms["quizform"];
    var respuestas = ["b", "c", "b", "c", "a"];
    for(var i = 1; i <= total; i++){
        if(myform["p" + i].value === null || myform["p" + i].value === ""){
            alert("Por favor responde la pregunta " + i);
            return false;
        }else{
            if(myform["p" + i].value === respuestas[i - 1]){
                puntos++;
            }
        }
    }    

    var resultado =document.getElementById("resultado");
    resultado.innerHTML ='<h3> Obtuviste <span>' + puntos +'</span> de <span>' + total + ' puntos</span><h3>';
    return false;
}

//Linea para detectar el evento del select
document.getElementById('temas').addEventListener("change",temaseleccionado);