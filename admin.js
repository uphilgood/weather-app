var fs = require("fs");
var UserSearch = require("./UserSearch");
var moment = require("moment");
var inquirer = require('inquirer');

var WeatherAdmin = function () {
    
    this.getData = function () {
        fs.readFile("log.txt", "utf8", function (error, data) {
            console.log(data);
        });
    };
    
    this.userWeather = function () {
        inquirer.prompt([{
                name: "name",
                message: "What is your name?"
            },
            {
                name: "location",
                message: "what location are you in?"

            }
        ]).then(function (answer) {
            var newUserSearch = new UserSearch(answer.name, answer.location);
            var logTxt =
                "\nName: " +
                newUserSearch.name +
                " Location: " +
                newUserSearch.location +
                " Date: " +
                moment(newUserSearch.date).format('MMMM Do YYYY, h:mm:ss a');

            fs.appendFile("log.txt", logTxt, function (err) {
                if (err) throw err;
            });

            newUserSearch.getWeather();
        })
    }
}

module.exports = WeatherAdmin;