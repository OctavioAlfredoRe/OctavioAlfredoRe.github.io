const audio = document.getElementById("audio");

function reproducir() {
    audio.play();
}

function pausar() {
    audio.pause();
}

function retroceder() {
    audio.currentTime -= 5;
}

function cambiarCancion(cancion) {
    audio.src = cancion;
    audio.play();
}
