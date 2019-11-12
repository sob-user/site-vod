$(document).ready(function() {
$("#input input").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
})

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

});