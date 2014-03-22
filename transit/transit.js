/*
  transit.js
  Solution for Assignment 3
  Krishna Soni COMP 20 Ming
*/


/* HardCode TStations into array. Would be easier with JQuery */
TStations = new Object();
TStations= 
[
  {
    "Line":"Blue",
    "Station":"Airport",
    "TLat":42.374262,
    "TLong":-71.030395
  },
  {
    "Line":"Blue",
    "Station":"Aquarium",
    "TLat":42.359784,
    "TLong":-71.051652
  },
  {
    "Line":"Blue",
    "Station":"Beachmont",
    "TLat":42.39754234,
    "TLong":-70.99231944
  },
  {
    "Line":"Blue",
    "Station":"Bowdoin",
    "TLat":42.361365,
    "TLong":-71.062037
  },
  {
    "Line":"Blue",
    "Station":"Government Center",
    "TLat":42.359705,
    "TLong":-71.05921499999999
  },
  {
    "Line":"Blue",
    "Station":"Maverick",
    "TLat":42.36911856,
    "TLong":-71.03952958000001
  },
  {
    "Line":"Blue",
    "Station":"Orient Heights",
    "TLat":42.386867,
    "TLong":-71.00473599999999
  },
  {
    "Line":"Blue",
    "Station":"Revere Beach",
    "TLat":42.40784254,
    "TLong":-70.99253321
  },
  {
    "Line":"Blue",
    "Station":"State Street",
    "TLat":42.358978,
    "TLong":-71.057598
  },
  {
    "Line":"Blue",
    "Station":"Suffolk Downs",
    "TLat":42.39050067,
    "TLong":-70.99712259
  },
  {
    "Line":"Blue",
    "Station":"Wonderland",
    "TLat":42.41342,
    "TLong":-70.991648
  },
  {
    "Line":"Blue",
    "Station":"Wood Island",
    "TLat":42.3796403,
    "TLong":-71.02286539000001
  },
  {
    "Line":"Orange",
    "Station":"Back Bay",
    "TLat":42.34735,
    "TLong":-71.075727
  },
  {
    "Line":"Orange",
    "Station":"Chinatown",
    "TLat":42.352547,
    "TLong":-71.062752
  },
  {
    "Line":"Orange",
    "Station":"Community College",
    "TLat":42.373622,
    "TLong":-71.06953300000001
  },
  {
    "Line":"Orange",
    "Station":"Downtown Crossing",
    "TLat":42.355518,
    "TLong":-71.060225
  },
  {
    "Line":"Orange",
    "Station":"Forest Hills",
    "TLat":42.300523,
    "TLong":-71.113686
  },
  {
    "Line":"Orange",
    "Station":"Green Street",
    "TLat":42.310525,
    "TLong":-71.10741400000001
  },
  {
    "Line":"Orange",
    "Station":"Haymarket",
    "TLat":42.363021,
    "TLong":-71.05829
  },
  {
    "Line":"Orange",
    "Station":"Jackson Square",
    "TLat":42.323132,
    "TLong":-71.099592
  },
  {
    "Line":"Orange",
    "Station":"Malden Center",
    "TLat":42.426632,
    "TLong":-71.07411
  },
  {
    "Line":"Orange",
    "Station":"Mass Ave",
    "TLat":42.341512,
    "TLong":-71.083423
  },
  {
    "Line":"Orange",
    "Station":"North Station",
    "TLat":42.365577,
    "TLong":-71.06129
  },
  {
    "Line":"Orange",
    "Station":"Oak Grove",
    "TLat":42.43668,
    "TLong":-71.07109699999999
  },
  {
    "Line":"Orange",
    "Station":"Roxbury Crossing",
    "TLat":42.331397,
    "TLong":-71.095451
  },
  {
    "Line":"Orange",
    "Station":"Ruggles",
    "TLat":42.336377,
    "TLong":-71.088961
  },
  {
    "Line":"Orange",
    "Station":"State Street",
    "TLat":42.358978,
    "TLong":-71.057598
  },
  {
    "Line":"Orange",
    "Station":"Stony Brook",
    "TLat":42.317062,
    "TLong":-71.104248
  },
  {
    "Line":"Orange",
    "Station":"Sullivan",
    "TLat":42.383975,
    "TLong":-71.076994
  },
  {
    "Line":"Orange",
    "Station":"Tufts Medical",
    "TLat":42.349662,
    "TLong":-71.063917
  },
  {
    "Line":"Orange",
    "Station":"Wellington",
    "TLat":42.40237,
    "TLong":-71.077082
  },
  {
    "Line":"Red",
    "Station":"Alewife",
    "TLat":42.395428,
    "TLong":-71.142483
  },
  {
    "Line":"Red",
    "Station":"Andrew",
    "TLat":42.330154,
    "TLong":-71.057655
  },
  {
    "Line":"Red",
    "Station":"Ashmont",
    "TLat":42.284652,
    "TLong":-71.06448899999999
  },
  {
    "Line":"Red",
    "Station":"Braintree",
    "TLat":42.2078543,
    "TLong":-71.0011385
  },
  {
    "Line":"Red",
    "Station":"Broadway",
    "TLat":42.342622,
    "TLong":-71.056967
  },
  {
    "Line":"Red",
    "Station":"Central Square",
    "TLat":42.365486,
    "TLong":-71.103802
  },
  {
    "Line":"Red",
    "Station":"Charles/MGH",
    "TLat":42.361166,
    "TLong":-71.070628
  },
  {
    "Line":"Red",
    "Station":"Davis",
    "TLat":42.39674,
    "TLong":-71.121815
  },
  {
    "Line":"Red",
    "Station":"Downtown Crossing",
    "TLat":42.355518,
    "TLong":-71.060225
  },
  {
    "Line":"Red",
    "Station":"Fields Corner",
    "TLat":42.300093,
    "TLong":-71.061667
  },
  {
    "Line":"Red",
    "Station":"Harvard Square",
    "TLat":42.373362,
    "TLong":-71.118956
  },
  {
    "Line":"Red",
    "Station":"JFK/UMass",
    "TLat":42.320685,
    "TLong":-71.052391
  },
  {
    "Line":"Red",
    "Station":"Kendall/MIT",
    "TLat":42.36249079,
    "TLong":-71.08617653
  },
  {
    "Line":"Red",
    "Station":"North Quincy",
    "TLat":42.275275,
    "TLong":-71.029583
  },
  {
    "Line":"Red",
    "Station":"Park Street",
    "TLat":42.35639457,
    "TLong":-71.0624242
  },
  {
    "Line":"Red",
    "Station":"Porter Square",
    "TLat":42.3884,
    "TLong":-71.11914899999999
  },
  {
    "Line":"Red",
    "Station":"Quincy Adams",
    "TLat":42.233391,
    "TLong":-71.007153
  },
  {
    "Line":"Red",
    "Station":"Quincy Center",
    "TLat":42.251809,
    "TLong":-71.005409
  },
  {
    "Line":"Red",
    "Station":"Savin Hill",
    "TLat":42.31129,
    "TLong":-71.053331
  },
  {
    "Line":"Red",
    "Station":"Shawmut",
    "TLat":42.29312583,
    "TLong":-71.06573796000001
  },
  {
    "Line":"Red",
    "Station":"South Station",
    "TLat":42.352271,
    "TLong":-71.05524200000001
  },
  {
    "Line":"Red",
    "Station":"Wollaston",
    "TLat":42.2665139,
    "TLong":-71.0203369
  }
];





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
  //myLocation();
  createTLocations();
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
            content: "You are here! ("+myLat.toFixed(4)+", "+myLng.toFixed(4)+")"+
              "<br> The closest station to you is: "+"closestStop(myLoc)"+
                 " and it is" + dist_closest.toFixed(2)+ " miles away."
              });
          
          google.maps.event.addListener(marker, 'click', function() {
              this['infoWindow'].open(map, this)
              }); 
    });
  }

}


function requestTimes()
{
  request =  new XMLHttpRequest();
  request.open("GET", "http://mbtamap.herokuapp.com/mapper/rodeo.json",true);
  request.send(null);
  request.onreadystatechange = parseTimes;
}


function parseTimes()
{
  if(request.readyState == 4 && request.status == 400)
  {
    TSchedule = JSON.parse(request.responseText);
    createTLocations();
    //drawLine();
  }
  else if(request.status == 0)
  {
    alert("Error! Try refreshing the page")
  }
}

function createTLocations()
{
  // Create Markers depending on response Text
  for(i=0; i< TStations.length; i++)
  {
    curLoc =  new google.maps.LatLng(TStations[i].TLat, TStations[i].TLong);
    map.setCenter(curLoc);
    var markerImage ={
      url: 'images/blue-pin.png',
      size: new google.maps.Size(71,71),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(10,25),
      scaledSize:new google.maps.Size(25,25)
    }
    var curMarker = new google.maps.Marker({
      position: curLoc,
      map: map,
      title: TStations[i].Station,
      icon: markerImage
    });

    curMarker['infoWindow'] = new google.maps.InfoWindow({
      content: "This Station is: "+TStations[i].Station
    });
    
    google.maps.event.addListener(curMarker, 'click', function() {
      this['infoWindow'].open(map, this)
    }); 
  }
}





function drawLine()
{
  return;
}
/*
function closestStop()
{



}
*/


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




