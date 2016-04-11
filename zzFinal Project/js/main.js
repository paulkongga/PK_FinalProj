$(document).ready(pageReady);

function pageReady() {

	// Initialize map variable.
	var map;

	// Initialize place variable (used by autocomplete later).
	var place;


	// Initializes new Google Map object with parameters
	function initializeMap() {
		  var mapProp = {
		    center: new google.maps.LatLng(34.031245,-118.266532),
		    zoom: 12	    
		  };
		  	// Create map element on page
		    var mapElement = $("#map-container")[0];
		    map = new google.maps.Map(mapElement, mapProp);

	        // Creates map marker
	          var marker = new google.maps.Marker({
	            position: new google.maps.LatLng(34.031245,-118.266532),
	            map: map,
	            title: 'Hello World!'
	          });        

	          // Add circle overlay and bind to marker
			var circle = new google.maps.Circle({
			  map: map,
			  radius: 4023.25,    // 2.5 miles in metres
			  fillColor: '#AA0000'
			});
			circle.bindTo('center', marker, 'position');
			console.log();

	}

	initializeMap();


	$("#latlng-button").click(latLngButton);

	function latLngButton() {
		// Get inputs for latlng
		var lat = $("#lat-input").val();
		var lng = $("#lng-input").val();

		// Set new map center
		map.setCenter(new google.maps.LatLng( lat, lng ) );

	}

	$("#map-button").click(mapButton);
		//$("#user-content").show();

	function mapButton() {
		if (place != undefined) {
			var lat = place.geometry.location.lat();
			var lng = place.geometry.location.lng();			
			map.setCenter(new google.maps.LatLng(lat, lng));
			map.setZoom(16);
		}
		
	document.getElementById('user-content').style.display = "block";

		  // Marker sizes are expressed as a Size of X,Y where the origin of the image
		  // (0,0) is located in the top left of the image.

		  // Origins, anchor positions and coordinates of the marker increase in the X
		  // direction to the right and in the Y direction down.
		  var image1 = {
		    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
		    // This marker is 20 pixels wide by 32 pixels high.
		    size: new google.maps.Size(20, 32),
		    // The origin for this image is (0, 0).
		    origin: new google.maps.Point(0, 0),
		    // The anchor for this image is the base of the flagpole at (0, 32).
		    anchor: new google.maps.Point(0, 32)
		  };

		  var image2 = {
		    url: 'http://gothere.sg/static/img/icons/api/markermed_pink_A.png',
		    // This marker is 20 pixels wide by 32 pixels high.
		    size: new google.maps.Size(20, 32),
		    // The origin for this image is (0, 0).
		    origin: new google.maps.Point(0, 0),
		    // The anchor for this image is the base of the flagpole at (0, 32).
		    anchor: new google.maps.Point(0, 32)
		  };

		  var image3 = {
		    url: 'http://gothere.sg/static/img/icons/api/markermed_blue_B.png',
		    // This marker is 20 pixels wide by 32 pixels high.
		    size: new google.maps.Size(20, 32),
		    // The origin for this image is (0, 0).
		    origin: new google.maps.Point(0, 0),
		    // The anchor for this image is the base of the flagpole at (0, 32).
		    anchor: new google.maps.Point(0, 32)
		  };

		  var image4 = {
		    url: 'http://gothere.sg/static/img/icons/api/markermed_orange_O.png',
		    // This marker is 20 pixels wide by 32 pixels high.
		    size: new google.maps.Size(20, 32),
		    // The origin for this image is (0, 0).
		    origin: new google.maps.Point(0, 0),
		    // The anchor for this image is the base of the flagpole at (0, 32).
		    anchor: new google.maps.Point(0, 32)
		  };

		  var image5 = {
		    url: 'http://gothere.sg/static/img/icons/api/markermed_red_R.png',
		    // This marker is 20 pixels wide by 32 pixels high.
		    size: new google.maps.Size(20, 32),
		    // The origin for this image is (0, 0).
		    origin: new google.maps.Point(0, 0),
		    // The anchor for this image is the base of the flagpole at (0, 32).
		    anchor: new google.maps.Point(0, 32)
		  };

		var users = [
		  ['Be Aware', 34.032319, -118.266977, 4, image1], 
		  ['Amy Lady', 34.030571, -118.264915, 5, image2],
		  ['Billy Blue', 34.029629, -118.267640, 3, image3],
		  ['Othello Overlay', 34.029113, -118.266588, 2, image4],
		  ['Robbie Redlight', 34.030038, -118.268455, 1, image5]
		];

		// function setMarkers(map) {
		  // Adds markers to the map.


		  // Shapes define the clickable region of the icon. The type defines an HTML
		  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
		  // The final coordinate closes the poly by connecting to the first coordinate.
		  var shape = {
		    coords: [1, 1, 1, 20, 18, 20, 18, 1],
		    type: 'poly'
		  };
		  for (var i = 0; i < users.length; i++) {
		    var user = users[i];
		    var marker = new google.maps.Marker({
		      position: {lat: user[1], lng: user[2]},
		      map: map,
		      icon: user[4],
		      shape: shape,
		      title: user[0],
		      zIndex: user[3]
		    });
		  }
		//}

	}	

	// Set up autocomplete functionality
	var input = $("#address-input")[0];
	var autocomplete = new google.maps.places.Autocomplete(input);

	autocomplete.addListener('place_changed', function() {
		place = autocomplete.getPlace();
		if (!place.geometry) {
		  window.alert("Autocomplete's returned place contains no geometry");
		  return;
		}


	});	





}


