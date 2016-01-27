
$(document).ready(function () {

    function checkingValidForm() {

        var imie = $('#imie');
        var fn=$('.fn');

        var nazwisko = $('#nazwisko');
        var ln=$('.ln');

        var email = $('#ema');
        var mail=$('.email');
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        var pass = $('#spas');
        var pa=$('.pass');

        var repass = $('#respas');
        var repa=$('.cpass');

        var addr1 = $('#adres1');
        var ad1=$('.ad1');

        var addr2 = $('#adres2');
        var ad2=$('.ad2');

        if ((imie.val().length >= 2) && (imie.val().length <= 10)) {
            fn.hide();
        }
        else {;
            fn.show();
        }

        if ((nazwisko.val().length >= 1) && (nazwisko.val().length <= 10)) {
            ln.hide();
        }
        else {
            ln.show();
        }

        if (re.test(email.val())) {
            mail.hide();
        }
        else {
            mail.show();
        }

        if ((pass.val().length >= 5) && (pass.val().length <= 20)) {
            pa.hide();
        }
        else {;
            pa.show();
        }

        if ((repass.val().length >= 5) && (repass.val().length <= 20)&& pass.val().length==repass.val().length) {
            repa.hide();
        }
        else {;
            repa.show();
        }

        if ((addr1.val().length >= 5) && (addr1.val().length <= 20)) {
            ad1.hide();
        }
        else {;
            ad1.show();
        }

        if ((addr2.val().length >= 5) && (addr2.val().length <= 20)) {
            ad2.hide();
        }
        else {;
            ad2.show();
        }

    }


    $("button").click(function () {
        checkingValidForm();
    });
})