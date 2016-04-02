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

app.controller('BlogContainerCtrl', ['$scope', '$route', function ($scope, $route) {
    $scope.templateUrl = 'views/inheritance/inheritance.html';


}])
app.directive('routeChangeOnScroll', ['$route', '$location', function ($route, $location) {
    return{
        link: function(scope, element, attrs){
            scope.$on('$routeChangeSuccess', function () {
                var currentElementHeight = document.getElementsByClassName('blog-post')[0].scrollHeight;
                var routes = Object.keys($route.routes).filter(function(item){
                    return (item !== '' && item != 'null');
                });

                setTimeout(function(){
                    window.onscroll = function(){
                        if( (window.scrollY + window.innerHeight) >= currentElementHeight) {
                            console.log('call', $route, $location)
                        }
                    }
                },100)
            })
        }
    }
}])