function encryptText() {
    const inputText = document.querySelector('._container__content_1_text_field').value;
    const resultCripto = inputText
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.querySelector('._container__content_2__text_field').value = resultCripto;
    document.querySelector('._container__content_1_text_field').value = '';
    document.querySelector('._container__content_2__button_copy').style.display = 'block';
}

function decryptText() {
    const inputText = document.querySelector('._container__content_1_text_field').value;
    const resultDescripto = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.querySelector('._container__content_2__text_field').value = resultDescripto;
    document.querySelector('._container__content_2__button_copy').style.display = 'block';
}

function copyText() {
    const outputText = document.querySelector('._container__content_2__text_field').value;
    document.querySelector('._container__content_1_text_field').value = outputText;
}
