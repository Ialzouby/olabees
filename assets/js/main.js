(function ($) {
    "use strict";   

    /*--
		Header Sticky
    -----------------------------------*/
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll <= 0) {
            $(".header-sticky, .header-sticky-02, .header-sticky-03, header-sticky-4, .header-sticky-06").removeClass("sticky");
            $(".header-sticky .header-logo img").attr("src", "assets/images/logo-white.svg");
        } else{
            $(".header-sticky, .header-sticky-02, .header-sticky-03, header-sticky-4, .header-sticky-06").addClass("sticky");
            $(".header-sticky .header-logo img").attr("src", "assets/images/logo.svg");
        }
	});
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll <= 130) {
            $(".header-sticky-05").removeClass("sticky");
            // $(".header-sticky .header-logo img").attr("src", "assets/images/logo-white.svg");
        } else{
            $(".header-sticky-05").addClass("sticky");
            // $(".header-sticky .header-logo img").attr("src", "assets/images/logo.svg");
        }
	});

    /*--
		Sub menu viewport position
    -----------------------------------*/
    var windows = $(window);
    if ($(".header-primary-menu>li").find('.sub-menu').length) {
        var elm = $(".header-primary-menu>li").find('.sub-menu');
        
        elm.each(function(){
            var off = $(this).offset();
            var l = off.left;
            var w = $(this).width();
            var docH = windows.height();
            var docW = windows.width() - 10;
            var isEntirelyVisible = (l + w <= docW);

            if (!isEntirelyVisible) {
                $(this).addClass('left');
            }
        });
    }
 
    /*--
		Search 
    -----------------------------------*/
    $(".search-open").click(function(){
        $(".search-popup").addClass('open');
    }); 
    $(".search-popup__close").click(function(){
        $(".search-popup").removeClass('open');
    });

    /*--
        Off Canvas Menu
    -----------------------------------*/
    /*Variables*/
    var $offCanvasNav = $('.mobile-primary-menu'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu, .mega-menu, .menu-item ');
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active-expand');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active-expand');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.closest('li').siblings('li').removeClass('active-expand');
                $this.siblings('ul').slideDown();
            }
        }
    });
    $( ".sub-menu, .mega-menu, .menu-item" ).parent( "li" ).addClass( "menu-item-has-children" );
    $( ".mega-menu" ).parent( "li" ).addClass( "mega-menu-children" );

    /*--
        Slider Active
    -----------------------------------*/
    var swiper = new Swiper('.slider-active .swiper', {
        // speed: 600,
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: ".slider-active .swiper-button-next",
            prevEl: ".slider-active .swiper-button-prev",
        },
        pagination: {
            el: ".slider-active .swiper-pagination",
            clickable: true,
        },
    });

    /*--
        Slider Active 02
    -----------------------------------*/
    var swiper = new Swiper(".hot-product-content-active .swiper", {
        speed: 1000,
        thumbs: {
            swiper2: swiper2,
        },
    });
    var swiper2 = new Swiper(".hot-product-images-active .swiper", {
        speed: 1000,
        navigation: {
          nextEl: ".hot-product-images-active .swiper-button-next",
          prevEl: ".hot-product-images-active .swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
    });

    /*--
        Tooltip
    -----------------------------------*/
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-tooltip="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    /*--
        Brand Active
    -----------------------------------*/
    var swiper = new Swiper('.brand-active .swiper', {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".brand-active .swiper-button-next",
            prevEl: ".brand-active .swiper-button-prev",
        },
        pagination: {
            el: ".brand-active .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            }
        }
    });

    /*--
    Brand Two Active
    -----------------------------------*/
    var swiper = new Swiper('.brand-active-two .swiper', {
        slidesPerView: 5,
        loop:true,
        observer: true,
        observeParents: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    /*--
        Instagram Active
    -----------------------------------*/
    var swiper = new Swiper('.instagram-active .swiper', {
        slidesPerView: 5,
        spaceBetween: 10,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".instagram-active .swiper-button-next",
            prevEl: ".instagram-active .swiper-button-prev",
        },
        pagination: {
            el: ".instagram-active .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            1300: {
                slidesPerView: 3,
            }
        }
    });

    /*--
        Hot Product
    -----------------------------------*/
    $(".slider-active-02 .swiper").each(function(index, element) {
        var $this = $(this);
        var titleArray = [];
        var imageArray = [];

        // 1.1. nested loop
        $this
        .children()
        .children()
        .each(function(index, element) {
        console.log("wo");
            titleArray.push($(this).data("title"));
            imageArray.push($(this).data("image"));
        });
      
        /* create swiper objects */
        $this.addClass("instance-" + index);
        var swiper = new Swiper(".instance-" + index, {            
            pagination: {
                el: ".slider-active-02 .swiper-pagination",
                clickable: true,
                renderBullet: function(index, className) {
                    return (
                        '<div class="' + className + '">' + 
                            '<img class="image" src=" '+ imageArray[index] +' ">' +
                            '<h5 class="title">' + titleArray[index] + '</h5>'
                        + "</div>"
                    );
                }
            }
        });
    });

    /*--
        Testimonial Active
    -----------------------------------*/
    var swiper = new Swiper('.testimonial-active .swiper', {
        speed: 600,
        loop: true,
        navigation: {
            nextEl: ".testimonial-active .swiper-button-next",
            prevEl: ".testimonial-active .swiper-button-prev",
        },
        pagination: {
            el: ".testimonial-active .swiper-pagination",
            clickable: true,
        },
    });

    /*--
    Testimonial Active Two
    -----------------------------------*/
    var swiper = new Swiper('.testimonial-active-two .swiper', {
        speed: 600,
        loop: true,
        navigation: false,
        pagination: false,
        spaceBetween: 20,
        slidesPerView: 3,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });

    /*--
        Product Active
    -----------------------------------*/
    var swiper = new Swiper ('.product-active .swiper', {
        spaceBetween: 30,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".product-active .swiper-button-next",
            prevEl: ".product-active .swiper-button-prev"
        },
        pagination: {
            el: ".product-active .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    /*--
        Product Active Two
    -----------------------------------*/
    var swiper = new Swiper ('.product-active-two .swiper', {
        spaceBetween: 20,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".product-active-two .swiper-button-next",
            prevEl: ".product-active-two .swiper-button-prev",
        },
        pagination: {
            el: ".product-active-two .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            }
        }
    });

    /*--
        Product Active Three
    -----------------------------------*/
    var swiper = new Swiper ('.product-active-three .swiper', {
        spaceBetween: 20,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".product-active-three .swiper-button-next",
            prevEl: ".product-active-three .swiper-button-prev",
        },
        pagination: {
            el: ".product-active-three .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            }
        }
    });

    /*--
        Product Active Four
    -----------------------------------*/
    var swiper = new Swiper ('.product-active-four .swiper', {
        spaceBetween:70,
        speed: 1000,
        loop: true,
        navigation: false,
        pagination: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1500: {
                slidesPerView: 3,
                spaceBetween: 70
            }
        }
    });

    /*--
        Featured Product Active
    -----------------------------------*/
    var swiper = new Swiper('.featured-product-active .swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        loop: true,
        pagination: {
            el: ".featured-product-active .swiper-pagination",
            clickable: true,
        },
    });

    /*--
        Courses Tab Active
    -----------------------------------*/
    var swiper = new Swiper('.course-tab-active .swiper', {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".course-tab-active .swiper-button-next",
            prevEl: ".course-tab-active .swiper-button-prev",
        },
        pagination: {
            el: ".course-tab-active .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    /*--
        Blog One Active
    -----------------------------------*/
    var swiper = new Swiper ('.blog-active .swiper', {
        spaceBetween:70,
        speed: 1000,
        loop: true,
        navigation: false,
        pagination: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1500: {
                slidesPerView: 3,
                spaceBetween: 70
            }
        }
    });

    /*--
        Back To Top
    -----------------------------------*/
    var toTopBtn = document.querySelectorAll('.backBtn');
    toTopBtn.forEach( function(btn){

        btn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
        
        //hide/show button on scroll up/down
        var scrollPos = 0;
    
        window.addEventListener('scroll', function () {
    
            // detects new state and compares it with the new one
            if ((document.body.getBoundingClientRect()).top > scrollPos) {
                btn.style.display = "none";
    
            } else {
                btn.style.display = "block";
            }
            // saves the new position for iteration.
            scrollPos = (document.body.getBoundingClientRect()).top;
        });

    });

    /*--
        Custom script to call Background
        Image & Color from html data attribute
    -----------------------------------*/
    $('[data-bg-image]').each(function () {
    var $this = $(this),
        $image = $this.data('bg-image');
    $this.css('background-image', 'url(' + $image + ')');
    });
    $('[data-bg-color]').each(function () {
        var $this = $(this),
            $color = $this.data('bg-color');
        $this.css('background-color', $color);
    });

    /*--
        Custom script to MouseMove Animation
    -----------------------------------*/
    let moveThingsX= $('.movex');
    let moveThingsY= $('.movey');
    let moveThingsAll= $('.moveall');
    let layer= $('.movearea');
    layer.mousemove(function(e){
    let ivalueX= (e.pageX * -1 / 30);
    let ivalueY= (e.pageY * -1 / 30);
    let cvalueX= (e.pageX * -1 / 40);
    let cvalueY= (e.pageY * -1 / 60);
    moveThingsX.css('transform', 'translate3d('+ivalueX+'px, 0, 0)');
    moveThingsY.css('transform', 'translate3d('+ivalueY+'px, 0, 0)');
    moveThingsAll.css('transform', 'translate3d('+ivalueX+'px, '+ivalueY+'px, 0)');
    });

    /*----------------------------------------*/
    /*  Countdown
    /*----------------------------------------*/
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
          $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown_time">%D</span><span class="single-countdown_text">Days</span></div><div class="single-countdown"><span class="single-countdown_time">%H</span><span class="single-countdown_text">Hours</span></div><div class="single-countdown"><span class="single-countdown_time">%M</span><span class="single-countdown_text">Mins</span></div><div class="single-countdown"><span class="single-countdown_time">%S</span><span class="single-countdown_text">Secs</span></div>'));
        });
    });

    /*----------------------------------------*/
    /*  Price Range
    /*----------------------------------------*/
    var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 20,
        to: 980,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;
        
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);	
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
        
        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
        
        instance.update({
            to: val
        });
    });

    /*----------------------------------------*/
    /*  Single Product Carousel
    /*----------------------------------------*/
    /*-- Single product with Thumbnail Vertical -- */

    var zoomThumb = new Swiper('.product-thumb-vertical', {
        spaceBetween: 25,
        slidesPerView: 4,
        direction: 'vertical',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            // when window width is >= 575px
            575: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            // when window width is >= 767px
            767: {
                slidesPerView: 4,
                spaceBetween: 18,
            },
            // when window width is >= 991px
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4,
            }
        }
    });
    
    var swiper = new Swiper('.single-product-vertical-tab', {
        slidesPerView: 1,
        spaceBetween: 60,
        loop: true,
        navigation: {
            nextEl: '.single-product-vertical-tab .swiper-button-vertical-next',
            prevEl: '.single-product-vertical-tab .swiper-button-vertical-prev',
        },
        thumbs: {
            swiper: zoomThumb
        }
    });
    /*----------------------------------------*/
	/*  Lightgallery Active
	/*----------------------------------------*/
    lightGallery(document.getElementById('popup-gallery'), {
        speed: 500,
    });
    /*----------------------------------------*/
	/*  Magnific-Popup Active
	/*----------------------------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    /*----------------------------------------*/
	/*  Cart Plus Minus Button
	/*----------------------------------------*/
	$('.cart-plus-minus').append(
		'<div class="dec qtybutton">-</div><input class="cart-plus-minus-box" value="1" type="text"><div class="inc qtybutton">+</div>'
	);
	$('.qtybutton').on('click', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		$button.parent().find('input').val(newVal);
	});
    /*----------------------------------------*/
	/*  Shipping Form Toggle
	/*----------------------------------------*/
    if($('[data-toggle-shipping]').length) {
        const $shippingToggle = $('[data-toggle-shipping]'),
            $shippingToggleTarget = $($shippingToggle[0].dataset.toggleShipping),
            $shippingShowHide = function() {
                if( $shippingToggle[0].checked ) {
                    $shippingToggleTarget.slideDown();
                } else {
                    $shippingToggleTarget.slideUp();
                }
            }
        $shippingShowHide()
        $shippingToggle.on('change', function(){$shippingShowHide()});
    }
    /*----------------------------------------*/
	/*  Payment Method Toggle
	/*----------------------------------------*/
    if($('input[type="radio"][name="payment-method"]').length) {
        const $paymentToggle = $('input[type="radio"][name="payment-method"]'),
            $paymentShowHide = function() {
                $paymentToggle.each(function() {
                    const $this = $(this),
                        $thisContent = $this.siblings('p')
                    if( $this[0].checked ) {
                        $thisContent.slideDown();
                        $this.parent().siblings().find('p').slideUp()
                    }
                })
            }
        $paymentShowHide()
        $paymentToggle.on('change', function(){$paymentShowHide()});
    }

    /*----------------------------------------*/
    /*  Scroll to top
    /*----------------------------------------*/
    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
        $lastScrollTop = 0,
        $window = $(window);
        //   $scrollUp.removeClass('show');
        $window.on('scroll', function () {
        var st = $(this).scrollTop();
        if (st > $lastScrollTop) {
            $scrollUp.removeClass('show');
        } else {
            if ($window.scrollTop() > 500) {
                $scrollUp.addClass('show');
            } else {
                $scrollUp.removeClass('show');
            }
        }
        $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
        $('html, body').animate({scrollTop: 0}, 600);
        evt.preventDefault();
        });
    }
    scrollToTop();
    
    /*-- 
    Scroll Counterup
    ------------------------------------*/
    const scrollCounterup = function(){
        document.addEventListener("DOMContentLoaded", function() {
            const elements = document.querySelectorAll(".scroll-counter");
            elements.forEach(function(item) {
                item.counterAlreadyFired = false
                item.counterSpeed = item.getAttribute("data-counter-time") / 45
                item.counterTarget = +item.innerText
                item.counterCount = 0
                item.counterStep = item.counterTarget / item.counterSpeed
                item.updateCounter = function() {
                    item.counterCount = item.counterCount + item.counterStep
                    item.innerText = Math.ceil(item.counterCount)
            
                    if (item.counterCount < item.counterTarget) {
                    setTimeout(item.updateCounter, item.counterSpeed)
                    } else {
                    item.innerText = item.counterTarget
                    }
                }
            })
            const isElementVisible = function isElementVisible(el) {
                const scroll = window.scrollY || window.pageYOffset
                const boundsTop = el.getBoundingClientRect().top + scroll
                const viewport = {
                    top: scroll,
                    bottom: scroll + window.innerHeight,
                }
                const bounds = {
                    top: boundsTop,
                    bottom: boundsTop + el.clientHeight,
                }
                return (
                    (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) || 
                    (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
                )
            }
            const handleScroll = function handleScroll() {
                elements.forEach(function(item, id) {
                    if (true === item.counterAlreadyFired) return
                    if (!isElementVisible(item)) return
                    item.updateCounter()
                    item.counterAlreadyFired = true
                })
            }
            window.addEventListener("scroll", handleScroll)
        });
    };
    scrollCounterup()

})(jQuery);


