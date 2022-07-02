// connection testing
console.log('linked file')

// functions
function changeColorWithKeys(event) {
    switch (event.key) {
        case 'a':
            color = 'blue'
            console.log('selected color: '.concat(color))
        break;
        case 's':
            color = 'yellow'
            console.log('selected color: '.concat(color))
        break;
        case 'd':
            color = 'green'
            console.log('selected color: '.concat(color))
        break;
        default:
            color = 'red'
            console.log('selected color: '.concat(color))
        break;
    }
}

function changeElementColor() {
    // get HTML elementsa
    const box = document.querySelectorAll('#box1, #box2, #box3, #box4')

    for (let index = 0; index < box.length; index++) {
        box[index].addEventListener('click', function (element) {
            element.target.style.backgroundColor = color
        })
    }
}

// variables
var color

// change color according to the selected key
document.addEventListener('keydown', changeColorWithKeys)
changeElementColor()