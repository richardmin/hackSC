/**
 * Created by Yash on 11/14/2015.
 */
function go() {
    var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    var url = document.getElementById("youtube-url").value;
    var id = url.match(rx);
    document.getElementById("youtube-frame").src = "http://www.youtube.com/embed/" + id[1];
}