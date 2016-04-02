$("#menu-toggle").click(function(e) {
    e.preventDefault();
    if ($(window).width() < 768) {
        if (isMenuOpen()) {
            $("#wrapper").toggleClass("toggled");
            $("#menu-toggle span").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-left");
        } else {
            $("#wrapper").toggleClass("toggled");
            $("#menu-toggle span").removeClass("glyphicon-chevron-left").addClass("glyphicon-chevron-right");
        }
    }

});

$("#page-content").click(function(e) {
    e.preventDefault();
    if ($(window).width() < 768) {
        if (isMenuOpen()) {
            $("#menu-toggle span").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-left");
            $("#wrapper").toggleClass("toggled");
        }
    }
});

function isMenuOpen() {
    return !($("#wrapper").css("padding-left") == "0px");
}

var hammertime = new Hammer(document.getElementById("page-content"), {threshold:5, velocity: 0.2});
hammertime.on('swiperight', function(ev) {
    if (!isMenuOpen()) {
        $("#wrapper").toggleClass("toggled");
        $("#menu-toggle span").removeClass("glyphicon-chevron-left").addClass("glyphicon-chevron-right");
    }
});
hammertime.on('swipeleft', function(ev) {
    if ($(window).width() < 768) {
        if (isMenuOpen()) {
            $("#wrapper").toggleClass("toggled");
            $("#menu-toggle span").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-left");
        }
    }
});