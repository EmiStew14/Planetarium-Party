$(document).ready(function(){
    //APIs for song titles

    //APIs for Movie titles

//universal variables
$("#birthday").datepicker({dateFormat: "mm/dd/yyyy"});
var getInput= $("#birthday").datepicker().val();
console.log(getInput);
// function for saving data
function saveDate() {
    var getInput =$("#birthday").datepicker().val();
    console.log(getInput);
    var selectDate = ($(getInput).text().split("/")[3]);
    console.log(selectDate);
}
saveDate();

//function for rendering night mode ((more on the css side))
    $("#birthdata").click(function() {
        //storage of birthdates in this format MM/DD/YYYY
        const dates = $(this).siblings("#birthday").val();
        console.log(dates);
        localStorage.setItem("birthday",dates);

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

    $("birthdata").click(function(){});

});
function getArt() {

};
//function for rendering night mode ((more on the css side))
//generate music videos or album covers
//display movie posters

