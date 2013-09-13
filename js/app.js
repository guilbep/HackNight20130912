'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'ngResource', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {redirectTo: '/home'});
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/user/:id', {templateUrl: 'partials/user.html', controller: 'UserCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }])

  .run(function($rootScope) {

      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(0.397, 0.644),
          zoom: 3,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        $rootScope.map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
       FB.init({
      appId      : '636965056335073',
      channelUrl : '//pierreguilbert.com/'
    });
     console.log('init done');
    FB.login();
// function initialize() {
//   var mapOptions = {
//     zoom: 2,
//     center: new google.maps.LatLng(0.397, 0.644),
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };

//   var map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);

//    var marker = new google.maps.Marker({
//    //"latitude": 31.790277777778, "longitude": -106.42333333333
//    position: new google.maps.LatLng(31.7963882,-106.424922),
//    map: map,
//    title: 'Hello World!'
//  });
// }

// function loadScript() {
//   var script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
//       'callback=initialize';
//   document.body.appendChild(script);
// }
  });


