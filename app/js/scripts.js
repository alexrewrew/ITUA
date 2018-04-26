(function () {
    "use strict";

    var DOMs = {

        body: $('body'),

        menuBurger: $('#menu-trigger'),
        menuSearch: $('#nav-search'),
        menuLogo: $('#nav-logo'),
        menuPanel: $('#nav-panel'),
        menuIndex: $("nav.nav-index"),
        linkColor: $('.link-color'),

        sliderArrowLeft: "<div class='arrow left'><svg width=\"27px\" height=\"16px\" viewBox=\"0 0 27 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <g id=\"Pre-fin-Copy-2\" transform=\"translate(-592.000000, -721.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\"> <g id=\"noun_466311_cc-copy\" transform=\"translate(649.500000, 728.500000) scale(-1, 1) rotate(-90.000000) translate(-649.500000, -728.500000) translate(641.000000, 671.000000)\"> <polygon id=\"Shape\" points=\"14.0533134 104.213608 9.35128014 109.129313 9.35128014 88.5597291 6.64871986 88.5597291 6.64871986 109.129313 1.94668659 104.213608 0 106.100858 8 114.464491 16 106.100858\"></polygon> </g> </g> </g></svg></div>",
        sliderArrowRight: "<div class='arrow right'><svg width=\"27px\" height=\"17px\" viewBox=\"0 0 27 17\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <g id=\"Pre-fin-Copy-2\" transform=\"translate(-680.000000, -720.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\"> <g id=\"noun_466311_cc-copy\" transform=\"translate(649.500000, 728.500000) scale(-1, 1) rotate(-90.000000) translate(-649.500000, -728.500000) translate(641.000000, 671.000000)\"> <polygon id=\"Shape-Copy\" transform=\"translate(8.249795, 13.297414) scale(-1, 1) rotate(-180.000000) translate(-8.249795, -13.297414) \" points=\"14.3031081 15.9989117 9.60107486 20.9146165 9.60107486 0.345032821 6.89851459 0.345032821 6.89851459 20.9146165 2.19648132 15.9989117 0.249794726 17.8861615 8.24979473 26.2497947 16.2497947 17.8861615\"></polygon> </g> </g> </g></svg></div>",

        sliderColor: $('.slider-color'), //slider for colors
        sliderCalendar: $('.slider-calendar'), //slider of events

        sliderEventsYear: $('.slider-events-year-header'),

        sliderMember: $(".slider-member"), //slider of members
        sliderMemberSync: $(".slider-progressbar-member .slider-progressbar--track"), //slider of members

        sliderAbout: $(".slider-about"), //slider of abouts
        sliderAboutSync: $(".slider-progressbar-about .slider-progressbar--track"), //slider of abouts

        sliderPartners: $('.slider-partners'), //slider of partners
        sliderPartnersSync: $(".slider-progressbar-partners .slider-progressbar--track"), //slider of partners sync

        sliderProject : $('.slider-project'),
        sliderProjectSync : $(".slider-progressbar-project .slider-progressbar--track"),

        sliderTabs: $('.tabs-publication--ul'),
        sliderPublications: $('.row-publications'),
        sliderReports: $('.row-reports'),
        sliderMiddle: $('.slider-middle'),
        sliderCommittees: $('.slider-tablist'),
        sliderFilter: $('.slider-tablist-filter'),

        dropdownLink: $('.dropdown-link'),
        dropdownList: $('.dropdown ul'),
        dropdownBack: $('.dropdown-back a'),
        dropdown: $('.dropdown'),

        tabsArr: $('.tabs-publication--ul li a'),
        tabsSlider: $('.tabs-publication--line'),

        tabsFilterLink: $('.ul-tablist-filter li a'),
        tabsFilterSlider: $('.ul-tablist-filter--slider')

    };

    $(document).ready(function () {


        // ========== MENU ==========

        DOMs.menuBurger.click(function (e) {
            e.preventDefault();
            $('html, body').toggleClass('open');
        });

        // SLIDER PROGRESSBAR

        var sliderProgressbar = function (nextSlide, slick, sync) {
            var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
            sync.css('width', calc + '%')
        };

        // SLIDER OF COLORS
        var colorHeader;

        var colorSet = function () {
            var imgSrc = $('.slider-color .slick-slide.slick-current.slick-active .img-color').attr('src');
            var imgObj = new Image();

            imgObj.src = imgSrc;

            var colorThief = new ColorThief();
            colorHeader = colorThief.getColor(imgObj);
        };

        DOMs.sliderColor.on('init', colorSet);

        DOMs.sliderColor.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
            fade: true,
            speed: 0,
        }).on('afterChange', colorSet);

        DOMs.linkColor.hover(function () {
            $('header').css('background-color', 'rgb(' + colorHeader + ')')
        }, function () {
            $('header').css('background-color', '#a0b3c9')
        });

        // SLIDER OF CALENDAR
        DOMs.sliderCalendar.slick({
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
            dots: false,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,
            speed: 250
        });

        // SLIDER OF EVENTS YEAR
        DOMs.sliderEventsYear.slick({
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
            dots: false,
            slidesToScroll: 1,
            infinite: true,
            speed: 250
        });

        // SLIDER MEMBER
        DOMs.sliderMember.slick({
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
            dots: false,
            infinite: false,
            rows: 2,
            variableWidth: true,
            speed: 250
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            sliderProgressbar(nextSlide, slick, DOMs.sliderMemberSync);
        });


        // SLIDER PARTNERS
        DOMs.sliderPartners.slick({
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
            dots: false,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,
            speed: 250
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            sliderProgressbar(nextSlide, slick, DOMs.sliderPartnersSync);
        });

        // //SLIDER HEADER
        DOMs.sliderMiddle.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            speed: 250,
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight
        });

        // SLIDER ABOUT
        DOMs.sliderAbout.slick({
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
            dots: false,
            slidesToScroll: 1,
            infinite: false,
            speed: 250,
            variableWidth: true
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            sliderProgressbar(nextSlide, slick, DOMs.sliderAboutSync);
        });

        // SLIDER PROJECT
        DOMs.sliderProject.slick({
            prevArrow: DOMs.sliderArrowLeft,
            nextArrow: DOMs.sliderArrowRight,
            dots: false,
            slidesToScroll: 1,
            infinite: false,
            speed: 250,
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            sliderProgressbar(nextSlide, slick, DOMs.sliderProjectSync);
        });

        //  SLIDER REPORTS
        DOMs.sliderReports.slick({
            dots: false,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            variableWidth: true,
            speed: 250,
            responsive: [
                {
                    breakpoint: 40000,
                    settings: "unslick"
                },
                {
                    breakpoint: 767,
                    setting: {
                        dots: false,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                        variableWidth: true
                    }
                }
            ]
        });

        DOMs.sliderTabs.slick({
            dots: false,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            variableWidth: true,
            speed: 250,
            responsive: [
                {
                    breakpoint: 40000,
                    settings: "unslick"
                },
                {
                    breakpoint: 767,
                    setting: {
                        dots: false,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                        variableWidth: true
                    }
                }
            ]
        });

        DOMs.sliderPublications.slick({
            dots: false,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            variableWidth: true,
            speed: 250,
            responsive: [
                {
                    breakpoint: 40000,
                    settings: "unslick"
                },
                {
                    breakpoint: 767,
                    setting: {
                        dots: false,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                        variableWidth: true
                    }
                }
            ]
        });

        DOMs.sliderCommittees.slick({
            dots: false,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            variableWidth: true,
            speed: 250,
            responsive: [
                {
                    breakpoint: 40000,
                    settings: "unslick"
                },
                {
                    breakpoint: 767,
                    setting: {
                        dots: false,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                        variableWidth: true
                    }
                }
            ]
        });
        DOMs.sliderFilter.slick({
            dots: false,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            variableWidth: true,
            speed: 250,
            responsive: [
                {
                    breakpoint: 40000,
                    settings: "unslick"
                },
                {
                    breakpoint: 767,
                    setting: {
                        dots: false,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                        variableWidth: true
                    }
                }
            ]
        });

        // ========== ACCORDION ==========
        // $('#accordion').rewAccordion();

        // ========== TABS ==========
        // $('#tabs').rewTabs();


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
        $(".chosen-select").chosen({
            disable_search_threshold: 4000,
            no_results_text: "Нічого не знайдено"
        });

        // ----- SELECT2 -----
        $('.select2-select').select2({
            placeholder: "Оберіть компанію",
            allowClear: true
        //     // dropdownParent: $('.select-select2-container'),
        //     // minimumResultsForSearch: Infinity
        });

        // ========== TABS PUBLICATIONS ==========
        (function () {
            $(DOMs.tabsArr).click(function (e) {
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

        // ========== TABS FILTER ==========
        (function () {
            var tabsLinkWidth = 100 / DOMs.tabsFilterLink.length;
            var tabsFilterLeft = 0;

            var tabsFilterIndex, tabsFilterTransform;

            var tabsFilterDetectActive = function () {
                tabsFilterLeft = 0;
                for (var i = 0; i < DOMs.tabsFilterLink.length; i++) {
                    if ($(DOMs.tabsFilterLink[i]).hasClass('active')) {

                        for (var j = 0; j < i; j++) {
                            tabsFilterLeft += $(DOMs.tabsFilterLink[i]).parent().outerWidth(true);
                        }
                        break;
                    }
                }


                DOMs.tabsFilterSlider.css({
                    "width": "calc(" + tabsLinkWidth + "% + 1px",
                    "transform": 'translate3d(' + tabsFilterLeft + 'px,0,0)',
                });

            };

            tabsFilterDetectActive();

            DOMs.tabsFilterLink.hover(function () {

                tabsFilterIndex = DOMs.tabsFilterLink.index(this);

                tabsFilterTransform = 0;

                for (var i = 0; i < tabsFilterIndex; i++) {
                    tabsFilterTransform += $(DOMs.tabsFilterLink[i]).parent().outerWidth(true);
                }
                DOMs.tabsFilterSlider.css({
                    'transform': 'translate3d(' + tabsFilterTransform + 'px,0,0)',
                    'box-shadow': '0 10px 30px 0 rgba(24, 111, 240, 0.5)'
                });

                $('.ul-tablist-filter li a.active').addClass('unhover');

            }, function () {

                $('.ul-tablist-filter li a.active').removeClass('unhover');

                DOMs.tabsFilterSlider.css({
                    "transform": 'translate3d(' + tabsFilterLeft + 'px,0,0)',
                    'box-shadow': 'none'
                });
            });


            DOMs.tabsFilterLink.click(function (e) {
                e.preventDefault();
                tabsFilterIndex = DOMs.tabsFilterLink.index(this);

                $('.ul-tablist-filter li a.active').removeClass('unhover');

                DOMs.tabsFilterLink.removeClass('active');
                $(this).addClass('active');

                tabsFilterDetectActive();
            });

        })();


        // BOWSER
        if (bowser.firefox) {
            DOMs.body.addClass('brow-firefox');
        }
        if (bowser.safari) {
            DOMs.body.addClass('brow-safari');
        }
        if (bowser.msie) {
            DOMs.body.addClass('brow-msie');
        }
        if (bowser.msedge) {
            DOMs.body.addClass('brow-msedge');
        }


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


