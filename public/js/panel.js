$(document).ready(function () {
	var socket = io.connect(location.protocol + "//" + location.host);

	$("body").on("click", "#addPin", function () {
		socket.emit('addPin');

	});
	$("body").on("click", "#changeEvtAmount", function () {
		localStorage.setItem("evt", parseFloat($("#evt").val()));
		swal("evt 변경 완료! " + localStorage.getItem("evt"));
	});
	socket.on('welcome', function () {

	});
});