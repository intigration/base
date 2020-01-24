"use strict";
/***
 * 786*/
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const request = require('postman-request');
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    //  res.send("respond with a resource");
    request('http://www.google.com', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        //  response.status(200).json(body);
        res.render('request', { response: response });
    });
    //   res.render('index', { title: 'Express' });
});
request('http://google.com/').pipe(fs.createWriteStream('doodle.txt'));
exports.default = router;
//# sourceMappingURL=request.js.map