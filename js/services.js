'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
 .value('version', '0.1')
 .service('Facebook', function($q, $rootScope) {
  
  // resolving or rejecting a promise from a third-party
  // API such as Facebook must be
  // performed within $apply so that watchers get
  // notified of the change
  var resolve = function(errval, retval, deferred) {
    $rootScope.$apply(function() {
      if (errval) {
        deferred.reject(errval);
      } else {
        retval.connected = true;
        deferred.resolve(retval);
      }
    });
  }

  var getGraphApi = function(FB, query) {
  	var deferred = $q.defer();
      FB.getLoginStatus(function(response) {
        if (response.status == 'connected') {
          FB.api(query, function(response) {
            resolve(null, response, deferred);
          });
        } else if (response.status == 'not_authorized') {
          FB.login(function(response) {
            if (response.authResponse) {
              FB.api(query, function(response) {
                resolve(null, response, deferred);
              });
            } else {
              resolve(response.error, null, deferred);
            }
          });
        } 
      });
      var promise = deferred.promise;
      promise.connected = false;
      return promise;
  };

  return {
    getFriends: function(FB) {
	  return getGraphApi(FB, '/me/friends?fields=id,name');
    },
    getUser: function(FB) {
	  return getGraphApi(FB, '/me');
    },
    getUserInfo: function(FB, userId) {
    	// console.log(userId + '?fields=id,name,hometown');
    	return getGraphApi(FB, userId + '?fields=id,name,hometown,location')
    },
    getNode: function(FB, node) {
    	return getGraphApi(FB, node);
    }
  }; 
});