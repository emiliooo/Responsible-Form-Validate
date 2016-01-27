
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

        var town = $('#town');
        var city=$('.city');

        var post = $('#post');
        var pc=$('.pc');

        var ph = $('#ph');
        var phone=$('.phone');


        if ((imie.val().length >= 2) && (imie.val().length <= 10)) {
            fn.hide();
        }
        else {;
            fn.show();
        }

        if ((nazwisko.val().length >= 1) && (nazwisko.val().length <= 30)) {
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

        if ((town.val().length >= 5) && (town.val().length <= 20)) {
            city.hide();
        }
        else {;
            city.show();
        }

        if ($.isNumeric(post.val()))
        {
            pc.hide();
        }
        else {;
            pc.show();
        }
        if ($.isNumeric(ph.val()))
        {
            phone.hide();
        }
        else {;
            phone.show();
        }
        if ( $('#cz1').is(':checked'))
        {

        }
        else {

            alert('you must agree age')
        }

        if ( $('#cz2').is(':checked'))
        {
            phone.hide();
        }
        else {
            alert('you must checked box')
        }

    }


    $("button").click(function () {
        checkingValidForm();
    });
})