(function() {
    // start Wordpress specific code
    var spell = getCookie('spell');
    if (spell === '') {
        setCookie('spell', 'soviet', 30);
    }

    jQuery(document).ready( function() {
        detectLanguageAndEnableConvesionCheckbox();
        jQuery('#check').change(onConvertChange);
    });

    // function for creating chekbox
    function createChekbox() {
        var li = jQuery('<span />');
        var inp = jQuery('<input />');
        inp.attr('type', 'checkbox');
        inp.attr('name', 'dasakan');
        inp.attr('id', 'check');
        inp.attr('style', 'top: 2px;');
        var lab = jQuery('<span />');
        var t ='աւանդական';
        lab.append(inp);
        lab.append(t);
        li.append(lab);
        jQuery('#qtranslate-2-chooser').prepend(li);
    }

    function detectLanguageAndEnableConvesionCheckbox(){
        // @done: check and not show, instead of showing then hiding
        var language = jQuery('html').attr('lang').toUpperCase();
        if (language === 'HY-AM' || language === 'HY') {
            createChekbox();
            if (spell === 'mashtots') {
                document.getElementById('check').checked = true;
                mashtots.sovietToMashtotsDom(document.body);
            }
        }
    }

    // function for converting the page from soviet->mashtots
    function onConvertChange() {
        if(jQuery('#check').is(':checked')) {
            setCookie('spell', 'mashtots', 30);
            mashtots.sovietToMashtotsDom(document.body);
        } else {
            setCookie('spell', 'soviet', 30);
            mashtots.mashtotsToSovietDom(document.body);
        }
    }

    function setCookie(name, value, exdays) {
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var value=escape(value) + '; path='/'' + ((exdays==null) ? '' : '; expires='+exdate.toUTCString());
        document.cookie=name + '=' + value;
    }

    function getCookie(name) {
        var i, x, y, cookies = document.cookie.split(';');
        for (i = 0; i < cookies.length; i++) {
            x = cookies[i].substr(0, cookies[i].indexOf('='));
            y = cookies[i].substr(cookies[i].indexOf('=')+1);
            x = x.replace(/^\s+|\s+$/g,'');
            if (x === name) {
                return unescape(y);
            }
        }
        return '';
    }
})();
