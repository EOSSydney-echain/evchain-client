$(document).ready(function () {
	var socket = io.connect(location.protocol + "//" + location.host);
	setTimeout(function () {
		$("body").addClass("yellow");

	}, 200);
	var nowDot = 0;
	var timer = setInterval(function () {
		$(".dots td").removeClass("selected");
		$(".dots td:eq(" + ++nowDot + ")").addClass("selected");
		spent += 0.000027;
		addEvt(-0.000027);

		$("#spent").text(spent.toFixed(4));
		if (nowDot > 8) nowDot = -1;

		var formData = new FormData();
		formData.append("from", name);
		formData.append("to", objective);
		formData.append("quantity", 0.000027);
		$.ajax({
			url: '/api/block/status/transfer',
			processData: false,
			contentType: false,
			dataType: "json",
			data: formData,
			cache: false,
			type: 'POST'
		}).done(function (data) {
			console.log(data);
		}).fail(function (err) {
			console.log(err);
		}).always(function () {
		});
	}, 100);
	var secs = 0;
	var spent = 0.000;
	setInterval(function () {
		secs++;
		$("#mins").text(parseInt(secs / 60));
		$("#secs").text(secs % 60);
	}, 1000);



	$("body").on("click", "#btnStop", function () {
		swal({
			title: "Stop Charging",
			text: "Are you stop charging your car\nby paying your EVTs?",
			icon: "warning",
			buttons: {
				cancel: {
					text: "No",
					value: false,
					visible: true,
					className: "",
					closeModal: true,
				},
				confirm: {
					text: "Yes",
					value: true,
					visible: true,
					className: "",
					closeModal: true
				}
			}
		}).then(function (value) {
			if (value) {
				socket.emit('stopCharge');
				clearInterval(timer);
				var formData = new FormData();
				formData.append("name", name);
				formData.append("action_type", "transfer");
				formData.append("objective", objective);
				formData.append("amount", spent);
				$.ajax({
					url: '/api/block/action/write',
					processData: false,
					contentType: false,
					dataType: "json",
					data: formData,
					cache: false,
					type: 'POST'
				}).done(function (data) {
				}).fail(function () {
				}).always(function () {
					swal({
						title: "Done!",
						text: "You spent " + spent.toFixed(4) + "EVT(s).",
						icon: "success"
					}).then(function (value) {
						location.href = "/maps";
					});
				});
			}
		});
	});
});