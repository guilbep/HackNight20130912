'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeCtrl', ['$scope', 'Facebook', function($scope, fb) {
  	fb.getFriends(FB).then(function(response) {
  		$scope.data = response;
  	});
  }])
  .controller('UserCtrl', ['$scope', '$routeParams', 'Facebook', function($scope, $routeParams, fb) {
  	console.log($routeParams);
  	fb.getUserInfo(FB, $routeParams.id).then(function(response) {
  		$scope.data = response;
  		if (!!$scope.data && !!$scope.data.location && !!$scope.data.location.id) {
	  		fb.getNode(FB, $scope.data.location.id).then(function(response) {
	  			$scope.location = response;
	  			console.log($scope.location.location);
  			         var marker = new google.maps.Marker({
			         //"latitude": 31.790277777778, "longitude": -106.42333333333
			         position: new google.maps.LatLng($scope.location.location.latitude,
			         		$scope.location.location.longitude),
			         map: $scope.map,
			         title: 'Hello World!'
			       });
	  		});
	  	}
  	});

  }]);



  // getUserInfo