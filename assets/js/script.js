function myFunction() {
var searchTerm = document.querySelector('#searchTerm').value;
var images = {};
    //APIs for nasa image/video searches
    fetch(
        'https://images-api.nasa.gov/search?q=' + searchTerm 
    )
    .then(function(nasaResponse){
        console.log(nasaResponse);
        return nasaResponse.json();
    })
    .then(data => {images=data;
        Object.keys(data).forEach((key) => {
            var seePic = document.createElement("span");
            var spaceImg = document.createElement('img');
            spaceImg.setAttribute('src', data[key]);
            console.log(data[key]);
            seePic.appendChild(spaceImg);
           document.querySelector('#response-Nasa').appendChild(seePic);
        });
    })
    .catch(err => console.error(err));
        var findText=$("#searchTerm").val();
        $("#response-Nasa").empty();
      
        console.log({
         search_term: findText,
         images
        })
      
        Object.keys(images).forEach((key) => {
          console.log(images[key])
        });
      
      
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
      }

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

