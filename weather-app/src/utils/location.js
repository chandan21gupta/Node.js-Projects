const request = require('request');

var temperature = (location,callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID=2e602d67692d43c39755cd1c75fc28e3';
    request(url,(error,response,body) => {
        if(error){
            return callback(error,undefined);
            //return;
        }
        var data = JSON.parse(body);

        if(data.message){
            return callback(error,undefined);
            //return;
        }

        return callback(undefined,data.main);
        //return data.main;
    });
};





//console.log(data);
module.exports = temperature;

//console.log(data);