$(document).ready(function () {
	var socket = io.connect(location.protocol + "//" + location.host);
	socket.on("startCharge", function () {
		location.href = "/sharing";
	});


	swal({
		title: "Congratulations!",
		text: "You are ready to share electricity and make money.",
		button: "OK",
		icon: "success"
	})
})