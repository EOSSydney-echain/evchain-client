$(document).ready(function () {
	var socket = io.connect(location.protocol + "//" + location.host);
	socket.on("startCharge", function () {
		location.href = "/sharing";
	});
})