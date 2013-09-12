require.config({
	paths: {
		bootstrap: '../../vendor/bootstrap/dist/js/bootstrap',
		angular: '../../vendor/bower-angular/angular',
		angularRoute: '../../vendor/bower-angular-route/angular-route',
		angularResource: '../../vendor/bower-angular-resource/angular-resource',
		// text: '../../vendor/requirejs-text/text',
		'facebook': '//connect.facebook.net/en_US/all',
		// HomeCtrl : 'controllers/HomeCtrl'
	},
	baseUrl: 'app/js',
	shim: {
		'facebook' : {
			export: 'FB'
		},
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularResource': ['angular'],
		// 'HomeCtrl' : ['angular'],
		// 'angularMocks': {
		// 	deps:['angular'],
		// 	'exports':'angular.mock'
		// }
	},
	priority: [
		"angular"
	]
});

// hey Angular, we're bootstrapping manually!
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		$html.addClass('ng-app');
		angular.bootstrap($html, [app['name']]);
	});

app.run(function($rootScope) {

  $rootScope.$safeApply = function() {
    var $scope, fn, force = false;
    if(arguments.length == 1) {
      var arg = arguments[0];
      if(typeof arg == 'function') {
        fn = arg;
      }
      else {
        $scope = arg;
      }
    }
    else {
      $scope = arguments[0];
      fn = arguments[1];
      if(arguments.length == 3) {
        force = !!arguments[2];
      }
    }
    $scope = $scope || this;
    fn = fn || function() { };
    if(force || !$scope.$$phase) {
      $scope.$apply ? $scope.$apply(fn) : $scope.apply(fn);
    }
    else {
      fn();
    }
  };
 }

});
