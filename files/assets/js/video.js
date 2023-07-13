if(document.querySelector('.icon-audio')) {
    const heroVideo = document.querySelector('video');
    const audioIcon = document.querySelector('.icon-audio');
    const toggleAudio = () => {
        heroVideo.muted = !heroVideo.muted;
    }
    audioIcon.addEventListener('click', toggleAudio);
}