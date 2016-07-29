var app = angular.module('myApp',[]);
app.controller('userCtrl', function($scope, $http){
	$http.get("phps/userDetail.php").success(function(response){
		$scope.user = response.records;
	});
});