//GLOBAL VARIABLES
 
 var x=100;

 var y=100;
 
 var Screen=0;
 
 var playerHand1 = 0;
 var playerHand2= 0;
 var dealerHand1 = 0;
 var dealerHand2 = 0;
 var dealerHand3 = 0;
 var newCard = 0;
 //boolean to allow hit/flip for dealer and player when values are true
 var hit = false;
 var dealerHit = false;
 var dealerFlip = false;
 
 //all of these are used to randomize the cards drawn at each drawing
 var playerFirstDealt =round(random(0.5, 51.5));
 var playerSecondDealt =round(random(0.5, 51.5));
  var dealerFirstDealt= round(random(0.5, 51.5));
  var dealerSecondDealt= round(random(0.5, 51.5));
   var dealerThirdDealt= round(random(0.5, 51.5));
 var shuffleHit = round(random(0.5, 51.5));
 
 
//bitmoji and card code
{
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
fill(5, 5, 5);
arc(x+93*(bitmojiHeight/100),y-11*(bitmojiHeight/100), 74*(bitmojiHeight/100), -87*(bitmojiHeight/100), 8*(bitmojiHeight/100), 281*(bitmojiHeight/100));//hat
ellipse(x+93*(bitmojiHeight/100),y-10*(bitmojiHeight/100),75*(bitmojiHeight/100),31*(bitmojiHeight/86));//hatbase
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
var drawClubCard = function (x,y){
rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text(this.value,x+108,y+123);
text(this.value,x+158,y+203);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30);
};

var drawSpadeCard = function (x,y){
rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text(this.value,x+108,y+123);
text(this.value,x+158,y+203);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27);
};


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
    image(getImage("space/healthheart"), x+66, y+5, 15, 15);
    image(getImage("space/healthheart"), x+14, y+91, 15, 15);
};

var drawHeartCard = function (x,y){
rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
fill(255, 0, 0);
text(this.value,x+108,y+123);
text(this.value,x+158,y+203);
drawHeart(x,y);
drawHeart(x+-48,y+84);
drawBitmoji2(x+119,y+106,37);
};

var drawDiamond = function(x,y){
    fill(255, 0, 0);
    triangle(x+76, y+03, x+80, y+11, x+72, y+11);
    triangle(x+76, y+19, x+80, y+11, x+72,y+11);
    triangle(x+19, y+91, x+23, y+99, x+15, y+99);
    triangle(x+19,y+107,x+23, y+99, x+15, y+99);
};

var drawDiamond2 = function(x,y){
    fill(255, 0, 0);
    triangle(x+76, y+03, x+80, y+11, x+72, y+11);
    triangle(x+76, y+19, x+80, y+11, x+72,y+11);
};


var drawDiamondCard = function (x,y){
rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
fill(255, 0, 0);
text(this.value,x+108,y+123);
text(this.value,x+158,y+203);
drawDiamond(x,y);
drawDiamond(x+-48,y+84);
drawBitmoji2(x+119,y+108,37);
};
}


// flipped card for the dealer
var flippedCard = function(x,y){
      fill(219, 28, 28);
      noStroke();
   rect(x+100,y+100,74,110,10);
   fill(255,255,255);
   rect(x+106,y+103,61,101,8);
fill(0,0,0);

image(getImage( "space/star"),x+110,y+123,55,58);
};


// all of the cards variable names are what cards they are
{ // ALL CLUBS CARDS
 var aceClub = function(x,y){
      fill(255,255,255);
      noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("A",x+108,y+102);
    text("A",x+158,y+185);
drawClub(x,y);
drawClub(x+-48,y+84);
    drawBitmoji(x+109,y+131,30); 
  
 };
 
// 2 of clubs 
  var twoClub = function(x,y){
      fill(255,255,255);
      noStroke();
   
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("2",x+108,y+102);
    text("2",x+158,y+185);
    drawClub(x,y);
    drawClub(x+-48,y+84);
    drawBitmoji(x+109,y+131,30);  
    
 };
 
 // three of clubs
  var threeClub = function(x,y){
      fill(255,255,255);
      noStroke();
  rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text("3",x+108,y+102);
    text("3",x+158,y+185);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30);  

 };
 
 //four of clubs
  var fourClub = function(x,y){
      fill(255,255,255);
      noStroke();
   rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
 text("4",x+108,y+102);
    text("4",x+158,y+185);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30); 

 };
 
 //five of clubs
  var fiveClub = function(x,y){
      fill(255,255,255);
      noStroke();
   rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text("5",x+108,y+102);
    text("5",x+158,y+185);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30);  

 };
 
 
  var sixClub = function(x,y){
      fill(255,255,255);
      noStroke();
   rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
  text("6",x+108,y+102);
    text("6",x+158,y+185);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30); 

 };
 
 
  var sevenClub = function(x,y){
      fill(255,255,255);
      noStroke();
      fill(255,255,255);
      noStroke();
   rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text("7",x+108,y+102);
    text("7",x+158,y+185);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30); 

 };
 
 
  var eightClub = function(x,y){
      fill(255,255,255);
      noStroke();
   rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
   text("8",x+108,y+102);
    text("8",x+158,y+185);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30);  
return 8;
 };
 
 
  var nineClub = function(x,y){
      fill(255,255,255);
      noStroke();
   rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
 text("9",x+108,y+102);
    text("9",x+158,y+185);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30); 

 };
 
 
  var tenClub = function(x,y){
      fill(255,255,255);
      noStroke();
   rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
  text("10",x+108,y+102);
    text("10",x+147,y+185);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30); 
return 10;
 };
 
 
  var jackClub = function(x,y){
      fill(255,255,255);
      noStroke();
   rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
 text("J",x+108,y+102);
    text("J",x+158,y+185);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30);  
 };
 
  var queenClub = function(x,y){
      fill(255,255,255);
      noStroke();
   rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
  text("Q",x+108,y+102);
    text("Q",x+158,y+185);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30);  
 };
 
 
  var kingClub = function(x,y){
      fill(255,255,255);
      noStroke();
   rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
    text("K",x+108,y+102);
    text("K",x+158,y+185);
drawClub(x,y);
drawClub(x+-48,y+84);
drawBitmoji(x+109,y+131,30);  
 };
 
 
 
 
 // ALL SPADES CARDS 
 var aceSpade = function(x,y){
     
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text("A",x+108,y+102);
    text("A",x+158,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27);
return 11;
};

var twoSpade = function(x,y){
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
 text("2",x+108,y+102);
    text("2",x+158,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27);

};


 var threeSpade = function(x,y){
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
 text("3",x+108,y+102);
    text("3",x+158,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27);

};


 var fourSpade = function(x,y){
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
 text("4",x+108,y+102);
    text("4",x+158,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27); 

};


 var fiveSpade = function(x,y){
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
 text("5",x+108,y+102);
    text("5",x+158,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27);

};


 var sixSpade = function(x,y){
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text("6",x+108,y+102);
    text("6",x+158,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27);

};


 var sevenSpade = function(x,y){
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
 text("7",x+108,y+102);
    text("7",x+158,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27);

};


 var eightSpade = function(x,y){
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
   text("8",x+108,y+102);
    text("8",x+158,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27);

};


 var nineSpade = function(x,y){
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text("9",x+108,y+102);
    text("9",x+158,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27);

};


 var tenSpade = function(x,y){
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
 text("10",x+108,y+102);
    text("10",x+147,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27); 
};


 var jackSpade = function(x,y){
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
 text("J",x+108,y+102);
    text("J",x+158,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27); 
};


 var queenSpade = function(x,y){
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
text("Q",x+108,y+102);
    text("Q",x+158,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27); 
};


 var kingSpade = function(x,y){
      fill(255,255,255);
      noStroke();
     rect(x+100,y+100,74,110,10);
fill(0,0,0);
textSize(20);
  text("K",x+108,y+102);
    text("K",x+158,y+185);
drawSpade(x+211,y+172);
drawSpade(x+157,y+241);
drawBitmoji(x+113,y+131,27);
};



//ALL HEARTS CARDS
 
 var aceHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("A",x+108,y+102);
    text("A",x+158,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30);
    
};

var twoHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("2",x+108,y+102);
    text("2",x+158,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30);
    
};

var threeHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("3",x+108,y+102);
    text("3",x+158,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30);
    
};

var fourHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("4",x+108,y+102);
    text("4",x+158,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30);
    
};

var fiveHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("5",x+108,y+102);
    text("5",x+158,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30);
   
};

var sixHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("6",x+108,y+102);
    text("6",x+158,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30);
   
};

var sevenHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("7",x+108,y+102);
    text("7",x+158,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30);
   
};

var eightHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("8",x+108,y+102);
    text("8",x+158,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30);
   
};

var nineHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("9",x+108,y+102);
    text("9",x+158,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30);
    
};

var tenHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("10",x+108,y+102);
    text("10",x+147,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30); 
};

var jackHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("J",x+108,y+102);
    text("J",x+158,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30); 
};

var queenHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("Q",x+108,y+102);
    text("Q",x+158,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30); 
};

var kingHeart = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("K",x+108,y+102);
    text("K",x+158,y+185);
    drawHeart(x+88,y+100);
    drawBitmoji2(x+123,y+114,30); 
};





//ALL DIAMONDS CARDS
 
var aceDiamond = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("A",x+108,y+102);
    text("A",x+158,y+185);
    drawDiamond(x+89,y+100);
    drawBitmoji2(x+123,y+114,30);
   
};

var twoDiamond= function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("2",x+108,y+102);
    text("2",x+158,y+185);
    drawDiamond(x+89,y+100);
    drawBitmoji2(x+123,y+114,30);
    
};

var threeDiamond = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("3",x+108,y+102);
    text("3",x+158,y+185);
    drawDiamond(x+89,y+100);
    drawBitmoji2(x+123,y+114,30);
    
};

var fourDiamond = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("4",x+108,y+102);
    text("4",x+158,y+185);
    drawDiamond(x+89,y+100);
    drawBitmoji2(x+123,y+114,30);
   
};

var fiveDiamond = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("5",x+108,y+102);
    text("5",x+158,y+185);
    drawDiamond(x+89,y+100);
    drawBitmoji2(x+123,y+114,30);
    
};

var sixDiamond = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("6",x+108,y+102);
    text("6",x+158,y+185);
    drawDiamond(x+89,y+100);
    drawBitmoji2(x+123,y+114,30);
    
};

var sevenDiamond = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("7",x+108,y+102);
    text("7",x+158,y+185);
    drawDiamond(x+89,y+100);
    drawBitmoji2(x+123,y+114,30);
   
};

var eightDiamond = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("8",x+108,y+102);
    text("8",x+158,y+185);
    drawDiamond(x+89,y+100);
    drawBitmoji2(x+123,y+114,30);
    
};

var nineDiamond = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("9",x+108,y+102);
    text("9",x+158,y+185);
    drawDiamond(x+89,y+100);
    drawBitmoji2(x+123,y+114,30);
   
};

var tenDiamond = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("10",x+108,y+102);
    text("10",x+147,y+185);
    drawDiamond(x+89,y+100);
    drawBitmoji2(x+123,y+114,30); 
};

var jackDiamond = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("J",x+108,y+102);
    text("J",x+158,y+185);
    drawDiamond(x+89,y+100);
    drawBitmoji2(x+123,y+114,30); 
};

var queenDiamond = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("Q",x+108,y+102);
    text("Q",x+158,y+185);
    drawDiamond(x+89,y+100); 
    drawBitmoji2(x+123,y+114,30); 
};

var kingDiamond = function(x,y){
    noStroke();
    fill(255, 255, 255);
    rect(x+100,y+100,74,110,10);
    fill(0,0,0);
    textSize(20);
    text("K",x+108,y+102);
    text("K",x+158,y+185);
    drawDiamond(x+89,y+100);
    drawBitmoji2(x+123,y+114,30); 
};
}
 
 
 
 
 
 
 
 // array for the full deck of cards
var deck =[aceClub,twoClub,threeClub,fourClub,fiveClub,sixClub,sevenClub,eightClub,nineClub,tenClub,jackClub,queenClub,kingClub,aceSpade,twoSpade,threeSpade,fourSpade,fiveSpade,sixSpade,sevenSpade,eightSpade,nineSpade,tenSpade,jackSpade,queenSpade,kingSpade,aceHeart,twoHeart,threeHeart,fourHeart,fiveHeart,sixHeart,sevenHeart,eightHeart,nineHeart,tenHeart,jackHeart,queenHeart,kingHeart,aceDiamond,twoDiamond,threeDiamond,fourDiamond,fiveDiamond,sixDiamond,sevenDiamond,eightDiamond,nineDiamond,tenDiamond,jackDiamond,queenDiamond,kingDiamond];

//button functions & mouse clicked
{

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
    x: 146,
    y: 286,
    label: "Begin Game",
    onClick: function(){
        if (Screen === 0 || Screen === 2){
        Screen = 3;
        }
    }
});

var button2 = new Button({ // rules button
    x: 271,
    y: 23,
    label: "     Rules",
    onClick: function(){
        if (Screen === 0){
        Screen = 1;}
    }
});

var button3 = new Button({ //creates by button to go back to home screen
    x: 13,
    y: 345,
    label: "     Back",
    onClick: function(){
        if (Screen===1){Screen = 0;
    }}
});

var button4 = new Button({ //creates by button to show more rules
    x: 274,
    y: 347,
    label: "More Rules",
    onClick: function(){
      if (Screen===1){  Screen = 2;
    }}
});

var button5 = new Button({ //creates by button to go back to rules
    x: 13,
    y: 10,
    label: "     Back",
    onClick: function(){
      if (Screen===2){  Screen = 1;
    }}
});

var button6 = new Button({ //creates by button to hit and draw card for player
    x: 253,
    y: 207,
    label: "       HIT",
    onClick: function(){ if (Screen === 3){
       var newCard = deck[shuffleHit](55,102);
       hit = true;
       
    }
    }
});

var button7 = new Button({ //creates by button to stand to signal that player is done to dealer
    x: 253,
    y: 256,
    label: "    STAND",
    onClick: function(){
          
    }
});

var button8 = new Button ({ // flips over dealers turned card
    x: 253,
    y:5,
    label:"Dealer Flip",
    onClick:function(){
        var dealerHand2 =deck[dealerSecondDealt](80,-30);
        dealerFlip = true;
    }
});

var button9 = new Button ({ // allows dealer to hit and draw new card
    x: 130,
    y:5,
    label:"Dealer   Hit",
    onClick:function(){
        var dealerHand3 =deck[dealerThirdDealt](169,-30);
        dealerHit = true;
    }
});

var button10 = new Button ({ // select this button for player win screen
    x: 8,
    y:343,
    label:"Player Win",
    onClick:function(){
        if (Screen===3){ Screen = 4;}
    }
});

var button11 = new Button ({ // select this button for dealer win screen
    x: 142,
    y:343,
    label:"Dealer Win",
    onClick:function(){
        if (Screen===3){ Screen = 5;}
    }
});

var button12 = new Button ({ // select this button when there is a tie or "push"
    x: 272,
    y:343,
    label:"    Push",
    onClick:function(){
        if (Screen===3){ Screen = 6;}
    }
});

mouseClicked = function() { //makes it so that when buttons are clicked they are able to function
    
    button1.useMouseClick();
    button2.useMouseClick();
    button3.useMouseClick();
    button4.useMouseClick();
    button5.useMouseClick();
    button6.useMouseClick();
    button7.useMouseClick();
    button8.useMouseClick();
    button9.useMouseClick();
    button10.useMouseClick();
    button11.useMouseClick();
    button12.useMouseClick();
   
    

};
}



// SCREEN CODE
{
var titleScreen = function(){// title screen shows the game and rules 
                 for (var i = 0; i <= 20; i++){
                fill(255, 255, 255);
                rect(i*121,-3,-73,496);
                    }
         noStroke();
         for (var i = -65; i <= 45; i++){
        fill(255, 0, 38);
        ellipse(i*14,394,21,58);
        fill(255, 255, 255);
        ellipse(i*79,371,115,18);
}
        background(90, 224, 121);
        fill(217, 4, 4);
        textSize(47);
        text("BlackJack",20,3);
        textSize(24);
        text("For 1-2 Players",20,53);
        fill(0,0,0);
        text("By: Colin Gallagher ", 21, 126);
        text("and Steven Wasserman",14,154);
        noStroke();
        drawBitmoji(19,228,63);
        drawBitmoji2(296,168,79);
        button1.draw();
        button2.draw();
        noStroke();
        drawSpade(x+110,y+170);
        drawClub(x-97,y+51);
        image(getImage("space/healthheart"), 225, 206, 24, 24);
        drawDiamond2(165,252);
    
};

var rulePage1 = function(){ // shows first list of rules
    background(188, 230, 245);
         fill(0, 0, 0);
         textSize(48);
         text("Rules",142,5);
         fill(0,0,0);
         textSize(15);
         text("The goal of blackjack is to beat the dealer's hand without", 10, 60);
         text("going over 21, player goes first", 10, 80);
         text("Face cards are worth 10, Aces are 11", 10, 111);
         text("One player plays as player, other plays as dealer ", 10, 146); 
         text("Player starts with two cards one of the dealer's cards", 10, 178);
         text("is hidden until the end", 10, 197);  
         text("To 'Hit' is to ask for another card.", 10, 230); 
         text("To 'Stand' is to hold your total and end your turn.", 10, 260);
         text("If you go over 21 you bust and the dealer wins regardless", 10, 290);
         text("of the dealer's hand", 10, 310);

        button3.draw();
        button4.draw();
};

var rulePage2 = function(){ // rules continued
         background(188, 230, 245);
         fill(0, 0, 0);
         textSize(48);
         text("Rules",142,5);
         fill(0,0,0);
         textSize(15);
         text("If you are dealt 21 from the start (Ace & 10), you got", 10, 90);
         text("a blackjack", 10, 110);
         text("Each player hits once or none after their first two cards", 10, 153);
         text("Dealer will stand on 17 or higher", 10, 204); 
          
         
         button1.draw();
         button5.draw();
};

var createTable = function() { // creates a picture of a blackjack table to play on
  fill(97, 4, 8);
  arc(200, 68, 387, 516, 0, 180);
  fill(15, 122, 5);
  arc(200, 68, 338, 467, 0, 180);
  fill(0,0,0);
  ellipse(20, 97, 18, 18);
  ellipse(34, 164, 18, 18);
  ellipse(59, 221, 18, 18);
  ellipse(98, 271, 18, 18);
  ellipse(157, 306, 18, 18);
  ellipse(232, 309, 18, 18);
  ellipse(380, 97, 18, 18);
  ellipse(367, 164, 18, 18);
  ellipse(343, 221, 18, 18);
  ellipse(302, 271, 18, 18);
  textSize(20);
    text("Dealer", 14, 11);
    
};
}

var gameScene = function(){ // this variable shows the scene for screen 3 which is the game screen
  
         background(163, 209, 187);
         noStroke();
         for (var i = -65; i <= 45; i++){
        fill(255, 0, 38);
        ellipse(i*12,64,7,39);
        fill(0, 0, 0);
        ellipse(i*95,64,115,18);}
         createTable();
         button6.draw();
         button7.draw();
         button8.draw();
         button9.draw();
         button10.draw();
         button11.draw();
         button12.draw();
         flippedCard(80,-30);
         playerHand1 = deck[playerFirstDealt](-2,102);
         playerHand2 = deck[playerSecondDealt](22,102);
         dealerHand1 = deck[dealerFirstDealt](-5,-30);
         if(hit === true){var newCard = deck[shuffleHit](55,102);}
         if(dealerHit === true){var dealerHand3 =deck[dealerThirdDealt](169,-30);}
         if(dealerFlip === true){var dealerHand2 =deck[dealerSecondDealt](80,-30);}
    
};

var lostScene = function(){ // screen shows when dealer wins
  background(255, 0, 0);
  textSize(50);
  text("Dealer Won ", 58, 112);
  drawBitmoji2(147, 137, 100);
};

var wonScene = function(){ // screen shows when player wins
  background(0, 255, 38);
  textSize(50);
  text("Player Won ", 73, 110);
  drawBitmoji(132, 193, 80);
};

var tieScene = function(){ // screen shows when there is a tie or push
  background(20, 12, 242);
  textSize(50);
  text("Push/Tie !!!", 77, 207);
};


// DRAWING SCREEN CODE
{
draw = function() { // each of the following if statements are to create a scene if the the screen is equal to the correct number
     if(Screen === 0) {
         
         titleScreen();
         
     }
     
     if(Screen === 1) {
         
         rulePage1();
         
     }
        
     if(Screen === 2) {
 
         rulePage2();

     }
     if(Screen === 3){
        
        gameScene();     
     }
     if (Screen===4){
         wonScene();
         
     }
         
    if (Screen === 5){
     lostScene();   
    }
    if (Screen=== 6){
     tieScene();   
    }
     };
}
