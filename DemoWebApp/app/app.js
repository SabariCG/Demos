var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/views/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/views/about.html'
        })
        .state('search', {
            url: '/search',
            templateUrl: 'app/views/search.html'
        });
});