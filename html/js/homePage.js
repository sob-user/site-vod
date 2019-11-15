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


});