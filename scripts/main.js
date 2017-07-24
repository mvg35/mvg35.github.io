$(document).ready(function() {

	underscore1 = $('#span1');
	underscore2 = $('#span2');
	underscore3 = $('#span3');

	flag = 0;

	setInterval(function() {

	    if(flag === 0) {

			underscore1.css("visibility", "hidden");
			underscore2.css("visibility", "hidden");
			underscore3.css("visibility", "hidden");

			flag = 1;
			
		} else {

			underscore1.css("visibility", "visible");
			underscore2.css("visibility", "visible");
			underscore3.css("visibility", "visible");

			flag = 0;
		}

	}, 800);
	

	$('nav a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");
 
		$('nav a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');
 
		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 90
		}, 500, 'swing', function () {
			window.location.hash = target;
			//$(document).on("scroll", onScroll);
		});
	});

	$('#back-to-top').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");
 
		$('nav a').each(function () {
			$(this).removeClass('active');
		})

		$('nav a[href^="Home"]').addClass('active');
 
		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 90
		}, 500, 'swing', function () {
			window.location.hash = target;
			//$(document).on("scroll", onScroll);
		});
	});

	function onScroll(event){

		var scrollPosition = $(document).scrollTop();

		$('nav a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			console.log(refElement)
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('nav ul li a').removeClass("active");
				currentLink.addClass("active");
			}
			else{
				currentLink.removeClass("active");
			}
		});
	};
});
