$(document).ready(function() {

	var offset = 0;

	var limit = 5;

	var topics = ["Miami Hurricanes", "Miami Dolphins", "Chelsea FC", "Real Madrid"];

	renderButtons();
	displayGiphy();

	function displayGiphy() {
		var giph = $(this).attr("data-name");

		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        giph + "&api_key=dc6zaTOxFJmzC&limit=" + limit;

        console.log(queryURL);

        $.ajax ({
        	url: queryURL,
        	method: 'GET'
        }).done(function(response) {
        	
        })
	}


	// 
	// function for displaying buttons 
	// 
	function renderButtons() {

		$("#topicsHere").empty();

		for (var i = 0; i < topics.length; i++) {
			
			var btn = $("<button>");
			
			btn.attr("data-name", topics[i]);
			
			btn.text(topics[i]);
			
			$("#topicsHere").append(btn);

		}
		

		$("button").on("click", function () {
			
		})
	}

})