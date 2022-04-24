function characterReplacement(mensaje) {
    return mensaje.replace(/[^\w\s]/gi, '').replace(/[0-9]/gi, '').toLowerCase();
}

function encrypt() {
    const mensaje = characterReplacement(document.getElementById('mensaje').value);
    
    var encrypted = mensaje.replace(/e/gi, 'enter');
    encrypted = encrypted.replace(/i/gi, 'imes');
    encrypted = encrypted.replace(/a/gi, 'ai');
    encrypted = encrypted.replace(/o/gi, 'ober');
    encrypted = encrypted.replace(/u/gi, 'ufat');

    document.getElementById('texto').value = encrypted;
}

function decrypt() {
    const mensaje = characterReplacement(document.getElementById('mensaje').value);

    var decrypted = mensaje.replace(/imes/gi, 'i');

    decrypted = decrypted.replace(/enter/gi, 'e');
    decrypted = decrypted.replace(/ai/gi, 'a');
    decrypted = decrypted.replace(/ober/gi, 'o');
    decrypted = decrypted.replace(/ufat/gi, 'u');

    document.getElementById('texto').value = decrypted;
}

function copy() {
    var copiedText = document.getElementById("texto");

    copiedText.select(); 
    copiedText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copiedText.value);

    // alert("Texto copiado: " + copiedText.value);
}

document.getElementById('enc').addEventListener('click', encrypt);
document.getElementById('desenc').addEventListener('click', decrypt);
document.getElementById('copiar').addEventListener('click', copy);