'use strict';

flickrApp.controller('flickrController',
  function FlickrController($scope, $http) {

    $scope.tiles = {};
    $scope.showLoading = false;

    $scope.searchTags = function() {
      $scope.showLoading = true;
      var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=JSON_CALLBACK";
      flickrAPI = flickrAPI + "&tags" + encodeURIComponent($scope.searchTagsElm) + "&format=json";

      $http.jsonp(flickrAPI)
        .success(function(data, status, headers, config) {
          $scope.tiles = data;
          $scope.showLoading = false;
        })
        .error(function(data, status, headers, config) {
          window.alert('Something went wrong, please try again later!');
          $scope.showLoading = false;
        });

      //Clear function
      $scope.remove = function() {
        $scope.tiles = "";
        $scope.searchTagsElm = null;
      }
    };
  });