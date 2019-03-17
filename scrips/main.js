function intro() {
    var delay = function (s) {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, s);
        });
    };

    delay().then(function () {
        $('header').transition('fade', 3000);
        return delay(500); // ©µ¿ð£¸¬í
    }).then(function () {
        $('article').transition('fade', 3000);
        return delay(500); // ©µ¿ð¤@¬í
    }).then(function () {
        $('.chrdk').transition('fade', 3000);

    });

}
var tr = true;
function trans() {
    if (window.tr == true) {
        var delay = function (s) {
            return new Promise(function (resolve, reject) {
                setTimeout(resolve, s);
            });
        };

        delay().then(function () {
            $('article,header').transition('scale', 100);
            return delay(200); // ©µ¿ð£¸¬í
        }).then(function () {
            $('.desk').animate({
                "width": "100%",
                "left": "0vw",
                "bottom": "0vw"
            }, 1000, function () { });
            $('#chair1').animate({
                "width": "10%",
                "left": "3vw",
                "bottom": "20vw"
            }, 1000, function () { });
            $('#chair2').animate({
                "width": "11%",
                "left": "18vw",
                "bottom": "30vw"
            }, 1000, function () { });
            $('#chair3').animate({
                "width": "12%",
                "left": "43vw",
                "bottom": "36vw"
            }, 1000, function () { });
            $('#chair4').animate({
                "width": "13%",
                "left": "68vw",
                "bottom": "30vw"
            }, 1000, function () { });
            $('#chair5').animate({
                "width": "14%",
                "left": "85vw",
                "bottom": "18vw"
            }, 1000, function () { });
            return delay(1000); // ©µ¿ð¤@¬í
        }).then(function () {
            $('.btn,.demo').transition('fade', 1000);

        });
        window.tr = false;
    }
    else {

    }
}

var m = 1;
var r = 6;
var l = 2;

var xcenter = 39;
var ycenter = -22;
var radius = 25;
function turnright() {
    var first = ".food:nth-child(" + window.m + ")";
    var second = ".food:nth-child(" + window.l + ")";

    for (var t = 0; t < 150; t++) {
        $(first).animate({
            "left": window.xcenter + window.radius * Math.sin(t * 3.14 / 180) + "vw",
            "bottom": window.ycenter + window.radius * Math.cos(t * 3.14 / 180) + "vw"
        }, 10, function () { });
        $(second).animate({
            "left": window.xcenter - window.radius * Math.cos((t - 60) * 3.14 / 180) + "vw",
            "bottom": window.ycenter + window.radius * Math.sin((t - 60) * 3.14 / 180) + "vw"
        }, 10, function () { });
    }
    window.m++;
    window.r++;
    window.l++;
    if (window.m > 6) {
        window.m = 1;
    }
    if (window.r > 6) {
        window.r = 1;
    }
    if (window.l > 6) {
        window.l = 1;
    }
}

function turnleft() {
    var first = ".food:nth-child(" + window.m + ")";
    var second = ".food:nth-child(" + window.r + ")";

    for (var t = 0; t < 150; t++) {
        $(first).animate({
            "left": window.xcenter - window.radius * Math.sin(t * 3.14 / 180) + "vw",
            "bottom": window.ycenter + window.radius * Math.cos(t * 3.14 / 180) + "vw"
        }, 10, function () { });
        $(second).animate({
            "left": window.xcenter + window.radius * Math.cos((t - 60) * 3.14 / 180) + "vw",
            "bottom": window.ycenter + window.radius * Math.sin((t - 60) * 3.14 / 180) + "vw"
        }, 10, function () { });
    }
    window.m--;
    window.r--;
    window.l--;
    if (window.m < 1) {
        window.m = 6;
    }
    if (window.r < 1) {
        window.r = 6;
    }
    if (window.l < 1) {
        window.l = 6;
    }
}

function openmenu(choice) {
    var open = ".intro:nth-child(" + choice + ")";
    $(open).transition('fade', 1000);
}

function closemenu(choice) {
    var close = ".intro:nth-child(" + choice + ")";
    $(close).transition('fade', 1000);
}

var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}
$(function () {
    $('#rice').hover(sourceSwap, sourceSwap);
    $('#soup').hover(sourceSwap, sourceSwap);
    $('#meat').hover(sourceSwap, sourceSwap);
    $('#vegetable').hover(sourceSwap, sourceSwap);
    $('#fish').hover(sourceSwap, sourceSwap);
    $('#coldplate').hover(sourceSwap, sourceSwap);
    $('.chair').hover(sourceSwap, sourceSwap);
    $('#rightbutton').hover(sourceSwap, sourceSwap);
    $('#leftbutton').hover(sourceSwap, sourceSwap);
});