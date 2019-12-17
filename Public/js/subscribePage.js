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

  // requette permettant d'enregistrer un nouvel utilisateurs dans l'API

  $('#submitButton').click(function(e) {
    e.preventDefault();
    let username = $("#usernameInput").val()
    let email = $("#emailInput").val()
    let password = $("#passwordInput").val()

    // localStorage.setItem("email", email);



    console.log(username, email, password);

    $.post("https://brianboudrioux.fr/simplon/api/users", { username: username, email: email, password: password }, function(data, status) {
        console.log("data : " + data);
        

        if (typeof data.errors === "undefined")

          // $(location).attr("href", "homePage.html");
          $("#submitButton").click(function(){
            $('.modal').show();
            $('.modal-bg').show();

            $('.modalSuscribe').hide();
            $('.modalSuscribe-bg').hide();
          })

        else console.log(data.errors);
      });

    });

    $('#connexionButton').click(function(e) {
      let email = $("#emailInput").val()
      let password = $("#passwordInput").val()
      e.preventDefault();
  
      console.log(email, password);
  
      $.post("https://brianboudrioux.fr/simplon/api/connect", { email: email, password: password }, function(data, status) {
          console.log("data : ", data);
      console.log(status);
      if (data.auth != false) {
  
        localStorage.setItem("userConnect", email);
        $(location).attr("href", "landingAbonnes.html");
        
          }
          else  alert('Account do not exist')
          
        });
  
    });


});