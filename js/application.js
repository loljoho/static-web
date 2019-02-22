$(document).ready(function() {
    if($(window).width()<500)
    {
        if ($('#menutoggle').hasClass('open')) {
            $('#menutoggle').removeClass('open');
            closeMenu();
        }
    }

    function closeMenu() {
        $($('#sidebar').find('a').get().reverse()).each(function (i) {
            var _this = this;

            setTimeout(function () {
                $(_this).animate({
                    opacity: 0,
                    // left: -20
                }, 400, function () {
                    $(_this).hide();

                    $(_this).css({
                        left: -20
                    });

                    if (i >= $('#sidebar').find('a').length - 1) {
                        if ($('body').hasClass('webchat')) {
                            $('#main').animate({
                                marginLeft: 100,
                                marginRight: 100
                            }, 400, function () {
                                $('#content').animate({
                                    maxWidth: 3000
                                }, 800, function () {
                                });
                            });
                        }
                    }
                });
            }, i * 30);
        });
    }

    function openMenu() {
        if ($('body').hasClass('webchat')) {
            $('#content').animate({
                maxWidth: 1360
            }, 800, function () {
                $('#main').animate({
                    marginLeft: 220,
                    marginRight: 220
                }, 400, function () {
                    open();
                });
            });
        } else {
            open();
        }
    }

    $(document).on('click', '#menutoggle', function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');

            closeMenu();
        } else {
            $(this).addClass('open');

            openMenu();
        }
    });
});

function open() {
    $('#sidebar').find('a').each(function(i) {
        var _this = this;

        setTimeout(function() {
            $(_this).show();

            $(_this).animate({
                left: 0,
                opacity: 1
            }, 400);
        }, i * 30);
    });
}

