function ValidarNombre(input){
    let value = input.value.trim();
    let pattern =  /^[a-zA-ZÀ-ÿ\s]{3,40}$/;

    if(pattern.test(value)){
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    }
    else{
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
}

function ValidarApellido(input){
    let value = input.value.trim();
    let pattern =  /^[a-zA-ZÀ-ÿ\s]{3,40}$/;

    if(pattern.test(value)){
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    }
    else{
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
}

function ValidarTelefono(input){
    let value = input.value.trim();
    let pattern = /^\+?[0-9\s\-]{7,15}$/;

    if(pattern.test(value)){
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    }
    else{
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
}

function ValidarMarca(input){
    let value = input.value.trim();

    if(value!==''){
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    }
    else{
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
}

function ValidarTyC(input){
    if(input.checked){
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    }
    else{
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }    
}

function ValidarComentarios(input){
    let value = input.value.trim();
    let pattern =  /^[\s\S]{10,320}$/;

    if(pattern.test(value)){
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    }
    else{
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
}

function escaparHTML(texto){
    return texto.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
}

function EvaluarFormulario(){
    let validaciones = [];
    validaciones.push(ValidarNombre(document.getElementById("Nombre")));
    validaciones.push(ValidarApellido(document.getElementById("Apellido")));
    validaciones.push(ValidarTelefono(document.getElementById("Telefono")));
    validaciones.push(ValidarMarca(document.getElementById("Marca")));
    validaciones.push(ValidarTyC(document.getElementById("Terminos")));
    validaciones.push(ValidarComentarios(document.getElementById("Comentarios")));

    //En caso de haber un false, salte de la función
    for (let i = 0; i < validaciones.length; i++) {
        if(!validaciones[i]){
            Swal.fire({
                icon: "warning",
                title: "Hubo un problema.",
                text: "Por favor, llene los campos correctamente.",
                });
            return;}
    }

    let contenidoModal =  "Todo esta bien, enviando el siguiente contenido: <ul>"
                            + "<li><b>Nombre: </b>"+ escaparHTML (document.getElementById("Nombre").value) + "</li>"
                            + "<li><b>Apellido: </b>"+ escaparHTML (document.getElementById("Apellido").value) + "</li>"
                            + "<li><b>Teléfono: </b>"+ escaparHTML (document.getElementById("Telefono").value) + "</li>"
                            + "<li><b>Marca de Teléfono: </b>"+ escaparHTML (document.getElementById("Marca").value) + "</li>"
                            + "<li><b>Aceptó Términos: </b>"+ "Sí" + "</li>"
                            + "<li><b>Comentarios:  </b>"+ escaparHTML (document.getElementById("Comentarios").value) + "</li>"
                            + "</ul>";

    Swal.fire({
        title: "<strong>¡Exito!</strong>",
        icon: "info",
        html: "<style>*{text-align: left;}</style>"+contenidoModal,
        });
    LimpiarFormulario();
}


function LimpiarFormulario(){
    let inputsId = ["Nombre","Apellido","Telefono","Marca","Terminos","Comentarios"];
    for (let i = 0; i < inputsId.length; i++) {
        let input = document.getElementById(inputsId[i]);
        input.classList.remove('is-valid');
        input.classList.remove('is-invalid');
    }

    const myForm = document.getElementById('formulario');
    myForm.reset();
}

function irArriba(){
    window.scrollTo({
        top:0,behavior:'smooth'
    });
}