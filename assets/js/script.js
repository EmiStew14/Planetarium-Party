//universal variables
//function for rendering night mode ((more on the css side))
//storage of birthdates in this format MM/DD/YYYY
//loading of birthdates
//APIs for song titles api key https://api.musixmatch.com/ws/1.1/  68d7dd5005e9eaf38415e4045967649a
//spotify api https://api.spotify.com client id-48a673c66fbc4f6eb2efc416c3f45300

fetch("https://api.spotify.com/v1/tracks/2KrxsD86ARO5beq7Q0Drfqa", {
	"method": "POST",
	"headers": {
		"x-rapidapi-key": "a040ae462d3a4987b352f4b4689f5141",
		"x-rapidapi-host": "48a673c66fbc4f6eb2efc416c3f45300"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//generate music videos or album covers
//APIs for Movie titles
//display movie posters
