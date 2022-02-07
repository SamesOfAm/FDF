
let showingImage = 0;

if(document.getElementById('media-photo-gallery')) {

    function setImage(number) {
        imgTag.setAttribute('src', allGalleryAnchors[number].href);
    }

    function showPreviousImage() {
        if(showingImage > 1) {
            nextIcon.style.display = "block";
            setImage(showingImage-1);
            showingImage--;
        } else {
            setImage(0);
            previousIcon.style.display = "none";
            showingImage = 0;
        }
    }

    function showNextImage() {
        if(showingImage < allGalleryAnchors.length-2) {
            previousIcon.style.display = "block";
            setImage(showingImage+1);
            showingImage++;
        } else {
            setImage(allGalleryAnchors.length-1)
            nextIcon.style.display = "none";
            showingImage = allGalleryAnchors.length-1;
        }
    }


    const gallery = document.getElementById('media-photo-gallery');
    const imgTag = document.createElement('img');
    imgTag.classList.add('gallery-image');
    const allGalleryAnchors = gallery.querySelectorAll('a');
    const overlay = document.createElement('div');
    overlay.classList.add('gallery-overlay');
    document.body.appendChild(overlay);
    const nextIcon = document.createElement('div');
    nextIcon.classList.add('gallery-next-icon');
    const previousIcon = document.createElement('div');
    previousIcon.classList.add('gallery-previous-icon');
    const closeIcon = document.createElement('div');
    const closeIconContent = document.createTextNode('×');
    closeIcon.classList.add('gallery-close-icon');
    closeIcon.appendChild(closeIconContent);
    closeIcon.addEventListener('click', function() {
        overlay.style.display = "none";
        imgTag.style.display = "none";
        nextIcon.style.display = "none";
        previousIcon.style.display = "none";
        closeIcon.style.display = "none";
    })
    document.body.appendChild(imgTag);
    document.body.appendChild(nextIcon);
    document.body.appendChild(previousIcon);
    document.body.appendChild(closeIcon);
    for(let i = 0; i < allGalleryAnchors.length; i++) {
        const imageURL = allGalleryAnchors[i].href;
        allGalleryAnchors[i].addEventListener('click', function() {
            event.preventDefault();
            overlay.style.display = "block";
            imgTag.style.display = "block";
            if (i < allGalleryAnchors.length-1) {
                nextIcon.style.display = "block";
            }
            if (i > 0) {
                previousIcon.style.display = "block";
            }
            closeIcon.style.display = "block";
            imgTag.setAttribute('src', imageURL);
            showingImage = i;
            console.log(showingImage);
            nextIcon.addEventListener('click', showNextImage, false);
            previousIcon.addEventListener('click', showPreviousImage, false);
            const imgHeight = imgTag.naturalHeight;
            const imgWidth = imgTag.naturalWidth;
            if(imgHeight > imgWidth) {
                imgTag.classList.add('portrait');
            } else {
                imgTag.classList.add('landscape');
            }
        });
    }
}

