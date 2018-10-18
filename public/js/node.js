$(document).ready(function() {
    //your code 
    $('#controlR').click(function() {
        event.preventDefault();
        $('#content').animate({
            marginLeft: "-=400px"
        }, "fast");
    });

    $('#controlL').click(function() {
        event.preventDefault();
        $('#content').animate({
            marginLeft: "+=400px"
        }, "fast");
    });
});

$(document).ready(function() {
    //your code 
    $('#controlR1').click(function() {
        event.preventDefault();
        $('#content1').animate({
            marginLeft: "-=400px"
        }, "fast");
    });

    $('#controlL1').click(function() {
        event.preventDefault();
        $('#content1').animate({
            marginLeft: "+=400px"
        }, "fast");
    });
});

$(document).ready(function() {
    //your code 
    $('#controlR2').click(function() {
        event.preventDefault();
        $('#content2').animate({
            marginLeft: "-=400px"
        }, "fast");
    });

    $('#controlL2').click(function() {
        event.preventDefault();
        $('#content2').animate({
            marginLeft: "+=400px"
        }, "fast");
    });
});

$(document).ready(function() {
    //your code 
    $('#controlR3').click(function() {
        event.preventDefault();
        $('#content3').animate({
            marginLeft: "-=400px"
        }, "fast");
    });

    $('#controlL3').click(function() {
        event.preventDefault();
        $('#content3').animate({
            marginLeft: "+=400px"
        }, "fast");
    });
});



/*jQuery(document).ready(function ($) {

  
  
	var slideCount = $('.module-section ul li').length;
	var slideWidth = $('.module-section ul li').width();
	var slideHeight = $('.module-section ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('.module-section').css({ width: slideWidth, height: slideHeight });
	
	$('.module-section ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('.module-section ul li:last-child').prependTo('.module-section ul');

    function moveLeft() {
        $('.module-section ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.module-section ul li:last-child').prependTo('.module-section ul');
            $('.module-section ul').css('left', '');
        });
    };

    function moveRight() {
        $('.module-section ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.module-section ul li:first-child').appendTo('.module-section ul');
            $('.module-section ul').css('left', '');
        });
    };

    $('.left-controls').click(function () {
        moveLeft();
    });

    $('.right-controls').click(function () {
        moveRight();
    });

});    



*/
