 $(function() {

	var vignettesimg = "https://brianboudrioux.fr/simplon/api/categories";
	// l'url dépend de l'API du site 
  
	function reqfilms(){ // requete AJAX pour récuperer des données via serveur
	$.get( vignettesimg )
	  .done(function( dataCategories ) { // troisieme parametre (promise): .done ou .fail ou .success ...
		  // $("#images").text("")
		//   $( "<img>" ).attr( "src", [Array].picture ).appendTo( ".movieMiniature" );
		  console.log(dataCategories);
		});
	  };
	  reqfilms();

	  $.each(dataCategories, function(i, category) {
		$.get( vignettesimg + category._id )
		.done(function( dataMovies ) { // troisieme parametre (promise): .done ou .fail ou .success ...
			// $("#images").text("")
		  //   $( "<img>" ).attr( "src", [Array].picture ).appendTo( ".movieMiniature" );
			console.log(dataMovies);
			// generate article h1 ul
			$.each(dataMovies, function(i2, movie) {
				// generate li img 
			})

		  });
		};
	  }) 
  });

// $(function() {

// 	var vignettesimg = "https://brianboudrioux.fr/simplon/api/categories";
// 	// l'url dépend de l'API du site 
  
// 	function reqVignette(){ // requete AJAX pour récuperer des données via serveur
// 		$.get( vignettesimg, { // premier parametre: "url"
// 		  picture: "" // deuxieme parametre: "data" (données qu'on va selectionner :tags, tagmode et format)
// 		})
// 		  .done(function( data ) { // troisieme parametre (promise): .done ou .fail ou .success ...
// 			console.log(data)
// 			  // $("#images").text("")
// 			$.each( data, function( i, item ) { // boucle for 
// 			  // console.log(data)
// 			  $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
// 			  // if ( i === 3 ) {
// 			  //   return;
// 			  // }    
// 			})
// 			});
// 		  };
// 		  reqVignette();
	  
// 	  });