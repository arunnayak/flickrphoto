'use strict';

flickrApp.controller('flickrController',
  function FlickrController($scope, $http, photosList) {

    $scope.tiles = {};
    $scope.showLoading = false;

    $scope.searchTags = function(flickrAPI) {
    $scope.showLoading = true;
      photosList.getPhotos($scope.searchTagsElm).then(function(data){
            $scope.tiles = data;
            $scope.showLoading = false;
        });

      //Clear function
      $scope.remove = function() {
        $scope.tiles = "";
        $scope.searchTagsElm = null;
      }
    };
  });