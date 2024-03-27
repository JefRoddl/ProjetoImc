
const menuIcon = document.getElementById('menuIcon');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');

document.addEventListener('DOMContentLoaded', function() {
    const clearButton = document.getElementById('clearCalc');
    const imcResult = document.getElementById('imcResult');

    clearButton.addEventListener('click', function() {
        imcResult.textContent = 'SEU IMC:'; // Define o conteúdo como vazio
    });

    const menuIcon = document.getElementById('menuIcon');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeButton');

    menuIcon.addEventListener('click', function() {
        toggleOverlay();
    });

    closeButton.addEventListener('click', function() {
        toggleOverlay();
    });

    function toggleOverlay() {
        if (overlay.style.display === 'block') {
            overlay.style.display = 'none';
        } else {
            overlay.style.display = 'block';
        }
    }
});
