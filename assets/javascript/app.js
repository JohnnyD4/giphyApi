$(document).ready(function() {

	var offset = 0;

	var limit = 2;

	var topics = ["Miami Hurricanes", "Miami Dolphins", "Chelsea FC", "Real Madrid"];
var animate = 0;
	renderButtons();
	displayGiphy();

	// 
	// button click function to show show gifs
	// 
	function displayGiphy() {

		

		$(".teams").on("click", function() {
			
			

			offset = limit;	
			
			var giph = $(this).attr("data-name");

			var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
	        giph + "&api_key=dc6zaTOxFJmzC&limit=" + limit + "&offset=" + offset;

	        console.log(queryURL);

	        $.ajax ({
	        	url: queryURL,
	        	method: 'GET'
	        }).done(function(response) {

	        	var results = response.data;

	        	for (var i = 0; i < results.length; i++) {
	        		var imgDiv = $("<div class='imDiv'>");

	        		var rating = results[i].rating;

	        		var p = $("<p>").text("Rating: " + rating);

	        		var giphImage = $("<img class='giphStill'>");

	        		//var giphMove = $("<img>");

	        		giphImage.attr("src", results[i].images.fixed_width_still.url).val(i)

	        		//giphMove.attr("src", results[i].images.fixed_width.url).val(i)

	        		$(imgDiv).prepend(p);

	        		$(imgDiv).prepend(giphImage);

	        		$("#giphsHere").prepend(imgDiv);

					$(".giphStill").on("click", function(event) {
						console.log("hello");
						console.log(this.value)
						
						// 
						// Tim's helpful attempt, still didnt quite work
						// 
						if (animate == 0){ 
							
                   			$(this).attr("src", response.data[this.value].images.fixed_width.url);
                    		animate++
                		}else{
                    		$(this).attr("src", response.data[this.value].images.fixed_width_still.url);
                    		animate--
                		}




                		// 
                		// My shitty attempt that didnt really work
                		// 

					// 	if (giphImage.val == giphImage.val) {

					// 	console.log(giphImage.val());
						
						
					// 	displayGiphy();
					// 	} else {
					// 		console.log(i);
					// 		console.log(giphImage.val("id"));
					// 	console.log(" doesnt work");
					// }
					})

					// $(giphMove).on("click", function() {
						
					// 	giphMove.hide();
						
					// 	giphImage.show();

					// 	displayGiphy();
					// })
	        		
	        	} 
	        

	        })
		})

		

	}

	$("#teamButton").on("click", function() {
		event.preventDefault();

		var team = $("#newTeam").val().trim();

		limit = $("#newLimit").val().trim();

		topics.push(team);
		
		renderButtons();
		displayGiphy();

	})



	// 
	// function for displaying buttons 
	// 
	function renderButtons() {

		$("#topicsHere").empty();

		for (var i = 0; i < topics.length; i++) {
			
			var btn = $("<button>");

			btn.addClass("teams");
			
			btn.attr("data-name", topics[i]);
			
			btn.text(topics[i]);
			
			$("#topicsHere").append(btn);

		}
		
	}



})