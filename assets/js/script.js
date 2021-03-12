//universal variables
//function for rendering night mode ((more on the css side))
//storage of birthdates in this format MM/DD/YYYY
//loading of birthdates
//APIs for song titles
//generate music videos or album covers

//APIs for Horoscope
fetch("https://astrology-horoscope.p.rapidapi.com/zodiac_finder/result/", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-key": "30d55d58d4mshd24355021b03dbap19337fjsn5e97d59eee51",
		"x-rapidapi-host": "astrology-horoscope.p.rapidapi.com"
	},
	"body": {
		"mystic_dob": "1988-05-11"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});