function loadhtml(e) {
    var t = "".replace(/agent_number/g, e.agentNum),
        n = document.createElement("div");
    n.innerHTML = t, document.body.insertBefore(n, document.body.firstChild)
}

function loadClick2Call(e) {
    function t(e) {
        var t = /(^\+(\d{10}|\d{12}|\d{11}|\d{13}|\d{14})|^(1800(\d{6}|\d{7}|\d{8}))|^(1888(\d{6}|\d{7}|\d{8})))$/;
        return !e || !jQuery.trim(e) || !t.test(e) ? !1 : !0
    }
    jQuery("#click2call_submitbtn").unbind("click").click(function(n) {
        n.preventDefault(), jQuery("#click2call_submitbtn").attr("disabled", !0), jQuery("#click2call_failure").hide();
        var r = e.agentNum,
            i = jQuery("#click2call_cust_text").val(),
            s = {
                api_key: e.apiKey,
                agent_number: r,
                phone_number: i,
                sr_number: e.srnumber
            };
        t(i.toString()) && t(i.toString()) ? jQuery.ajax({
            url: "https://kpi.knowlarity.com/Basic/v1/account/call/c2c-widget/",
            type: "GET",
            data: s,
            cache: !1,
            success: function(e) {
                jQuery(".click_to_call_form").hide(), jQuery("#click2call_success").show(), setTimeout(function() {
                    jQuery(".click_to_call_form").show(), jQuery("#click2call_success").hide()
                }, 5e3), jQuery("#click2call_submitbtn").attr("disabled", !1)
            },
            error: function(e, t, n) {
                jQuery(".click_to_call_form").hide(), jQuery("#click2call_failure").show(), setTimeout(function() {
                    jQuery("#click2call_failure").hide(), jQuery(".click_to_call_form").show()
                }, 5e3), jQuery("#click2call_submitbtn").attr("disabled", !1)
            }
        }) : (alert("Number should be in international format like +919999988888."), jQuery("#click2call_submitbtn").attr("disabled", !1))
    })
}

function vijan_contact() {

    var f_name = $('#f_name').val();
    var email = $('#email').val();
    var mob_no = $('#mob_no').val();
    var msg = $('#msg').val();


    if (f_name == "") {
        $("#f_name").css('border-color', 'red');
        document.getElementById('f_name').focus();
        return false;
    } else {
        $('#f_name').removeAttr("style");
    }

    if (email == "") {
        $("#email").css('border-color', 'red');
        document.getElementById('email').focus();
        return false;
    } else {
        $('#email').removeAttr("style");
    }


    if (mob_no == "") {
        $("#mob_no").css('border-color', 'red');
        document.getElementById('mob_no').focus();
        return false;
    } else {
        $('#mob_no').removeAttr("style");
    }


    if (msg == "") {
        $("#msg").css('border-color', 'red');
        document.getElementById('msg').focus();
        return false;
    } else {
        $('#msg').removeAttr("style");
    }



    //alert('helo');

    $.ajax({
        type: 'POST',
        url: 'send_form_email.php',
        data: "f_name=" + f_name + "&email=" + email + "&mob_no=" + mob_no + "&msg=" + msg,
        success: function(data) {

            window.location.replace("thank_you.php");

            //$('#popup').fadeIn().html('Thank you for contacting us.');
            //  $('#popup').bPopup({
            //    modalClose: false,
            //    opacity: 0.6,
            //    positionStyle: 'fixed' //'fixed' or 'absolute'
            // });  
            //setTimeout(function() {

            //$('#popup').fadeOut("slow");
            // $('#popup').css('box-shadow','0');
            //	}, 1000);



            $('#f_name').val('');
            $('#email').val('');
            $('#mob_no').val('');
            $('#msg').val('');

        }

    });

}



$(document).ready(function() {

    $("#sub_career").click(function() {

        var fd = new FormData();
        var files = $('#file')[0].files[0];
        var f_name = $('#career_name').val();

        var email = $('#career_email').val();
        var mob_no = $('#career_mob').val();



        if (f_name == "") {
            $("#career_name").css('border-color', 'red');
            document.getElementById('career_name').focus();
            return false;
        } else {
            $('#career_name').removeAttr("style");
        }

        if (email == "") {
            $("#career_email").css('border-color', 'red');
            document.getElementById('career_email').focus();
            return false;
        } else {
            $('#career_email').removeAttr("style");
        }


        if (mob_no == "") {
            $("#career_mob").css('border-color', 'red');
            document.getElementById('career_mob').focus();
            return false;
        } else {
            $('#career_mob').removeAttr("style");
        }





        fd.append('file', files);
        fd.append('f_name', f_name);
        fd.append('email', email);
        fd.append('mob_no', mob_no);


        $.ajax({
            url: 'send_form_career.php',
            type: 'POST',
            data: fd,

            contentType: false,
            processData: false,
            success: function(response) {
                //alert(response);
                if (response == 0) {

                    $('#wrong_ext').html('Using Wrong File Extension, Use - ".doc" or ".pdf"');
                    $('#carermsg_here').fadeIn().html('Error While Uploading.');
                    $('#file').val('');
                    setTimeout(function() {
                        $('#carermsg_here').fadeOut("slow");
                    }, 2000);

                } else {
                    $('#wrong_ext').html('');
                    //$('#carermsg_here').fadeIn().html('Thank you for Applying.');

                    $('#carermsg_here').bPopup({
                        modalClose: false,
                        opacity: 0.6,
                        positionStyle: 'fixed' //'fixed' or 'absolute'
                    });


                    $('#career_name').val('');
                    $('#career_email').val('');
                    $('#career_mob').val('');

                    $('#file').val('');
                    //setTimeout(function() {
                    //$('#carermsg_here').fadeOut("slow");
                    //}, 2000 );


                }
            },
        });
    });
});



function init(e, t, n) {
    var r = {
        apiKey: e,
        agentNum: n,
        srnumber: t
    };
    if (typeof jQuery == "undefined") {
        typeof $ == "function" && (thisPageUsingOtherJSLibrary = !0);

        function i(e, t) {
            var n = document.createElement("script");
            n.src = e;
            var r = document.getElementsByTagName("head")[0],
                i = !1;
            n.onload = n.onreadystatechange = function() {
                !i && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") && (i = !0, t(), n.onload = n.onreadystatechange = null, r.removeChild(n))
            }, r.appendChild(n)
        }
        i("http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js", function() {
            loadhtml(r), loadClick2Call(r)
        })
    } else loadhtml(r), loadClick2Call(r);
    sendEventToGoogleAnalytics("Click-to-Call", "call done", "Click to call widget", 1)
}

function sendEventToGoogleAnalytics(e, t, n, r) {
    (function(e, t, n, r, i, s, o) {
        e.GoogleAnalyticsObject = i, e[i] = e[i] || function() {
            (e[i].q = e[i].q || []).push(arguments)
        }, e[i].l = 1 * new Date, s = t.createElement(n), o = t.getElementsByTagName(n)[0], s.async = 1, s.src = r, o.parentNode.insertBefore(s, o)
    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-18671770-23", "auto"), ga("send", "pageview"), ga("send", "event", {
        eventCategory: e,
        eventAction: t,
        eventLabel: n,
        eventValue: r
    })
};

function valid_mob(phoneNumber) {

    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

    if (filter.test(phoneNumber)) {
        if (phoneNumber.length == 10) {
            $('#valid_mob').html('');
            $('#sub_contact').prop('disabled', false);
            return true;
        } else {
            $('#valid_mob').html('enter valid mobile number');
            $('#sub_contact').prop('disabled', true);
            return false;
        }
    } else {
        $('#valid_mob').html('Please put 10  digit mobile');
        $('#sub_contact').prop('disabled', true);
        return false;
    }



}

function IsEmail(email) {

    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {

        $('#valid_email').html('Enter Valid Email Address');
        $('#sub_contact').prop('disabled', true);
        return false;
    } else {

        $('#valid_email').html('');
        $('#sub_contact').prop('disabled', false);
        return true;
    }
}

function IsEmail_career(email) {

    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        $('#career_validemail').html('Enter Valid Email Address');
        $('#sub_career').prop('disabled', true);

        return false;
    } else {
        $('#career_validemail').html('');
        $('#sub_career').prop('disabled', false);

        return true;
    }
}


function valid_mob_career(phoneNumber) {

    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

    if (filter.test(phoneNumber)) {
        if (phoneNumber.length == 10) {
            $('#valid_mobCareer').html('');
            $('#sub_career').prop('disabled', false);
            return true;
        } else {
            $('#valid_mobCareer').html('enter valid mobile number');
            $('#sub_career').prop('disabled', true);
            return false;
        }
    } else {
        $('#valid_mobCareer').html('Please put 10  digit mobile');
        $('#sub_career').prop('disabled', true);
        return false;
    }



}

function valid_field() {

    var f_name = $('#f_name').val();
    var email = $('#email').val();
    var mob_no = $('#mob_no').val();

    if (f_name == "") {
        $("#f_name").css('border-color', 'red');
        document.getElementById('f_name').focus();
        return false;
    } else {
        $('#f_name').removeAttr("style");
    }

    if (email == "") {
        $("#email").css('border-color', 'red');
        document.getElementById('email').focus();
        return false;
    } else {
        $('#email').removeAttr("style");
    }


    if (capa_dt == "") {
        $("#mob_no").css('border-color', 'red');
        document.getElementById('mob_no').focus();
        return false;
    } else {
        $('#mob_no').removeAttr("style");
    }





}