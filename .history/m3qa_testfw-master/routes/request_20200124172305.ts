/***
 * 786*/


const fs = require('fs');
const request = require('postman-request');


import express = require('express')
const router = express.Router();


router.get('/', (req: express.Request, res: express.Response) => {
  //  res.send("respond with a resource");

  request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

  //  response.status(200).json(body);
  res.render('cards', { response: response });

});


    
 //   res.render('index', { title: 'Express' });

});

request('http://google.com/').pipe(fs.createWriteStream('doodle.txt'));
