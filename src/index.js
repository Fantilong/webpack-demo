function getComponent() {
    return import('lodash').then(({default: _}) => {
        var element = document.createElement('div')
        element.innerHTML = _.join(['Hello', 'Webpack'], ' ')

        document.body.appendChild(element)
    }).catch((error) => 'An error occured while loading the component')
}

function getBtn() {
    var btn = document.createElement('button')
    btn.innerHTML = 'click'
    btn.onclick = getComponent

    return btn
}

document.body.appendChild(getBtn())