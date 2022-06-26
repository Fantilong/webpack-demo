import _ from "lodash";
import "./style.css";
import weback from "./webpack.png";

function component() {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ')
    element.setAttribute('class', 'hello')

    return element
}

document.body.appendChild(component())