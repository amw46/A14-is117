function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    if (fname == "") {
        window.alert("Name must be filled out");
        return false;
    }

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


/*
function printCookie() {

    var user = getCookie("user");
    if (user != "") {
        var msg = "Welcome back, " + user;
        document.getElementById("namedisplay").innerHTML = msg;
    }
    else {
        document.getElementById("namedisplay").innerHTML = "Cookie not set";
    }
}
*/

function cookieAlert() {

    var user = getCookie("user");
    if (user != "") {
        window.alert("Welcome back, " + user);
    }
    else {
        user = window.prompt("Please enter your name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
}