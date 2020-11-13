const FAIR_START_DATE = 0;//1606626000000;
const FAIR_END_DATE = 1607317200000;

$(document).ready(showLanding);

function showLanding() {
    $('#fair-page').hide();
    $('#enter').hide();
    const now = Date.now();
    if (now >= FAIR_START_DATE && now <= FAIR_END_DATE) {
        $('#enter').show();
    }
    $('#enter').click(showFair);
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