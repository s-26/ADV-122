x=0;
y=0;
draw_circle="";
draw_rect="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="system in listening, Please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML="The Speech Has Been Recognized as "+content;
     if(content=="circle"){
        console.log("condition of circle");
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML="Started Drawing Circle";
        draw_circle="set";
     }
     if(content=="rectangle"){
        console.log("Condition of Rectangle");
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML="Started Drawing Rectangle";
        draw_rect="set";
     }
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Finished Drawing Circle";
        draw_circle="";
    }
    if(draw_rect=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="Finished Drawing Rectangle";
        draw_rect="";
    }
}