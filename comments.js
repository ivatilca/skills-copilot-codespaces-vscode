//crete a web server
const express = require('express');
const app = express();
//import the comments module
const comments = require('./comments');
//import the body-parser module
const bodyParser = require('body-parser');
//use the body-parser module to parse the body of the POST request
app.use(bodyParser.urlencoded({extended: true}));
//serve the comments module at the /comments path
app.use('/comments', comments);
//start the server on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});