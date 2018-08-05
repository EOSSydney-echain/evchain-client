$(document).ready(function(){
	var socket = io.connect(location.protocol + "//" + location.host);
	socket.on("addPin", function(){
		location.href = "/share";
	})
});