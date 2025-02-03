function calcularArea(){

    let base= document.getElementById("valorB").value;
    let altura=document.getElementById("valorA").value;

    if (base === "") {
        Swal.fire({
            icon: "error",
            title: "Oops... Ingrese la base",
           
            
          });
    } else if(altura === "") {
        Swal.fire({
            icon: "error",
            title: "Oops... Ingrese la altura",    
          
          });
    } 
     else {
        let a= parseInt(altura);
        let b=parseInt(base);
        let resultado= (b*a);
        document.getElementById("Resultado").value = resultado;
    }
}

function limpiar() {
    document.getElementById("valorA").value = ""
    document.getElementById("valorB").value = ""
    document.getElementById("Resultado").value = ""
}
