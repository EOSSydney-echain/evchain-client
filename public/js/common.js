var evt = 4.324;

$(document).ready(function () {
	$("body").on("click", ".header-back", function () {
		history.back();
	});
	$("#evt").text(evt);
	$("#usd").text(evt * 11.0);
	printEvt();
});

var printEvt = function(){
	
	$("#evt").text(evt.toFixed(4));
	$("#usd").text((evt * 11.0).toFixed(4));
}