/***
 * 786*/


const fs = require('fs');
const request = require('postman-request');
request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

  //  response.status(200).json(body);
});


request('http://google.com/').pipe(fs.createWriteStream('doodle.txt'));
