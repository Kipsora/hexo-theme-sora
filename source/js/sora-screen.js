function load_background(urls) {
    const backgrounds = urls.split(',');
    const screen_img = $('#sora-screen');
    let current_bg = Math.floor(Math.random() * backgrounds.length);

    const load_image = function(src, call_back) {
        const img = new Image();
        img.src = src;
        img.onload = call_back;
        return img;
    };
    screen_img.css('background-image', 'url("' + backgrounds[current_bg] + '")');

    const on_click_prev = function (event) {
        event.preventDefault();
        $('#sora-screen-prev i').removeClass("fa-chevron-left").addClass("fa-spinner fa-spin");
        $('#sora-screen-next i').removeClass("fa-chevron-right").addClass("fa-spinner fa-spin");
        current_bg = current_bg - 1 + backgrounds.length;
        current_bg %= backgrounds.length;
        load_image(backgrounds[current_bg], function () {
            screen_img.css('background-image', 'url("' + backgrounds[current_bg] + '")');
            $('#sora-screen').addClass("push-left");
            $('#sora-screen-prev i').removeClass("fa-spinner fa-spin").addClass("fa-chevron-left");
            $('#sora-screen-next i').removeClass("fa-spinner fa-spin").addClass("fa-chevron-right");
            $('#sora-screen-prev').one('click', on_click_prev);
        });
    };
    const on_click_succ = function (event) {
        event.preventDefault();
        $('#sora-screen-prev i').removeClass("fa-chevron-left").addClass("fa-spinner fa-spin");
        $('#sora-screen-next i').removeClass("fa-chevron-right").addClass("fa-spinner fa-spin");
        current_bg += 1;
        current_bg %= backgrounds.length;
        load_image(backgrounds[current_bg], function () {
            screen_img.css('background-image', 'url("' + backgrounds[current_bg] + '")');
            $('#sora-screen').addClass("push-right");
            $('#sora-screen-prev i').removeClass("fa-spinner fa-spin").addClass("fa-chevron-left");
            $('#sora-screen-next i').removeClass("fa-spinner fa-spin").addClass("fa-chevron-right");
            $('#sora-screen-next').one('click', on_click_succ);
        });
    };

    $('#sora-screen-prev i').one('click', on_click_prev);
    $('#sora-screen-next i').one('click', on_click_succ);
}