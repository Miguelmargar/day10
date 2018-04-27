$(document).ready(function() {
    
    $("#myParagraph").click(function() {
        for (let i = 1; i <= 3; i++) {
            $("#myParagraph").append("<p>This is paragraph number " + i + "</p>");
            $("#myParagraph").addClass("newClass");
            $("#myParagraph").click(function() {
                $("#myParagraph").text("CLICK ON ME");
                $("#myParagraph").removeClass("newClass");
            })
        }
    });
    
    $(".oldClass").click(function() {
        $(".oldClass").removeClass("oldClass").addClass("newClass");
    })
})

/* this is to make sure that click on and click off here works all the time when clicking multiple times
let classNames = $(this).attr("class").split(" ");
if (classNames.indexOf("on") == -1) { 
	$(this).addClass("on");
} else {
	$(this).addclass("off");
}
*/