// POST : api/friends POST update from survey.html - handle compatibility logic
// GET : api/friends GET  display JSON of all possible friends
// compatibility checks for friends go here

var path = require('path');

var friendList = require('../data/friends.js'); // get friends

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendList);
    });

    app.post('/api/friends', function (req, res) {
        var surveyResponse = req.body;
        var surveyScores = surveyResponse.scores;
        var matchName = "Fred";
        var matchImage = "pic.com";
        var perfectFriend = 10000;
    
        // for (var i=0; i < 10; i++) {
        //     var totalDifference = 0;
        //     for (var j=0; j < surveyScores.length; j++) {
        //         totalDifference += Math.abs(parseInt(surveyScores[j]) - parseInt(friendList[i].scores[j]));
        //     }
        //     if (totalDifference < perfectFriend) {
        //         perfectFriend = totalDifference;
        //         matchName = friendList[i].name;
        //         matchImage = friendList[i].image;
        //     }
        //     console.log("Match Name: " + matchName);
        //     console.log("Match Photo:" + matchImage);
        // }
console.log(surveyResponse);
        // add friend
        friendList.push(surveyResponse);

        // Send appropriate response
console.log(matchName);
        res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });

    });
};