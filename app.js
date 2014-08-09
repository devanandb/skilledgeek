angular.module('skilledgeek', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'pages', 'user', 'dashboard']);

angular.module('skilledgeek').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('skilledgeek').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

angular.module('skilledgeek').controller('GlobalCtrl',function($scope, $rootScope){

    // $scope.loggedIn = false;
    console.log("hello");

    

});