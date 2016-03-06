var module = angular.module('votingApp',[]);
module.controller('controllerName',['$scope', '$http',function ($scope, $http) {
	// body...
	console.log($scope.weekend);
	//$scope.result = false;
	$scope.sendValue = function() {
		
		var dataObj = {
				name : 'DheerajKumar',
				choice: $scope.weekend
		};
		$http.post('/submitValue', dataObj).success(function(res){
			console.clear();
			console.log('sent'+dataObj);
			console.log(res.value);
			$scope.returnMessage = res.value;
		}).error(function(){
			alert('its error');
		});
	}

	$scope.getTotalCount = function(){
		$scope.ok = 0;
		$scope.good = 0;
		$scope.not_good = 0;
		var auth = {
			username: $scope.username,
			password: $scope.password
		}
		$http.post('/gettotalcount', auth).then(function(data){
			console.log(data);
			var resultArray = data.data.userChoice;
			resultArray.forEach(function(val){
				console.log(val.value);
				var choice = val.value;
				if (choice == 'ok') {
					$scope.ok++;
				}
				if (choice == 'good') {
					$scope.good++;
				}
				if (choice == 'not_good') {
					$scope.not_good++;
				}
			});
			//$scope.result = true;
			$scope.good = "GOOD - " + $scope.good;
			$scope.ok = "OK - " + $scope.ok;
			$scope.not_good = "NOT GOOD - " + $scope.not_good;
		}, function(err){
			console.log(err);
			$scope.ok =  '';
			$scope.good = '';
			$scope.not_good = 'You are not autorised to view results :-)';
		});
	}
}]);
