/* eslint-disable no-undef */
import React, {Component} from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDebQWyX35rY2kKositzCisw9q6b0h22Fs&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  return (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        icon={ {
            path          : `M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0`,
            fillOpacity   : 0.6,
            fillColor     : '#ccc',
            strokeOpacity : 0.75,
            strokeColor   : '#454545',
            strokeWeight  : 2.0,
            scale         : 1
        } }
      />
      <Polyline
        path={[new google.maps.LatLng(-30, 10), new google.maps.LatLng(30, 100)]}
        options={{
          geodesic: true,
          strokeColor: '#ff2527',
          strokeOpacity: .5,
          strokeWeight: 2,
        }}
      />
      <Polyline
        path={[new google.maps.LatLng(-30, 10), new google.maps.LatLng(30, 100)]}      
        options={{
          geodesic: false,
          strokeColor: 'green',
          strokeOpacity: .5,
          strokeWeight: 2,
        }}
      />
    </GoogleMap>
  );
})

class GoogleMapWrapper extends Component {
  render() {
    return (
      <div>
        <MyMapComponent
          />
      </div>
    );
  }
}

export default GoogleMapWrapper;
