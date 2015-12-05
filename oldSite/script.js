$(function() {
	var focus = "#home-content";

	//hide the sections
	$("div div").each(function() {
		var elem = $("#" + $(this).attr("id"));
        $(elem).hide();
	});

	$(focus).fadeIn(500);

	//show correct navigation section
	$("a.navbutton").click(function() {
		var elem = $("#" + $(this).attr("id") + "-content");
		$(focus).hide();
		elem.fadeIn(500);
		focus = elem;
	});

	
});











