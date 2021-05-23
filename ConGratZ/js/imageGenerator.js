let topTextInput, bottomTextInput, topsize, bottomsize, topcol, bottomcol, image, generateBtn, canvas, ctx, placeholder;

function generate(img, topTextInput, bottomTextInput, topsize, bottomsize, topcol, bottomcol) {
    let fontsize;
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);


    ctx.fillStyle = topcol;
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    fontsize = canvas.width * topsize;
    ctx.font = fontsize + 'px Impact';
    ctx.lineWidth = fontsize / 30;

    ctx.textBaseline = 'top';
    ctx.fillText(topTextInput, canvas.width / 2, 0, canvas.width);
    ctx.strokeText(topTextInput, canvas.width / 2, 0, canvas.width);

    fontsize = canvas.width * bottomsize;
    ctx.font = fontsize + 'px Impact';
    ctx.lineWidth = fontsize / 30;

    ctx.fillStyle = bottomcol;

    ctx.textBaseline = 'bottom';
    ctx.fillText(bottomTextInput, canvas.width / 2, canvas.height, canvas.width);
    ctx.strokeText(bottomTextInput, canvas.width / 2, canvas.height, canvas.width);
}

function init() {
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    topsize = document.getElementById("topsize");
    bottomsize = document.getElementById("bottomsize");
    topcol = document.getElementById('toptextcolor');
    bottomcol = document.getElementById('bottomtextcolor');
    image = document.getElementById('image-input');
    generateBtn = document.getElementById('generate');
    canvas = document.getElementById('canvass');
    placeholder = document.getElementById("placeholder");

    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    generateBtn.addEventListener('click', function () {
        let img = new Image;
        img.src = 'https://hashtaghyena.com/wp-content/uploads/2021/01/IMG_4830.jpeg';
        img.onload = function () {
            generate(img, topTextInput.value, bottomTextInput.value, topsize.value, bottomsize.value, topcol.value, bottomcol.value);
            placeholder.style.display = 'none';
        }

    });
}


init();
