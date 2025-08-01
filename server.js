// Shitty Ass Packages
const express = require('express');
const app = express();
require('dotenv').config();

// Shitty Ass Variables
const PORT = process.env.PORT || '7000';

// Shitty Ass Listening On Port Havin' Ass
app.listen(PORT)