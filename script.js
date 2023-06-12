function calculateDistance() {
    var pointA = document.getElementById('pointA').value.trim();
    var pointB = document.getElementById('pointB').value.trim();
  
    if (pointA === '' || pointB === '') {
      alert('Please enter both coordinates.');
      return;
    }
  
    var coordinatesA = pointA.split(',');
    var coordinatesB = pointB.split(',');
  
    if (coordinatesA.length !== 2 || coordinatesB.length !== 2) {
      alert('Please enter coordinates in the correct format (Latitude, Longitude).');
      return;
    }

    var latA = parseFloat(coordinatesA[0]);
    var lonA = parseFloat(coordinatesA[1]);
    var latB = parseFloat(coordinatesB[0]);
    var lonB = parseFloat(coordinatesB[1]);

    if (isNaN(latA) || isNaN(lonA) || isNaN(latB) || isNaN(lonB)) {
        alert('Please enter valid numeric coordinates.');
        return;
    }
    var distance = getAirDistance(latA, lonA, latB, lonB);
    document.getElementById('result').textContent = 'Distance: ' + distance.toFixed(2) + 'km';
}

function getAirDistance(lat1, lon1, lat2, lon2) {
    var earthRadius = 6371; // Radius of the Earth in kilometers
  
    // Convert latitude and longitude to radians
    var lat1Rad = deg2rad(lat1);
    var lon1Rad = deg2rad(lon1);
    var lat2Rad = deg2rad(lat2);
    var lon2Rad = deg2rad(lon2);
  
    // Calculate the central angle between the two points
    var centralAngle = Math.acos(Math.sin(lat1Rad) * Math.sin(lat2Rad) + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.cos(lon2Rad - lon1Rad));
  
    // Calculate the distance using the central angle and Earth's radius
    var distance = earthRadius * centralAngle;
    return distance;
  }
  function deg2rad(deg) {
    return (deg * Math.PI) / 180;
  }