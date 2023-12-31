const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000', 'http://localhost:3443', 'https://localhost:4200'];
var corsOptionsDelegate = (req, callback) => { 
    var corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors(); // cors() without any options will allow all origins
exports.corsWithOptions = cors(corsOptionsDelegate); // cors() with options will allow only whitelisted origins