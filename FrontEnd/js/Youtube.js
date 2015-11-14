/**
 * Created by Yash on 11/14/2015.
 */


    //loads the youtube player asynchronously

var player;


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
        videoId: 'ZY6GAOPGuPs',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    switch (event.data) {
        case YT.PlayerState.UNSTARTED:
            console.log('unstarted');
            break;
        case YT.PlayerState.ENDED:
            console.log('ended');
            break;
        case YT.PlayerState.PLAYING:
            console.log('playing');
            break;
        case YT.PlayerState.PAUSED:
            
            break;
        case YT.PlayerState.BUFFERING:
            console.log('buffering');
            break;
        case YT.PlayerState.CUED:
            console.log('video cued');
            break;
    }
}

function go() {

    var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    var url = document.getElementById("youtube-url").value;
    var id = url.match(rx);
    if(id != null) {
        $("#video").hide();
        //change the id on the youtube video

        player.loadVideoById(id[1], 0, "large"); //automatically plays the video
        $("#youtubewrapper").show();
    }
    else
        alert("invalid url");

}