'use strict';

flickrApp.factory('photos', function($http, $q) {
       return {
         getPhotos: function() {
           var deferred = $q.defer();

           var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=JSON_CALLBACK";
               flickrAPI = flickrAPI + "&tags" + encodeURIComponent($scope.searchTagsElm) + "&format=json";
       
           
         $http.get(flickrAPI).success(function (data, status, headers, config) {
                console.log(data);
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                //this always gets called
                console.log(status);
                deferred.reject(status);
            });
            return deferred.promise;

     }  