const express = require('express');
const cors = require("cors")
const spotifyWebApi = require('spotify-web-api-node')

const app = express();
app.use(cors())

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/',
        clientId: '9e8aaf9a74b742819838f7a4d0c3d080',
        clientSecret: 'f9ceb465a230414abf8d20452aaa7c66'
    })

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    }).catch(() => { 
       res.sendStatus(400) 
    })
})

app.listen(3001)