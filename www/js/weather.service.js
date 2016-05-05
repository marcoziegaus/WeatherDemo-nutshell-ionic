angular.module('starter').factory('WeatherService', function($http){

	var appId = '******************************';

  return {
    getCurrentWeather: function() {
      return $http.get("http://api.openweathermap.org/data/2.5/weather?q=Passau&lang=en&mode=json&units=metric&APPID=" + appId);
    },
    getForecastData: function() {
    	return $http.get("http://api.openweathermap.org/data/2.5/forecast?q=Passau&lang=en&mode=json&units=metric&APPID=" + appId);
    }
  };

});
