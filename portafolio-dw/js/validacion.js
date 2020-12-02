function validarformulario() {
    //Declaracion de variables
    const Formulario = document.Formulario;
    let name = Formulario.Name.value;
    let correo = Formulario.Email.value;
    let asunto = Formulario.Asunto.value;
    let msj = Formulario.Mensaje.value;
    //por defecto esta desactivado para si cuando envie otro formulario y se equivoca no aparzcan el de error y el de formulario completado a la vez
    document.getElementById('Clean').innerHTML = '';
    if (name == "" && correo == "" && asunto == "" && msj == "") {
        document.getElementById('Alerta').innerHTML = '<div class="Danger"><h2><a onclick="removex();">x</a>Campos vacíos</h2><div>';
        Formulario.Email.focus();
        return false;
    }

    if (correo == "") {
        document.getElementById('Alerta').innerHTML = '<div class="Danger"><h2><a onclick="removex();">x</a>Ingrese el correo electrónico</h2><div>';
        Formulario.Email.focus();
        return false;
    }
    if (validarmail(correo) == false) {
        document.getElementById('Alerta').innerHTML = '<div class="Danger"><h2><a onclick="removex();">x</a>Correo electrónico inválido</h2><div>';
        Formulario.Email.value = "";
        Formulario.Email.focus();
        return false;
    }
    if (name == "") {
        document.getElementById('Alerta').innerHTML = '<div class="Danger"><h2><a onclick="removex();">x</a>Ingrese su nombre</h2><div>';
        Formulario.Name.focus();
        return false;
    }

    if (validarTexto(name) == false) {
        document.getElementById('Alerta').innerHTML = '<div class="Danger"><h2><a onclick="removex();">x</a>El nombre no puede tener números</h2><div>';
        Formulario.Name.value = "";
        Formulario.Name.focus();
        return false;
    }

    if (asunto == "") {
        document.getElementById('Alerta').innerHTML = '<div class="Danger"><h2><a onclick="removex();">x</a>Ingrese el asunto</h2><div>';
        Formulario.Asunto.focus();
        return false;
    }

    if (validarTexto(asunto) == false) {
        document.getElementById('Alerta').innerHTML = '<div class="Danger"><h2><a onclick="removex();">x</a>El Asunto no puede tener números</h2><div>';
        Formulario.Asunto.value = "";
        Formulario.Asunto.focus();
        return false;
    }

    if (msj == "") {
        document.getElementById('Alerta').innerHTML = '<div class="Danger"><h2><a onclick="removex();">x</a>Ingrese Un mensaje</h2><div>';
        Formulario.Mensaje.focus();
        return false;
    } else {
        document.getElementById('Alerta').innerHTML = '';
        document.getElementById('Clean').innerHTML = '<div class="clean"><h2><img src="./img/tick.png">formulario completado</h2><div>';
        Formulario.Email.value = "";
        Formulario.Asunto.value = "";
        Formulario.Name.value = "";
        Formulario.Mensaje.value = "";
    }
}

function validarTexto(parametro) {
    //Expresiones regulares
    const patron = /^[a-zA-Z\s]*$/
    if (parametro.search(patron)) {
        return false;;
    } else {
        return true;
    }
}

function validarmail(correo) {
    const expReg = /^[a-z0-9!#$%&'*+/=?^`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let validacion = expReg.test(correo);
    if (validacion == false) {
        return false;
    } else {
        return true;
    }
}

