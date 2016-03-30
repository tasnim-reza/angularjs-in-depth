/**
 * Created by Reza on 20-3-16.
 */
var app = angular.module('angularInDepth', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/inheritance/inheritance.html',
        // controller: 'BookController',
        // resolve: {
        //     // I will cause a 1 second delay
        //     delay: function ($q, $timeout) {
        //         var delay = $q.defer();
        //         $timeout(delay.resolve, 1000);
        //         return delay.promise;
        //     }
        // }

    }).when('/script-in-template', {
        templateUrl: 'views/script-in-template/script-inside-template.html'
    })

    $routeProvider.otherwise('/')
}])

app.controller('BlogContainerCtrl', ['$scope', function ($scope) {
    $scope.templateUrl = 'views/inheritance/inheritance.html';

}])