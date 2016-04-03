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

        })
        .when('/script-in-template', {
            templateUrl: 'views/script-in-template/script-inside-template.html'
        })
        .when('/routechange-on-scroll', {
            templateUrl: 'views/routechange-on-scroll/routechange-on-scroll.html'
        })
        .when('/npm-build-combo', {
            templateUrl: 'views/npm-build-combo.html'
        })

    $routeProvider.otherwise('/')
}])

app.controller('BlogContainerCtrl', ['$scope', '$route', function ($scope, $route) {
    $scope.templateUrl = 'views/inheritance/inheritance.html';


}])
app.directive('routeChangeOnScroll', ['$route', '$location', function ($route, $location) {
    return {
        link: function (scope, element, attrs) {
            var routes = Object.keys($route.routes).filter(function (item) {
                return (item !== '' && item != 'null' && item.charAt(item.length - 1) === '/');
            });

            scope.$on('$routeChangeSuccess', function () {
                var currentUrl = $location.url();
                if(currentUrl[currentUrl.length -1] !== '/')
                    currentUrl += '/';

                var next = routes.indexOf(currentUrl) + 1;
                var nextRoute = '/';
                if (routes[next])
                    nextRoute = routes[next];

                function onScroll() {
                    if ((window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 200) {
                        window.onscroll = null;
                        loadNextRoute();
                    }
                };

                function loadNextRoute() {
                    console.log(nextRoute);
                    location.href = '#' + nextRoute;
                    window.scrollTo(0,125);
                }

                window.onscroll = onScroll;
            })
        }
    }
}])