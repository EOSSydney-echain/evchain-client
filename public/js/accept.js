$(document).ready(function () {
	$("body").on("click", "#charge", function () {
		swal({
			title: "Start Charging",
			text: "Are you sure charging your car by paying your EVTs?",
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
		}).then(function(value){
			if(value){
				location.href = "/charge";
			}
		});
	});
})