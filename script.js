const FAIR_START_DATE = 0;//1606626000000;
const FAIR_END_DATE = 1607317200000;

$(document).ready(init);

function init() {
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
}