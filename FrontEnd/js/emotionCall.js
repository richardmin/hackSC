/**
 * Created by RichardMin on 11/14/15.
 */

////TODO: Multiple faces case
//function emotionCall(listOfURLs) {
//    for (var i = 0; i < listOfURLs.length; i++) {
//        var strings = listOfURLs[i];
//        checkEmotions(strings, function(data) {
//            listOfEmotions.push(data);
//        });
//    }
//}
var strippedEmotions = [];

function checkEmotions(youtubeID, imagenameobj, index)
{
    var s = "http://yashtanna.tk/hacksc/" + youtubeID + "/" + imagenameobj + ".png";
    console.log(s);
    $.ajax({
        url: "https://api.projectoxford.ai/emotion/v1.0/recognize&",
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","2b89fc014456428fa62632238a9e46f8");
        },
        type: "POST",
        // Request body
        data: "{'url' : s }",

    }).done(function (data, youtubeID, index) {
        processEmotions(data, youtubeID, index);
    }).fail(function () {
        //ew.
    });

}

function processEmotions(data, string, index) {
    var indexMax = 0;
    for (var i = 0; i < data.length; i++) {
        //do stuff
        if (data[i]["FaceRectangle"]["Width"] * data[i]["FaceRectangle"]["Height"] >
            data[indexMax]["FaceRectangle"]["Width"] * data[indexMax]["FaceRectangle"]["Height"]) {
            indexMax = i;
        }
    }
    strippedEmotions[index] = data[indexMax]["Scores"];
}


