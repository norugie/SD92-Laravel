// Page Loader

$(document).ready(function(){
    setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 50);
});

// Search
$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});

$(function () {

    // Navbar Sticky
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > ($('.top-bar').outerHeight())) {
            $('header.nav-holder.make-sticky').addClass('sticky');
            $('header.nav-holder.make-sticky').css('margin-bottom', '' + $('.top-bar').outerHeight() * 1.5 + 'px');
        } else {
            $('header.nav-holder.make-sticky').removeClass('sticky');
            $('header.nav-holder.make-sticky').css('margin-bottom', '0');
        }
    });

    // Scroll To
    $('.scroll-to').on('click', function (e) {

        e.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var target = parts[1];

        if ($('header.nav-holder').hasClass('sticky')) {
            var offset = -80;
        } else {
            var offset = -180;
        }

        var offset = $('header.nav-holder').outerHeight();

        $('body').scrollTo($('#' + target), 800, {
            offset: -offset
        });

    });
    
    // Adding fade effect to dropdowns
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(100);
    });
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(100);
    });

});