define(['angular', 'services', 'fb'], function (angular) {
	'use strict';

	return angular.module('myApp.controllers', ['myApp.services'])
		// Sample controller where service is being used
		.controller('HomeCtrl', ['$scope', 'version', function ($scope, version) {
			$scope.scopedAppVersion = version;
			// You can access the scope of the controller from here
			$scope.data = {'hey this a test' : 31};
			// $scope.$apply();
			// FB.init({
			// 	appId      : '636965056335073',
			// 	channelUrl : '//pierreguilbert.com/'
			// });
			// FB.login();
			FB.getLoginStatus(function(response) {
				console.log(response);
				FB.api('/me/friends', function(response) {
					$scope.data = response.data;
					console.log(response.data);
				});
			});
		}])
		// More involved example where controller is required from an external file
		// .controller('MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
		// 	require(['controllers/myctrl2'], function(myctrl2) {
		// 		// injector method takes an array of modules as the first argument
		// 		// if you want your controller to be able to use components from
		// 		// any of your other modules, make sure you include it together with 'ng'
		// 		// Furthermore we need to pass on the $scope as it's unique to this controller
		// 		$injector.invoke(myctrl2, this, {'$scope': $scope});
		// 	});
		// }]);
});