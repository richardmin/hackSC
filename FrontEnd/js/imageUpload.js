/**
 * Created by RichardMin on 11/14/15.
 */

function imageUpload(idobj, imagenameobj, imagedataobj) {
    $.post("http://yashtanna.tk/hacksc/imagephp", {id: iodbj, imagename: imagenameobj, imagedata: imagedataobj},
    function (data) {
        alert(data);
    });

}
