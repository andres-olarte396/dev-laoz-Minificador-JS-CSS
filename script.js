function minifyCode() {
    const code = document.getElementById('codeInput').value;
    const fileType = document.getElementById('fileType').value;
    const resultDiv = document.getElementById('result');

    let minifiedCode = '';

    if (fileType === 'js') {
        minifiedCode = code.replace(/\s+/g, ' ').trim().replace(/;\s+/g, ';'); // Simple minificación
    } else if (fileType === 'css') {
        minifiedCode = code.replace(/\s+/g, ' ').trim().replace(/;\s+/g, ';').replace(/:\s+/g, ':'); // Simple minificación
    }

    resultDiv.innerText = minifiedCode;
    resultDiv.classList.remove('error');
}

function unminifyCode() {
    const code = document.getElementById('codeInput').value;
    const fileType = document.getElementById('fileType').value;
    const resultDiv = document.getElementById('result');

    // Desminificación simple para la demostración
    let unminifiedCode = '';

    if (fileType === 'js') {
        unminifiedCode = code.replace(/;/g, ';\n').replace(/\{/g, '{\n').replace(/\}/g, '}\n').replace(/,/g, ',\n');
    } else if (fileType === 'css') {
        unminifiedCode = code.replace(/;/g, ';\n').replace(/\{/g, '{\n').replace(/\}/g, '}\n').replace(/,/g, ',\n');
    }

    resultDiv.innerText = unminifiedCode;
    resultDiv.classList.remove('error');
}