/*
  transit.js
  Solution for Assignment 3
  Krishna Soni COMP 20 Ming
*/

/* Hard code TStations into array. Would be easier with JQuery -_____- */
TStations = new Object();
TStations= 
[
  {
    "Line":"blue",
    "Station":"Wonderland",
    "TLat":42.41342,
    "TLong":-70.991648
  },
  {
    "Line":"blue",
    "Station":"Revere Beach",
    "TLat":42.40784254,
    "TLong":-70.99253321
  },  
  {
    "Line":"blue",
    "Station":"Beachmont",
    "TLat":42.39754234,
    "TLong":-70.99231944
  },
  {
    "Line":"blue",
    "Station":"Suffolk Downs",
    "TLat":42.39050067,
    "TLong":-70.99712259
  },  
  {
    "Line":"blue",
    "Station":"Orient Heights",
    "TLat":42.386867,
    "TLong":-71.00473599999999
  },
  {
    "Line":"blue",
    "Station":"Wood Island",
    "TLat":42.3796403,
    "TLong":-71.02286539000001
  },
  {
    "Line":"blue",
    "Station":"Airport",
    "TLat":42.374262,
    "TLong":-71.030395
  },
  {
    "Line":"blue",
    "Station":"Maverick",
    "TLat":42.36911856,
    "TLong":-71.03952958000001
  },
  {
    "Line":"blue",
    "Station":"Aquarium",
    "TLat":42.359784,
    "TLong":-71.051652
  },
  {
    "Line":"blue",
    "Station":"State Street",
    "TLat":42.358978,
    "TLong":-71.057598
  },
  {
    "Line":"blue",
    "Station":"Government Center",
    "TLat":42.359705,
    "TLong":-71.05921499999999
  },
  {
    "Line":"blue",
    "Station":"Bowdoin",
    "TLat":42.361365,
    "TLong":-71.062037
  },
    {
    "Line":"orange",
    "Station":"Oak Grove",
    "TLat":42.43668,
    "TLong":-71.07109699999999
  },
  {
    "Line":"orange",
    "Station":"Malden Center",
    "TLat":42.426632,
    "TLong":-71.07411
  },
  {
    "Line":"orange",
    "Station":"Wellington",
    "TLat":42.40237,
    "TLong":-71.077082
  },
  {
    "Line":"orange",
    "Station":"Sullivan",
    "TLat":42.383975,
    "TLong":-71.076994
  },
  {
    "Line":"orange",
    "Station":"Community College",
    "TLat":42.373622,
    "TLong":-71.06953300000001
  },
  {
    "Line":"orange",
    "Station":"North Station",
    "TLat":42.365577,
    "TLong":-71.06129
  },
  {
    "Line":"orange",
    "Station":"Haymarket",
    "TLat":42.363021,
    "TLong":-71.05829
  },
  {
    "Line":"orange",
    "Station":"State Street",
    "TLat":42.358978,
    "TLong":-71.057598
  },
  {
    "Line":"orange",
    "Station":"Downtown Crossing",
    "TLat":42.355518,
    "TLong":-71.060225
  },
 {
    "Line":"orange",
    "Station":"Chinatown",
    "TLat":42.352547,
    "TLong":-71.062752
  },
  {
    "Line":"orange",
    "Station":"Tufts Medical",
    "TLat":42.349662,
    "TLong":-71.063917
  },
  {
    "Line":"orange",
    "Station":"Back Bay",
    "TLat":42.34735,
    "TLong":-71.075727
  },
   {
    "Line":"orange",
    "Station":"Mass Ave",
    "TLat":42.341512,
    "TLong":-71.083423
  },
  {
    "Line":"orange",
    "Station":"Ruggles",
    "TLat":42.336377,
    "TLong":-71.088961
  },
  {
    "Line":"orange",
    "Station":"Roxbury Crossing",
    "TLat":42.331397,
    "TLong":-71.095451
  },
  {
    "Line":"orange",
    "Station":"Jackson Square",
    "TLat":42.323132,
    "TLong":-71.099592
  },
  {
    "Line":"orange",
    "Station":"Stony Brook",
    "TLat":42.317062,
    "TLong":-71.104248
  },
  {
    "Line":"orange",
    "Station":"Green Street",
    "TLat":42.310525,
    "TLong":-71.10741400000001
  },
  {
    "Line":"orange",
    "Station":"Forest Hills",
    "TLat":42.300523,
    "TLong":-71.113686
  },
  {
    "Line":"red",
    "Station":"Alewife",
    "TLat":42.395428,
    "TLong":-71.142483
  },
  {
    "Line":"red",
    "Station":"Davis",
    "TLat":42.39674,
    "TLong":-71.121815
  },
  {
    "Line":"red",
    "Station":"Porter Square",
    "TLat":42.3884,
    "TLong":-71.11914899999999
  },
  {
    "Line":"red",
    "Station":"Harvard Square",
    "TLat":42.373362,
    "TLong":-71.118956
  },
  {
    "Line":"red",
    "Station":"Central Square",
    "TLat":42.365486,
    "TLong":-71.103802
  },
  {
    "Line":"red",
    "Station":"Kendall/MIT",
    "TLat":42.36249079,
    "TLong":-71.08617653
  },
  {
    "Line":"red",
    "Station":"Charles/MGH",
    "TLat":42.361166,
    "TLong":-71.070628
  },
  {
    "Line":"red",
    "Station":"Park Street",
    "TLat":42.35639457,
    "TLong":-71.0624242
  },
  {
    "Line":"red",
    "Station":"Downtown Crossing",
    "TLat":42.355518,
    "TLong":-71.060225
  },
  {
    "Line":"red",
    "Station":"South Station",
    "TLat":42.352271,
    "TLong":-71.05524200000001
  },
  {
    "Line":"red",
    "Station":"Broadway",
    "TLat":42.342622,
    "TLong":-71.056967
  },

  {
    "Line":"red",
    "Station":"Andrew",
    "TLat":42.330154,
    "TLong":-71.057655
  },
  {
    "Line":"red",
    "Station":"JFK/UMass",
    "TLat":42.320685,
    "TLong":-71.052391
  },
  {
    "Line":"red",
    "Station":"North Quincy",
    "TLat":42.275275,
    "TLong":-71.029583
  },
  {
    "Line":"red",
    "Station":"Wollaston",
    "TLat":42.2665139,
    "TLong":-71.0203369
  },
  {
    "Line":"red",
    "Station":"Quincy Center",
    "TLat":42.251809,
    "TLong":-71.005409
  },
  {
    "Line":"red",
    "Station":"Quincy Adams",
    "TLat":42.233391,
    "TLong":-71.007153
  },
    {
    "Line":"red",
    "Station":"Braintree",
    "TLat":42.2078543,
    "TLong":-71.0011385
  },
  {
    "Line":"red",
    "Station":"Savin Hill",
    "TLat":42.31129,
    "TLong":-71.053331
  },

  {
    "Line":"red",
    "Station":"Fields Corner",
    "TLat":42.300093,
    "TLong":-71.061667
  },
  {
    "Line":"red",
    "Station":"Shawmut",
    "TLat":42.29312583,
    "TLong":-71.06573796000001
  },
  {
    "Line":"red",
    "Station":"Ashmont",
    "TLat":42.284652,
    "TLong":-71.06448899999999
  }
];


//Distance to closest station
var dist_closest =-1;
var line_color = new Object();



function init()
{
  initMapSetting = {
    center: new google.maps.LatLng(42.4069, -71.1198),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), initMapSetting);   
  
  requestSched();
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
          closestStop(myLoc);
          marker['infoWindow']= new google.maps.InfoWindow({
            content: "You are here! ("+myLat.toFixed(4)+", "+myLng.toFixed(4)+")"+
              "<br> The closest station to you is: "+closestStop(myLoc)+
                 "<br> It is " + dist_closest.toFixed(2)+ " miles away."
              });
          
          google.maps.event.addListener(marker, 'click', function() {
              this['infoWindow'].open(map, this)
              }); 
    });
  }

}


function requestSched()
{
  request =  new XMLHttpRequest();
  request.open("GET", "http://mbtamap.herokuapp.com/mapper/rodeo.json",true);
  request.send(null);
  request.onreadystatechange = parseSched;
}


function parseSched()
{
  TSchedule = new Object();
  if(request.readyState == 4 && request.status == 200 )
  {
    TSchedule = JSON.parse(request.responseText);
    line_color = TSchedule.line;
    createLookup();
    createTLocations();
    drawLine();
  }
  else if(request.status == 0)
  {
    alert("Error! Try refreshing the page")
  }
}

/* Make TStations a lookup array with station names as key */
function createLookup()
{
  TStationsLookup = new Array();
  for(i=0; i<TStations.length; i++)
  {
    if(line_color == TStations[i].Line){
      TStationsLookup[TStations[i].Station] = TStations[i];
    }
  }
}

/* Create Markers for TStations depending on response text */
function createTLocations()
{
  var image_file = new Object();
  predTable  = new String();

  switch(line_color){
    case "orange": 
        image_file = 'images/orange-pin.png';
        break;
    case "blue":
        image_file = 'images/blue-pin.png';
        break;
    case "red":
        image_file = 'images/red-pin.png';
        break;
    default:
        break;
  }

    for(key in TStationsLookup)
    {
        if(line_color == TStationsLookup[key].Line)
        {
          curLoc =  new google.maps.LatLng(TStationsLookup[key].TLat, TStationsLookup[key].TLong);

          var markerImage ={
            url: image_file,
            size: new google.maps.Size(70,85),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(10,30),
            scaledSize:new google.maps.Size(25,35)
          }
          var curMarker = new google.maps.Marker({
            position: curLoc,
            map: map,
            title: TStationsLookup[key].Station,
            icon: markerImage
          });

          parsePredictions(key);
          curMarker['infoWindow'] = new google.maps.InfoWindow({
            content: "<u>"+TStationsLookup[key].Station+"</u><br>Predictions<br><br> <table><tr><td>Destination</td> <td>Time Until Arrival)</td><tr>"
            +predTable+"</table>"
          });
          
          google.maps.event.addListener(curMarker, 'click', function() {
            this['infoWindow'].open(map, this)
        }); 
      }
  }
}


function parsePredictions(station_key)
{
    infoTable = new Array();
    for(i=0;i<TSchedule.schedule.length; i++)
    {
      for(j=0;j<TSchedule.schedule[i].Predictions.length; j++)
      {
        if(TSchedule.schedule[i].Predictions[j].Stop == station_key)
        {
          infoTable.push({
            "Destination" : TSchedule.schedule[i].Destination,
            "Time" : Math.floor(TSchedule.schedule[i].Predictions[j].Seconds/60)+"min "+TSchedule.schedule[i].Predictions[j].Seconds%60+"s"
          });
        }
      }
    }
    // Make infoTable into string for marker
    parseTable();
}

/* Make information from infoTable in parsePredictions into readable table for marker */
function parseTable()
{
   predTable = "";

   for(i=0;i<infoTable.length;i++)
   {
      predTable = predTable.concat("<tr><td>"+infoTable[i].Destination+"</td>" +infoTable[i].Time+"</td></tr>");
   }
   return predTable;
}


/* Draws polylines for Tstations, handles fork on Red line (messy, would make cleaner later) */
function drawLine()
{
  TStationsPathLoc1= new Array();
  TStationsPathLoc2= new Array();
  fork_status = true;
  polyLine_color = new Object();

  switch(line_color)
  {
      case "red":
          polyLine_color = '#FF0000';
          break;
      case "blue":
          polyLine_color = '#1919FF';
          break;
      case "orange":
          polyLine_color = '#FFA500';
          break;
      default: 
          break;
  }

  for(key in TStationsLookup)
  {
    if(line_color == TStationsLookup[key].Line)
    {
      //always push to end of array to keep continuous (we're assuming Tstation in order)
      if(fork_status){
        TStationsPathLoc1.push(new google.maps.LatLng(TStationsLookup[key].TLat,TStationsLookup[key].TLong))
          if(line_color == "red" && TStationsLookup[key].Station =="JFK/UMass"){
            TStationsPathLoc2.push(new google.maps.LatLng(TStationsLookup[key].TLat,TStationsLookup[key].TLong))
           }
          if(line_color == "red" && TStationsLookup[key].Station == "Braintree")
          {
            fork_status = false;
          }
      }
      else
      {
        TStationsPathLoc2.push(new google.maps.LatLng(TStationsLookup[key].TLat,TStationsLookup[key].TLong))
      }
    }
  }

  var TPath = new google.maps.Polyline({
      path: TStationsPathLoc1,
      strokeColor: polyLine_color,
      strokeOpacity: 0.75,
      strokeWeight: 5
  });

  TPath.setMap(map);

  if(line_color =="red"){
    var TPath2 = new google.maps.Polyline({
      path: TStationsPathLoc2,
      strokeColor: polyLine_color,
      strokeOpacity: 0.75,
      strokeWeight: 5
    });
    TPath2.setMap(map);
  }
}

function closestStop(myLocation)
{
  var closest = -1; // index of closest station
  var myLat   = myLocation.lat();
  var myLng   = myLocation.lng();

  for(key in TStationsLookup)
  {
    if(line_color == TStationsLookup[key].Line)
    {
      d = getDistance(myLat,myLng,TStationsLookup[key].TLat,TStationsLookup[key].TLong)
      if(closest == -1 || d<getDistance(myLat,myLng,TStationsLookup[closest].TLat,TStationsLookup[closest].TLong))
      {
        closest = key;
      }
    }
  }
  dist_closest = getDistance(myLat,myLng,TStationsLookup[closest].TLat,TStationsLookup[closest].TLong);
  return TStationsLookup[closest].Station;
}

// get distance between two points
function getDistance(lat1, lng1, lat2, lng2) {
  Number.prototype.toRad = function() 
  {
    return this * Math.PI / 180;
  }

  var earthRadius = 6371;
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


