function loadPage(pwd) {
    var hash = pwd;
    hash = Sha1.hash(pwd);

    if (hash == "291d6f622f89cba1284b59193237890a5b52b9fb") {
        window.location = "/projects";
    } else {
        $("#error-msg").css('visibility', 'visible');
        $("#password").val("");
    }
}

$("#loginbutton").on("click", function() {
    loadPage($("#password").val());
});

$("#password").keypress(function(e) {
    if (e.which == 13) {
        loadPage($("#password").val());
    }
});

$("#password").focus();
