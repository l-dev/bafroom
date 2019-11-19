import React, { Component } from "react";
import {  GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./Map";
import axios from "axios";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      results: [],
      loading: false,
      locationSearched: "San Diego"
    };
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=${
          this.state.locationSearched
        }`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            "Access-Control-Allow-Origin": true
          }
        }
      )
      .then(res => {
        console.log(res.data.businesses);
        this.setState({
          results: res.data.businesses
        });
      })

      .catch(err => {
        this.setState({
          errorState: `Sorry couldn't find any locations`,
          loading: false
        });
      });
  }
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    console.log(this.state.results);
       
    return (
      <div>
    
        <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
          {this.state.results.map((business, index) => {
              
            return (
                
  
       
              <Marker
                onClick={this.onMarkerClick}
                key={index}
                name={business.name}
                position={{
                  lat: business.coordinates.latitude,
                  lng: business.coordinates.longitude
                }}
              
              />
              
             

            );
          })
          }
          <Marker onClick={this.onMarkerClick} name={"Current Location"} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            
          >
            <div>
          
              <h4><a href={'/list'} name={this.state.selectedPlace.name}>{this.state.selectedPlace.name}</a> </h4>
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
