$(document).ready(function() {

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
