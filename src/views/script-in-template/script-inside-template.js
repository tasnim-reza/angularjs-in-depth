/**
 * Created by Reza on 26-Mar-16.
 */
app.controller('scriptInsideTemplateCtrl', ['$scope', function($scope){

}]);

app.directive('templateWithScript', [function(){
    return{        
        link: function (scope, element) {
            // scope.$on('$includeContentLoaded', function(){
            //     var script = document.createElement('script');
            //     script.innerHTML = element[0].innerHTML; //have to be careful regarding innerHtml
            //     document.body.appendChild(script);
            // })

        }
    }
}])