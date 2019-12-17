// Background Script
$(document).ready(function(){
    var images = $(".bg-image").find("img");
    $.each(images, function (index, item) {
        var $item = $(item),
            src = $item.attr('src'),
            cont = $item.closest('.section-bg').css('background-image', 'url(' + src + ')');
    });

    $(function() {

        var win = $(window);

        resizeHandler();
        win.resize(resizeHandler);
        function resizeHandler() {
            if(win.width() >= 750) {
                var header = $('.header-container-wrapper').height();
                $('body').css('margin-top', header+'px');
            }
            else{
                var header = 0;
                $('body').css('margin-top', header+'px');
            }
        }
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 100) {
            //clearHeader, not clearheader - caps H
            $(".header-container-wrapper").addClass("fixed");

        }
        else {
            $(".header-container-wrapper").removeClass("fixed");
        }
    });

});



$(function() {

    /**
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */

    $('.custom-menu-primary').addClass('js-enabled');

    /* Mobile button with three lines icon */
    $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger"><i></i></div>');

    /* Uncomment for mobile button that says 'MENU'
          $('.vision-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger">MENU</div>');
      */

    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
        $(this).next('.custom-menu-primary .hs-menu-wrapper').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        return false;
    });

    $('.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });

});
