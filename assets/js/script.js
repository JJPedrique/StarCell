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

    //En caso de haber un false salte de la funcion
    for (let i = 0; i < validaciones.length; i++) {
        if(!validaciones[i]){
            alert("¡Alerta! Debe llenar correctamente los campos del formulario.");
            esValido = false; return;}
    }

    alert("Todo esta bien, Subiendo formulario");
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