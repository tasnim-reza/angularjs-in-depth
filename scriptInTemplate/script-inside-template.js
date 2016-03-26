/**
 * Created by Reza on 26-Mar-16.
 */
app.controller('scriptInsideTemplateCtrl', function($scope){
    $scope.$on('$includeContentLoaded', function(){
        console.log('directive');
    })
});
app.directive('templateWithScript', function(){
    return{        
        link: function (element, scope) {
            scope.$on('$includeContentLoaded', function(){
                console.log('directive');
            })

        }
    }
})