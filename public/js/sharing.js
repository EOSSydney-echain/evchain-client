$(document).ready(function () {
	swal({
		title: "Wow!",
		text: "Someone is charging EV\nat your place!",
		button: "Cool~~~"
	})
	var nowDot = 0;
	setInterval(function () {
		$(".dots td").removeClass("selected");
		$(".dots td:eq(" + ++nowDot + ")").addClass("selected");
		addEvt(0.000027);
		if (nowDot > 8) nowDot = -1;
	}, 100);
	var secs = 0;
	var spent = 0.000;
	setInterval(function () {
		secs++;
		$("#mins").text(parseInt(secs / 60));
		$("#secs").text(secs % 60);
	}, 1000);
});
