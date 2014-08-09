angular.module('dashboard', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('dashboard').config(function($routeProvider) {

    $routeProvider.when('/:id/dashboard',{templateUrl: 'dashboard/partial/dashboard/dashboard.html'});
    $routeProvider.when('/:id/dashboard/messages',{templateUrl: 'dashboard/partial/messages/messages.html'});
    $routeProvider.when('/:id/dashboard/analytics',{templateUrl: 'dashboard/partial/analytics/analytics.html'});
    $routeProvider.when('/:id/dashboard/:id/profile',{templateUrl: 'dashboard/partial/profile/profile.html'});
    /* Add New Routes Above */

});

