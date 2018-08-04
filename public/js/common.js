var evt = parseFloat(localStorage.getItem("evt")) || 16.092;


$(document).ready(function () {
	$("body").on("click", ".header-back", function () {
		history.back();
	});
	$("#evt").text(evt);
	$("#usd").text(evt * 11.0);
	printEvt();
});

var printEvt = function () {

	$("#evt").text(evt.toFixed(4));
	$("#usd").text((evt * 11.0).toFixed(4));
}

var addEvt = function (amount) {
	evt += amount;
	localStorage.setItem("evt", evt);
	printEvt();
}