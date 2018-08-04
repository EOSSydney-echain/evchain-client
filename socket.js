module.exports = (server) => {
	var io = require('socket.io').listen(server);
	io.on('connection', function (socket) {
		socket.emit("welcome");
		socket.on("addPin", function () {
			socket.broadcast.emit("addPin");
		});
		socket.on("startCharge", function() {
			socket.broadcast.emit("startCharge");
		});
		socket.on('chat', function (sid) {
			socket.broadcast.to(socket.room).emit("updateChat", sid);
		});
		socket.on('disconnection', function () {
			socket.leave(socket.room);
		});
		socket.on("forEos", function(){
			console.log("fdsafdsafdsafdsafdsa")
			socket.broadcast.emit("forEos");
		});
	});

	return io;
};
