document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inputString");
    const reverseButton = document.getElementById("reverseButton");
    const output = document.getElementById("output");

    reverseButton.addEventListener("click", function () {
        const originalText = inputField.value;
        const reversedText = originalText.split("").reverse().join("");
        output.textContent = reversedText;
    });
});
