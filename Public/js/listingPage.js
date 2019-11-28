
        $(function() {

    var apiCategory = "https://brianboudrioux.fr/simplon/api/categories";
	// Assignation de l'API catégory à la variable apiCategory
  
	function reqfilms(){ // requete AJAX pour récuperer la tableau de données des category
    $.get( apiCategory )                        
  
	  .done(function(apiCategory ) { 
	
		  console.log(apiCategory );
		});
	  };
      reqfilms();
      
      
	  // $.each(dataCategories, function(i, category) {

    //     // var category = "https://brianboudrioux.fr/simplon/api/products";
    //     $.get( vignettesImg + category._id ) 
    //     // Ensuite avec cette requette on va récuperer chaque données contenant la catégory id, "on descend" dans les tableaux de données
		// .done(function(dataMovies) { 
	
		// 	console.log(dataMovies);
    //         // generate article h1 ul
    //         $("body").html("<section class=listing> </section>");

    //         $(".listing").prepend("<article class=slideMiniature> </article>");
    //         $(".slideMiniature").prepend("<ul class=movieList> </ul>");
    //         $(".movieList").before("<h1>");
    //         $(".movieList").prepend("<li class=movieMiniature></li>");


		// 	$.each(dataMovies, function(i2, movie) {
    //             // generate li img 
    //         $(".movieMiniature").prepend("<img>")
		// 	})

		//   });
		// });
	  }) 