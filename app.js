function togglePlayPause() {
  var audio = document.getElementById('audioPlayer');
  var playBtn = document.getElementById('play_btn');

  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<i class="bx bx-pause" onclick="togglePlayPause()"></i>';
  }
  else {
    audio.pause();
    playBtn.innerHTML = '<i class="bx bx-play" onclick="togglePlayPause()"></i>';
  }
}

let accessToken = null;

// This code will automatically pause the audio and reset play button when audio ends
// var audio = document.getElementById('audioPlayer');
// audio.addEventListener('ended', function() {
//   var playBtn = document.getElementById('play_btn');
//   audio.currentTime = 0;
//   playBtn.innerHTML = '<i class="bx bx-play"></i>';
// });

/**-----------------------------------------------------------SPOTIFY API BEGINS-------------------------------------------------------- */
//except not Authorised
// AUTHORIZE & GET ACCESS TOKEN
//ELSE TRY FUNCTIONS




// Frontend Code (JavaScript)
const playlistGenerator = document.getElementById('playlistGenerator');
const clientId = '644131def52b44a8b19fdd717524613f';
const clientSecret = 'f91cb876966f4afe9e33170a0b66c137';
const redirectUri = 'http://127.0.0.1:5501/callback';
const scopes = ['playlist-read-private', 'playlist-read-collaborative'];

playlistGenerator.addEventListener('click', async () => {
  // Start the authorization process
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join( )}&response_type=code`;
// console.log(window.location.href);
 
  // Fetch playlists after authorization
  // accessToken = await getAccessToken();
  // console.log(accessToken);
  // if (accessToken) {
  //   await fetchPlaylists(accessToken);
  // }

});
const button2 = document.getElementById('button2');
  
button2.addEventListener('click', async () => {
//   // Fetch playlists after authorization
  accessToken = await getAccessToken();
  console.log(accessToken);
  if (accessToken) {
    await fetchPlaylists(accessToken);
  }
 });

//-----GET ACCESS TOKEN------
async function getAccessToken() {
  try
   {
    ///callback
    const response = await fetch('/callback');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    accessToken = data.access_token;
    return accessToken;
  } 
  catch (error) {
    console.error('Error:', error);
    return null;
  }
}


//---------SEARCH PLAYLIST------------

const searchKeyword = 'happy';
async function fetchPlaylists(accessToken)
{
try {
  const playlistUrl =
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchKeyword)}&type=playlist`;

  const response = await axios.get(playlistUrl, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  const data = response.data;
  const playlistDetails = document.getElementById("playlistDetails");
  playlistDetails.innerHTML = `<p>${data.playlists.items[0].name}</p>`;

} 
catch (error) {
  console.error('Error:', error);
}
}



// // Fetch the authorization code from the response URL
// const authorizationCode = getQueryParam(window.location.href, 'code');
// console.log('Authorization Code:', authorizationCode);

// if (authorizationCode) {
//   // Call the fetchAccessToken function when needed, e.g., after user authorization
// const accessToken = await fetchAccessToken(authorizationCode);
// if (accessToken) {
//   console.log('Access Token:', accessToken);
//   // Use the access token as needed
// }else{
//       console.log('Access token could not be fetched.');
//     }
//   }


// Function to extract query parameters like authorization code from a URL
const getQueryParam = (url, paramName) => {
  console.log("getQueryParam function running");
  const params = new URLSearchParams(new URL(url).search);
  return params.get(paramName);
};


// Convert a string to base64 using TextEncoder
function base64Encode(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  return btoa(String.fromCharCode.apply(null, data));
}


// // Call the fetchAccessToken function when needed, e.g., after user authorization
// const accessToken = await fetchAccessToken(authorizationCode);
// if (accessToken) {
//   console.log('Access Token:', accessToken);
//   // Use the access token as needed
// }



//frontend---------------
// async function getAuth() {
//   try
//    {
//     ///callback
//     const response = await fetch('/callback');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     accessToken = data.access_token;
//     return accessToken;
//   } 
//   catch (error) {
//     console.error('Error:', error);
//     return null;
//   }
// }






  // Call the function and use the access token
  // getAccessToken()
  //   .then(accessToken => {
  //     if (accessToken) {
  //       console.log('Access Token:', accessToken);
  //       // Use the access token as needed
  //     } else {
  //       console.log('Failed to retrieve access token.');
  //     }
  //   });



// document.addEventListener('DOMContentLoaded', function() {
//   const axios = window.axios; // Assuming you've loaded Axios in your HTML
  
//   const playlistGenerator = document.getElementById('playlistGenerator');
//   var access_token = null;

//   function authorization() {
//     const client_id = '644131def52b44a8b19fdd717524613f';
//     const client_secret = 'f91cb876966f4afe9e33170a0b66c137';

//     const credentials = `${client_id}:${client_secret}`;
//     const base64Credentials = btoa(credentials);
// //CLIENT-CREDENTIAL AUTHORIZATION 
//     const authOptions = {
//       headers: {
//         'Authorization': `Basic ${base64Credentials}`,
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       params: {
//         grant_type: 'client_credentials'
//       }
//     };

//     const url = 'https://accounts.spotify.com/api/token';

//     axios.post(url, null, authOptions)
//       .then(response => {
//         access_token = response.data.access_token;
//         const body = response.data;
//         console.log(body);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }

// // Step 2: Search for a playlist



//   playlistGenerator.addEventListener('click', async function() {
    
//     fetchPlaylists();
//   });
// });  

// const searchKeyword = 'happy';
// const searchPlaylist = async (access_token) => {
//   const searchUrl = 'https://api.spotify.com/v1/search?q=${encodeURIComponent(searchKeyword)}&type=playlist';
//   const response = await fetch(searchUrl, {
//     headers: {
//       'Authorization': `Bearer ${access_token}`
//     }
//   });
//   const data = await response.json();
//   return data.playlists.items[0]; // Assuming you want the first playlist
// };


// function authorization(){
// var client_id ='644131def52b44a8b19fdd717524613f';
// var  client_secret = 'f91cb876966f4afe9e33170a0b66c137';

// // var authOptions = {
//  var url= 'https://accounts.spotify.com/api/token';
//  fetch(url, {
//   method: 'POST',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// }).then(response => response.json())
// .then(var token = body.access_token);

// alert(token);

// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     var token = body.access_token;
//     alert(token);

//   }
// });






// https://accounts.spotify.com/authorize?client_id=644131def52b44a8b19fdd717524613f&response_type=code&redirect_uri=encodeURI(http://127.0.0.1:5501/)&show_dialog=true

// function authorization(){
//   var redirect_uri = "http://127.0.0.1:5501/";
//   const AUTHORIZE = 'https://accounts.spotify.com/authorizehttps://accounts.spotify.com/authorize';
//   const clientId = '644131def52b44a8b19fdd717524613f';
//   const clientSecret = 'f91cb876966f4afe9e33170a0b66c137';



// var app = express();

// app.get('/login', function(req, res) {

//   var state = generateRandomString(16);
//   var scope = 'user-read-private user-read-email';

//   res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: clientId,
//       scope: scope,
//       redirect_uri: redirect_uri,
//       state: state
//     }));
// });
  // let url = AUTHORIZE;?client_id=
  //     url += '?client_id=' + clientId;
  //     url += '&response_type=code';
  //     url += '&redirect_uri=' + encodeURI(redirect_uri);
  //     url += '&show_dialog=true';
  //    window.location.href = url;
  //      //  window.history.pushState("", "",url);


/* 

document.addEventListener('DOMContentLoaded', async function() {

  const searchButton = document.getElementById('searchButton');
  
  const playlistDetailsContainer = document.getElementById('playlistDetails');
  const playlistGenerator = document.getElementById('playlistGenerator');
  const AUTHORIZE = 'https://accounts.spotify.com/authorize';
  var redirect_uri = "http://127.0.0.1:5501/happy.html";

  const clientId = '644131def52b44a8b19fdd717524613f';
  const clientSecret = 'f91cb876966f4afe9e33170a0b66c137';
  const searchKeyword = 'happy';

  function requestAuthorization()
  {
        let url = AUTHORIZE;
        url += '?client_id=' + clientId;
        url += '&response_type=code';
        url += '&redirect_uri=' + encodeURI(redirect_uri);
        url += '&show_dialog=true';
        // window.location.href = url;
        window.history.pushState("", "",url);
  }

  playlistGenerator.addEventListener('click',async function(){
    
    // Get access token from Spotify API
  
    
    requestAuthorization();
    // Step 1: Get authorization from the user
    let code = getCode();
    fetchAccessToken( code );

    function getCode(){
      let code = null;
      const queryString = window.location.search;
      if ( queryString.length > 0 ){
          const urlParams = new URLSearchParams(queryString);
          code = urlParams.get('code')
      }
      return code;
  }

    // // Step 2: After user grants authorization, the callback URL will have the access token
    // const urlParams = new URLSearchParams(window.location.hash.substring(1));
    // const accessToken = urlParams.get('access_token');
    
//     requestAuthorization();
//     // Step 1: Get access token

    function fetchAccessToken( code ){
      let body = "grant_type=authorization_code";
      body += "&code=" + code; 
      body += "&redirect_uri=" + encodeURI(redirect_uri);
      body += "&client_id=" + client_id;
      body += "&client_secret=" + client_secret;
      callAuthorizationApi(body);
  }
  function callAuthorizationApi(body){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ":" + client_secret));
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
}
  });
});
*/
