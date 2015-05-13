(function($) {
    function setCookie(name, value, exdays) {
        var exdate, value;
        exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        value = escape(value) + '; path=\'/\'' + ((exdays==null) ? '' : '; expires=' + exdate.toUTCString());
        document.cookie = name + '=' + value;
    }

    function getCookie(name) {
        var i, x, y, cookies = document.cookie.split(';');
        for (i = 0; i < cookies.length; i++) {
            x = cookies[i].substr(0, cookies[i].indexOf('='));
            y = cookies[i].substr(cookies[i].indexOf('=') + 1);
            x = x.replace(/^\s+|\s+$/g,'');
            if (x === name) {
                return unescape(y);
            }
        }
        return '';
    }

    function init(){
        var isCheckedTraditional, isCheckedModern,
            $traditional, $modern;
        isCheckedTraditional = getCookie('aoct') === '1';
        isCheckedModern = getCookie('aocm') === '1';

        $traditional = $('#aoc-checkbox-traditional');
        $modern = $('#aoc-checkbox-modern');

        if (isCheckedTraditional) {
            $traditional.prop('checked', true);
            mashtots.sovietToMashtotsDom(document.body);
        }

        if (isCheckedModern) {
            $modern.prop('checked', true);
            mashtots.mashtotsToSovietDom(document.body);
        }

        $traditional.change(function() {
            var isChecked = false;
            if($traditional.is(':checked')) {
                isChecked = true;
                mashtots.sovietToMashtotsDom(document.body);
            }
            else {
                mashtots.mashtotsToSovietDom(document.body);
            }
            setCookie('aoct', isChecked ? '1' : '0', 30);
        });

        $modern.change(function() {
            var isChecked = false;
            if($modern.is(':checked')) {
                isChecked = true;
                mashtots.mashtotsToSovietDom(document.body);
            }
            else{
                mashtots.sovietToMashtotsDom(document.body);
            }
            setCookie('aocm', isChecked ? '1' : '0', 30);
        });
    }

    $(document).ready( function() {
        init();
    });
})(jQuery);
