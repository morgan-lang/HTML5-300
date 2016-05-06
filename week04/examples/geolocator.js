var navGeoLoc = navigator.geolocation;
if ( navGeoLoc )
{
    navGeoLoc.getCurrentPosition(
        function successCallback( position )
        {
            console.log( 'Position at ' + new Date( position.timestamp ) );
            console.log( ' Latitude: ' + position.coords.latitude + '°' );
            console.log( ' Longitude: ' + position.coords.longitude + '°' );
            console.log( ' Accuracy: ' + position.coords.accuracy + 'm' );
        },
        function errorCallback( error )
        {
            var message;
            switch ( error.code )
            {
            case error.PERMISSION_DENIED:
                message = "Geolocation permission denied.";
                break;
            case error.POSITION_UNAVAILABLE:
                message = "Geolocation position unavailable.";
                break;
            case error.TIMEOUT:
                message = "Geolocation timed out.";
                break;
            }
            message += '\n' + error.message;
            console.log( message );
        },
        {
            enableHighAccuracy: false,
            maximumAge: 86400000, //1 day
            timeout: 60000 //1 min
        } );
}
else
{
    console.log( 'No geolocation support' );
}
  