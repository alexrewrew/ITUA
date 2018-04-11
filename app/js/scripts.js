(function () {
    "use strict";

    var DOMs = {

        menuBurger : $('#menu-trigger'),
        menuSearch : $('#nav-search'),
        menuLogo : $('#nav-logo'),
        menuPanel : $('#nav-panel'),
        menuIndex : $("nav.nav-index"),
        linkColor : $('.link-color'),

        sliderArrowLeft : "<div class='arrow left'><svg width=\"27px\" height=\"16px\" viewBox=\"0 0 27 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <g id=\"Pre-fin-Copy-2\" transform=\"translate(-592.000000, -721.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\"> <g id=\"noun_466311_cc-copy\" transform=\"translate(649.500000, 728.500000) scale(-1, 1) rotate(-90.000000) translate(-649.500000, -728.500000) translate(641.000000, 671.000000)\"> <polygon id=\"Shape\" points=\"14.0533134 104.213608 9.35128014 109.129313 9.35128014 88.5597291 6.64871986 88.5597291 6.64871986 109.129313 1.94668659 104.213608 0 106.100858 8 114.464491 16 106.100858\"></polygon> </g> </g> </g></svg></div>",
        sliderArrowRight : "<div class='arrow right'><svg width=\"27px\" height=\"17px\" viewBox=\"0 0 27 17\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <g id=\"Pre-fin-Copy-2\" transform=\"translate(-680.000000, -720.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\"> <g id=\"noun_466311_cc-copy\" transform=\"translate(649.500000, 728.500000) scale(-1, 1) rotate(-90.000000) translate(-649.500000, -728.500000) translate(641.000000, 671.000000)\"> <polygon id=\"Shape-Copy\" transform=\"translate(8.249795, 13.297414) scale(-1, 1) rotate(-180.000000) translate(-8.249795, -13.297414) \" points=\"14.3031081 15.9989117 9.60107486 20.9146165 9.60107486 0.345032821 6.89851459 0.345032821 6.89851459 20.9146165 2.19648132 15.9989117 0.249794726 17.8861615 8.24979473 26.2497947 16.2497947 17.8861615\"></polygon> </g> </g> </g></svg></div>",

        sliderColor : $('.slider-color'), //slider for colors
        sliderCalendar : $('.slider-calendar'), //slider of events


        sliderMember : $(".slider-member"), //slider of members
        sliderMemberSync : $(".slider-member-sync"), //slider of members

        sliderAbout : $(".slider-about"), //slider of members
        sliderAboutSync : $(".slider-about-sync"), //slider of members

        sliderPartners : $('.slider-partners'), //slider of partners
        sliderPartnersSync : $('.slider-partners-sync'), //slider of partners sync

        sliderTabs : $('.tabs-publication--ul'),

        sliderPublications : $('.row-publications'),

        sliderMiddle : $('.slider-middle'),

        dropdownLink : $('.dropdown-link'),
        dropdownList : $('.dropdown ul'),
        dropdownBack : $('.dropdown-back a'),
        dropdown : $('.dropdown'),

        tabsArr : $('.tabs-publication--ul li a'),
        tabsSlider : $('.tabs-publication--line')

    };

    $(document).ready(function () {

        // ========== MENU ==========

        DOMs.menuBurger.click(function (e) {
            e.preventDefault();
            $('html, body').toggleClass('open');
        });

        var colorHeader;

        var colorSet = function () {
            var imgSrc = $('.slider-color .slick-slide.slick-current.slick-active .img-color').attr('src');
            var imgObj = new Image();

            imgObj.src = imgSrc;

            var colorThief = new ColorThief();
            colorHeader = colorThief.getColor(imgObj);
        };


        // SLIDER OF COLORS
        DOMs.sliderColor.on('init', colorSet);

        DOMs.sliderColor.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
            fade: true,
            speed: 0
        }).on('afterChange', colorSet);

        DOMs.linkColor.hover(function () {
            $('header').css('background-color', 'rgb(' + colorHeader + ')')
        }, function () {
            $('header').css('background-color', '#a0b3c9')
        });

        // SLIDER OF MEMBERS
        DOMs.sliderCalendar.slick({
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,

            initialSlide: 2,
            centerMode: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerMode: false
                    }
                },
                {
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });

        // SLIDER OF EVENTS
        DOMs.sliderMember.on('init', function () {
            var slides = $('.slider-calendar .slick-slide');

            if (slides.length > 0) {
                for (var i = 0; i < slides.length; i++) {
                    if (i === 0) {
                        DOMs.sliderMemberSync.append('<div class="slider-progress"></div>')
                    } else {
                        DOMs.sliderMemberSync.append('<div></div>')
                    }
                }
            }

        });

        // SLIDER MEMBER
        DOMs.sliderMember.slick({
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
            dots: false,
            slidesToScroll: 1,
            infinite: false,
            rows: 2,
            initialSlide: 2,
            centerMode: true,
            asNavFor: DOMs.sliderMemberSync,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        initialSlide: 1
                    }
                }
            ]
        });

        DOMs.sliderMemberSync.slick({
            dots: false,
            slidesToShow: 8,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            rtl: true,
            rows: 1,
            asNavFor: DOMs.sliderMember,
            centerMode: true,
            draggable: false,
            initialSlide: 2,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        initialSlide: 1
                    }
                }
            ]
        });

        // SLIDER PARTNERS
        DOMs.sliderPartners.on('init', function () {
            var slides = $('.slider-partners .slick-slide');

            if (slides.length > 0) {
                for (var i = 0; i < slides.length; i++) {
                    if (i === 0) {
                        DOMs.sliderPartnersSync.append('<div class="slider-progress"></div>')
                    } else {
                        DOMs.sliderPartnersSync.append('<div></div>')
                    }
                }
            }

        });

        DOMs.sliderPartners.slick({
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            initialSlide: 2,
            centerMode: true,
            asNavFor: DOMs.sliderPartnersSync,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        initialSlide: 1
                    }
                }
            ]
        });

        DOMs.sliderPartnersSync.slick({
            dots: false,
            slidesToShow: 8,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            rtl: true,
            asNavFor: DOMs.sliderPartners,
            centerMode: true,
            draggable: false,
            initialSlide: 2

        });

        //SLIDER HEADER
        DOMs.sliderMiddle.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
        });

        // SLIDER ABOUT
        DOMs.sliderAbout.on('init', function () {
            var slides = $('.slider-about .slick-slide');

            if (slides.length > 0) {
                for (var i = 0; i < slides.length; i++) {
                    if (i === 0) {
                        DOMs.sliderAboutSync.append('<div class="slider-progress"></div>')
                    } else {
                        DOMs.sliderAboutSync.append('<div></div>')
                    }
                }
            }

        });

        DOMs.sliderAbout.slick({
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            initialSlide: 1,
            centerMode: true,
            asNavFor: DOMs.sliderAboutSync,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        centerMode: false
                    }
                }
            ]
        });

        DOMs.sliderAboutSync.slick({
            dots: false,
            slidesToShow: 8,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            rtl: true,
            asNavFor: DOMs.sliderAbout,
            centerMode: true,
            draggable: false,
            initialSlide: 2

        });

        // ========== ACCORDION ==========
        // $('#accordion').rewAccordion();

        // ========== TABS ==========
        // $('#tabs').rewTabs();

        (function () {
            DOMs.tabsArr.click(function (e) {
                e.preventDefault();

                var tabsIndex = DOMs.tabsArr.index(this);
                var tabsLeft = 0;

                for (var i = 0; i < tabsIndex; i++) {
                    tabsLeft += $(DOMs.tabsArr[i]).parent().outerWidth(true);
                }

                DOMs.tabsArr.removeClass('active');
                $(this).addClass('active');

                DOMs.tabsSlider.css('transform', 'translate3d(' + (tabsLeft - 8) + 'px,0,0)');
            });
        })();


        // ========== DATEPICKER ==========
        // $(".datepicker").flatpickr();

        // ========== SCROLLSPY ==========

        // ----- SCROLLING CLASS CHANGE -----
        $(window).on('scroll load', function () {
            if ($(this).scrollTop() > 20) {
                DOMs.menuIndex.removeClass("unscrolled");
            }
            else {
                DOMs.menuIndex.addClass("unscrolled");
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
    });

// ========== !!! RESPONSIVE SCRIPTS !!! ===========

    $(window).on('load resize', function () {
        if (window.matchMedia("(max-width: 767px)").matches) {
            DOMs.menuSearch.prependTo(DOMs.menuPanel);


            DOMs.dropdownLink.click(function (e) {
                e.preventDefault();
                DOMs.dropdownList.removeClass('active');
                $(this).siblings('ul').addClass('active')
            });

            DOMs.dropdownBack.click(function (e) {
                e.preventDefault();
                $(this).parent().parent().removeClass('active');
            });

            DOMs.sliderTabs.slick({
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                // centerMode: true,
                variableWidth: true,
                // initialSlide: 0
            });

            DOMs.sliderPublications.slick({
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                // centerMode: true,
                variableWidth: true,
                // initialSlide: 0
            });

        } else if (window.matchMedia("(min-width: 768px)").matches) {
            DOMs.menuSearch.insertAfter(DOMs.menuLogo);

            DOMs.dropdownLink.click(function (e) {
                e.preventDefault();
            });

            DOMs.dropdown.hover(function () {
                $(this).children('ul').toggleClass('active')
            });
        }
    });

})();


