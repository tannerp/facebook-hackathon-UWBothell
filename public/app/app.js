angular.module('userApp', [
	'ngAnimate',
	'app.routes',
	'authService',
	'userService',
	'mainCtrl',
	'userCtrl',
	//'homeCtrl'
	])
.config(function($httpProvider)	{	
	//attach our auth inteceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');
});