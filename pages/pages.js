angular.module('pages', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('pages').config(function($routeProvider) {

    $routeProvider.when('/home',{templateUrl: 'pages/partial/home/home.html'});
    $routeProvider.when('/about',{templateUrl: 'pages/partial/about/about.html'});
    $routeProvider.when('/contact',{templateUrl: 'pages/partial/contact/contact.html'});
    $routeProvider.when('/help',{templateUrl: 'pages/partial/help/help.html'});
    /* Add New Routes Above */

});

