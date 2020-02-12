



$(document).ready(function(){

	$("#button").mouseover(function(){
		$(this).css("backgroundColor", "red" );
			});
	$("#button").mouseout(function(){
		$(this).css("backgroundColor", "white");
			});

	
	$("#button").click(function(){
		var fuckItems = $("#input").val();
	
	

	$(".container").append('<div class= "list"> <ul><li>'+ fuckItems + '</li></ul><button id="delet">delet</button></div>'); 


	$("#input").val("");


					$("button").mouseover(function(){
						$(this).css("backgroundColor", "red" );
					});
					$("button").mouseout(function(){
						$(this).css("backgroundColor", "white");
	});


				
		$(document).on("click",'.list',function(){
			// $(this).remove('.container');
			$(this).animate({
			opacity: "0.0",
			paddingLeft: "+=80"
			}, 1000, function(){
			$(this).remove();
			})
		})

	
	})


	

});




