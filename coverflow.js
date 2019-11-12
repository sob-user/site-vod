$(function() {
	$( ".cover" ).click(function() {
    	$( ".active" ).removeClass( "active" );
    	$( this ).addClass( "active" );
	});
});



// $(function() {

//     $('#coverFlow').coverflow({
//       active: 3,
//       select: function(event, ui) {
//         console.log();
//       }
//     });
  
//     $('.ui-state-active a').click(function() {
//       window.location = $this.attr('href');
//     });
  
//     $('#coverFlowBackground img').click(function() {
//       $('#coverFlow"').coverflow('next');
//     });
  
//     $('#coverFlowBackground img').click(function() {
//       $('#coverFlow"').coverflow('prev');
//     });
  
//     $("#catalogue").keydown(function(e) {
//       // left arrow
//       if ((e.keyCode || e.which) == 37) {
//         $('#coverFlow"').coverflow('prev');
//       }
//       // right arrow
//       if ((e.keyCode || e.which) == 39) {
//         $('#coverFlow"').coverflow('next');
//       }
//     });
  
//   });