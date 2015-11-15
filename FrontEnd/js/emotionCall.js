/**
 * Created by RichardMin on 11/14/15.
 */
//
//var listOfEmotions = [];
////TODO: Multiple faces case
//function emotionCall(listOfURLs) {
//    for (var i = 0; i < listOfURLs.length; i++) {
//        var strings = listOfURLs[i];
//        checkEmotions(strings, function(data) {
//            listOfEmotions.push(data);
//        });
//    }
//}

function checkEmotions(string, callback)
{
    $.ajax({
        url: 'https://api.projectoxford.ai/emotion/v1.0/recognize',
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "2b89fc014456428fa62632238a9e46f8");
        },
        type: 'GET',
        contentType: 'application/json',
        data: '{ "url" : "http://yashtanna.tk/hacksc/"+string}',
        success: function (data) {
            callback(data);
        }

    });
}

function processEmotions()
{
    for(var i = 0; i < listOfEmotions.length; i++) {
        //do stuff
        listOfEmotions[i].length;


    }
}
