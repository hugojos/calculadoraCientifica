var resultado=0;
var ultimoResultado=0;
var $operaciones= $('span.operaciones');
$(function(){
    $numeros= $('[data-numero]');
    $numeros.each(function(){ 
        // ESTE THIS ES CADA NUMERO DEL ARRAY
        $(this).click(function(){
            agrupamiento = $operaciones.text();
            // Y ESTE THIS ES EL DATO NUMERICO DE CADA NUMERO DEL ARRAY
            agrupamiento+= $(this).data('numero')
            $operaciones.text(agrupamiento)
        })
    })
    // ESTO SIRVE PARA BORRAR EL ULTIMO NUMERO
    $('#borrar').click(function(){
        $cantidadDeNumeros = $operaciones.text().length-1;
        // ESTO EXTRAE TODO LOS NUMEROS MENOS EL ULTIMO Y LO REEMPLAZA, SIMULANDO EL BORRADO
        $operaciones.text($operaciones.text().substr(0,$cantidadDeNumeros));
    })

    $('#borrarTodo').click(function(){
        $operaciones.empty();
    })
        
})