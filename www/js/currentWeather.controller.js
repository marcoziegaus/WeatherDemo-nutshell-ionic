angular.module('starter')
  .controller('CurrentWeatherController', function($scope, WeatherService){
  var vm = this;

  vm.temperature = 24.2;
  vm.weatherDescription = 'Sunny';
  vm.locationName = 'Passau';
  vm.cloudiness = 6;
  vm.windDirection = 'NE';
  vm.windSpeed = 2.4;
  vm.humidity = 43;

  vm.refreshWeatherData = refreshWeatherData;


  function refreshWeatherData() { 
    console.log("refreshWeatherData");
    WeatherService.getCurrentWeather().success(function(data){
      console.log(data);
      vm.temperature = data.main.temp;
      vm.weatherDescription = data.weather[0].description;
      vm.locationName = data.name;
      vm.cloudiness = data.clouds.all;
      vm.windDirection = data.wind.deg;
      vm.windSpeed = data.wind.speed;
      vm.humidity = data.main.humidity;
    });
  }



});
