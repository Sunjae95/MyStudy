import 'normalize.css';
import styles from'./index.module.scss';
import $ from 'jquery';

import catImgSvg from './assets/dog.jpg';

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello Webpack';
    
    const imgElement = document.createElement('img');
    imgElement.src = catImgSvg;
    imgElement.classList = styles.catImgSvg;

    const backElement = document.createElement('div');
    backElement.innerHTML = '배경화면';
    backElement.classList = styles.background;

    console.log(imgElement);
    console.log(styles);
    element.appendChild(imgElement);
    element.appendChild(backElement);
    // element.appendChild(div);
    element.classList = styles.helloWebpack;

    return element;
}


document.body.appendChild(component());

console.log($(`.${styles.helloWebpack}`).length);
console.log('IS_PRODUCTION: ',IS_PRODUCTION );