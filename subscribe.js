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
    $(location).attr('href',"site-vod.html");
})
    $('.offre1').hover(function(){
    $('.offre1 .description, .offre1 #button-').css('display',"block");
    }, function(){
    $('.offre1 .description, .offre1 #button-').css('display',"none");
  })

    $('.offre2').hover(function(){
    $('.offre2 .description, .offre2 #button-').css('display',"block");
    }, function(){
    $('.offre2 .description, .offre2 #button-').css('display',"none");
  })

    $('.offre3').hover(function(){
    $('.offre3 .description, .offre3 #button-').css('display',"block");
    }, function(){
    $('.offre3 .description, .offre3 #button-').css('display',"none");
  })


});