// Author: Santiago Rengifo
// Date: 10-12-2018


(function(){
    $(document).scroll(function (e) { 
        if($(this).scrollTop() > 120){
            $('header').addClass('toggle-header');
        } else {
            $('header').removeClass('toggle-header');
        }
    });
})();