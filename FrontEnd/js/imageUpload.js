/**
 * Created by RichardMin on 11/14/15.
 */


var fileTimeStamps = [];

canvas = document.getElementById('canvas');


function takePicture() {
    var context = canvas.getContext('2d');
    canvas.width = 640;
    canvas.height = 480;
    context.drawImage(video,0,0,640,480);
    var data = canvas.toDataURL('image/png');
    return data;
}

function imageUpload(idobj, imagenameobj, imagedataobj) {
    console.log("idobj: "+ idobj);
    console.log("imagenameobj: " + imagenameobj);
    $.ajax({
        type: 'POST',
        url: 'http://yashtanna.tk/hacksc/image.php',
        data: {id: idobj, imagename: imagenameobj, imagedata: imagedataobj}
    }).done(function (data, idobj, imagenameobj) {
        if(data == "uploaded") {
            var index = fileTimeStamps.push(imagenameobj);
            checkEmotions(idobj, imagenameobj, index);

        }
        else
        {
            console.log("failed!");
        }
    }).fail(function (data, index) {
    });
}