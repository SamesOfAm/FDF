<script>
    if(document.getElementById('panorama')) {
        viewer = videojs('panorama', {
            plugins: {
                pannellum: {
                    "showControls": false,
                    "mouseZoom": false
                }
            }
        });

        function toggleMute() {
            const player = document.getElementById('panorama_html5_api');
            player.muted = !player.muted;
        }

        document.querySelector('.icon-audio').addEventListener('click', toggleMute);

        function playOnHover(e) {
            e.target.currentTime = 13;
            e.target.play();
        }

        let isMouseDown = false;

        document.querySelector('#panorama').addEventListener('mousedown', function(){
            isMouseDown = true;
        })
        document.onmouseup   = function() { isMouseDown = false };
        document.onmousemove = function(){
            if(isMouseDown){
                document.querySelector('.icon360').style.display = "none";
            }
        }
    }

    window.addEventListener('load', function(event) {
        if(document.getElementById('panorama_html5_api')) {
            document.getElementById('panorama_html5_api').play();
        }
    });

</script>
