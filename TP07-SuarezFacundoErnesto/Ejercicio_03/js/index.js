
let lenguaje=document.getElementById('idio');
let botonEnviar=document.getElementById('btnEnviar');

function cambiarIdioma(){
    let lenguaje=document.getElementById('idio').value;
    let espa=document.getElementById('esp').value;
    let ingl=document.getElementById('ing').value;
    let registro=document.getElementById('regi');
    let texto01=document.getElementById('texto1');
    let texto02=document.getElementById('texto2');
    let texto03=document.getElementById('texto3');
    let texto04=document.getElementById('texto4');
    let texto05=document.getElementById('texto5');
    
    if (lenguaje===espa){
        registro.innerHTML='Registro';
        texto01.innerHTML='Idioma';
        texto02.innerHTML='Usuario';
        texto03.innerHTML='Contraseña';
        texto04.innerHTML='Repetir contraseña';
        texto05.innerHTML='Acepto los terminos y condiciones';
        document.getElementById('btnEnviar').value='Enviar';
    }
    else if(lenguaje===ingl){
        registro.innerHTML='Register';
        texto01.innerHTML='Language';
        texto02.innerHTML='User';
        texto03.innerHTML='Password';
        texto04.innerHTML='Repeat password';
        texto05.innerHTML='I Accept all terms and conditions';
        document.getElementById('btnEnviar').value='Log In';
    }
    else{
        registro.innerHTML='Inscrição';
        texto01.innerHTML='Idioma';
        texto02.innerHTML='Utilizador';
        texto03.innerHTML='Senha';
        texto04.innerHTML='Repetir senha';
        texto05.innerHTML='Aceito os termos e condições';
        document.getElementById('btnEnviar').value='Enviar';
    }
    
}
function comprobarContra (){
    let con1=window.document.getElementById('contra1').value;
    let con2=window.document.getElementById('contra2').value;
    let compro=document.getElementById('comp');

    if(con1!==con2){
        compro.innerHTML='Las contraseñas son diferentes';
        document.getElementById('contra1').value='';
        document.getElementById('contra2').value='';
    }
    else{
        compro.innerHTML='';
    }
}

lenguaje.addEventListener('change',cambiarIdioma);
botonEnviar.addEventListener('click',comprobarContra);