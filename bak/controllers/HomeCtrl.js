// define([], function() {
// 	return ['$scope', function($scope) {
// 		// You can access the scope of the controller from here
// 		$scope.data = {'hey this a test' : 32};

// 		// because this has happened asynchroneusly we've missed
// 		// Angular's initial call to $apply after the controller has been loaded
// 		// hence we need to explicityly call it at the end of our Controller constructor
// 		$scope.$apply();
// 	}];
// });

// define(['Angular'], function (angular) {
//  var module = angular.module('myApp.controllers');

//  module.controller('HomeCtrl', function($scope) {
//    $scope.data = {'hey this a test' : 34};
//    $scope.$apply();
//  });
// });