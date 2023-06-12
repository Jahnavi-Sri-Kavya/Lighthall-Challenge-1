# Lighthall Challenge - 1

## Air Distance Calculator
The Air Distance Calculator is a web application that allows users to calculate the air distance between two locations. The distance is calculated based on latitude and longitude coordinates provided by the user.

## Technologies Used
- HTML 
- CSS 
- JavaScript

## Distance Calculation

The distance between two locations in this web app is calculated using the Spherical Law of Cosines formula. This formula takes into account the curvature of the Earth and provides a more accurate approximation of the air distance between two points on the Earth's surface.

The Spherical Law of Cosines formula used in this app is as follows:

    distance = arccos(sin(latA) * sin(latB) + cos(latA) * cos(latB) * cos(lonB - lonA)) * R

Where:
- `latA` and `latB` are the latitudes of Point A and Point B, respectively,
- `lonA` and `lonB` are the longitudes of Point A and Point B, respectively,
- `R` is the radius of the Earth (approximately 6371 kilometers).

By utilizing this formula, the app provides accurate air distance calculations between the specified locations.




