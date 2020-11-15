$(window).on('load', function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('ios');
	} else {
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});

function viewport() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return {
		width: e[a + 'Width'],
		height: e[a + 'Height']
	}
};


$(function () {

	var y_offsetWhenScrollDisabled = 0,
		offset = 0;

	$(window).scroll(function () {
		y_offsetWhenScrollDisabled = $(window).scrollTop();
	});

	function lockScroll() {
		offset = y_offsetWhenScrollDisabled;
		$('html').addClass('scrollDisabled');
		$('html').css('margin-top', -y_offsetWhenScrollDisabled);
	}

	function unlockScroll() {
		$('html').removeClass('scrollDisabled');
		$('html').css('margin-top', '');
		$('html, body').animate({
			scrollTop: offset
		}, 0);
	}

	if ($('.js-cards-slider').length) {
		$('.js-cards-slider').slick({
			dots: true,
			infinite: true,
			arrows: false,
			speed: 200,
			slidesToShow: 4,
			slidesToScroll: 2,
			swipeToSlide: true,
			customPaging: function (slider, i) {
				return '<span class="slider-dot"></span>';
			},
			responsive: [{
					breakpoint: 1279,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 520,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});
	};


	if ($('.js-profile-main-slider').length) {
		$('.js-profile-main-slider').slick({
			dots: false,
			infinite: true,
			arrows: false,
			speed: 200,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipeToSlide: false,
			swipe: false,
			fade: true,
			asNavFor: '.js-profile-slider'
		});

		$('.js-profile-slider').slick({
			dots: false,
			infinite: true,
			arrows: true,
			speed: 200,
			slidesToShow: 4,
			slidesToScroll: 1,
			swipeToSlide: true,
			focusOnSelect: true,
			prevArrow: $('.profile__arrow_prev'),
			nextArrow: $('.profile__arrow_next'),
			asNavFor: '.js-profile-main-slider',
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 520,
					settings: {
						slidesToShow: 3,
					}
				},
			]
		});
	};



	if ($('.js-team-slider').length) {
		$('.js-team-slider').slick({
			dots: false,
			infinite: true,
			arrows: true,
			speed: 200,
			slidesToShow: 3,
			slidesToScroll: 2,
			swipeToSlide: true,
			prevArrow: $('.team-slider__arrows .arrow_prev'),
			nextArrow: $('.team-slider__arrows .arrow_next'),
			responsive: [{
					breakpoint: 1279,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});
	};

	if ($('.js-partners-slider').length) {
		$('.js-partners-slider').slick({
			dots: false,
			infinite: true,
			arrows: true,
			speed: 200,
			slidesToShow: 3,
			slidesToScroll: 2,
			swipeToSlide: true,
			prevArrow: $('.partners-slider__arrows .arrow_prev'),
			nextArrow: $('.partners-slider__arrows .arrow_next'),
			responsive: [{
					breakpoint: 1279,
					settings: {
						slidesToShow: 2,
						variableWidth: true,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 520,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});
	};

	if ($('.js-news-slider').length) {
		$('.js-news-slider').slick({
			dots: true,
			infinite: true,
			arrows: false,
			speed: 200,
			slidesToShow: 2,
			slidesToScroll: 1,
			swipeToSlide: true,
			customPaging: function (slider, i) {
				return '<span class="slider-dot"></span>';
			},
			responsive: [{
					breakpoint: 9999,
					settings: "unslick",
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 520,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});

		$(window).resize(function () {
			$('.js-news-slider').slick('resize');
		});
	};


	if ($('.js-main-slider').length) {
		$('.js-main-slider').slick({
			dots: false,
			infinite: true,
			arrows: false,
			speed: 200,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipeToSlide: false,
			swipe: false,
			fade: true,
			asNavFor: function () {
				if ($('.js-secondary-slider').length) {
					return '.js-secondary-slider';
				}
			},
		});

	};

	if ($('.js-secondary-slider').length) {
		$('.js-secondary-slider').slick({
			dots: false,
			infinite: true,
			arrows: true,
			speed: 200,
			slidesToScroll: 1,
			slidesToShow: 3,
			vertical: true,
			verticalSwiping: true,
			// swipeToSlide: true,
			focusOnSelect: true,
			prevArrow: $('.miniatures__arrow_prev'),
			nextArrow: $('.miniatures__arrow_next'),
			asNavFor: '.js-main-slider',
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
						vertical: false,
						verticalSwiping: false,
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 2,
						vertical: false,
						verticalSwiping: false,
					}
				},
				{
					breakpoint: 420,
					settings: {
						slidesToShow: 2,
						vertical: false,
						verticalSwiping: false,
					}
				},
			]
		});
	}




	function animateNumbers(element) {
		var $container = $(element);

		function getPercents(element) {
			return element.text()
		}

		function getValidPercentsNumber(number) {
			return number.replace(/[^0-9.]/g, "");
		}

		function animateProggressBar(bar, width) {
			bar.animate({
				'width': width
			})
		}


		function addProgressAnimation(el) {
			if (!el.hasClass('animated')) {
				var $percents = el.find('.js-percent');
				var $bar = el.find('.js-status-rate');

				var currPercents = getPercents($percents);
				currPercents = Math.round(getValidPercentsNumber(currPercents)) + '%';

				animateProggressBar($bar, currPercents)

				el.addClass('animated')
			}
		}

		addProgressAnimation($container)

	}


	if ($('.js-status').length) {

		$('.js-status').each(function(){
			var $status = this;
			if (checkInViewport( $status)) {
				animateNumbers( $status);
			}

			document.addEventListener('scroll', function () {
				if (checkInViewport( $status)) {
					animateNumbers( $status);
				}
			})
		})

	}

	function svgMoveByPath(el, roadPath) {

		var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

		var path = document.querySelector(roadPath);
		var pathLen = path.getTotalLength();
		var dot = document.querySelector(el);
		var rect = dot.getBoundingClientRect();

		var pt = path.getPointAtLength(scrollPercentage * pathLen);


		dot.setAttribute("transform", "translate(" + pt.x + "," + pt.y + ")");

	};


	function blockVH(el, dif) {
		var block = $(el),
			vh = $(window).height();

		if (dif) {
			block.css({
				'min-height': vh - dif,
			});
		} else {
			block.css({
				'min-height': vh,
			});
		}
	}

	if ($(window).innerWidth() > 992) {
		var height_header = $('header').height();

		blockVH('.intro-section');
		// blockVH('.intro-section', height_header);

		$(window).resize(function () {
			blockVH('.intro-section');
		})
	}



	function FocusedInputLabel() {
		var $input = $('.input, .textarea');


		function checkIfHasLabel(el) {
			return (el.find('.inputl-label').length);
		}

		function checkIfEmptyVal(el) {
			return (el.val() !== '')
		}

		function addFocus(el) {

			el.on('change keyup', function () {
				var $this = $(this),
					$box = $this.closest('.input-box'),
					ifHasLabel = checkIfHasLabel($box),
					ifHasVal = checkIfEmptyVal($this);

				if (!$box.length && ifHasLabel) {
					return false;
				}

				if (ifHasVal) {
					$box.addClass('focused');
				} else {
					$box.removeClass('focused');
				}
			})
		}


		addFocus($input);
	}

	FocusedInputLabel();





	function getOffsetTop(el) {
		let $pos = jQuery(el).scrollTop();

		return $pos;
	}

	function showOnScroll($btn, $offset) {
		let $window_offset = getOffsetTop(window);

		if ($window_offset > $offset) {
			$btn.fadeIn(200);
		} else {
			$btn.fadeOut(100);
		}
	}

	if (jQuery('.js-scroll-up').length) {
		let $btn = jQuery('.js-scroll-up')
		showOnScroll($btn, 900);

		jQuery(window).scroll(() => {
			showOnScroll($btn, 900);
		})

		$btn.on('click', () => {
			jQuery("html, body").animate({
				scrollTop: "0"
			}, 700);
		})
	}


	function nav() {

		var $nav = jQuery('.js-mob-nav'),
			$burger = jQuery('.js-burger'),
			$overlay = jQuery('.js-overlay');

		function showNav() {
			jQuery('body').addClass('nav-shown');
			lockScroll();
			// $overlay.fadeIn(200);
		}


		function hideNav() {
			jQuery('body').removeClass('nav-shown');
			unlockScroll();
			// $overlay.fadeOut(200);
		}

		$burger.on('click', function () {
			showNav();
		})

		jQuery('.js-nav-close').on('click', () => {
			hideNav();
		})

		jQuery(document).mouseup((e) => {
			if (!$nav.is(e.target) && $nav.has(e.target).length === 0 && jQuery('body').hasClass('nav-shown')) {
				hideNav()
			}
		});
	}
	nav()


	function getCoords(elem) {
		var box = elem.getBoundingClientRect();

		var body = document.body;
		var docEl = document.documentElement;

		var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
		var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

		var clientTop = docEl.clientTop || body.clientTop || 0;
		var clientLeft = docEl.clientLeft || body.clientLeft || 0;

		var top = box.top + scrollTop - clientTop;
		var left = box.left + scrollLeft - clientLeft;

		return {
			top: top,
			left: left
		};
	}

	function checkInViewport(elementTarget, offset) {

		if (!offset) {
			offset = 0
		}

		if (!(window.scrollY + window.innerHeight > (getCoords(elementTarget).top - offset) && window.scrollY < (getCoords(elementTarget).top + elementTarget.offsetHeight + offset))) {
			return false;
		}

		return true;
	}


	function scrollAction(el, offset, action) {
		var $el = document.querySelector(el);
		var topPos = document.documentElement.scrollTop;

		var pos = getCoords($el);

		if (!offset || !(Number.isInteger(offset))) {
			offset = 200;
		}

		function setAction() {
			if (checkInViewport($el)) {
				action();
			}
		}

		setAction()

	}



	function parallax(elem, wrapper, animSpeed, posTranslate, resetOnOut) {
		var wrapp = jQuery(wrapper);

		wrapp.mousemove(function (e) {
			var pos = jQuery(this).offset(),
				wrapp_left = pos.left,
				wrapp_top = pos.top,
				wrapp_width = jQuery(this).width(),
				wrapp_height = jQuery(this).height(),
				x_center,
				y_center,
				el = jQuery(this).find(elem);

			x_center = (wrapp_width) - (e.pageX - wrapp_left);
			y_center = (wrapp_height) - (e.pageY - wrapp_top);
			if (el.attr('data-speed')) {
				var speed = el.attr('data-speed')
			} else if (animSpeed) {
				var speed = animSpeed
			} else {
				var speed = 2
			}

			if (posTranslate) {
				var posCorrection = posTranslate;
			} else {
				var posCorrection = 1;
			}

			var xPos = Math.round(x_center / 30 * speed),
				yPos = Math.round(y_center / 30 * speed);


			if (yPos < 0)
				yPos = -2 * speed;

			el.css('transform', 'translate3d(' + xPos * posCorrection + 'px, ' + yPos * posCorrection + 'px, 0px)');
		});

		if (resetOnOut == 'reset') {
			wrapp.mouseout(function (e) {
				el = jQuery(this).find(elem);
				el.removeAttr('style');
			})
		}

	}


	function setWowOffset(el, offset) {

		if (Array.isArray(el)) {
			for (let i = 0; i <= el.length; i++) {
				let $item = $(el[i]);

				$item.attr('data-wow-offset', offset);
			}
		} else {
			$(el).attr('data-wow-offset', offset);
		}
	}

	function setWowdelay(el, delay) {

		if (Array.isArray(el)) {
			for (let i = 0; i <= el.length; i++) {
				let $item = $(el[i]);

				$item.attr('data-wow-delay', delay);
			}
		} else {
			$(el).attr('data-wow-delay', delay);
		}
	}

	const wow_list = [
		'.how-card__content',
		'.card__img-box',
		'.profile__main-img',
		'.profile__photo-slider-wrapper',
		'.how-card__icon-box',
		'.cta-form__image-box',
		'.team-unit__image-box',
		'.project',
		'.news-item__image-box',
		'.map',
		'.gallery__link',
		'.list-cards_numeric .list-card__content',
		'.needhelp-card__content',
	]

	const wowOffset_list = [
		// '.',

	]

	const wowOffset_list_2 = [
		'.profile__photo-slider-wrapper',
		'.list-cards_numeric .list-card__content'
	]

	const wowDelay_list = [
		'.targets__alert',
	]

	const wowDelay_list_2 = [
		'.targets__left',
	]

	if ($(window).innerWidth() > 992) {
		setWowOffset(wow_list, 300);
		setWowOffset(wowOffset_list, 300);
		setWowOffset(wowOffset_list_2, 50);
		setWowdelay(wowDelay_list, '1s');
		setWowdelay(wowDelay_list_2, '2.5s');


		$('.how-card__content').each(function (i) {
			$delay = `1.${i}s`;
			setWowdelay(this, $delay)
		})

		$('.anim-text span').each(function (i) {
			$delay = `${i + 2}s`;
			setWowdelay(this, $delay)
		})

		$('.list-cards_numeric .list-card__content').each(function (i) {
			$delay = `${i + 1}s`;
			setWowdelay(this, $delay)
		})



		for (let i = 0; i <= wow_list.length; i++) {
			$(wow_list[i]).addClass('wow');
		}

		wow = new WOW({
			mobile: false,
			live: true,
			offset: 0,
			delay: '0'
		})

		wow.init();





		$('.how-card__btn').mouseover(function () {
			$(this).closest('.how-card__content').addClass('hovered')

			$(this).mouseleave(function () {
				$(this).closest('.how-card__content').removeClass('hovered')
			})
		})
	}

});

var handler = function () {

	var height_footer = $('footer').height();
	var height_header = $('header').height();

	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {

	}

}
$(window).bind('load', handler);
$(window).bind('resize', handler);