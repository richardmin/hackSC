
//verify that the user has necessary media
function hasGetUserMedia() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (!hasGetUserMedia()) {
    alert('WebKit is not supported in your browser, please use Firefox or Chrome instead.');
    //todo: make this not look terrible
}

// Put event listeners into place
var videoObj = { "video": true },
    errBack = function(error) {
        if(error.name == "PermissionDeniedError")
            alert('Webcam access is required for this page to work');
        else
            alert('Unknown error, please give permission to webcam and try again');
    //todo: make this prettier
    };

    initializeVideoFeed = function(stream) {
        //$("#main-frame").html('<video id="video" width="640" height="480" autoplay></video>');
        $("#video").show();

    }

if(navigator.getUserMedia) {
    navigator.getUserMedia(videoObj, function(stream) {
        console.log(stream);
        initializeVideoFeed(stream);
        video = document.getElementById("video");
        video.src = stream;
        video.play();

    }, errBack);
} else if(navigator.webkitGetUserMedia) {
    navigator.webkitGetUserMedia(videoObj, function (stream) {
        console.log(stream);
        initializeVideoFeed(stream);
        video = document.getElementById("video");
        video.src = window.webkitURL.createObjectURL(stream);;
        video.play();
    }, errBack);
} else if(navigator.mozGetUserMedia) {
    navigator.mozGetUserMedia(videoObj, function (stream) {
        console.log(stream);
        initializeVideoFeed(stream);
        video = document.getElementById("video");
        video.src = window.URL.createObjectURL(stream);;
        video.play();
    }, errBack);
}



