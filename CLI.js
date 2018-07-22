
var WeatherAdmin = require("./admin.js");
var inquirer = require('inquirer');


inquirer.prompt([{
    name: "user",
    message: "Are you a user or admin?"

}]).then(function (answer) {
    console.log(answer.user)
    if (answer.user === "admin") {
        let masterAdmin = new WeatherAdmin()
        masterAdmin.getData();
    } if (answer.user === "user") {
        let regUser = new WeatherAdmin()
        regUser.userWeather()
    }
});




