angular.module('user').controller('LoginCtrl',function($scope, $rootScope, $location){

	$scope.login = function() {
		$scope.loggedIn = true;
		$rootScope.loggedIn = $scope.loggedIn;
		$location.path('/demo/dashboard');

	};

	$scope.message=false;

	$scope.user = $rootScope.user;

	$scope.login = function(){
		if ($scope.user.pass !== $scope.user.password) {
			$scope.message = true;
			$scope.user.pass = "";
		}
		else{
			$location.path('/dashboard');
		}
	};

	$scope.statusDeck = true;

	$scope.hideDeck = function(statusTab) {
		$scope.statusDeck = false;
		$scope.activeTab = statusTab;
	};

	$scope.showDeck = function() {
		$scope.statusDeck = true;
		$scope.activeTab = "";
	};

	
	$scope.forgotmessage = false;
	$scope.forgotPass = function(){
		$scope.forgotmessage = true;
	};


});