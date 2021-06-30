Webcam.set({
    width:350,
    height:299,
    image_format:"png",
    png_quality:100,
    constraints:{
        facingMode:"environment"
    }
});
Webcam.attach("#jamesCamera");
function sarade(){
    Webcam.snap(function(data_uri){
        document.getElementById("captPic").innerHTML="<img id='koil' src='"+data_uri+"'>";
    });
}
console.log(ml5.version);
zaras = ml5.imageClassifier("MobileNet",modelLoaded);
function modelLoaded(){
    console.log("Model is loaded");
}
function image(){
    vion = document.getElementById("koil");
    zaras.classify(vion,gotResult);
}
function gotResult(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label;
    }
}
