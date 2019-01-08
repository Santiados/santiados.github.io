// Author: Santiago Rengifo
// Date: 10-12-2018


(function () {
    $(document).scroll(function (e) {
        if ($(this).scrollTop() > 120) {
            $('header').addClass('toggle-header');
        } else {
            $('header').removeClass('toggle-header');
        }
    });
})();

function scrollTo(selector = null) {
    var many = 0;
    if (!selector || $(selector).length < 1) return;
    many = $(selector).offset().top - $('header').outerHeight();
    $('html,body').animate({
        scrollTop: many
    }, 500);
};

