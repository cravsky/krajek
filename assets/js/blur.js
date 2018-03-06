$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 50;
    $(".out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })     
});