var drawBody = function(x,y,bitmojiHeight){
var p = bitmojiHeight/100;
fill(0, 0, 0);// shirt color
rect(x+46*(bitmojiHeight/100),y+77*(bitmojiHeight/100),91*(bitmojiHeight/100),100*(bitmojiHeight/100));//torso
ellipse(x+146*(bitmojiHeight/100),y+128*(bitmojiHeight/100),46*(bitmojiHeight/100),98*(bitmojiHeight/100));//sleeve
ellipse(x+40*(bitmojiHeight/100),y+128*(bitmojiHeight/100),46*(bitmojiHeight/100),98*(bitmojiHeight/100));//sleeve
fill(255,255,255);// space between arm and shirt
arc(x+42*(bitmojiHeight/100),y+125*(bitmojiHeight/100),10*(bitmojiHeight/100),38*(bitmojiHeight/100),54*(bitmojiHeight/100),228*(bitmojiHeight/100));//space between
fill(255,255,255);//space between
arc(x+146*(bitmojiHeight/100),y+127*(bitmojiHeight/100),10*(bitmojiHeight/100),31*(bitmojiHeight/100),-94*(bitmojiHeight/100),127*(bitmojiHeight/100));// space between
textSize(10*(bitmojiHeight/100));// shirt text
fill(115, 175, 186);// shirt text color
text("ASTROWORLD",x+55*(bitmojiHeight/100),y+109*(bitmojiHeight/100),122*(bitmojiHeight/100),26*(bitmojiHeight/100));// shirt text
textSize(7*(bitmojiHeight/100));//shirt text
fill(240, 240, 62);//shirt text color
text("TOUR",x+95*(bitmojiHeight/100),y+118*(bitmojiHeight/100),122*(bitmojiHeight/100),26*(bitmojiHeight/100)); //shirt text
textSize(30*(bitmojiHeight/100));
fill(255, 255, 255);
text("C.G.",x+63*(bitmojiHeight/100),y+146*(bitmojiHeight/100),157*(bitmojiHeight/100),54*(bitmojiHeight/100)); //shirt text
};

var drawHead = function(x,y,bitmojiHeight){
    var p = bitmojiHeight/100;
    fill(0, 0, 0);
ellipse(x+93*(bitmojiHeight/100),y+69*(bitmojiHeight/100),89*(bitmojiHeight/100),38*(bitmojiHeight/100));//hood
fill(250, 231, 175);
ellipse(x+93*(bitmojiHeight/100),y+68*(bitmojiHeight/100),42*(bitmojiHeight/100),38*(bitmojiHeight/100));//neck
ellipse(x+93*(bitmojiHeight/100),y+20*(bitmojiHeight/100),80*(bitmojiHeight/100),100*(bitmojiHeight/100)); //head
fill(235, 235, 188);
arc(x+94*(bitmojiHeight/100),y-11*(bitmojiHeight/100), 72*(bitmojiHeight/100), -85*(bitmojiHeight/100), -2*(bitmojiHeight/100), 268*(bitmojiHeight/100));//hat
ellipse(x+95*(bitmojiHeight/100),y-8*(bitmojiHeight/100),71*(bitmojiHeight/100),31*(bitmojiHeight/100));//hatbase
fill(255, 255, 255);//white for eye
ellipse(x+76*(bitmojiHeight/100),y+19*(bitmojiHeight/100),16*(bitmojiHeight/100),12*(bitmojiHeight/100));//Eye
ellipse(x+109*(bitmojiHeight/100),y+19*(bitmojiHeight/100),16*(bitmojiHeight/100),12*(bitmojiHeight/100));//eye
fill(74, 42, 4);//eye color
ellipse(x+109*(bitmojiHeight/100),y+19*(bitmojiHeight/100),7*(bitmojiHeight/100),10*(bitmojiHeight/100));//eyes
ellipse(x+76*(bitmojiHeight/100),y+19*(bitmojiHeight/100),7*(bitmojiHeight/100),10*(bitmojiHeight/100));//eyes
fill(255, 255, 255);// text color
textSize(20*(bitmojiHeight/100));// text size for hat
text("R",x+86*(bitmojiHeight/100),y-48*(bitmojiHeight/100),110*(bitmojiHeight/100),107*(bitmojiHeight/100));// hat text
text("I",x+90*(bitmojiHeight/100),y-46*(bitmojiHeight/100),110*(bitmojiHeight/100),107*(bitmojiHeight/100));// hat text
fill(250, 231, 175);//nose color
bezier(x+93*(bitmojiHeight/100),y+20*(bitmojiHeight/100),x+117*(bitmojiHeight/100),y+51*(bitmojiHeight/100),x+68*(bitmojiHeight/100),y+31*(bitmojiHeight/100),x+93*(bitmojiHeight/100),y+33*(bitmojiHeight/100));// nose
fill(255,255,255);//mouth
arc(x+93*(bitmojiHeight/100),y+45*(bitmojiHeight/100),30*(bitmojiHeight/100),14*(bitmojiHeight/100),1*(bitmojiHeight/100),180*(bitmojiHeight/100));//mouth
fill(250, 231, 175);// skin
ellipse(x+51*(bitmojiHeight/100),y+20*(bitmojiHeight/100),7*(bitmojiHeight/100),25*(bitmojiHeight/100));//ear
ellipse(x+133*(bitmojiHeight/100),y+20*(bitmojiHeight/100),7*(bitmojiHeight/100),25*(bitmojiHeight/100));//ear
};

var drawBitmoji= function(x,y,bitmojiHeight){
     drawHead(x,y,bitmojiHeight);
     drawBody(x,y,bitmojiHeight);
};

var drawClub = function(x,y){
    ellipse(x+165,y+114,9,9);
ellipse(x+158,y+114,9,9);
ellipse(x+162,y+108,9,9);
rect(x+160,y+109,3,13);};

var x=100;

 var y=100;

var cardValue = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];


var drawFaceClubCard = function (x,y){
rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text(this.cardValue,x+108,y+123);
text(this.cardValue,x+158,y+203);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30);
};





//HOME SCREEN



var Screen = 1;




var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 97;
    this.height = config.height || 50;
    this.label = config.label || "Click";
};

Button.prototype.draw = function() {
    fill(232, 102, 102);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

var btn1 = new Button({
    x: 31,
    y: 238,
    label: "   Play!"
});



var btn2 = new Button({
   
    x: 215,
    y: 238,
    label: "  Rules"
});


draw = function() {
     if(Screen === 1) {
         background(188, 230, 245);
         fill(0, 0, 0);
         textSize(48);
         text("Blackjack",98,70);
         fill(0,0,0);
        
          btn1.draw();
          btn2.draw();
     }};

