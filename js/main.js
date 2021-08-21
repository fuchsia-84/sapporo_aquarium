$(function() {
    var $header = $('#header');
    var $global_menu = $('.global_menu');
    var $top = $('#top');
    var $toggle = $('.toggle_btn');
    var $lang_btn = $('#lang_btn');
    var $lang_menu = $('.lang_menu');

    var fixed_header_position = $top.height() - $header.outerHeight(true);
    
    // Header Fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > fixed_header_position) { 
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });

    // Global Menu Open
    $toggle.click(function() {
        $toggle.toggleClass('open');
        $global_menu.toggleClass('open');
    });

    // Language Menu Open
    $lang_btn.click(function() {
        $lang_btn.toggleClass('open');
        $lang_menu.toggleClass('open');
    });

    // #Link Smooth Scroll
    $('a[href^="#"]').click(function() {
        var speed = 1500; // 速度:ミリ秒
        var href= $(this).attr("href"); // アンカー値
        var target = $(href == "#" || href == "" ? 'html' : href); // 移動先
        var position = target.offset().top; // 移動先の位置

        // スクロールする
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;

     });
    
});