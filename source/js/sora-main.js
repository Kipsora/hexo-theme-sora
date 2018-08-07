const totop = $('#sora-totop');

const refresh_top_scroll = function() {
    const progress = $(document).scrollTop();
    const total_scroll_height = $(document).height() - $(window).height();
    $('#sora-topbar').css('width', 100.0 * progress / total_scroll_height + '%');
    return progress;
};

const on_scroll = function() {
    const progress = refresh_top_scroll();
    if (progress >= 100) {
        $('.nav').addClass('nav-scroll-down');
        totop.prop('disabled', false);
        totop.removeClass('hidden');
    } else {
        $('.nav').removeClass('nav-scroll-down');
        totop.addClass('hidden');
        totop.prop('disabled', true);
    }
};

on_scroll();

$(window).on('resize', on_scroll);
$(window).on('scroll', on_scroll);
