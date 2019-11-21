$(document).ready(function() {
	$('#connexion').click(function(){
		$('.modal').show();
		$('.modal-bg').show();
	});
	$('.modal .close').click(function(){
		$('.modal').hide();
		$('.modal-bg').hide();
	})

	$("#home, #logo").click(function(){
	$(location).attr('href',"homePage.html");
})
	$(".subscribe").click(function(){
	$(location).attr('href',"subscribePage.html");
})

  
/* Slideshow JavaScript */
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
	var i;
	var slides = $(".mySlides");
	var dots = $(".dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length};
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].classList.remove("active");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].classList.add("active");
	console.log(slideIndex);
  }

$('.prev').click(function(){
	showSlides(slideIndex-=1)
});

$('.next').click(function(){
	showSlides(slideIndex+=1)
});

$('#dot1, #dot2, #dot3, #dot4').click(function(n){
	showSlides(slideIndex+=1)
	// console.log(slideIndex)
})


// cover flow

// $(function() {
// 	$( ".cover" ).click(function() {
//     	$( ".active" ).removeClass( "active" );
//     	$( this ).addClass( "active" );
// 	});
// });


});