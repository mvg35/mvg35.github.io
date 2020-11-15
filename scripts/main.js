$(document).ready(function() {

	var underscore1 = $('#span1');
	var underscore2 = $('#span2');
	var underscore3 = $('#span3');
	var underscore4 = $('#span4');
	var underscore5 = $('#span5');
	var underscore6 = $('#span6');
	var underscore7 = $('#span7');

	var flag = 0;

	setInterval(function() {

	    if(flag === 0) {

			underscore1.css("visibility", "hidden");
			underscore2.css("visibility", "hidden");
            underscore3.css("visibility", "hidden");
            underscore4.css("visibility", "hidden");
            underscore5.css("visibility", "hidden");
            underscore6.css("visibility", "hidden");
            underscore7.css("visibility", "hidden");

			flag = 1;

		} else {

			underscore1.css("visibility", "visible");
			underscore2.css("visibility", "visible");
            underscore3.css("visibility", "visible");
            underscore4.css("visibility", "visible");
            underscore5.css("visibility", "visible");
            underscore6.css("visibility", "visible");
            underscore7.css("visibility", "visible");

			flag = 0;
		}

	}, 800);


	var menuHeight = $('nav').height();

	$('nav a[href^="#"]').on('click', function (e) {

	      e.preventDefault();
	      $(document).off("scroll");
	      $('a').each(function () {
	          $(this).removeClass('active');
	      });
	      $(this).addClass('active');

	      var target = this.hash;
		  var $target = $(target);
		  console.log($target);
	      $('html, body').stop().animate({'scrollTop': $target.offset().top - menuHeight - 5}, 500, 'swing', function () {
	          //window.location.hash = target;
	          //action();
	      });
	  });

	$('.overlay').click(function(){

		$(this).addClass('hidden');
        $('div[class^="pop-up"]').addClass('hidden');
        $('.main-div').css('position', 'relative');

	});

    $('a[class^="pop-up-close"]').click(function(event) {

        event.preventDefault();
        $('.overlay').addClass('hidden');
        $('div[class^="pop-up"]').addClass('hidden');
        $('.main-div').css('position', 'relative');

	});

    $('a[class^="pop-up-open"]').click(function(event) {

        event.preventDefault();
        $($(this).data("target")).removeClass('hidden');
        $('.overlay').removeClass('hidden');
        $('.main-div').css('overflow-y', 'hidden');

	});
});
