/**
 * Created by Reza on 20-3-16.
 */

/*controller example*/
function BaseController(){
    this.base = function(msg){
        return 'From base ' + msg;
    }
}
var baseCtrl = Object.create(BaseController.prototype);
BaseController.apply(baseCtrl, []);

function ControllerA($scope, servicea){
    var self = this;

    $scope.saya = function(){
        $scope.msg = self.base("Controller a");
    }

    $scope.getName = function(){
        $scope.msg = servicea.getName();
    }
}

ControllerA.prototype = baseCtrl;

app.controller('ctrla', ['$scope', 'servicea', ControllerA]);


function ControllerB($scope){
    var self = this;
    $scope.sayb = function(){
        $scope.msg = self.base("Controller b");;
    }
}

ControllerB.prototype = baseCtrl;

app.controller('ctrlb', ['$scope', ControllerB]);


/*service example*/

function BaseService(){
    this.sayFromBase = function(msg){
        return msg + ' From base service.';
    }
}

var baseService = Object.create(BaseService.prototype);
BaseService.apply(baseService, []);

function ServiceA(){
    var self = this;
    this.getName = function(){
        return self.sayFromBase('Hi, this is Reza,');
    }
}

ServiceA.prototype = baseService;

app.service('servicea', ServiceA)