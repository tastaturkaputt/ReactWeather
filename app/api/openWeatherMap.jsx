var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=d0babe1b02e19c6170cfed05cfadba07&units=metric';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.count === 0){
        throw new Error(res.data.message);
      }else{
        return res.data.list[0].main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
