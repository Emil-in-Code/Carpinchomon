let ataqueJugador
let ataqueRival
let vidasJugador = 3;
let vidasRival = 3;

function iniciarjuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

    let botonCarpinchoJugador = document.getElementById("boton-carpincho")
    botonCarpinchoJugador.addEventListener("click", seleccionCarpinchoJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra) 
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
} 

function seleccionCarpinchoJugador(){  
    
    let sectionSeleccionarCarpincho = document.getElementById("seleccionar-carpincho")
    sectionSeleccionarCarpincho.style.display = "none"
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"
    let inputNativus = document.getElementById("Nativus")
    let inputNorcheto = document.getElementById("Norcheto")
    let inputCarpi420 = document.getElementById("Carpi420")
    let spanCarpinchoJugador = document.getElementById("carpincho-jugador")
    
    if (inputNativus.checked){
        spanCarpinchoJugador.innerHTML = "Nativus"
    } else if (inputNorcheto.checked){
        spanCarpinchoJugador.innerHTML = "Norcheto"
    } else if (inputCarpi420.checked){
        spanCarpinchoJugador.innerHTML = "Carpi420"
    } else {
        alert("Debes seleccionar un carpincho para continuar")
    }

    let botonTierra = document.getElementById("boton-carpincho")
    botonTierra.disabled = true

    seleccionCarpinchoRival()
}

function seleccionCarpinchoRival(){
    let seleccionAleatoria = aleatorio (1,3)
    let spanCarpinchoRival = document.getElementById("carpincho-rival")

    if (seleccionAleatoria == 1){
        spanCarpinchoRival.innerHTML = "Nativus"
    } else if (seleccionAleatoria == 2){
        spanCarpinchoRival.innerHTML = "Norcheto"
    } else{
        spanCarpinchoRival.innerHTML = "Carpi420"
    }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioRival()
}
function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioRival()
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioRival()
}


function ataqueAleatorioRival(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueRival = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueRival = "AGUA"
    } else if (ataqueAleatorio == 3) { 
        ataqueRival = "TIERRA"
    } 

    combate()

} 

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasRival =document.getElementById("vidas-rival")

    if(ataqueRival == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "FUEGO" && ataqueRival == "TIERRA"){
        crearMensaje("GANASTE") 
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
    } else if(ataqueJugador == "AGUA" && ataqueRival == "FUEGO"){
        crearMensaje("GANASTE")
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
    } else if(ataqueJugador == "TIERRA" && ataqueRival == "AGUA"){
        crearMensaje("GANASTE")
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
    } else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } 
    
    revisarVidas()
}

function revisarVidas(){
    if(vidasRival == 0){
      crearMensajefinal("¡Recuperaste tu territorio 😎!")
    } else if (vidasJugador == 0){
      crearMensajefinal("Lo lamento los chetos se quedaron con todo 😭")
    }
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    let notificacion = document.createElement("p")
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    notificacion.innerHTML =  resultado
    nuevoAtaqueDelJugador.innerHTML = ataquesDelJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataquesDelEnemigo


    sectionMensaje.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajefinal(resultadoFinal){
    let sectionMensaje = document.getElementById("mensaje")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
    
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
} 

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) { 
    return  Math.floor(Math.random() * (max - min + 1) + min) 
}

window.addEventListener("load",iniciarjuego)
