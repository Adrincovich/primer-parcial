window.addEventListener("load", ()=> {
    const form = document.getElementById("form");
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const email = document.getElementById("email");
    const edad = document.getElementById("edad");

    const sexo = ["sexo1", "sexo2", "sexo3"];
    const sexo1 = document.getElementById("sexo1");
    const sexo2 = document.getElementById("sexo2");
    const sexo3 = document.getElementById("sexo3");

    const interes = document.getElementsByClassName("formulario-interes");
    const pais = document.getElementById("pais");


    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (estadoValidaciones.name &&
            estadoValidaciones.surname &&
            estadoValidaciones.email &&
            estadoValidaciones.edad /*&&
            estadoValidaciones.sexo &&
            estadoValidaciones.interes &&
            estadoValidaciones.pais*/){
                estadoValidaciones.name = false;
                estadoValidaciones.surname = false;
                estadoValidaciones.email = false;
                estadoValidaciones.edad = false;
                estadoValidaciones.sexo = false;
                estadoValidaciones.interes = false;
                estadoValidaciones.pais = false;
                alert("Enviado exitosamente");
                form.reset();
        }else {
            alert("No enviado, verificar campos");
        }
    });

    const estadoValidaciones = {
        name: false,
        surname: false,
        email: false,
        edad: false,
        sexo1: false,
        interes: false,
        pais: false,
    }

    name.addEventListener("blur", function () {
        if (name.value == ""){
            valida(name, "El nombre es requerido");
            estadoValidaciones.name = false;
        }else if (name.value.length < 3 ){
            valida(name, "Ingrese mas de 3 digitos");
            estadoValidaciones.name = false;
        }else {
            valida(name, "");
            estadoValidaciones.name = true;
        }
    })

    name.addEventListener("focus", function (){
        valida(name, "");
    })

    surname.addEventListener("blur", function () {
        if (surname.value == ""){
            valida(surname, "El apellido es requerido");
            estadoValidaciones.surname = false;
        }else if (surname.value.length < 3 ){
            valida(surname, "Ingrese mas de 3 digitos");
            estadoValidaciones.surname = false;
        }else {
            valida(surname, "");
            estadoValidaciones.surname = true;
        }
    })

    surname.addEventListener("focus", function (){
        valida(surname, "");
    })

    email.addEventListener("blur", function () {
        if (email.value == ""){
            valida(email, "El e-mail es requerido");
            estadoValidaciones.email = false;
        }else if (!validaEmail(email.value)){
            valida(email, "El e-mail no es valido");
            estadoValidaciones.email = false;
        }else {
            valida(email, "");
            estadoValidaciones.email = true;
        }
    })

    email.addEventListener("focus", function (){
        valida(email, "");
    })

    edad.addEventListener("blur", function () {
        if (edad.value == ""){
            valida(edad, "La edad es requerida");
            estadoValidaciones.edad = false;
        }else if (edad.value < 0 || edad.value > 120){
            valida(edad, "Ingrese edad entre 0 y 120");
            estadoValidaciones.edad = false;
        }else {
            valida(edad, "");
            estadoValidaciones.edad = true;
        }
    })

    edad.addEventListener("focus", function (){
        valida(edad, "");
    })

    const valida = (input, msje) => {
        const formControl = input.parentElement;
        const aviso = formControl.querySelector("p");
        aviso.innerText = msje;

        formControl.className = "fieldset falla";
    }

        /*Expresiones regulares*/

    const validaEmail = (email) => {
        return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
    }
})