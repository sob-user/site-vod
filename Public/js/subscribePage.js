$(document).ready(function() {


    $('#connexion').click(function(){
        $('.modal').show();
        $('.modal-bg').show();
    });
    $('.modal .close').click(function(){
        $('.modal').hide();
        $('.modal-bg').hide();
    })

    $('.inscription').click(function(){
      $('.modalSuscribe').show();
      $('.modalSuscribe-bg').show()

    })

    $('.modalSuscribe .close2').click(function(){
      $('.modalSuscribe').hide();
      $('.modalSuscribe-bg').hide();
    })

    $("#home, #logo").click(function(){
    $(location).attr('href',"homePage.html");
})

  // requette post des utilisateurs
  $('#submitButton').click(function(e) {
  let username = $("#usernameInput").val()
  let email = $("#emailInput").val()
  let password = $("#passwordInput").val()

  console.log(username, email, password);

  $.post("https://brianboudrioux.fr/simplon/api/users", {username: username, email: email, password: password}, function(data){
      window.location.href = "homePage.html"
      // console.log(data.errors);
      // if (typeof data.errors == undefined)
      //     window.location.href = "homePage.html"
      // else
      // console.log(data.errors);
  })


  });
  
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