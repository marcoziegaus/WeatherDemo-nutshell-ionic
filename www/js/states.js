angular.module('starter')
	.config(function($stateProvider, $urlRouterProvider) {


	$urlRouterProvider.otherwise('/');

	
	$stateProvider
	.state('currentWeather', {
		url: '/',
		templateUrl: 'templates/currentWeather.html',
		controller: 'CurrentWeatherController',
		controllerAs: 'vm'
	})
	.state('forecastList', {
		url: '/forecast',
		templateUrl: 'templates/forecastList.html',
		controller: 'WeatherForecastListController',
		controllerAs: 'vm'
	})
	.state('forecastDetail', {
		url: '/forecast/:timestamp',
		templateUrl: 'templates/forecastDetail.html',
		controller: 'WeatherForecastDetailController',
		controllerAs: 'vm',
		params: {
			forecast: null
		}
	}
	);
});