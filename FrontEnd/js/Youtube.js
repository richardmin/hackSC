/**
 * Created by Yash on 11/14/2015.
 */


    //loads the youtube player asynchronously

var player;
var vidId;
var fileTimeStamps = [];


/**
 * Created by RichardMin on 11/14/15.
 */

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function go() {

    var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    var url = document.getElementById("youtube-url").value;
    vidId = url.match(rx);
    if(vidId != null) {
        $("#video").hide();
        //change the id on the youtube video

        player.loadVideoById(vidId[1], 0, 'large'); //automatically plays the video
        $("#youtubewrapper").show();
    }
    else
        alert("invalid url");

}

function getVidID() {
    return vidId;
}

function getTimeStamp() {
    return player.getCurrentTime();
}

var timer = $.timer(function() {
    var t = getTimeStamp();
    imageUpload(vidId[1], t, takePicture(), function(data) {
        if(data == "uploaded") {
            var index = fileTimeStamps.push(t);
            checkEmotions(t, function(data) {

            });
        }
    });
});

timer.set({ time: 3000, autostart: false});

function onPlayerStateChange(event) {
    switch (event.data) {
        case YT.PlayerState.UNSTARTED:
            timer.pause();
            break;
        case YT.PlayerState.ENDED:
            timer.stop();
            //CALL ENDING FUNCTION HERE
            break;
        case YT.PlayerState.PLAYING:
            if(!timer.isActive)
                timer.play();
            break;
        case YT.PlayerState.PAUSED:
            timer.pause();
            break;
        case YT.PlayerState.BUFFERING:
            timer.pause();
            break;
        case YT.PlayerState.CUED:
            console.log('video cued');
            break;
    }
}
