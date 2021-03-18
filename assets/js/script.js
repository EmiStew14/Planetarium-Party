var system= JSON.parse(localStorage.getItem("planets"))|| [];
var searchTerm = document.querySelector('#searchTerm').value;

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
               var plutoTitle = document.querySelector('#next-header').innerHTML= data.query.pages[44469].title;
              var plutoCardBody = $("<div>").addClass("card-body");
              var plutoArticle = $("<p>").addClass("article-Text").text(data.query.pages[44469].extract);
              plutoCardBody.append(plutoTitle);
              plutoCardBody.append(plutoArticle);
              wikiCard.append(plutoCardBody);
              $("#response-wiki").append(wikiCard);
               
              break;
            case "neptune":
                var neptuneTitle = document.querySelector('#next-header').innerHTML= data.query.pages[19003265].title;
                          var neptuneCardBody = $("<div>").addClass("card-body");
                          var neptuneArticle = $("<p>").addClass("article-Text").text(data.query.pages[19003265].extract);
                          neptuneCardBody.append(neptuneTitle);
                          neptuneCardBody.append(neptuneArticle);
                          wikiCard.append(neptuneCardBody);
                          $("#response-wiki").append(wikiCard);
               
              break;
            case "jupiter":
                var jupiterTitle = document.querySelector('#next-header').innerHTML= data.query.pages[38930].title;
                          var jupiterCardBody = $("<div>").addClass("card-body");
                          var jupiterArticle = $("<p>").addClass("article-Text").text(data.query.pages[38930].extract);
                          jupiterCardBody.append(jupiterTitle);
                          jupiterCardBody.append(jupiterArticle);
                          wikiCard.append(jupiterCardBody);
                          $("#response-wiki").append(wikiCard);
               
              break;
            case "saturn":
                var saturnTitle = document.querySelector('#next-header').innerHTML= data.query.pages[44474].title;
                          var saturnCardBody = $("<div>").addClass("card-body");
                          var saturnArticle = $("<p>").addClass("article-Text").text(data.query.pages[44474].extract);
                          saturnCardBody.append(saturnTitle);
                          saturnCardBody.append(saturnArticle);
                          wikiCard.append(saturnCardBody);
                          $("#response-wiki").append(wikiCard);
               
              break;
            case "venus":
                var venusTitle = document.querySelector('#next-header').innerHTML= data.query.pages[32745].title;
                          var venusCardBody = $("<div>").addClass("card-body");
                          var venusArticle = $("<p>").addClass("article-Text").text(data.query.pages[32745].extract);
                          venusCardBody.append(venusTitle);
                          venusCardBody.append(venusArticle);
                          wikiCard.append(venusCardBody);
                          $("#response-wiki").append(wikiCard);
                     
              break;
            case "mercury":
                var mercuryTitle = document.querySelector('#next-header').innerHTML= data.query.pages[19007].title;
                          var mercuryCardBody = $("<div>").addClass("card-body");
                          var mercuryArticle = $("<p>").addClass("article-Text").text(data.query.pages[19007].extract);
                          mercuryCardBody.append(mercuryTitle);
                          mercuryCardBody.append(mercuryArticle);
                          wikiCard.append(mercuryCardBody);
                          $("#response-wiki").append(wikiCard);
                     
              break;
            case "uranus":
                var uranusTitle = document.querySelector('#next-header').innerHTML= data.query.pages[44475].title;
                          var uranusCardBody = $("<div>").addClass("card-body");
                          var uranusArticle = $("<p>").addClass("article-Text").text(data.query.pages[44475].extract);
                          uranusCardBody.append(uranusTitle);
                          uranusCardBody.append(uranusArticle);
                          wikiCard.append(uranusCardBody);
                          $("#response-wiki").append(wikiCard);
                     
                break;
           case "mars":
            var marsTitle = document.querySelector('#next-header').innerHTML= data.query.pages[14640471].title;
                          var marsCardBody = $("<div>").addClass("card-body");
                          var marsArticle = $("<p>").addClass("article-Text").text(data.query.pages[14640471].extract);
                          marsCardBody.append(marsTitle);
                          marsCardBody.append(marsArticle);
                          wikiCard.append(marsCardBody);
                          $("#response-wiki").append(wikiCard);
                     
                break;
          case "earth":
            var earthTitle = document.querySelector('#next-header').innerHTML= data.query.pages[9228].title;
                          var earthCardBody = $("<div>").addClass("card-body");
                          var earthArticle = $("<p>").addClass("article-Text").text(data.query.pages[9228].extract);
                          earthCardBody.append(earthTitle);
                          earthCardBody.append(earthArticle);
                          wikiCard.append(earthCardBody);
                          $("#response-wiki").append(wikiCard);
                     
                break;
          }
    });
    //jupiter 38930 , saturn 44474 , neptune 19003265 , venus 32745 , uranus 44475 , mars 14640471 , mercury 19007 , earth 9228 , pluto 44469
}

function myFunction(searchTerm) {
// var searchTerm = document.querySelector('#searchTerm').value;
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
		

    })
    .catch(err => console.error(err));

	
    }

    var planetTabs= function(planetText) {
        // create elements that make up a list item
        // var pfind= fetchimg.value;
        var Li = $("<button>").addClass("list sidebar-content");
   
        var planetP = $("<span>")
            .addClass("m-1")
            .text(planetText);
          
            // append p element to parent li
            Li.append(planetP);
          
            // append to ul list on the page
            $("#list").append(Li);

            Li.on("click", function () {
                $("#response-wiki").html("");
                 $('#response-Nasa').html("");
                 myFunction(($(this).children().text()));
                 wikiSearch(($(this).children().text()));
    
                })
          };

    function saveIt(planetN) {
        // const planetN = $(this).siblings("#searchTerm").val();
        if (system.indexOf(planetN) === -1) {
            system.push(planetN);
            planetTabs(planetN);
        }
        localStorage.setItem("planets", JSON.stringify(system));
        // localStorage.setItem("location",location);
        // localStorage.setItem("planet", JSON.stringify(system));
        console.log(system);
    }
	
    function loadIt() {
        for (let i = 0; i < system.length; i++) {
            planetTabs(system[i]);          
        }
        // values = JSON.parse(localStorage.getItem(system));
    //     var values = [],
    //     keys = Object.keys(localStorage),
    //      i = keys.length;
    
    //  while ( i-- ) {
    //     values.push( localStorage.getItem(keys[i],("#searchTerm").val) );
    //     }
    // $(".list sidebar-content").append(values);
    //  return values;
     };
      
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
        const search = $("#searchTerm").val();
        //storage of birthdates in this format MM/DD/YYYY
        myFunction(search);
        wikiSearch(search);
        // const search = $(this).siblings("#searchTerm").val();
        // console.log(search);
        // localStorage.setItem("searchTerm",search);
        $("#response-container").show();
        saveIt(search);
        // planetTabs(search);
        // loadIt();
        $("#searchTerm").val("");
    });
    $("#clear").click(function() {
        $("#list").empty();
        localStorage.clear();
    })
    loadIt();
//function for rendering night mode ((more on the css side))
//generate music videos or album covers
//display movie posters

