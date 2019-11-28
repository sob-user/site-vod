$(document).ready(function() {
  // verfication user localstorage

  if(localStorage!='undefined') {
    // Récupération de la valeur dans web storage
    var verificationUser = localStorage.getItem('userConnect');
    // Vérification de la présence du compteur
    if(verificationUser === null) {

    console.log("error");
   
  } else {
    console.log(verificationUser)
  }
  
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
  $( '.cover' ).click(function() {
      $( ".active" ).removeClass( "active" );
    $( this ).addClass( "active" );
  });
  
  // $('.coverflow').on("keydown", function(e) {
  //     var k = e.which;
  //     if (k === 37 || k === 39) {
  //       i = k === 39 ? ++i : --i;
  //       anim();
  //     }
  //   });
    
  
  
  });
  