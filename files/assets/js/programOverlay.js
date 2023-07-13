if(document.querySelector('.program-tables')) {
    console.log('Overlay');
    const overlay = document.createElement('div');
    const overlayContent = document.createElement('div');
    overlay.classList.add('program-overlay');
    overlayContent.classList.add('program-overlay-content');
    overlay.appendChild(overlayContent);
    document.body.appendChild(overlay);

    function showOverlay(contentID) {
        // overlay.classList.add('active');

        overlayContent.classList.add('active');
    }

    document.querySelectorAll('.program-overlay-link').forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          showOverlay(link.dataset.overlay)
      })
    })
    document.body.addEventListener('click', (event) => {
        console.log(event.target);
        if(event.target !== overlay) {
            console.log('Clicked outside');
        }
    })
}