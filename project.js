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
var drawSpade = function(x,y){
fill(0,0,0);
ellipse(x-47,y-51,12,15);
triangle(x-53,y-54,x-47,y-69,x-41,y-55);
triangle(x-51,y-37,x-47,y-47,x-42,y-37);
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

var drawFaceSpadeCard = function (x,y){
rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text(this.cardValue,x+108,y+123);
text(this.cardValue,x+158,y+203);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27);
};


var drawSpadeCard = function (x,y){
rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text(this.cardValue,x+108,y+123);
text(this.cardValue,x+158,y+203);
drawSpade(x+185,y+202);
};

var drawClubCard = function (x,y) {
rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text(this.cardValue,x+108,y+123);
text(this.cardValue,x+158,y+203);
drawClub(x+-25,y+42);
};


//Heart + Diamonds + Steven Bitmoji

var drawFace2=function(bodyX,bodyY,h){

    noStroke();
    fill(238, 207, 180);
    rect(bodyX+(h/100)*26,bodyY+(h/100)*152,(h/100)*40,(h/100)*30);
    ellipse(bodyX+(h/100)*46,bodyY+(h/100)*119,(h/100)*97,(h/100)*114);//Head
    fill(255, 255, 255);
    strokeWeight(2);
    stroke(222, 22, 22);
    fill(255, 255, 255);
    arc(bodyX+(h/100)*46,bodyY+(h/100)*144,(h/100)*45,(h/100)*20,0,180);//mouth
    stroke(3, 3, 3);
    noFill();
    beginShape();
    vertex(bodyX+(h/91)*38,bodyY+(h/100)*128);
    bezierVertex(bodyX+(h/100)*65,bodyY+(h/100)*144,bodyX+(h/100)*45,bodyY+(h/100)*113,bodyX+(h/100)*45,bodyY-(h/100)*-108);//nose
    endShape();
    fill(255, 255, 255);
    stroke(255, 255, 255);
    strokeWeight(1);
    stroke(1,1,1);
    fill(238, 207, 180);
    arc(bodyX+(h/100)*46,bodyY+(h/100)*164,(h/100)*23,(h/100)*13,0,180);//chin
};
var drawEyes2=function(bodyX,bodyY,h){
    noStroke();
    fill(255,255,255);
    ellipse(bodyX+(h/100)*27,bodyY+(h/100)*100,(h/100)*16,(h/100)*13);//left Eye
    ellipse(bodyX+(h/100)*63,bodyY+(h/100)*100,(h/100)*16,(h/100)*13);//Right Eye
    strokeWeight(2);
    stroke(176, 87, 9);
    fill(3, 3, 3);
    ellipse(bodyX+(h/100)*27,bodyY+(h/100)*100,(h/100)*5,(h/100)*5);//left Pupil
    ellipse(bodyX+(h/100)*63,bodyY+(h/100)*100,(h/100)*5,(h/100)*5);//right pupil
    strokeWeight(0.6);//eye lashes
    line(bodyX+(h/100)*70,bodyY+(h/100)*91,bodyX+(h/100)*67,bodyY+(h/100)*95);//lash
    line(bodyX+(h/100)*67,bodyY+(h/100)*90,bodyX+(h/100)*65,bodyY+(h/100)*95);//lash
    line(bodyX+(h/100)*64,bodyY+(h/100)*89,bodyX+(h/100)*63,bodyY+(h/100)*95);//lash
    line(bodyX+(h/100)*61,bodyY+(h/100)*89,bodyX+(h/100)*61,bodyY+(h/100)*94);//lash
    line(bodyX+(h/100)*57,bodyY+(h/100)*90,bodyX+(h/100)*59,bodyY+(h/100)*95);//lash
    line(bodyX+(h/100)*33,bodyY+(h/100)*90,bodyX+(h/100)*31,bodyY+(h/100)*95);//lash
    line(bodyX+(h/100)*31,bodyY+(h/100)*89,bodyX+(h/100)*29,bodyY+(h/100)*95);//lash
    line(bodyX+(h/100)*29,bodyY+(h/100)*89,bodyX+(h/100)*28,bodyY+(h/100)*94);//lash
    line(bodyX+(h/100)*21,bodyY+(h/100)*90,bodyX+(h/100)*23,bodyY+(h/100)*95);//lash
    line(bodyX+(h/100)*25,bodyY+(h/100)*89,bodyX+(h/100)*26,bodyY+(h/100)*94);//lash
};
var drawHair2=function(bodyX,bodyY,h){
    fill(166, 111, 0);
    quad(bodyX+(h/100)*9,bodyY+(h/100)*130,bodyX+(h/100)*-7,bodyY+(h/100)*130,bodyX+(h/100)*8,bodyY+(h/100)*78,bodyX+(h/100)*22,bodyY+(h/100)*72);//left hair
    quad(bodyX+(h/100)*102,bodyY+(h/100)*130,bodyX+(h/100)*87,bodyY+(h/100)*130,bodyX+(h/100)*71,bodyY+(h/100)*72,bodyX+(h/100)*83,bodyY+(h/100)*78);//right     hair
    ellipse(bodyX+(h/100)*46,bodyY+(h/100)*73,(h/100)*80,(h/100)*35);//top hair
    stroke(1, 1, 1);
    fill(255, 0, 0);
    rect(bodyX+(h/100)*-5,bodyY+(h/100)*72,(h/100)*100,(h/100)*20);//headband
    fill(1,1,1);
    textSize((h/100)*12);
    text("WASSY",bodyX+(h/100)*25,bodyY+(h/100)*75);
};
var drawBody2=function(bodyX,bodyY,h){
    fill(1,1,1);
    quad(bodyX+(h/100)*121,bodyY+(h/100)*206,bodyX+(h/100)*96,bodyY+(h/100)*174,bodyX+(h/100)*46,bodyY+(h/100)*182,bodyX+(h/100)*46,bodyY+(h/100)*206);//left shoulder
    quad(bodyX+(h/100)*46,bodyY+(h/100)*206,bodyX+(h/100)*46,bodyY+(h/100)*182,bodyX+(h/100)*4,bodyY+(h/100)*174,bodyX+(h/100)*-26,bodyY+(h/100)*206);//right            shoulder
    strokeWeight(5);
    stroke(153, 150, 150);
    arc(bodyX+(h/100)*47,bodyY+(h/100)*179,(h/100)*48,(h/100)*22,0,180);//necklace
    fill(255,255,255);
    textSize((h/100)*13);
    text("SW",bodyX+(h/100)*-8,bodyY+(h/100)*188,(h/100)*200,(h/100)*48);
};
var drawBitmoji2=function(bodyX,bodyY,h){
    drawFace2(bodyX,bodyY,h);
    drawEyes2(bodyX,bodyY,h);
    drawHair2(bodyX,bodyY,h);
    drawBody2(bodyX,bodyY,h);
};

var drawHeart = function(x,y){
    image(getImage("space/healthheart"), 166, 105, 15, 15);
    image(getImage("space/healthheart"), 114, 191, 15, 15);
};

var drawFaceHeartCard = function (x,y){
rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
fill(255, 0, 0);
text(this.cardValue,x+108,y+123);
text(this.cardValue,x+158,y+203);
drawHeart(x,y);
drawHeart(x+-48,y+84);
drawBitmoji2(x+119,y+106,37);
};

var drawDiamond = function(x,y){
    fill(255, 0, 0);
    triangle(176, 103, 180, 111, 172, 111);
    triangle(176, 119, 180, 111, 172, 111);
    triangle(119, 191, 123, 199, 115, 199);
    triangle(119, 207, 123, 199, 115, 199);
};

var drawFaceDiamondCard = function (x,y){
rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
fill(255, 0, 0);
text(this.cardValue,x+108,y+123);
text(this.cardValue,x+158,y+203);
drawDiamond(x,y);
drawDiamond(x+-48,y+84);
drawBitmoji2(x+119,y+108,37);
};

drawFaceHeartCard(10,0);



//Rules Page

var Screen = 1;



var Button = function(config) { //constructor function for my buttons
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 120;
    this.height = config.height || 45;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function(){};
};

Button.prototype.draw = function() { //draw method for my button constructor function
    strokeWeight(0.5);
    fill(232, 102, 102);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function(){ //method for button to ensure that mouse is inside of it
    return mouseX > this.x &&
           mouseX < (this.width + this.x) &&
           mouseY > this.y &&
           mouseY < (this.height + this.y);
};

Button.prototype.useMouseClick = function() { //mehtod to enable us to click the button once it is created
    if (this.isMouseInside()){
        
        this.onClick();
        
    }
};

var button1 = new Button({ //creates by button to play
    x: 13,
    y: 345,
    label: "     Back",
    onClick: function(){
        Screen = 0;
    }
});

var button2 = new Button({ //creates by button to play
    x: 274,
    y: 347,
    label: "More Rules",
    onClick: function(){
        Screen = 2;
    }
});

var button3 = new Button({ //creates by button to play
    x: 13,
    y: 10,
    label: "     Back",
    onClick: function(){
        Screen = 1;
    }
});

var button4 = new Button({ //creates by button to play
    x: 146,
    y: 347,
    label: "Begin Game",
    onClick: function(){
        Screen = 3;
    }
});

var button5 = new Button({
    x: 271,
    y:23,
    label: "      Rules",
    onClick: function(){
        Screen = 1;
    }
});



mouseClicked = function() { //This makes it so everytime I click within the parameters given it will take us to level 1
    
    button1.useMouseClick();
    button2.useMouseClick();
    button3.useMouseClick();
    button4.useMouseClick();
    button5.useMouseClick();
    

};
var startScreen = function(){
    background(90, 224, 121);
        fill(217, 4, 4);
        textSize(47);
        text("BlackJack",32,24);
        textSize(24);
        fill(0,0,0);
        text("By: Colin Gallagher ", 51, 96);
        text("and Steven Wasserman",51,127);
        noStroke();
        drawBitmoji(19,206,63);
        drawBitmoji2(296,151,79);
        button4.draw();
        button5.draw();
         noStroke();
        drawSpade(x+110,y+170);
        drawClub(x-97,y+90);
       image(getImage("space/healthheart"), 225, 206, 24, 24);
       drawDiamond2(165,290);
};
    

var rulePage1 = function(){
    background(188, 230, 245);
         fill(0, 0, 0);
         textSize(48);
         text("Rules",142,5);
         fill(0,0,0);
         textSize(15);
         text("The goal of blackjack is to beat the dealer's hand without", 10, 60);
         text("going over 21", 10, 80);
         text("Face cards are worth 10", 10, 111);
         text("Aces are worth 1 or 11 whichever makes a better hand", 10, 146); 
         text("Each player starts with two cards one of the dealer's cards", 10, 178);
         text("is hidden until the end", 10, 197);  
         text("To 'Hit' is to ask for another card.", 10, 230); 
         text("To 'Stand' is to hold your total and end your turn.", 10, 260);
         text("If you go over 21 you bust and the dealer wins regardless", 10, 290);
         text("of the dealer's hand", 10, 310);

        button1.draw();
        button2.draw();
};

var rulePage2 = function(){
         background(188, 230, 245);
         fill(0, 0, 0);
         textSize(48);
         text("Rules",142,5);
         fill(0,0,0);
         textSize(15);
         text("If you are dealt 21 from the start (Ace & 10), you got", 10, 90);
         text("a blackjack", 10, 110);
         text("Blackjack means you win 1.5 the amount of your bet", 10, 153);
         text("Dealer will hit until his/her cards total 17 or higher", 10, 204); 
         text("Doubling is like a hit, only the bet is doubled and you", 10, 255);
         text("only get one more card", 10, 275); 
         
         button3.draw();
         button4.draw();
};


draw = function() {
    if (Screen === 0){
        startScreen();  
    }
    
     if(Screen === 1) {
         rulePage1();
     }
        
     if(Screen === 2) {
 
         rulePage2();

     }
     };


