window.onload = function() {
// // verfication user localstorage
  

// if(localStorage!= null) {
//   // Récupération de la valeur dans web storage
//    localStorage.getItem('userConnect');
//    console.log(localStorage);
//   // Vérification de la présence de l'utilisateur
//   } 
//   else alert("you are not connect");  


 var requestCategories = new XMLHttpRequest()

 requestCategories.open('GET', 'https://brianboudrioux.fr/simplon/api/categories', true)

 requestCategories.onload = function() {
   var data = JSON.parse(this.response);


   if (requestCategories.status >= 200 && requestCategories.status < 400) {
     
   

   data.forEach(categories => {
     console.log(categories.name)

     let listing = document.getElementById('listing');
     console.log(listing)


     let categoriesList = document.getElementById('categoriesList')
     
     

    //  console.log(article)

     let contenair = document.createElement('div')
     contenair.className = "categories"
     contenair.setAttribute('data-id', categories._id)
     categoriesList.prepend(contenair)


     let h1 = document.createElement('h1')
     h1.setAttribute('class', 'categoriesTitle')
     h1.textContent = categories.name
     contenair.prepend(h1)

     let imgCategories = document.createElement('img')
     imgCategories.className = "imgCategories"
     imgCategories.setAttribute('src', categories.picture)
     contenair.appendChild(imgCategories)
    



    categoriesList.appendChild(contenair);
    
    });

  }
 };

 requestCategories.send()

}
 



// var requestMovies = new XMLHttpRequest()
// var categoriesID = document.querySelector('.slideMiniature')

// requestMovies.open('GET', 'https://brianboudrioux.fr/simplon/api/products/category/', true)

// requestMovies.onload = function() {
//   var data = JSON.parse(this.response);
//   if (requestMovies.status >= 200 && requestMovies.status < 400) {
    
  

//   data.forEach(products => {
//     console.log(products.name)
//     console.log(products.picture)

//     li = document.querySelector('.movieMiniature')

    

//     let imgMovies = document.createElement('img')
//     imgMovies .className = "imgMovies"
//     imgMovies .setAttribute('src', products.picture)
//     li.appendChild(imgMovies )
   
   
//    });

//  }
// };

// requestMovies.send()

// };


























        
  //       $(function() {
  //         var flickerAPI = "https://brianboudrioux.fr/simplon/api/categories";
  //         function reqFlickr() {
  //         $.getJSON( flickerAPI, {
      
  //         // tags: "",
  //         // tagmode: "any",
  //         // format: "json"
  //     })

  //     //Promise...notre 3eme parametre...réponse après appel de la data 
  //         .done(function( data ) {
  //           console.log("data categories", data); 
            
            
  //           var category_id = {
  //             kids : "5dbeff05cbd3166665f3a45a", 
  //             comedy: "5dbeffb7cbd3166665f3a45b",
  //             horror: "5dbf0a3e6cb3406eba1ac77b",
  //             aventure: "5dbf0a9f6cb3406eba1ac77c"
  //           }
  //           // var apiCategory = flickerAPI + category_id;
            

  //           // categories
  //           $.each( data, function(i, item) {
  //             var apiCategory = flickerAPI + category_id.kids;
  //             $(".slideMiniature").attr("data-id", apiCategory);

  //             console.log(apiCategory);
              
  //           }) 

  //           // products
  //           var movies = "https://brianboudrioux.fr/simplon/api/products"; 
  //           var imgMiniature = $(".movieMiniature").eq(0).append("<img >");

  //           $.each( data, function(i, item) {
              

  //           })
            
            
  //             // console.log(data);
  //             // $(".images").text("");
        
  //   //           $.each( data, function( i, item ) {  
            
  //   //          let article = $("<article class='cadre'></article>");
  //   //          let img = $("<img src='" + item.picture + "' />");
  //   //          let h1 = $("<h1>" + item.name + "</h1>");

  //   //          $(article).append(h1);
  //   //          $(article).append(img);
  //   //          $(".images").append(article);
          
  //   // });
  // });
  // }
  // reqFlickr();
      
      
	//   // $.each(dataCategories, function(i, category) {

  //   //     // var category = "https://brianboudrioux.fr/simplon/api/products";
  //   //     $.get( vignettesImg + category._id ) 
  //   //     // Ensuite avec cette requette on va récuperer chaque données contenant la catégory id, "on descend" dans les tableaux de données
	// 	// .done(function(dataMovies) { 
	
	// 	// 	console.log(dataMovies);
  //   //         // generate article h1 ul
  //   //         $("body").html("<section class=listing> </section>");

  //   //         $(".listing").prepend("<article class=slideMiniature> </article>");
  //   //         $(".slideMiniature").prepend("<ul class=movieList> </ul>");
  //   //         $(".movieList").before("<h1>");
  //   //         $(".movieList").prepend("<li class=movieMiniature></li>");


	// 	// 	$.each(dataMovies, function(i2, movie) {
  //   //             // generate li img 
  //   //         $(".movieMiniature").prepend("<img>")
	// 	// 	})

	// 	//   });
	// 	// });
	  // }) 