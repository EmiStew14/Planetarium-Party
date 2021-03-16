
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
        var elsearch= searchTerm.toLowerCase();
        $("#response-wiki").html("");
        switch (elsearch) {
            case "pluto":
              var plutoCardBody = $("<div>").addClass("card-body");
              var plutoArticle = $("<p>").addClass("article-Text").text(data.query.pages[44469].extract);
              console.log(data.query.pages[44469].extract);
              plutoCardBody.append(plutoArticle);
              wikiCard.append(plutoCardBody);
              $("#response-wiki").append(wikiCard);
               
              break;
            case "neptune":
                
                          var neptuneCardBody = $("<div>").addClass("card-body");
                          var neptuneArticle = $("<p>").addClass("article-Text").text(data.query.pages[19003265].extract);
                          console.log(data.query.pages[19003265].extract);
                          neptuneCardBody.append(neptuneArticle);
                          wikiCard.append(neptuneCardBody);
                          $("#response-wiki").append(wikiCard);
               
              break;
            case "jupiter":
                
                          var jupiterCardBody = $("<div>").addClass("card-body");
                          var jupiterArticle = $("<p>").addClass("article-Text").text(data.query.pages[38930].extract);
                          jupiterCardBody.append(jupiterArticle);
                          wikiCard.append(jupiterCardBody);
                          $("#response-wiki").append(wikiCard);
               
              break;
            case "saturn":
                
                          var saturnCardBody = $("<div>").addClass("card-body");
                          var saturnArticle = $("<p>").addClass("article-Text").text(data.query.pages[44474].extract);
                          saturnCardBody.append(saturnArticle);
                          wikiCard.append(saturnCardBody);
                          $("#response-wiki").append(wikiCard);
               
              break;
            case "venus":
             
                          var venusCardBody = $("<div>").addClass("card-body");
                          var venusArticle = $("<p>").addClass("article-Text").text(data.query.pages[32745].extract);
                          venusCardBody.append(venusArticle);
                          wikiCard.append(venusCardBody);
                          $("#response-wiki").append(wikiCard);
                     
              break;
            case "mercury":
              
                          var mercuryCardBody = $("<div>").addClass("card-body");
                          var mercuryArticle = $("<p>").addClass("article-Text").text(data.query.pages[19007].extract);
                          mercuryCardBody.append(mercuryArticle);
                          wikiCard.append(mercuryCardBody);
                          $("#response-wiki").append(wikiCard);
                     
              break;
            case "uranus":
             
                          var uranusCardBody = $("<div>").addClass("card-body");
                          var uranusArticle = $("<p>").addClass("article-Text").text(data.query.pages[44475].extract);
                          uranusCardBody.append(uranusArticle);
                          wikiCard.append(uranusCardBody);
                          $("#response-wiki").append(wikiCard);
                     
                break;
           case "mars":
             
                          var marsCardBody = $("<div>").addClass("card-body");
                          var marsArticle = $("<p>").addClass("article-Text").text(data.query.pages[14640471].extract);
                          marsCardBody.append(marsArticle);
                          wikiCard.append(marsCardBody);
                          $("#response-wiki").append(wikiCard);
                     
                break;
          case "earth":
               
                          var earthCardBody = $("<div>").addClass("card-body");
                          var earthArticle = $("<p>").addClass("article-Text").text(data.query.pages[9228].extract);
                          earthCardBody.append(earthArticle);
                          wikiCard.append(earthCardBody);
                          $("#response-wiki").append(wikiCard);
                     
                break;
          }
    });
    //jupiter 38930 , saturn 44474 , neptune 19003265 , venus 32745 , uranus 44475 , mars 14640471 , mercury 19007 , earth 9228 , pluto 44469
}

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
        $("#response-Nasa").html("");
        seePic.appendChild(spaceImg);
         spaceImg.setAttribute('src', data.collection.items[9].links[0].href);
         document.querySelector('#response-Nasa').appendChild(seePic);
        console.log(data.collection.items[0].links[0].href);
		
		wikiSearch(searchTerm);

    })
    .catch(err => console.error(err));

	
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
//function for rendering night mode ((more on the css side))
//generate music videos or album covers
//display movie posters

