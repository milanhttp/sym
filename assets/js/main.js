$(document).ready(function(){




	// Memory
	first_click = true;

	$(".memory-game div").click(function(){

		$(".memory-game div div").hide();
	    $(this).find("div").show();

	    
	    if  (first_click == true ) {
	    	 setInterval(countdown, 1000);
	    	 first_click = false;
	    }

	});

	function countdown() {

		var seconds = $(".time-numbers").attr("data-time");

		if (seconds <= 0 ) {
			return;
		}

		seconds--;

		$(".time-numbers").attr("data-time", seconds);

		if (seconds > 9) {
			$(".time-numbers").html(" : 0:" + seconds);
		} else if (seconds > 0) {
			$(".time-numbers").html(" : 0:0" + seconds);
		} else {
			$(".time-numbers").html(" is up.");
		}

		
	}


	//Quiz


	$(".answ").click(function(){

		if ( Number( $(".quiz-number").html() ) >= 3 ) {
			return;
		} else {
			$(".quiz-number").html( Number( $(".quiz-number").html() ) + 1 );
		}

		if ( Number( $(".quiz-number").html() ) == 2 ) {
			$(".jumbotron-quiz").attr("src","assets/images/pic3.jpg");
		}

		if ( Number( $(".quiz-number").html() ) == 3 ) {
			$(".jumbotron-quiz").attr("src","assets/images/pic4.jpg");
		}

		

	});


	// Swipe

	$('.swipe').slick({
	     slidesToShow: 1,
	     centerMode: true,
	     arrows: false,
	     centerPadding: "0px"
	  });


	$('.left-arrow , .left-button').click(function(){
	    $(".swipe").slick('slickPrev');
	});


	$('.right-arrow , .right-button').click(function(){
	    $(".swipe").slick('slickNext');
	});


	var $slickElement = $('.swipe');

	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){

	    $(".swipe-number").html( currentSlide + 1 ) ;
	});


  
});