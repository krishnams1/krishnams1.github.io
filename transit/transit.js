/*
	transit.js
	Solution for Assignment 3
	Krishna Soni COMP 20 Ming
*/

//Distance to closest station


var dist_closest =-1;

function init()
{
	initMapSetting = {
		center: new google.maps.LatLng(42.4069, -71.1198),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), initMapSetting);  	
	//requestTimes();
	myLocation();
}




/* Finds current location using geolocation utility */

function myLocation(){
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(function(position) {
                myLat = position.coords.latitude;
	            myLng = position.coords.longitude;
	            var myLoc = new google.maps.LatLng(myLat, myLng);
	            map.setCenter(myLoc);
	            marker = new google.maps.Marker({
	                position: myLoc,
	                map: map,
	                title: "Your Location"
	            });
	        //find closest stop
	       // closestStop(myLoc);
	        marker['infoWindow']= new google.maps.InfoWindow({
	        	content: "You are here! <br>("+myLat.toFixed(4)+", "+myLng.toFixed(4)+")<br>"+
	        		"<br> The closest station to you is: "+"closestStop(myLoc)"+
	        		"<br> and it is "+ dist_closest.toFixed(2)+ " miles away."
	        });
	        google.maps.event.addListener(marker, 'click', function() {
					this['infoWindow'].open(map, this)
			});
		});
	}

}



/*

function closestStop()
{



}



// get distance between two points
function getDistance(lat1, lng1, lat2, lng2) {
	Number.prototype.toRad = function() 
	{
		return this * Math.PI / 180;
	}

	var eathRadius = 6371;
	var x1 = lat2-lat1;
	var dLat = x1.toRad();

	var x2 = lng2-lng1;

	var dLng = x2.toRad();

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
   	Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
   	Math.sin(dLng/2) * Math.sin(dLng/2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 

    var d = earthRadius * c;

    return d;
}
*/



