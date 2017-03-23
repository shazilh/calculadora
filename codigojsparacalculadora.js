window.onload = function(){ //Acciones tras cargar la página
document.calculator.ans.value=document.onkeydown; //elemento pantalla de salida
document.onkeydown = teclado(); //función teclado disponible
}
//window.onload = function(){ //Acciones tras cargar la página
//pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
//document.onkeydown = teclado; //función teclado disponible
//}
function raizc() {
         var resultado=Math.sqrt(Number(document.calculator.ans.value));
         document.calculator.ans.value=resultado;
}
function porcent() {
         var temp=parseInt(document.calculator.ans.value)
         var resultado=temp/100;
         document.calculator.ans.value=resultado; //mostrar en pantalla
}
function opuest() {
         var resultado=Number(document.calculator.ans.value); //convertir en número
         resultado=-resultado; //cambiar de signo
         var x=String(resultado); //volver a convertir a cadena
         document.calculator.ans.value=resultado; //mostrar en pantalla.
}
function teclado (elEvento) {
         evento = elEvento || window.event;
         k=evento.keyCode; //número de código de la tecla.
         //teclas númericas del teclado alfamunérico
         if (k>47 && k<58) {
            p=k-48; //buscar número a mostrar.
            p=String(p) //convertir a cadena para poder añádir en pantalla.
            numero(p); //enviar para mostrar en pantalla
            }
         //Teclas del teclado númerico. Seguimos el mismo procedimiento que en el anterior.
         if (k>95 && k<106) {
            p=k-96;
            p=String(p);
            numero(p);
            }
         if (k==110 || k==190) {numero(".")} //teclas de coma decimal
         if (k==106) {operar('*')} //tecla multiplicación
         if (k==107) {operar('+')} //tecla suma
         if (k==109) {operar('-')} //tecla resta
         if (k==111) {operar('/')} //tecla división
         if (k==32 || k==13) {igualar()} //Tecla igual: intro o barra espaciadora
         if (k==46) {borradoTotal()} //Tecla borrado total: "supr"
         if (k==8) {retro()} //Retroceso en escritura : tecla retroceso.
         if (k==36) {borradoParcial()} //Tecla borrado parcial: tecla de inicio.
         }
