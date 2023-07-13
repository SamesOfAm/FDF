<script>
    let content;
    const overlay = document.createElement('div');
    const overlayContent = document.createElement('div');
    const closeButton = document.createElement('div');
    closeButton.classList.add('program-overlay-close');
    closeButton.innerHTML = '&times;';
    overlay.classList.add('program-overlay');
    overlayContent.classList.add('program-overlay-content');
    overlay.appendChild(overlayContent);
    document.body.appendChild(overlay);

    function showOverlay(contentID) {
        if(document.documentElement.lang === 'en') {
            switch(contentID) {
                case 'kurkommander':
                    content = `{{insert_content::650}}`;
                    break;
                case 'kombi1':
                    content = `{{insert_content::670}}`
                    break;
                case 'films1':
                    content = `{{insert_content::652}}`
                    break;
                case 'acidpauli':
                    content = `{{insert_content::651}}`
                    break;
                case 'kombi2':
                    content = `{{insert_content::655}}`
                    break;
                case 'yoga-en':
                    content = `{{insert_content::658}}`
                    break;
                case 'films2':
                    content = `{{insert_content::653}}`
                    break;
                case 'kymat':
                    content = `{{insert_content::654}}`
                    break;
                case 'kombi3':
                    content = `{{insert_content::657}}`
                    break;
                case 'yoga-de':
                    content = `{{insert_content::658}}`
                    break;
                case 'films3':
                    content = `{{insert_content::656}}`
                    break;
                case 'clubnight':
                    content = `{{insert_content::659}}`
                    break;
                case 'traumzauberbaum':
                    content = `{{insert_content::672}}`
                    break;
                case 'haewelmann':
                    content = `{{insert_content::673}}`
                    break;
                case 'sternfee':
                    content = `{{insert_content::674}}`
                    break;
                case 'maus':
                    content = `{{insert_content::685}}`
                    break;
                case 'ff11':
                    content = `{{insert_content::677}}`
                    break;
                case 'ff21':
                    content = `{{insert_content::678}}`
                    break;
                case 'ff31':
                    content = `{{insert_content::679}}`
                    break;
                case 'ff32':
                    content = `{{insert_content::680}}`
                    break;
                case 'film-info1':
                    content = `{{insert_content::720}}`
                    break;
                default:
                    content = '';
            }
        } else if(document.documentElement.lang === 'de') {
            switch(contentID) {
                case 'kurkommander':
                    content = `{{insert_content::660}}`;
                    break;
                case 'kombi1':
                    content = `{{insert_content::671}}`
                    break;
                case 'films1':
                    content = `{{insert_content::661}}`
                    break;
                case 'acidpauli':
                    content = `{{insert_content::662}}`
                    break;
                case 'kombi2':
                    content = `{{insert_content::665}}`
                    break;
                case 'yoga-en':
                    content = `{{insert_content::668}}`
                    break;
                case 'films2':
                    content = `{{insert_content::663}}`
                    break;
                case 'kymat':
                    content = `{{insert_content::664}}`
                    break;
                case 'kombi3':
                    content = `{{insert_content::667}}`
                    break;
                case 'yoga-de':
                    content = `{{insert_content::668}}`
                    break;
                case 'films3':
                    content = `{{insert_content::666}}`
                    break;
                case 'clubnight':
                    content = `{{insert_content::669}}`
                    break;
                case 'traumzauberbaum':
                    content = `{{insert_content::672}}`
                    break;
                case 'haewelmann':
                    content = `{{insert_content::673}}`
                    break;
                case 'sternfee':
                    content = `{{insert_content::674}}`
                    break;
                case 'maus':
                    content = `{{insert_content::685}}`
                    break;
                case 'ff11':
                    content = `{{insert_content::677}}`
                    break;
                case 'ff21':
                    content = `{{insert_content::678}}`
                    break;
                case 'ff31':
                    content = `{{insert_content::679}}`
                    break;
                case 'ff32':
                    content = `{{insert_content::680}}`
                    break;
                case 'film-info1':
                    content = `{{insert_content::720}}`
                    break;
                default:
                    content = '';
            }
        }
        overlayContent.appendChild(closeButton);
        overlayContent.innerHTML += content;
        overlayContent.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('noscroll');

        document.querySelector('.program-overlay-close').addEventListener('click', function() {
            overlayContent.classList.remove('active');
            overlay.classList.remove('active');
            overlayContent.innerHTML = '';
            document.body.classList.remove('noscroll');
        });
    }

    document.querySelectorAll('.program-overlay-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            showOverlay(link.dataset.overlay)
        })
    })

    if(document.getElementById('date-select')) {
        const allDays = document.querySelectorAll('.day-hidden');
        const allCalendarLinks = document.querySelectorAll('#date-select a');
        allCalendarLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                allCalendarLinks.forEach(link => {
                    link.classList.remove('link-active');
                })
                link.classList.add('link-active');
                allDays.forEach(day => {
                    day.classList.add('day-hidden');
                })
                document.getElementById(link.dataset.selectDate).classList.remove('day-hidden');

            })
        })
    }

</script>