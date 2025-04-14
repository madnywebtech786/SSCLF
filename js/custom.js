/* cookies */
$('.cookie-button button').click(function () {
    $(this).parent().parent().parent().slideUp();

})

// slider
jQuery(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows:true,
        dots:true,
        infinite: true,
        loop:true,
        prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-arrow-alt-circle-left"></i></button>',
        nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-arrow-alt-circle-right"></i></button>'
    });
    $(window).scroll(function(){
    if($(window).scrollTop() > 200){
        $('.site-header').addClass('sticky');

    }
    else{
        $('.site-header').removeClass('sticky');
    }
    });
})
/* captcha */
$(function(){
    $('#contact-form').ebcaptcha();
});

(function($){

    jQuery.fn.ebcaptcha = function(options){

        var element = this;
        var input = this.find('#ebcaptchainput');
        var label = this.find('#ebcaptchatext');
        $(element).find('button[type=submit]').attr('disabled','disabled');

        var randomNr1 = 0;
        var randomNr2 = 0;
        var totalNr = 0;


        randomNr1 = Math.floor(Math.random()*10);
        randomNr2 = Math.floor(Math.random()*10);
        totalNr = randomNr1 + randomNr2;
        var texti = "What is "+randomNr1+" + "+randomNr2;
        $(label).text(texti);


        $(input).keyup(function(){

            var nr = $(this).val();
            if(nr==totalNr)
            {
                $(element).find('button[type=submit]').removeAttr('disabled');
            }
            else{
                $(element).find('button[type=submit]').attr('disabled','disabled');
            }

        });

        $(document).keypress(function(e)
        {
            if(e.which==13)
            {
                if((element).find('button[type=submit]').is(':disabled')==true)
                {
                    e.preventDefault();
                    return false;
                }
            }

        });

    };

})(jQuery);
// accordin js for the first one 

$('#parentHorizontalTab').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion
    width: 'auto', //auto or any width like 600px
    fit: true, // 100% fit in a container
    tabidentify: 'hor_1', // The tab groups identifier

});
$(".multiple-items").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});
 // Accordian JS
 $(".set > h2").on("click", function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
            .siblings(".content")
            .slideUp(200);
        $(".set > h2 i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
    } else {
        $(".set > h2 i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
        $(this)
            .find("i")
            .removeClass("fa-plus")
            .addClass("fa-minus");
        $(".set > h2").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
            .siblings(".content")
            .slideDown(200);
    }
});
// TILL HERE 


$(function () {
// Select all links with hashes
var header = $('.site-header').height();
// alert(header);
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - header
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const counters = document.querySelectorAll(".count-number");
        const speed = 200;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-count");
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    });
    $(".image-slider").slick({
        dots: true, // Show dots for navigation
        infinite: true, // Infinite loop mode
        speed: 500, // Transition speed
        slidesToShow: 4, // Show 4 images at a time
        slidesToScroll: 1, // Scroll 1 image at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay speed (in milliseconds)
        arrows: true, // Show arrows for navigation
        responsive: [
            {
                breakpoint: 1024, // For screen widths less than 1024px (tablet)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // For screen widths less than 768px (mobile)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // For screen widths less than 480px (small mobile)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});