const myDiv = document.getElementsByTagName("div")[0];

myDiv.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

function saludar(event) {
    alert("Hola!");
    event.stopPropagation();
}