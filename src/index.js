import _ from 'lodash';
import printMe from './print.js';

function component() {

    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['hello', 'webpack'], '  ');

    btn.innerHTML = 'click me and check the console!';
    btn.onclick = function(){printMe()};
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());