'use strict';

angular.module('espiaoApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        // route for the login page
        .state('app', {
            url:'/',
            views: {
                'content': {
                    templateUrl : 'pages/login.html',
                    controller: 'loginCtrl'
                }
            }

        })

        .state('app.home', {
            url:'home',
            views:{
              'content@': {
                  templateUrl : 'pages/home.html',
                  controller: 'homeCtrl'
              }
            }
        })

        ;

    $urlRouterProvider.otherwise('/');
});
