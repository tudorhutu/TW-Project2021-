let topTextInput, bottomTextInput, companyImput, topsize, rightsize, topcol, bottomcol, image, generateBtn, canvas, ctx,
    customurl, addressIn, phoneIn, emailIn, downloadLnk, submiturl, linktext;

function generate(img, topTextInput, bottomTextInput, companyImput, addressIn, phoneIn, emailIn, topsize, rightsize, topcol, bottomcol) {
    let fontsize;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);


    ctx.fillStyle = topcol;
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'left';

    fontsize = canvas.width * topsize / 3;
    ctx.font = 'bold ' + fontsize + 'px arial';
    ctx.lineWidth = fontsize / 30;
    ctx.fillStyle = bottomcol;

    ctx.textBaseline = 'bottom';
    ctx.fillText(topTextInput.concat(" ", bottomTextInput), canvas.width / 2 - canvas.width / 3 - 160, canvas.height - 80, canvas.width);
    ctx.strokeText(topTextInput.concat(" ", bottomTextInput), canvas.width / 2 - canvas.width / 3 - 160, canvas.height - 80, canvas.width);

    fontsize = canvas.width * topsize / 4;
    ctx.font = 'bold ' + fontsize + 'px arial';
    ctx.lineWidth = fontsize / 30;
    ctx.fillStyle = bottomcol;

    ctx.fillText(companyImput, canvas.width / 2 - canvas.width / 3 - 160, canvas.height - 20, canvas.width);
    ctx.strokeText(companyImput, canvas.width / 2 - canvas.width / 3 - 160, canvas.height - 20, canvas.width);

    fontsize = canvas.width * rightsize / 8 - 8;
    ctx.font = 'bold ' + fontsize + 'px arial';
    ctx.lineWidth = fontsize / 30;
    ctx.fillStyle = topcol;
    ctx.textAlign = 'right';

    ctx.fillText(addressIn, canvas.width - 120, 180, canvas.width);
    // ctx.strokeText(addressIn, canvas.width - 120, 180, canvas.width);

    fontsize = canvas.width * rightsize / 6;
    ctx.font = 'bold ' + fontsize + 'px arial';
    ctx.lineWidth = fontsize / 30;
    ctx.fillStyle = topcol;
    ctx.textAlign = 'right';

    ctx.fillText(phoneIn, canvas.width - 120, 300, canvas.width);
    // ctx.strokeText(phoneIn, canvas.width - 120, 300, canvas.width);

    ctx.fillText(emailIn, canvas.width - 120, 430, canvas.width);
    // ctx.strokeText(emailIn, canvas.width - 120, 430, canvas.width);


}

function init() {
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    topsize = document.getElementById("topsize");
    rightsize = document.getElementById("rightsize");
    topcol = document.getElementById('toptextcolor');
    bottomcol = document.getElementById('bottomtextcolor');
    image = document.getElementById('image-input');
    generateBtn = document.getElementById('generate');
    canvas = document.getElementById('canvass');
    customurl = document.getElementById("custom");
    companyImput = document.getElementById("company");
    addressIn = document.getElementById("address");
    phoneIn = document.getElementById("phone");
    emailIn = document.getElementById("email");
    downloadLnk = document.getElementById("downloadLnk");
    submiturl = document.getElementById('submiturl');
    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    generateBtn.addEventListener('click', function () {
        let img = new Image;
        if (!customurl.value) {
            return;
        } else {
            img.src = customurl.value;
        }

        img.onload = function () {
            placeholder.style.display = 'none';
            downloadLnk.style.display = 'block';
            generate(img, topTextInput.value, bottomTextInput.value, companyImput.value, addressIn.value, phoneIn.value, emailIn.value, topsize.value, rightsize.value, topcol.value, bottomcol.value);

        }

    });

}


init();

function loadImage(img) {
    customurl.value = img.src;
}

function download() {
    var dt = canvas.toDataURL('image/jpg', 1.0);
    // canvas.toBlob(function(blob){console.log(blob.toString());}, 'image/jpeg', 1.0);
    this.href = dt;
};
downloadLnk.addEventListener('click', download, false);


window.onload = function () {
    submiturl.addEventListener("click", function () {

        document.getElementById('customlink').style.display = 'block';
        linktext = document.getElementById("displaytext").innerHTML = document.getElementById("linktext").href + '?foregrundid=' + foreground.src + '&animid=' + animation.src;
    })

}

////////////////////send canvas


document.addEventListener('DOMContentLoaded', function (e) {
    /*
        generate a canvas with some sort of image -
        in this example a promo picture from the classic
        B-Horror film "The Blob"
    */
    // var canvas=document.getElementById('canvas');
    // var ctx=canvas.getContext('2d');
    // var img=new Image();
    // img.src='../resources/placeholder.png';
    // img.onload=function(){
    //     canvas.width=img.width;
    //     canvas.height=img.height;
    //     ctx.drawImage( img, 0, 0, canvas.width, canvas.height );
    // }


    /*
        Button click event handler
        create FormData Object and read the canvas data
        then send via ajax to a PHP script ( in this case the same page )
        to process the uploaded image.
    */
    function bindEvents(event) {

        var fd = new FormData();
        fd.append('action', 'save');
        fd.append('image', canvas.toDataURL('image/jpg').replace(/^data:image\/(png|jpg);base64,/, ''));
        fd.append('filename', Math.random() + '.jpg')

        var ajax = function (url, data, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) callback.call(this, this.response);
            };
            xhr.open('POST', url, true);
            console.log(data);
            xhr.send(data);
        };

        var callback = function (r) {
            alert(r);
            linktext = r;
            linktext.replace("F:/xampp/htdocs/ConGratZ", '');
            console.log(linktext);
            document.getElementById("linktext").href = linktext;
            document.getElementById("displaytext").innerHTML = linktext;
        }

        ajax.call(this, 'scripts/upload.php', fd, callback);
    }


    document.getElementById('bttn').addEventListener('click', bindEvents);

});


