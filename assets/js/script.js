//universal variables
//function for rendering night mode ((more on the css side))
//storage of birthdates in this format MM/DD/YYYY
//loading of birthdates
//APIs for song titles api key https://api.musixmatch.com/ws/1.1/  68d7dd5005e9eaf38415e4045967649a
fetch(
  "https://api.musixmatch.com/ws/1.1/track_id?api_key=68d7dd5005e9eaf38415e4045967649a",
  { mode: "no-cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

//   fetch(
//     'https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
//   )
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       console.log(data);
//     });
//     , { mode: 'no-cors'}
//generate music videos or album covers
//APIs for Movie titles
//display movie posters
