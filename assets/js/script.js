function paint(element, color = 'green') {
    element.style.backgroundColor = color
    console.log('color: '.concat(color))
}

// connection testing
console.log('linked file')

// get HTML elements
texto = document.getElementById("ele1")

// call function with default color parameter
paint(texto)

// paint on click on element
texto.addEventListener("click", () => {
    paint(texto, 'yellow')
});