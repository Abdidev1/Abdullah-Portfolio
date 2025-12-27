document.addEventListener('DOMContentLoaded', () => {
    const output = document.querySelector('.output');
    const text = output.innerText;
    output.innerText = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            output.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing after a small delay
    setTimeout(typeWriter, 1000);
});

// Sound effect or interactive console log for extra flair
console.log("%c SYSTEM SECURED. WELCOME, OPERATOR.", "color: #00ff41; font-size: 20px; font-weight: bold;");
