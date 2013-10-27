var nicam_ch = nicam_ch || {};
nicam_ch.linkHandler = (function ($) {
    var init = function () {
        if (('standalone' in window.navigator) && window.navigator.standalone) {
            $("body").delegate("a", "click", clickHandler);
        }
    };

    var clickHandler = function (e) {
        if ($(this).attr('href').indexOf('http') == 0 && $(this).attr('href').indexOf(document.location.host) == -1 && !$(this).hasClass("dont-open-safari")
            || $(this).hasClass("open-safari")) {
            return;
        }
        e.preventDefault();
        var href = $(this).attr('href');
        if (href) {
            location.href = href;
        }
    };

    return {
        init: init
    };

})(jQuery);

jQuery(function($) {
    nicam_ch.linkHandler.init();
});
