var module = angular.module('votingApp',[]);
module.controller('controllerName',['$scope', '$http',function ($scope, $http) {
	// body...
	console.log($scope.weekend);
	$scope.sendValue = function() {
		console.log($scope.weekend);
		$http.post('http://127.0.0.1:8081/submitValue', {name:'DheerajKumarMehta'}).then(function(res){
			console.clear();
			console.log(res);
		});
	}
}]);
