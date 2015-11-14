
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
//$("#access").on("click", function() {
//    var videoObj = { "video": true },
//        errBack = function(error) {
//            if(error.name == "PermissionDeniedError")
//                alert('Webcam access is required for this page to work');
//
//        };
//        initializeVideoFeed = function() {
//            $("#main-frame").html('<video id="video" width="640" height="480" autoplay></video><button id="snap">Snap Photo</button> <canvas id="canvas" width="640" height="480"></canvas>');
//        }
//
//    if(navigator.getUserMedia) {
//        navigator.getUserMedia(videoObj, function(stream) {
//            console.log(stream);
//            initializeVideoFeed();
//            canvas
//        }, errBack);
//    } else if(navigator.webkitGetUserMedia) {
//        navigator.webkitGetUserMedia(videoObj, function (stream) {
//            console.log(stream);
//            initializeVideoFeed();
//        }, errBack);
//    } else if(navigator.mozGetUserMedia) {
//        navigator.mozGetUserMedia(videoObj, function (stream) {
//            console.log(stream);
//            initializeVideoFeed();
//        }, errBack);
//    }
//    else{
//        alert("failed!");
//    }
//
//
//
//
//});
window.addEventListener("DOMContentLoaded", function() {
    // Grab elements, create settings, etc.
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        video = document.getElementById("video"),
        videoObj = { "video": true },
        errBack = function(error) {
            if (error.name == "PermissionDeniedError")
                alert('Webcam access is required for this page to work');
        }


    // Put video listeners into place
    if(navigator.getUserMedia) { // Standard
        navigator.getUserMedia(videoObj, function(stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia(videoObj, function(stream){
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    } else if(navigator.mozGetUserMedia) { // WebKit-prefixed
        navigator.mozGetUserMedia(videoObj, function(stream){
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }

    // Trigger photo take
    document.getElementById("snap").addEventListener("click", function() {
        context.drawImage(video, 0, 0, 640, 480);
    });
}, false);

// Not showing vendor prefixes.
