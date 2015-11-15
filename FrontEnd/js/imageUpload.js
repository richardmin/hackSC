/**
 * Created by RichardMin on 11/14/15.
 */


canvas = document.getElementById('canvas');

function takePicture() {
    var context =   canvas.getContext('2d');
    context.drawImage(video,0,0,640,480);
    var data = canvas.toDataURL('image/png');
    return data;
}

function imageUpload(idobj, imagenameobj, imagedataobj, callback) {
    $.ajax({
        type: 'POST',
        url: 'http://yashtanna.tk/hacksc/image.php',
        data: {id: idobj, imagename: imagenameobj, imagedata: imagedataobj},
        success: function (data) {
            callback(data);
        }
    });
}
