



$(function(){
        // Check the initial Poistion of the Sticky Header
        var shine = new Shine(document.getElementById('my-shine-object'));

        window.addEventListener('mousemove', function(event) {
		  shine.light.position.x = event.clientX;
		  shine.light.position.y = event.clientY;
		  shine.draw();
		}, false);
});