$(function() {
    var $header = $('#header');
    var $global_menu = $('.global_menu');
    var $top = $('#top');
    var $toggle = $('.toggle_btn');
    var $lang_btn = $('#lang_btn');
    var $lang_menu = $('.lang_menu');
    var $today_time = $('.today_time');
    var $today_ticket = $('.today_ticket');
    var $today_schedule = $('.today_schedule');

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

    // Today Open (for tab/sp)
    if (window.matchMedia('(max-width: 756px)').matches) {
        $today_time.click(function() {
            $today_time.toggleClass('open');
            if ($today_ticket.hasClass('open') || $today_schedule.hasClass('open')) {
                $today_ticket.removeClass('open');
                $today_schedule.removeClass('open');
            }
        });
        $today_ticket.click(function() {
            $today_ticket.toggleClass('open');
            if ($today_time.hasClass('open') || $today_schedule.hasClass('open')) {
                $today_time.removeClass('open');
                $today_schedule.removeClass('open');
            }
        });
        $today_schedule.click(function() {
            $today_schedule.toggleClass('open');
            if ($today_time.hasClass('open') || $today_ticket.hasClass('open')) {
                $today_time.removeClass('open');
                $today_ticket.removeClass('open');
            }
        });
    }

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

     // Show Section
     show_section_animation();
     window.addEventListener('scroll', show_section_animation);


     /**
      ** 到達したら要素を表示させる
      */
    function show_section_animation() {
        var sections = document.getElementsByClassName('show_section');
        if(!sections) return; // 要素がなかったら処理をキャンセル

        var show_timing = 40; // タイミング調整用
        var scroll_y = window.pageYOffset;
        var window_height = window.innerHeight;

        var $body = $('body')
        
        for ( var i=0; i<sections.length; i++ ) {
            var section_ClientRect = sections[i].getBoundingClientRect();
            var section_y = scroll_y + section_ClientRect.top;

            if ( i > 0 ) {
                var $pre_section = $(sections[i-1]);
                var pre_bg = $pre_section.css('background-color'); // 前のセクションの背景色を覚えておく

            } else { // 最初のセクションに戻ったらbody背景を初期化する
                if( scroll_y > section_y ) {
                    $body.css('background-color', '#ffffff');
                }
            }
            if ( scroll_y + window_height - show_timing > section_y) { // セクション位置より下にスクロール

                sections[i].classList.add('is-show'); // セクションを表示する

                // 波SVGの上余白で見えるbody背景色を前セクションの背景色にする
                if ( i > 0 ) {
                    $body.css('background-color', pre_bg);
                }

            } else if ( scroll_y + window_height < section_y ) { // セクション位置より上にスクロール

                sections[i].classList.remove('is-show'); // セクションを非表示にする
            }
        }
    }
    
});