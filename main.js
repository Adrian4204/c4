var SpeechRecognition = window.webkitSpeechRecognition ;
var recognition = new SpeechRecognition() ;
var Textbox = document.getElementById("textbox") ;

function start()
{
    Textbox.innerHTML = "" ;
    recognition.start() ;

}

recognition.onresult = function(event)
{
console.log(event) ;
var Content = event.results[0][0].transcript ;
Textbox.innerHTML = Content ;
console.log(Content) ;
if(Content == "take my selfie") {
    console.log("taking selfie---") ;
speak() ;

}
}

function speak()
{
    img_id = "selfie1"
var synth = window.speechSynthesis ;
speak_data = "taking your selfie in five seconds" ;
var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis) ;
 Webcam.attach(camera) ;
setTimeout(function()
{
take_selfie();
save () ;
},5000

);

img_id = "selfie2"
var synth = window.speechSynthesis ;
speak_data = "taking your selfie in ten seconds" ;
var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis) ;
 Webcam.attach(camera) ;
setTimeout(function()
{
take_selfie();
save () ;
},10000

);

img_id = "selfie3"
var synth = window.speechSynthesis ;
speak_data = "taking your selfie in fifteen seconds" ;
var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis) ;
 Webcam.attach(camera) ;
setTimeout(function()
{
take_selfie();
save () ;
},15000

);
}

camera = document.getElementById("camera") ;
Webcam.set({ 
width : 360,
height : 250,
image_format  : 'jpeg' ,
jpeg_quality : 90

});

function take_selfie()
{
Webcam.snap(function(data_uri){
if(img_id = "selfie1"){
document.getElementById("result1").innerHTML = '<img id = "selfie1" src = " ' + data_uri + '" />'  ;
}

if(img_id = "selfie2"){
    document.getElementById("result2").innerHTML = '<img id = "selfie_2" src = " ' + data_uri + '" />'  ;
    }

if(img_id = "selfie3"){
        document.getElementById("result3").innerHTML = '<img id = "selfie_3" src = " ' + data_uri + '" />'  ;
        }
}) ;

}

function save() {
link = document.getElementById("link") ;
image = document.getElementById("selfie1" , "selfie2" , "selfie3").src ;
link.href = image ;
link.click() ;

}