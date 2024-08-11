let imagenPrevia = document.getElementById('imagenPreviaBoton');
let imagenSiguiente = document.getElementById('imagenSiguienteBoton');

//cuando llamaba a los dos botones tenia conflicto ya que si no estaba 1 en una de las paaginas el getElementById me tiraba 'null' y eso hacia que mi codigo dejara de funcionar.

if(imagenPrevia){
imagenPrevia.addEventListener('click', function(){
    window.location.href = 'page1.html';
});
}

if(imagenSiguiente){
    imagenSiguiente.addEventListener('click', function(){
        window.location.href = 'page2.html';
    });
}