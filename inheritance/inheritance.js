/**
 * Created by Reza on 20-3-16.
 */
function ControllerA(){
    this.saya = function(){
        this.msg = "Controller a";
    }
}
app.controller('ctrla', ControllerA);

function ControllerB(){
    this.sayb = function(){
        this.msg = "Controller b";
    }
}
app.controller('ctrlb', ControllerB);