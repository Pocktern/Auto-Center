$(document).ready(function () {	
	$(".clickable").on("click",function(){
		
		$(".clickable").each(function() {
            $(this).removeClass("selected");
        });
		
		$(this).addClass("selected");
	});
});