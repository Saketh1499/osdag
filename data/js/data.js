
(function ($) {
//popup for review //
    $(window).load(function(){
    jQuery(document).ready(function ($) {

    $(this).on('click', '#popup_window', function (e) {
    
        var comment_id = $(this).attr("data-comment");
       
        console.log('ok');
        
         ($).ajax({
            url: modPath + "ajax/comment/" + comment_id,
            type: "GET",
            dataType: "html",
            success: function(data) {
               $("#popup-content").html(data);
               
            },
        });
        e.preventDefault();
        $('html').addClass('overlay');
        $('#example-popup').addClass('visible');
    });



    $(document).keyup(function (e) {
        if (e.keyCode == 27 && $('html').hasClass('overlay')) {
            clearPopup();
        }
    });

    $('.popup-exit').click(function () {
        clearPopup();

    });

    $('.popup-overlay').click(function () {
        clearPopup();
    });

    function clearPopup() {
        $('.popup.visible').addClass('transitioning').removeClass('visible');
        $('html').removeClass('overlay');

        setTimeout(function () {
            $('.popup').removeClass('transitioning');
        }, 200);
    }

}
}
}
)(jQuery);;
