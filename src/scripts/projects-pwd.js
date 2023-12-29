function loadPage(pwd) {
    $("#error-msg").css('visibility', 'hidden');
            
    var hash = pwd;
    hash = Sha1.hash(pwd);
    var url = hash + "/projects";

    $.ajax({
        url : url,
        dataType : "html",
        success : function(data) {
            window.location = url;
        },
        error : function(xhr, ajaxOptions, thrownError) {
            $("#error-msg").css('visibility', 'visible');
            $("#password").val("");
            $("#password").focus();
        }
    });
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
