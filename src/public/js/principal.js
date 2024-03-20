
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