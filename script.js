// Reproducir automáticamente el audio de fondo al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    var backgroundMusic = document.getElementById("backgroundMusic");

    backgroundMusic.volume = 0.5; // Ajusta el volumen si es necesario
    backgroundMusic.load(); // Carga el audio

    // Intenta reproducir el audio cuando la página esté lista
    backgroundMusic.play().then(function() {
        console.log("La canción de fondo se ha reproducido correctamente.");
    }).catch(function(error) {
        console.error("Error al reproducir la canción de fondo:", error);
    });
});
function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    if (password === "160623") {
        // Ocultar campo de contraseña y botón
        var passwordInput = document.getElementById("passwordInput");
        passwordInput.classList.add("hidden");
        passwordInput.disabled = true;
        document.getElementById("question").classList.remove("hidden");
        document.getElementById("yesButton").classList.remove("hidden");
        document.getElementById("noButton").classList.remove("hidden");

        // Reproducir efecto de sonido
        var successSound = new Audio("success.mp3");
        successSound.play();
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

function showFlower() {
    // Ocultar pregunta y botones
    document.getElementById("question").classList.add("hidden");
    document.getElementById("yesButton").classList.add("hidden");
    document.getElementById("noButton").classList.add("hidden");

    // Mostrar flor con animación
    var flower = document.getElementById("flower");
    flower.classList.remove("hidden");
    flower.style.opacity = "0";
    flower.style.transition = "opacity 1s";
    setTimeout(function() {
        flower.style.opacity = "1";
    }, 100); // agregar un pequeño retraso para la transición suave

    // Reproducir efecto de sonido
    var flowerSound = new Audio("flower.mp3");
    flowerSound.play();
}

function moveNoButton() {
    var button = document.getElementById("noButton");
    var newX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    var newY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
}

