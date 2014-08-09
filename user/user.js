angular.module('user', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('user').config(function($routeProvider) {

    $routeProvider.when('/login',{templateUrl: 'user/partial/login/login.html'});
    $routeProvider.when('/signup',{templateUrl: 'user/partial/signup/signup.html'});
    /* Add New Routes Above */

});

