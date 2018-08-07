$(window).on('load', function() {
    const main_container = $('#main-container');
    main_container.addClass('fadein');
    main_container.show();
});

const on_totop_click = function (event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, "slow", "swing");
    return false;
};
totop.on('click', on_totop_click);

