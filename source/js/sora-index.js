const totop = $('#sora-totop');

const refresh_top_scroll = function() {
    const progress = $(document).scrollTop();
    // const total_scroll_height = $(document).height() - $(window).height();
    // $('#sora-topbar').css('width', 100.0 * progress / total_scroll_height + '%');
    return progress;
};

const on_window_resize = function () {
    if (typeof screen_img !== "undefined") {
        screen_img.css('height', window.innerHeight);
    }
    refresh_top_scroll();
};

const on_scroll = function() {
    const progress = refresh_top_scroll();
    if (progress > 20) {
        totop.prop('disabled', false);
        totop.removeClass('opacity-hidden');
        $('#sora-navbar').addClass('navbar-hover');
    } else {
        totop.addClass('opacity-hidden');
        totop.prop('disabled', true);
        $('#sora-navbar').removeClass('navbar-hover');
    }
};

on_window_resize();
on_scroll();

$(window).on('resize', on_window_resize);
$(window).on('scroll', on_scroll);

const on_totop_click = function (event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, "slow", "swing");
    return false;
};
totop.on('click', on_totop_click);