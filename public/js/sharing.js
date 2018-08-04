$(document).ready(function () {
	var nowDot = 0;
	setInterval(function () {
		$(".dots td").removeClass("selected");
		$(".dots td:eq(" + ++nowDot + ")").addClass("selected");
		evt += 0.000027;
		printEvt();
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
