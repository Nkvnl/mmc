$(document).ready(function() {
    $('#controlR').click(function() {
        event.preventDefault();
        $('#content').animate({ marginLeft: "-=400px" }, "fast")
    });
    $('#controlL').click(function() {
        event.preventDefault();
        $('#content').animate({ marginLeft: "+=400px" }, "fast")
    })
});
$(document).ready(function() {
    $('#controlR1').click(function() {
        event.preventDefault();
        $('#content1').animate({ marginLeft: "-=400px" }, "fast")
    });
    $('#controlL1').click(function() {
        event.preventDefault();
        $('#content1').animate({ marginLeft: "+=400px" }, "fast")
    })
});
$(document).ready(function() {
    $('#controlR2').click(function() {
        event.preventDefault();
        $('#content2').animate({ marginLeft: "-=400px" }, "fast")
    });
    $('#controlL2').click(function() {
        event.preventDefault();
        $('#content2').animate({ marginLeft: "+=400px" }, "fast")
    })
});
$(document).ready(function() {
    $('#controlR3').click(function() {
        event.preventDefault();
        $('#content3').animate({ marginLeft: "-=400px" }, "fast")
    });
    $('#controlL3').click(function() {
        event.preventDefault();
        $('#content3').animate({ marginLeft: "+=400px" }, "fast")
    })
})

function hide() {
    var element = document.getElementById("blog-div-hide");
    element.classList.add("hide");
}
