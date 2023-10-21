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
const clientId = "#YOUR-CLIENT-ID";
const clientSecret = "#YOUR-CLIENT-SECRET";
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
