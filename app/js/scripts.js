(function () {
    "use strict";

    $(document).ready(function () {

        // ========== MENU ==========

        $('#menu-trigger').click(function (e) {
            e.preventDefault();
            $('html, body').toggleClass('open');
        });



        // for (var i = 0; i < tabsArr.length; i++) {
        //
        //     // var tabsWidth = $(tabsArr[i]).outerWidth();
        //
        //     $(tabsArr[i]).click(function (e) {
        //         e.preventDefault();
        //
        //         var tabsIndex = $(this).index();
        //
        //         console.log(tabsArr);
        //         console.log(tabsIndex);
        //
        //         $(tabsArr).removeClass('active');
        //         $(this).addClass('active');
        //
        //     });
        // }

        // ========== SELECT ==========

        // ----- CHOSEN -----
        // $(".chosen-select").chosen({
        //     disable_search_threshold: 4,
        //     no_results_text: "Нічого не знайдено"
        // });

        // ----- SELECT2 -----
        // $('.select2-select').select2({
        //     placeholder: "Choose...",
        //     allowClear: true
        //     // dropdownParent: $('.select-select2-container'),
        //     // minimumResultsForSearch: Infinity
        // });

        // ========== SLIDER ==========

        var arrowLeft = "<div class='arrow left'><svg width=\"27px\" height=\"16px\" viewBox=\"0 0 27 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <g id=\"Pre-fin-Copy-2\" transform=\"translate(-592.000000, -721.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\"> <g id=\"noun_466311_cc-copy\" transform=\"translate(649.500000, 728.500000) scale(-1, 1) rotate(-90.000000) translate(-649.500000, -728.500000) translate(641.000000, 671.000000)\"> <polygon id=\"Shape\" points=\"14.0533134 104.213608 9.35128014 109.129313 9.35128014 88.5597291 6.64871986 88.5597291 6.64871986 109.129313 1.94668659 104.213608 0 106.100858 8 114.464491 16 106.100858\"></polygon> </g> </g> </g></svg></div>";

        var arrowRight = "<div class='arrow right'><svg width=\"27px\" height=\"17px\" viewBox=\"0 0 27 17\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <g id=\"Pre-fin-Copy-2\" transform=\"translate(-680.000000, -720.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\"> <g id=\"noun_466311_cc-copy\" transform=\"translate(649.500000, 728.500000) scale(-1, 1) rotate(-90.000000) translate(-649.500000, -728.500000) translate(641.000000, 671.000000)\"> <polygon id=\"Shape-Copy\" transform=\"translate(8.249795, 13.297414) scale(-1, 1) rotate(-180.000000) translate(-8.249795, -13.297414) \" points=\"14.3031081 15.9989117 9.60107486 20.9146165 9.60107486 0.345032821 6.89851459 0.345032821 6.89851459 20.9146165 2.19648132 15.9989117 0.249794726 17.8861615 8.24979473 26.2497947 16.2497947 17.8861615\"></polygon> </g> </g> </g></svg></div>";

        // ========== COLOR THIEF ==========

        var colorHeader;
        var colorSlider = $('.slider-color');

        var colorSet = function () {
            var imgSrc = $('.slider-color .slick-slide.slick-current.slick-active .img-color').attr('src');
            var imgObj = new Image();

            imgObj.src = imgSrc;

            var colorThief = new ColorThief();
            colorHeader = colorThief.getColor(imgObj);
        }

        colorSlider.on('init', colorSet);

        colorSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: arrowLeft,
            nextArrow: arrowRight,
            fade: true,
            speed: 0
        }).on('afterChange', colorSet);

        $('.link-color').hover(function () {
            $('header').css('background-color', 'rgb(' + colorHeader + ')')
        }, function () {
            $('header').css('background-color', '#a0b3c9')
        });

        // ----- SLICK SLIDER COUNTER -----
        // $('.slider-full').on('init reInit afterChange', function (event, slick, currentSlide) {
        //     var i = (currentSlide ? currentSlide : 0) + 1;
        //     $('.slider-counter').text(i + '/' + slick.slideCount);
        // });

        // ----- SLICK SLIDER -----


        // $(".slider-two").slick({
        //     dots: true,
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //     prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
        //     nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
        //     responsive: [
        //         {
        //             breakpoint: 991,
        //             settings: {
        //                 slidesToShow: 1,
        //                 slidesToScroll: 1
        //             }
        //         }
        //     ]
        // });

        $(".slider-four").slick({
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            prevArrow: arrowLeft,
            nextArrow: arrowRight,
            // responsive: [
            //     {
            //         breakpoint: 991,
            //         settings: {
            //             slidesToShow: 2,
            //             slidesToScroll: 2
            //         }
            //     },
            //     {
            //         breakpoint: 767,
            //         settings: {
            //             slidesToShow: 1,
            //             slidesToScroll: 1
            //         }
            //     }
            // ],
        });

        $('.slider-rows').on('init', function () {
            var slides = $('.slider-rows .slick-slide')


            if (slides.length > 0) {
                for (var i = 0; i < slides.length; i++) {
                    if (i === 0) {
                        $('.slider-rows-sync').append('<div class="slider-progress"></div>')
                    } else {
                        $('.slider-rows-sync').append('<div></div>')
                    }
                }
            }

        });

        $(".slider-rows").slick({
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: arrowLeft,
            nextArrow: arrowRight,
            rows: 2,
            initialSlide: 2,
            centerMode: true,
            asNavFor: '.slider-rows-sync',
        });

        $(".slider-rows-sync").slick({
            dots: false,
            slidesToShow: 8,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            rtl: true,
            rows: 1,
            asNavFor: '.slider-rows',
            centerMode: true,
            draggable: false,
            initialSlide: 2,
        });

        // ========== ACCORDION ==========
        // $('#accordion').rewAccordion();

        // ========== TABS ==========
        // $('#tabs').rewTabs();

        (function () {
            var tabsArr = $('.tabs-publication--ul li a');
            var tabsSlider = $('.tabs-publication--line');

            $(tabsArr).click(function (e) {
                e.preventDefault();

                var tabsIndex = $(tabsArr).index(this);
                var tabsLeft = 0;

                for (var i = 0; i < tabsIndex; i++) {
                    tabsLeft += $(tabsArr[i]).parent().outerWidth(true);
                }

                $(tabsArr).removeClass('active');
                $(this).addClass('active');
                $(tabsSlider).css('transform', 'translate3d(' + (tabsLeft - 8) + 'px,0,0)');

            });
        })();


        // ========== DATEPICKER ==========
        // $(".datepicker").flatpickr();

        // ========== SCROLLSPY ==========

        // ----- SCROLLING CLASS CHANGE -----
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $("nav.nav-index").removeClass("unscrolled");
            }
            else {
                $("nav.nav-index").addClass("unscrolled");
            }
        });

        // ----- ANCHOR LINKS SCROLLING -----
        // $(".smooth").click(function (e) {
        //     e.preventDefault();
        //     var id = $(this).attr("href"),
        //         top = $(id).offset().top - 70;
        //     $("body,html").animate({
        //         scrollTop: top
        //     }, 1500);
        // });
    });

// ========== !!! RESPONSIVE SCRIPTS !!! ===========

    $(window).on('load resize', function () {
        if (window.matchMedia("(max-width: 767px)").matches) {
            $('#nav-search').prependTo('#nav-panel');


            $('.dropdown-link').click(function (e) {
                e.preventDefault();
                $('.dropdown ul').removeClass('active');
                $(this).siblings('ul').addClass('active')
            });

            $('.dropdown-back a').click(function (e) {
                e.preventDefault();
                $(this).parent().parent().removeClass('active');
            })

        } else if (window.matchMedia("(min-width: 768px)").matches) {
            $('#nav-search').insertAfter('#nav-logo');

            $('.dropdown-link').click(function (e) {
                e.preventDefault();
            });

            $('.dropdown').hover(function () {
                $(this).children('ul').toggleClass('active')
            });
        }
    });

})();


