'use strict';

angular.module('workerManagementSystemApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.videos = ['abc','ABC','ab1','bc2'];
    $scope.currentVideos = "https://www.youtube.com/embed/eqJ9goTIpN4";
    $scope.buttonText = ">";
    $scope.photo = "data:image/jpeg;base64,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";
    $scope.isOpende = false;
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
    $scope.openDetails = function(){
      $scope.isOpende=!$scope.isOpende;
    }
    $scope.$on('$destroy', function () {
      //socket.unsyncUpdates('thing');
    });
  });
