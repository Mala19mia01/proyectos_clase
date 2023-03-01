function notas(){
    
    var nota;
    var promedio;
    var suma = 0;
    var cnotas = parseInt(prompt("Digite cantidad de notas"));

    for (i=0 ; i < cnotas; i++){
        var nota = parseInt (prompt("Digite nota"+i));
        suma = suma + nota;
    }

    promedio = suma / cnotas;
    alert ("El resultado es " + promedio);
}



function calcular_promedio(){

    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var v3 = document.getElementById("n3").value;
    var v4 = document.getElementById("n4").value;
    var v5 = document.getElementById("n5").value;

    var pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3)+parseFloat(v4)+parseFloat(v5))/5;
    
    document.getElementById("promedio").innerHTML = pro;
    document.write("Su promedio es " +pro);

}



