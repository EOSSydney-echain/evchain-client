
function myMap() {
	var map;
	var p;
	setTimeout(() => {

		var marker = new google.maps.Marker({
			position: {
				lat: p.coords.latitude,
				lng: p.coords.longitude
			},
			map: map,
			icon: "/img/pin.png",
			title: 'Hello World!'
		});
	}, 3000);


	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			p = position;
			var mapProp = {
				center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
				zoom: 17,
			};
			map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
			var marker = new google.maps.Marker({
				position: {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				},
				map: map,
				icon: "/img/currentlocation.png",
				title: 'Hello World!'
			});
			var marker = new google.maps.Marker({
				position: {
					lat: position.coords.latitude + 0.001,
					lng: position.coords.longitude + 0.001
				},
				map: map,
				icon: "/img/pin.png",
				title: 'Hello World!'
			});
			var marker = new google.maps.Marker({
				position: {
					lat: position.coords.latitude - 0.001,
					lng: position.coords.longitude + 0.0013
				},
				map: map,
				icon: "/img/pin.png",
				title: 'Hello World!'
			});
			var marker = new google.maps.Marker({
				position: {
					lat: position.coords.latitude - 0.0015,
					lng: position.coords.longitude - 0.001
				},
				map: map,
				icon: "/img/pin.png",
				title: 'Hello World!'
			});

		});
	}

}

