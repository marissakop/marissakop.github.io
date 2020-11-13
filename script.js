const FAIR_START_DATE = 1606626000000;
const FAIR_END_DATE = 1607317200000;

$(document).ready(showLanding);

let interval;
function showLanding() {
    $('#fair-page').hide();
    $('#enter').hide();
    interval = setInterval(checkTime, 1000);
    checkTime();
}

function checkTime() {
    const now = Date.now();
    if (now >= FAIR_START_DATE && now <= FAIR_END_DATE) {
        $('#countdown').hide();
        $('#enter').show();
        $('#enter').click(showFair);
        clearInterval(interval);
        return;
    }

    const total = FAIR_START_DATE - now;
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
    if (days > 0) {
        $('#countdown').text(`Fair opens in ${days} days, ${hours} hours, check back soon!`);
    } else {
        $('#countdown').text(`Fair opens in ${hours} hours, ${minutes} minutes, ${seconds} seconds, check back soon!`);
    }
}

function showFair() {
    $('#landing-page').hide();
    $('#fair-page').show();
    $('#top-arrow').hide();
    $(document).scroll(() => {
        const scrolled = window.scrollY;
        const visitY = $('#visit-booths').offset().top;
        if (scrolled > visitY) {
            $('#top-arrow').show();
        } else {
            $('#top-arrow').hide();
        }
    })
}