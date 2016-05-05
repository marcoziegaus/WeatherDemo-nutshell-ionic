angular.module('starter')
  .controller('WeatherForecastDetailController', function($stateParams){
  var vm = this;

  vm.forecast = $stateParams.forecast;
});
