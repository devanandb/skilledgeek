angular.module('dashboard').controller('DashboardCtrl',function($scope, $rootScope){
	// $scope.loggedIn = $rootScope.loggedIn;

	$scope.logout = function() {
        $scope.loggedIn = false;
		$rootScope.loggedIn = $scope.loggedIn;
    };
});