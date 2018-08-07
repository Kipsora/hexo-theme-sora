const totop = $('#sora-totop');

const refresh_top_scroll = function() {
    const progress = $(document).scrollTop();
    const total_scroll_height = $(document).height() - $(window).height();
    $('#sora-topbar').css('width', 100.0 * progress / total_scroll_height + '%');
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
    if (progress >= 100) {
        totop.prop('disabled', false);
        totop.removeClass('hidden');
    } else {
        totop.addClass('hidden');
        totop.prop('disabled', true);
    }
};

on_window_resize();
on_scroll();

$(window).on('resize', on_window_resize);
$(window).on('scroll', on_scroll);
