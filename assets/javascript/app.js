$(document).ready(function() {

	var offset = 0;

	var limit = 2;

	var topics = ["Miami Hurricanes", "Miami Dolphins", "Chelsea FC", "Real Madrid"];

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
	        		
	        		var rating = results[i].rating;

	        		var p = $("<p>").text("Rating: " + rating);

	        		var giphImage = $("<img>");

	        		var giphMove = $("<img>");

	        		giphImage.attr({
	        			"src": results[i].images.fixed_height_still.url
	        		})

	        		giphMove.attr({
							"src": results[i].images.fixed_height.url
					})

	        		$("#giphsHere").prepend(p);

	        		$("#giphsHere").prepend(giphImage);

					$(giphImage).on("click", function() {
						
						giphImage.hide();
						
						$("#giphsHere").prepend(giphMove);
						
						giphMove.show();
						
						displayGiphy();
					})

					$(giphMove).on("click", function() {
						
						giphMove.hide();
						
						giphImage.show();

						displayGiphy();
					})
	        		
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