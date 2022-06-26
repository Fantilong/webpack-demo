import _ from "lodash";
import printMe from "./print";


function component() {
    var element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ')
    
    return element
}

function componentBtn() {
    var btn = document.createElement('button')

    btn.innerHTML = 'Click me and check the console'
    btn.onclick = printMe
    return btn
}

document.body.appendChild(component())
document.body.appendChild(componentBtn())