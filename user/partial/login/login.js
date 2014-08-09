angular.module('user').controller('LoginCtrl',function($scope, $rootScope, $location){

	$scope.login = function() {
		$scope.loggedIn = true;
		$rootScope.loggedIn = $scope.loggedIn;
		$location.path('/demo/dashboard');

	};

});