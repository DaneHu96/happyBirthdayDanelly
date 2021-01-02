

class myTorta{

constructor(idImage){
    this.idImage = idImage;
}

myAnimatedMove(num) {
    var myTortaEle = document.getElementById(this.idImage); 
        myTortaEle.style.left = num + "%";   
    var pos = -50;
    setInterval(frame, 15);
    function frame() {
    if (pos == 750) {
        pos = -50;
    } else {
        pos++;  
        myTortaEle.style.bottom = pos + "px";
        myTortaEle.style.transform = "rotate("+pos+"deg)";
    }
}
}
}


var myAni1 = new myTorta("myImage1");
var myAni2 = new myTorta("myImage2");
var myAni3 = new myTorta("myImage3");
var myAni4 = new myTorta("myImage4");
var myAni5 = new myTorta("myImage5");
var myAni6 = new myTorta("myImage6");
var myAni7 = new myTorta("myImage7");
var myAni8 = new myTorta("myImage8");
var myAni9 = new myTorta("myImage9");
var myAni10 = new myTorta("myImage10");


var j = setInterval(time, 2000);


var m = 0;

function time(){

    switch(m){
        case 0:
            myAni1.myAnimatedMove(0);
            break;
        case 10:
            myAni2.myAnimatedMove(10);
            break;
        case 20:
            myAni3.myAnimatedMove(20);
            break;
        case 30:
            myAni4.myAnimatedMove(30);
            break;
        case 40:
            myAni5.myAnimatedMove(40);
            break;
        case 50:
            myAni6.myAnimatedMove(50);
            break;
        case 60:
            myAni7.myAnimatedMove(60);
            break;
        case 70:
            myAni8.myAnimatedMove(70);
            break;
        case 80:
            myAni9.myAnimatedMove(80);
            break;
        case 90:
            myAni10.myAnimatedMove(90);
            m = -10;
            clearInterval(j);
            break;
    }
    m+=10;
}