

function myFunction() {
var searchTerm = document.querySelector('#searchTerm').value;
var images = {};
    //APIs for nasa image/video searches
    fetch(
        'https://images-api.nasa.gov/search?q=' + searchTerm 
    )
    .then(function(nasaResponse){
        console.log(nasaResponse);
        console.log('test');
        return nasaResponse.json();
    })
    .then(data => {images=data;
        var seePic = document.createElement("span");
        var spaceImg = document.createElement('img');
        seePic.appendChild(spaceImg);
         spaceImg.setAttribute('src', data.collection.items[9].links[0].href);
         document.querySelector('#text-banner').appendChild(seePic);
        console.log(data.collection.items[0].links[0].href);
		
		wikiSearch(searchTerm);

    })
    .catch(err => console.error(err));

	
    }

	function wikiSearch(searchTerm) {
		//Api for Wiki article
		// fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=" + searchTerm)
        fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=" + searchTerm)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			console.log(data);
			var wikiCard = $("<div>").addClass("card-wiki");
			//var planetTitle = $("<h1>").addClass("card-title").text(data.query.search[0].title);
            $("#response-wiki").each(function(){
                if (searchTerm === "Pluto"|| "pluto" ){
                    var plutoCardBody = $("<div>").addClass("card-body");
                    var plutoArticle = $("<p>").addClass("article-Text").text(data.query.pages[44469].extract);
                    plutoCardBody.append(plutoArticle);
                    wikiCard.append(plutoCardBody);
                    $("#response-wiki").append(wikiCard);
                }
                if (searchTerm === "Neptune"|| "neptune" ){
                    var neptuneCardBody = $("<div>").addClass("card-body");
                    var neptuneArticle = $("<p>").addClass("article-Text").text(data.query.pages[19003265].extract);
                    console.log(data.query.pages[19003265].extract);
                    neptuneCardBody.append(neptuneArticle);
                    wikiCard.append(neptuneCardBody);
                    $("#response-wiki").append(wikiCard);
                }
                if (searchTerm === "Jupiter"|| "jupiter" ){
                    var planetCardBody = $("<div>").addClass("card-body");
                    var planetArticle = $("<p>").addClass("article-Text").text(data.query.pages[38930].extract);
                    planetCardBody.append(planetArticle);
                    wikiCard.append(planetCardBody);
                    $("#response-wiki").append(wikiCard);
                }
                if (searchTerm === "Saturn"|| "saturn" ){
                    var planetCardBody = $("<div>").addClass("card-body");
                    var planetArticle = $("<p>").addClass("article-Text").text(data.query.pages[44474].extract);
                    planetCardBody.append(planetArticle);
                    wikiCard.append(planetCardBody);
                    $("#response-wiki").append(wikiCard);
                }
                if (searchTerm === "Venus"|| "venus" ){
                    var planetCardBody = $("<div>").addClass("card-body");
                    var planetArticle = $("<p>").addClass("article-Text").text(data.query.pages[32745].extract);
                    planetCardBody.append(planetArticle);
                    wikiCard.append(planetCardBody);
                    $("#response-wiki").append(wikiCard);
                }
                if (searchTerm === "Mercury"|| "mercury" ){
                    var planetCardBody = $("<div>").addClass("card-body");
                    var planetArticle = $("<p>").addClass("article-Text").text(data.query.pages[19007].extract);
                    planetCardBody.append(planetArticle);
                    wikiCard.append(planetCardBody);
                    $("#response-wiki").append(wikiCard);
                }
                if (searchTerm === "Uranus"|| "uranus" ){
                    var planetCardBody = $("<div>").addClass("card-body");
                    var planetArticle = $("<p>").addClass("article-Text").text(data.query.pages[44475].extract);
                    planetCardBody.append(planetArticle);
                    wikiCard.append(planetCardBody);
                    $("#response-wiki").append(wikiCard);
                }
                if (searchTerm === "Mars"|| "mars" ){
                    var planetCardBody = $("<div>").addClass("card-body");
                    var planetArticle = $("<p>").addClass("article-Text").text(data.query.pages[14640471].extract);
                    planetCardBody.append(planetArticle);
                    wikiCard.append(planetCardBody);
                    $("#response-wiki").append(wikiCard);
                }
                if (searchTerm === "Earth"|| "earth" ){
                    var planetCardBody = $("<div>").addClass("card-body");
                    var planetArticle = $("<p>").addClass("article-Text").text(data.query.pages[9228].extract);
                    planetCardBody.append(planetArticle);
                    wikiCard.append(planetCardBody);
                    $("#response-wiki").append(wikiCard);
                }
            })
			// var planetCardBody = $("<div>").addClass("card-body");
     		// var planetArticle = $("<p>").addClass("article-Text").text(data.query.pages[44474].extract);
			//  planetCardBody.append(planetArticle);
			//  wikiCard.append(planetCardBody);
			//  $("#response-wiki").append(wikiCard);

		});
		//jupiter 38930 , saturn 44474 , neptune 19003265 , venus 32745 , uranus 44475 , mars 14640471 , mercury 19007 , earth 9228 , pluto 44469
	}
	
      
      
        // getSpace(function(){
        //     Object.keys(images).forEach((key) =>{
        //         if(images[key].indexOf(findText)!== -1){
        //     var seePic = document.createElement("span");
        //     var spaceImg = document.createElement('img');
        //     spaceImg.setAttribute('src', images[key]);
        //     console.log(images[key]);
        //     seePic.appendChild(spaceImg);
        //     document.querySelector('#response-Nasa').appendChild(seePic);
        //         }
        //     });
        // },0);

    // console.log(nasaResponse);

        // var responseContain = document.querySelector('#response-Nasa');

        // responseContain.innerHTML = '';

        // var spaceImg = document.createElement('img');
        // spaceImg.setAttribute('src', nasaResponse.collection.links.data["href"]);
        // console.log(spaceImg);

        // respondContain.appendChild(spaceImg);

//universal variables
// $("#birthday").datepicker({dateFormat: "mm/dd/yyyy"});
// var getInput= $("#birthday").datepicker().val();
// console.log(getInput);
// // function for saving data
// function saveDate() {
//     var getInput =$("#birthday").datepicker().val();
//     console.log(getInput);
//     var selectDate = ($(getInput).text().split("/")[3]);
//     console.log(selectDate);
// }
// saveDate();

//function for rendering night mode ((more on the css side))
    $("#space").click(function() {
        //storage of birthdates in this format MM/DD/YYYY
        myFunction();
        const search = $(this).siblings("#searchTerm").val();
        console.log(search);
        localStorage.setItem("searchTerm",search);

        $("#main-header").hide();
        $("#sub-header").hide();
         $("#dub-header").hide();
        $("#birthday").hide();
        // $("#next-title").hide();
        $("#next-title").show();
        $("#next-header").show();
        $("response-song").show();
        $("#nextBtn").show();
    });

    $("#space").click(function(){});

function getArt() {

};
//function for rendering night mode ((more on the css side))
//generate music videos or album covers
//display movie posters

