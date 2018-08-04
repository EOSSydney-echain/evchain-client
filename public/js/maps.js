
function myMap() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var mapProp = {
				center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
				zoom: 18,
			};
			var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
			var marker = new google.maps.Marker({
				position: {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				},
				map: map,
				title: 'Hello World!'
			});
		});
	}

}

