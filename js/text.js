function adjustTextSize() {
    const container = document.getElementById("container");
    const text = document.getElementById("text");

    text.style.fontSize = "50px";
    text.style.lineHeight = "normal";

    const textClone = text.cloneNode(true);
    textClone.style.visibility = "hidden";
    textClone.style.position = "absolute";
    textClone.style.lineHeight = "normal";
    textClone.style.width = container.clientWidth + "px";
    container.appendChild(textClone);

    let fontSize = parseInt(window.getComputedStyle(text).fontSize, 10);
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;
    let textHeight, textWidth;

    do {
        textHeight = textClone.scrollHeight;
        textWidth = textClone.scrollWidth;

        if (textHeight > containerHeight || textWidth > containerWidth) {
            fontSize -= 1;
            textClone.style.fontSize = fontSize + "px";
        } else {
            break;
        }
    } while (fontSize > 0);

    text.style.fontSize = fontSize + "px";
    textClone.style.fontSize = fontSize + "px";
    textHeight = textClone.scrollHeight;
    const newLineHeight = containerHeight / (textHeight / fontSize);
    text.style.lineHeight = (newLineHeight > fontSize ? newLineHeight : fontSize) + "px";
    container.removeChild(textClone);
}

function updateText() {
    const textInput = document.getElementById("textInput");
    const text = document.getElementById("text");

    text.textContent = textInput.value;
    adjustTextSize();
}

window.onload = adjustTextSize;
window.onresize = adjustTextSize;