var module = angular.module('votingApp',[]);
module.controller('controllerName',['$scope', '$http',function ($scope, $http) {
	// body...
	console.log($scope.weekend);
	$scope.sendValue = function() {
		var dataObj = {
				name : 'Dheeraj',
				employees : 'Accenture',
				headoffice : 'Magarpatta'
		};
		$http.post('http://127.0.0.1:8081/submitValue', dataObj).success(function(res){
			console.clear();
			console.log('sent'+dataObj);
			console.log(res.value);
			$scope.returnMessage = res.value;
		}).error(function(){
			alert('its error');
		});
	}
}]);
