'use strict';

flickrApp.factory('photosList', function($http, $q) {
       return {
       
       getPhotos: function(val) {
       var deferred = $q.defer();

       var url = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=JSON_CALLBACK&tags=' + encodeURIComponent(val) + '&format=json';
       $http.jsonp(url)
       .success(function (data, status, headers, config) {
              console.log(data);
              deferred.resolve(data);
          }).error(function (data, status, headers, config) {
              //this always gets called
              console.log(status);
              deferred.reject(status);
          });
          return deferred.promise;
        }


    }  
 });