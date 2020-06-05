var Animation = function()
{
    this.startAnimation();
}

var p = Animation.prototype = new createjs.Container();

p.startAnimation = function()
{
    //super class
    this.initialize();

    this.xmlData;

    this.images = this.images||{};

}

p.getXMLData = function(_xmlData)
{
    this.xmlData = _xmlData;
}

p.loadAnimation = function(_id)
{
    manifest = [
        {src:"images/_6_2_2b_screen_01.png", id:"_6_2_2b_screen_01"},
        {src:"images/_6_2_2b_screen_02.png", id:"_6_2_2b_screen_02"},
        {src:"images/_6_2_2bc.jpg", id:"_6_2_2bc"},
        {src:"images/blushades.png", id:"blushades"},
        {src:"images/butten1f7.png", id:"butten1f7"},
        {src:"images/buttenclickedf7.png", id:"buttenclickedf7"},
        {src:"images/fn1.png", id:"fn1"},
        {src:"images/fn2click.png", id:"fn2click"},
        {src:"images/left_hand.png", id:"left_hand"},
        {src:"images/right_hand.png", id:"right_hand"}
    ];

    var _this = this;
    var loader = new createjs.PreloadJS(false);
    loader.onFileLoad = this.handleFileLoad;
    loader.onComplete = function(){
        _this.handleComplete();
    }
    loader.loadManifest(manifest);

}

p.handleFileLoad = function (o) {
    if (o.type == "image") { images[o.id] = o.result; }
}

p.handleComplete = function () {
    var exportRoot = new lib.classesmediaMediaObject();
    this.addChild(exportRoot);

    this.getStage().update();

    createjs.Ticker.setFPS(24);
    createjs.Ticker.addListener(this.getStage());
}