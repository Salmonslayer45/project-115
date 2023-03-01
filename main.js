//https://teachablemachine.withgoogle.com/models/OQ_SeA-dF/

function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OQ_SeA-dF/model.json', modelReady);
}
function modelReady()
{
classifier.classify(gotResults);
}