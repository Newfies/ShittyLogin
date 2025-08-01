// Shitty Ass Packages
const express = require('express');
const app = express();
require('dotenv').config();

// Shitty Ass Variables
const PORT = process.env.PORT || '7000'; // Port 7000 Because Why The Fuck Not

// Shitty Ass Still Considered Variable But A Specific Variable For JSON Shit
const users = [];

// Shitty Ass Section I Would Label By Get Or Post But I've Found Out Is Called Routes (Yes Literally Just Learned This)
app.get('/users', (req, res) => { // Why Would We Even Have This Shitty Ass "Route"
    res.json(users)
})

// Shitty Ass Listening On Port Havin' Ass
app.listen(PORT)

// Shitty Ass YouTube Tutorial I Made This Off Of Because I Can't Code For Shit
// https://www.youtube.com/watch?v=Ud5xKCYQTjM