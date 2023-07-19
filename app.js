
var play_btn = document.getElementById('play_btn');
var audioPlayer = document.getElementById('audioPlayer');
var isPlaying = false;

play_btn.addEventListener('click', function() {
  if (!isPlaying) {
    audioPlayer.play();
    play_btn.innerHTML = '<i class="bx bx-pause"></i>';
    isPlaying = true;
  } else {
    audioPlayer.pause();
    play_btn.innerHTML = '<i class="bx bx-play"></i>';
    isPlaying = false;
  }
});











/*

var request = require("request");
var user_id = "bhupesh";
var token = "bhupesh";
var playlist-url = 

curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=644131def52b44a8b19fdd717524613f&client_secret=f91cb876966f4afe9e33170a0b66c137"
 

     const apiKey = 'YOUR_API_KEY';
     const apiUrl = 'https://v1.nocodeapi.com/bhupesh/spotify/pkLUoPIJKberWwJo/playlists?id=37i9dQZF1DXdPec7aLTmlC';
     
     const headers = {
       'Authorization': `Bearer ${apiKey}`
     };
     
     fetch(apiUrl, { headers })
       .then(response => {
         if (response.ok) {
           return response.json();
         } else {
           throw new Error(`Request failed with status code ${response.status}`);
         }
       })
       .then(data => {
         // Process the data as needed
         console.log(data);
       })
       .catch(error => {
         console.error(error);
       });


       $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();
    
    });
        */