starApp.controller('mapController', ['$scope', '$http' ,

  function mapController ($scope, $http){

    //get json response from /stores
    var locations = [];
    $http.get('/stores').success(function(response){
      locations = response;
      addStoresToMap(locations);
    });

    //initial map setup
    var mapElement = document.getElementById('map');
    var mapElement = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 3.1390, lng: 101.6869},
          zoom: 11
    });
    //add pins to map
    function addStoresToMap(arr) {
        arr.map(function(obj) {
          var marker = new google.maps.Marker({
                position: new google.maps.LatLng(
                  Number(obj[";Latitude"].replace(/^;/, '')),
                  Number(obj[";Longitude"].replace(/^;/, ''))
                ),
                map: mapElement,
                animation: google.maps.Animation.DROP,
                message: new google.maps.InfoWindow
                ({
                  content: '<p><b>Starbucks</b>: ' + obj[";Name"].replace(/^;/, '') +
                   '<br><b>Address</b>: ' + obj[";Street Combined"].replace(/^;/, '')
                   + '<br><b>Phone Number</b>: ' + obj[";Phone Number"].replace(/^;/, '') + '</p>',
                  maxWidth: 320
                }),
          });
          google.maps.event.addListener(marker, 'click', function(e){
           // When clicked, open the selected marker's message
           currentSelectedMarker = marker;
           marker.message.open(map, marker);
       });
        });
    }



  }
]);
