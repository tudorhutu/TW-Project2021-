let topTextInput, bottomTextInput, topsize, bottomsize, bottomcol, image, generateBtn, canvas, ctx, placeholder,
    customurl, customurlf, saveimage, bgInput, foreground, animation, drop1, drop2, submiturl, bttn, idlebtn;
let linktext;

function generate(img, topTextInput, bottomTextInput, topsize, bottomsize, bottomcol) {
    bttn.style.display = 'block';
    drop1.style.display = "block";
    drop2.style.display = "block";
    let fontsize;
    let str1 = "From: ";
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    ctx.fillStyle = bottomcol;
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';


    fontsize = canvas.width / 3 * topsize;
    ctx.font = 'bold ' + fontsize + 'px Gabriola';
    ctx.lineWidth = fontsize / 30;
    ctx.fillStyle = bottomcol;

    ctx.textBaseline = 'bottom';
    ctx.fillText(str1.concat(topTextInput, " ", bottomTextInput), canvas.width / 2 + canvas.width / 4, canvas.height - 30, canvas.width / 3);
    ctx.strokeText(str1.concat(topTextInput, " ", bottomTextInput), canvas.width / 2 + canvas.width / 4, canvas.height - 30, canvas.width / 3);
}

function init() {
    drop1 = document.getElementById("d1");
    drop2 = document.getElementById("d2");
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    topsize = document.getElementById("topsize");
    bottomsize = document.getElementById("bottomsize");
    bottomcol = document.getElementById('bottomtextcolor');
    image = document.getElementById('image-input');
    generateBtn = document.getElementById('generate');
    canvas = document.getElementById('canvass');
    placeholder = document.getElementById("placeholder");
    customurl = document.getElementById("custom");
    customurlf = document.getElementById("customf");
    saveimage = document.getElementById("submiturl");
    bgInput = document.getElementsByClassName("bgimagein");
    foreground = document.getElementById("foreground");
    animation = document.getElementById("animation");
    ctx = canvas.getContext('2d');
    submiturl = document.getElementById('submiturl');
    bttn = document.getElementById("bttn");
    idlebtn = document.getElementById('submitwait');


    canvas.width = canvas.height = 0;

    drop1.style.display = "none";
    drop2.style.display = "none";

    generateBtn.addEventListener('click', function () {
        let img = new Image;
        if (!customurl.value) {
            return;
        } else {
            img.src = customurl.value;
        }

        img.onload = function () {
            placeholder.style.display = 'none';
            generate(img, topTextInput.value, bottomTextInput.value, topsize.value, bottomsize.value, bottomcol.value);

        }

    });


}

function loadImage(img) {
    customurl.value = img.src;
}

function loadForeground(img) {
    foreground.src = img.src;
    foreground.style.display = "block";
}

function loadAnimation(img) {
    animation.src = img.src;
    animation.style.display = "block";
}

init();


document.addEventListener('DOMContentLoaded', function (e) {

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
            var newlink = (' ' + r.toString()).slice(1);

            newlink = newlink.replace("F:/xampp/htdocs/ConGratZ", '');
            // console.log(newlink);
            // document.getElementById('customlink').style.display = 'block';
            // document.getElementById("linktext").href = newlink;
            // document.getElementById("displaytext").innerHTML = newlink;

            ///////////////////////////////////////
            var fullpath = 'http://79.112.49.145/display.html'
            var forepath = foreground.src;
            var animpath = animation.src;
            forepath = forepath.replace('http://79.112.49.145', '');
            animpath = animpath.replace('http://79.112.49.145', '');
            fullpath = fullpath + "?foregrundid=" + forepath + '&animid=' + animpath + '&bgid='+ newlink;

            document.getElementById('customlink').style.display = 'block';
           // linktext = document.getElementById("displaytext").innerHTML = document.getElementById("linktext").href + '?foregrundid=' + forepath + '&animid=' + animpath;
            document.getElementById("linktext2").href = fullpath;
            document.getElementById("linktext2").innerHTML = fullpath;

            ///////////////////////////////////////
        }

        ajax.call(this, 'scripts/upload2.php', fd, callback);
        bttn.style.display = 'none';
        idlebtn.style.display = 'block';
        setTimeout(function () {
            idlebtn.style.display = 'none';
            bttn.style.display = 'block';
        }, 5000);
    }


    document.getElementById('bttn').addEventListener('click', bindEvents);

});
