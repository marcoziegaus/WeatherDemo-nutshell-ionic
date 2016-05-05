angular.module('starter')
  .controller('WeatherForecastListController', function(WeatherService){
  var vm = this;

  vm.text = "weatherForecastList";

  WeatherService.getForecastData().success(function(data) {
  	vm.forecastData = data;
  	vm.forecasts = vm.forecastData.list;
  });


});