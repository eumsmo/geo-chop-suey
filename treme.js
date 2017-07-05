jQuery.fn.shake = function () {
    this.each(function (i) {
        $(this).css({
            "position": "relative"
        });
        for (var x = 1; x <= 9; x++) {
            $(this).animate({
                left: -25
            }, 10).animate({
                left: 0
            }, 50).animate({
                left: 25
            }, 10).animate({
                left: 0
            }, 50);
        }
    });

}

function start() {
    $('#mySubmit').shake();

};
