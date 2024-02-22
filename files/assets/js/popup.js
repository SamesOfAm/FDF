if(document.querySelector('.popup-overlay')) {
    const overlay = document.querySelector('.popup-overlay');
    const overlayBackground = document.querySelector('.popup-overlay-bg');
    const overlayCloseButton = document.querySelector('.popup-close');

    overlayCloseButton.addEventListener('click', function() {
        overlay.classList.remove('active');
        overlayBackground.style.display = 'none';
    })

    if(window.location.href.includes('info')) {
        overlay.classList.add('active');
        overlayBackground.style.display = 'block';
    }
}