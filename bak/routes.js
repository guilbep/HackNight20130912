define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {redirectTo: '/home'})
		$routeProvider.when('/home', {
			templateUrl: 'app/partials/home.html',
			controller: 'HomeCtrl'
		});
		$routeProvider.otherwise({redirectTo: '/home'});
	}]);

});