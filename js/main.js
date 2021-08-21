$(function() {
    var $header = $('#header');
    var $top = $('#top');
    var fixed_header_position = $top.height() - $header.outerHeight(true);
    
    // Header Fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > fixed_header_position) { 
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });
});