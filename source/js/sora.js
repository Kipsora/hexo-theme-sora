var on_click_hide = function (e) {
    e.preventDefault();
    $('#sora-navbar-main').removeClass('phone-hidden');
    $('#sora-navbar-button').one('click', function(e) {
        e.preventDefault();
        $('#sora-navbar-main').addClass('phone-hidden');
        $('#sora-navbar-button').one('click', on_click_hide);
    });
};
$('#sora-navbar-button').one('click', on_click_hide);
$('#sora-navbar').mouseleave(function (e) {
    if (!$('#sora-navbar-main').hasClass('phone-hidden')) {
        $('#sora-navbar-button').click();
    }
});

$(window).on('load', function() {
    const main_container = $('#main-container');
    main_container.addClass('fadein');
    main_container.show();
});
