var module = angular.module('votingApp',[]);
module.controller('controllerName',['$scope', '$http',function ($scope, $http) {
	// body...
	console.log($scope.weekend);
	$scope.sendValue = function() {
		console.log($scope.weekend);
		$http.get('http://127.0.0.1:8081/submitValue', 'dheeraj').then(function(res){
			console.clear();
			console.log(res.data.value);
		});
	}
}]);
