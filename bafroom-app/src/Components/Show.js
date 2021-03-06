import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./Map";
import List from "./List"


class Maps extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    coordinates: []
  };
  onMarkerClick = (props, marker, res) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      coordinates: res.data.businesses
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  
  render() {
    console.log(this.state)
    return (
      
      <div>
        <h1>Map</h1>
        <List markers={this.state.result.coordinates}/>
     
        <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
          <Marker onClick={this.onMarkerClick} name={"Current Location"} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>
      </div>
    );  
  }

}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBD28JRPlL5AT3GqY_IID3ZeYdLUNnWGqA"
})(Maps);
