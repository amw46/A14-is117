function validateForm(a) {
    var fname = document.forms[a]["fname"].value;
    if (fname == "") {
        alert("Name must be filled out");
        return false;
    }

    var cookieVal = document.forms[a]["fname"].value;
    setCookie("user", cookieVal, 7);

    return true;
}



function setCookie(cname, cval, daysToExpire) {

    var date = new Date();
    date.setTime(date.getTime() + (daysToExpire*24*60*60*1000)); //milliseconds
    var expires = date.toUTCString();

    document.cookie = cname + "=" + cval + ";" + "expires=" + expires + ";path=/";
    // cname=cvalue; expires=expiredate; path=/

}

function getCookie(cname) {

    var name = cname + "="; //name=
    var decodedCookie = decodeURIComponent(document.cookie);
    var splitCookie = decodedCookie.split(';'); //split the cookie string by semicolon

    for(var i = 0; i <ca.length; i++) {
        var c = splitCookie[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return ""; //will return blank if cookie is not found
}


function printCookie(a) {

    var user = getCookie("user");
    if (user != "") {
        var msg = "Welcome, " + user;
        document.getElementById(a).innerHTML = msg;
    }
    else {
        document.getElementById(a).innerHTML = "Cookie not set";
    }
}