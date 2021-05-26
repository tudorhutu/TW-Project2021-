let topTextInput, bottomTextInput, companyImput, topsize, rightsize, topcol, bottomcol, image, generateBtn, canvas, ctx,
    customurl, addressIn, phoneIn, emailIn, huein;

function generate(img, topTextInput, bottomTextInput, companyImput, addressIn, phoneIn, emailIn, topsize, rightsize, topcol, bottomcol, huein) {
    let fontsize;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);


    ctx.fillStyle = topcol;
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'left';

    fontsize = canvas.width * topsize / 3;
    ctx.font = fontsize + 'px Impact';
    ctx.lineWidth = fontsize / 30;
    ctx.fillStyle = bottomcol;

    ctx.textBaseline = 'bottom';
    ctx.fillText(topTextInput.concat(" ", bottomTextInput), canvas.width / 2 - canvas.width / 3 - 160, canvas.height - 80, canvas.width);
    ctx.strokeText(topTextInput.concat(" ", bottomTextInput), canvas.width / 2 - canvas.width / 3 - 160, canvas.height - 80, canvas.width);

    fontsize = canvas.width * topsize / 5;
    ctx.font = fontsize + 'px Impact';
    ctx.lineWidth = fontsize / 30;
    ctx.fillStyle = bottomcol;

    ctx.fillText(companyImput, canvas.width / 2 - canvas.width / 3 - 160, canvas.height - 20, canvas.width);
    ctx.strokeText(companyImput, canvas.width / 2 - canvas.width / 3 - 160, canvas.height - 20, canvas.width);

    fontsize = canvas.width * rightsize / 7;
    ctx.font = fontsize + 'px Impact';
    ctx.lineWidth = fontsize / 30;
    ctx.fillStyle = topcol;
    ctx.textAlign = 'right';

    ctx.fillText(addressIn, canvas.width - 120, 180, canvas.width);
    ctx.strokeText(addressIn, canvas.width - 120, 180, canvas.width);

    ctx.fillText(phoneIn, canvas.width - 120, 300, canvas.width);
    ctx.strokeText(phoneIn, canvas.width - 120, 300, canvas.width);

    ctx.fillText(emailIn, canvas.width - 120, 430, canvas.width);
    ctx.strokeText(emailIn, canvas.width - 120, 430, canvas.width);
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
    huein = document.getElementById("hueshift")

    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    generateBtn.addEventListener('click', function () {
        let img = new Image;
        if (!customurl.value) {
            img.src = 'https://i.kym-cdn.com/entries/icons/original/000/036/482/cover5.jpg';
        } else {
            img.src = customurl.value;
        }

        img.onload = function () {
            placeholder.style.display = 'none';
            generate(img, topTextInput.value, bottomTextInput.value, companyImput.value, addressIn.value, phoneIn.value, emailIn.value, topsize.value, rightsize.value, topcol.value, bottomcol.value, huein.value);

        }

    });
}


init();

function loadImage(img) {
    customurl.value = img.src;
}
