Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function Snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='capturedImage' src='" + data_uri + "'>"
    });
}

console.log("ML5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Dw4DlwC8J/modal.json", function () { console.log("Modal Loaded!"); });