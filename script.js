function checkInputText(text) {
    // Corregimos el texto para que quede solo en lowerCase, sin acentos o mayusculas
    var correctText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return correctText;
}

function encryptText () {
    var inputTextBeforeCheck = document.getElementById('input-text').value;
    var inputText = checkInputText(inputTextBeforeCheck);
    var resultText = document.getElementById("result-text");
    var result = '';

    for (var i = 0; i < inputText.length; i++) {
        if (inputText[i] == 'e') {
            result += 'enter';
        } 
        else if (inputText[i] == 'i') {
            result += 'imes';
        }
        else if (inputText[i] == 'a') {
            result += 'ai';
        }
        else if (inputText[i] == 'o') {
            result += 'ober';
        }
        else if (inputText[i] == 'u') {
            result += 'ufat';
        }
        else {
            result += inputText[i];
        }
    }

    resultText.style.textAlign = "left";
    resultText.innerHTML = result;
    copyBttn.style.display = 'block';

    resultText.style.color = '#0A3871';
    resultText.style.background = '#FFFFFF';

    document.getElementById('input-text').value = '';
}

var encryptBttn = document.getElementById('encrypt-bttn');
encryptBttn.onclick = encryptText;

function decryptText () {
    var inputTextBeforeCheck = document.getElementById('input-text').value;
    var inputText = checkInputText(inputTextBeforeCheck);
    var resultText = document.getElementById("result-text");

    inputText = inputText.replaceAll('enter', 'e');
    inputText = inputText.replaceAll('imes', 'i');
    inputText = inputText.replaceAll('ai', 'a');
    inputText = inputText.replaceAll('ober', 'o');
    inputText = inputText.replaceAll('ufat', 'u');

    resultText.innerHTML = inputText;
    copyBttn.style.display = 'block';

    resultText.style.color = '#0A3871';
    resultText.style.background = '#FFFFFF';

    document.getElementById('input-text').value = '';
}

var decryptBttn = document.getElementById('decrypt-bttn');
decryptBttn.onclick = decryptText;

function copyText() {
    var textToCopy = document.getElementById('result-text');
    var containerTextToCopy = document.getElementById('result-div');

    var inputText = document.getElementById('input-text');
    inputText.value = textToCopy.innerText;

    containerTextToCopy.style.paddingLeft = '20px'
    textToCopy.style.display = 'inline';
    textToCopy.style.padding = '0';
    textToCopy.style.color = 'white';
    textToCopy.style.background = 'darkblue';
    textToCopy.style.borderRadius = '10px'
}

var copyBttn = document.getElementById('copy-bttn');
copyBttn.onclick = copyText;