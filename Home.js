let count = 0;
let index = 0;
let currentText = '';
let letter = '0';

(function type(){
    const titleText = ['Hello, I\'m Nile Weadick.'];

    if(count === titleText.length){
        count = 0;
    }

    currentText = titleText[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.title-font').textContent = letter;

    setTimeout(type, 200);
}());