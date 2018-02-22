//GET : /survey display survery.html
//GET : / default to home.html
//GET : /* catch all else

var path = require('path');

module.exports = function (app) {

    // open survey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
   
    // open home page
    app.use('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
       
};