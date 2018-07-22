(function(){

    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel : objects.Label;
    function Init(){
        console.log("initialization Started");
        Start();
        
    }
    function Start():void{
        console.log("Starting Application")
        stage =  new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60 ;
        createjs.Ticker.on("tick",Update);
        Main();
    }
    function Update():void{
        // helloLabel.rotation -= 5;
        stage.update();
    }
    function Main():void{
        console.log("Game Starting ");
        helloLabel = new objects.Label("Hello , World " , "40px", "Consolas" , "#000000", 320,240,true);
        console.log(helloLabel);
        // helloLabel.x =  200;
        // helloLabel.y =  200;
        // helloLabel.regX = helloLabel.getMeasuredWidth() *0.5;
        // helloLabel.regY = helloLabel.getMeasuredHeight() *0.5;
         stage.addChild(helloLabel);


    }
    window.onload = Init;
})();