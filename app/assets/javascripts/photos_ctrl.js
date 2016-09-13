(function() {
  "use strict";

  angular.module("app").controller("photosCtrl", function($scope, $http){
      window.scope = $scope;

  		$scope.setup = function(){
  			$http.get('/api/v1/photos.json').then(function(response){
          console.log(response);
  				$scope.drawings = response.data;
  			});
  		};
      
  	});
}());