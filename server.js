// Handle Callback (calback.html)encodeURIComponent
// After user authorization, Spotify redirects back to your site with an authorization code in the query parameter.
// You'll need to handle this code on your callback page.
const express = require("express");
const axios = require("axios");
const app = express();

// Set your client ID, client secret, and redirect URI
const clientId = "#YOUR-CLIENT-ID";
const clientSecret = "#YOUR-CLIENT-SECRET";
const redirectUri = "http://127.0.0.1:5501/callback";

const bodyParser = require("body-parser");
// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

//now we are going to define a function
//that can fetch accesstoken from
//the callback function and return it to frontend

//this is function to handle callback url from spotify
//and generate accesstoken with it

// Store the access token globally (not recommended for production)
let accessToken = null;
//.get
app.get('/callback', async (req, res) => {
  try {
    console.log("Callback started");

    // Get the authorization code from the query parameter
    const authorizationCode = req.query.code;
    console.log("Authorization code:", authorizationCode);

    // Spotify token endpoint
    const spotifyTokenUrl = "https://accounts.spotify.com/api/token";
    // Exchange authorization code for an access token
    const response = await fetch(spotifyTokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`
        ).toString("base64")}`,
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${encodeURIComponent(
        redirectUri
      )}`,
    });

    const data = await response.json();

    // Store the access token globally (not recommended for production)
    accessToken = data.access_token;
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error " });
  }
});

// app.get("/callback", async (req, res) => {
//   try{
//     console.log("Callback started");

//     // Get the authorization code from the query parameter
//     const authorizationCode = req.query.code;
//     console.log("Authorization code:", authorizationCode);

//     // Spotify token endpoint
//     const spotifyTokenUrl = 'https://accounts.spotify.com/api/token';
//     // Exchange authorization code for an access token
//     const response = await fetch(spotifyTokenUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization: `Basic ${Buffer.from(
//           `${clientId}:${clientSecret}`
//         ).toString("base64")}`,
//       },
//       body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(
//         redirectUri
//       )}`,
//     });

//     const data = await response.json();

//     // Store the access token globally (not recommended for production)
//     accessToken = data.access_token;
//   }
//   catch(error){
//     res.status(500).json({error: 'Internal Server Error '});
//   }
//  });

// Endpoint to get the access token from the backend
// app.get('/get-access-token', (req, res) => {
//   // Return the access token to the frontend
//   res.json({ access_token: accessToken });
// });

// // Set up the authentication options
// const authOptions = {
//   url: "https://accounts.spotify.com/api/token",
//   data: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirectUri}`,
//   headers: {
//     Authorization: `Basic ${Buffer.from(
//       `${clientId}:${clientSecret}`
//     ).toString("base64")}`,
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
// };

// // Exchange authorization code for access token
// const tokenResponse = await axios.post(authOptions.url, authOptions.data, {
//   headers: authOptions.headers,
// });
// const accessToken = tokenResponse.data.access_token;

//     // Send the access token back to the frontend
//     res.json({ access_token: accessToken });
//     console.log("Access token sent:", accessToken);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

// Start the server
app.listen(5501, () => {
  console.log("Server is running on port 5501");
});

// // Backend Code (Node.js)
// const express = require('express');
// // import express from 'express';
// const axios = require('axios');
// const app = express();
// const cors = require('cors');
// // const morgan = require('morgan');

// const clientId = '644131def52b44a8b19fdd717524613f';
// const clientSecret = 'f91cb876966f4afe9e33170a0b66c137';
// const redirectUri = 'http://127.0.0.1:5501/happy.html';

// // app.use(morgan('dev'));

// // Use the cors middleware to enable CORS
// app.use(cors());

// app.get('/callback', async (req, res) => {
//     console.log("CAllback");
//   const authorizationCode = req.query.code;
//   // Exchange authorization code for access token
//   console.log("Authorization code:", authorizationCode);

//   try{
//     const authOptions = {
//         url: 'https://accounts.spotify.com/api/token',
//         data: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirectUri}`,
//         headers: {
//           'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     };

//   const tokenResponse = await axios.post(authOptions.url, authOptions.data, { headers: authOptions.headers });

//   const accessToken = tokenResponse.data.access_token;
//   // Send the access token back to the frontend
//   res.json({ access_token: accessToken });
//   console.log(accessToken);
//   }

//   catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred' });
//   }

// });

// app.listen(5501, () => {
//   console.log('Server is running on port 5501');
// });
