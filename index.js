$(document).ready(function () {
    $('.link , #footer a').on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        var targetPosition = $(target).offset().top;
        $('html, body').animate({
            scrollTop: targetPosition
        }, 1000);
        history.pushState(null, null, target)
    });

});

$(document).ready(function () {
    // Cuộn lên đầu trang khi click vào nút
    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

});


