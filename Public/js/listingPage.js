
        (function() {
            //var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
            var flickerAPI = "https://brianboudrioux.fr/simplon/api/products";
            function reqFlickr() {
            $.getJSON( flickerAPI, {
            //tags: "horses",
            tags: "",
            tagmode: "any",
            format: "json"
        })

        //Promise...notre 3eme parametre...réponse après appel de la data 
            .done(function( data ) {
                console.log(data);
                $(".movieMiniature").text("");
                //on boucle sur tous les items
                //$.each( data.items, function( i, item ) {
                $.each( data, function( i, item ) {  
            //    $( "<img>" ).attr( "src", item.picture ).appendTo( ".images" );
            //    $( "<p>" ).append("<img>").html( item.description ).appendTo( ".images" );
            //     if ( i === 3 ) {
            //     return false;
            // }

      });
    });
    }
    reqFlickr();

        })();