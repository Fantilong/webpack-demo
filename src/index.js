import _ from "lodash";
// import Print from "./print";

function component() {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ')
    // element.onclick = Print.call(null, 'Hello webpack')

    return element
}

document.body.appendChild(component())

// document.body.appendChild(getBtn())