import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./List.css"
// import cors from "cors";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false
    };
  }
  componentDidMount() {
    this.getRestaurantsFromApi("San Diego");
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.searchLocationQuery !== prevProps.searchLocationQuery) {
      this.setState(
        {
          results: []
        },
        () => this.getRestaurantsFromApi(this.props.searchLocationQuery)
      );
    }
  }
  getRestaurantsFromApi = locationSearched => {
    this.setState({ loading: true });
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            "Access-Control-Allow-Origin": true
          }
        }
      )
      .then(res => {
        console.log(res.data.businesses);
        this.setState({ results: res.data.businesses, loading: false });
      })
      .catch(err => {
        this.setState({
          errorState: `Sorry couldn't find any locations`,
          loading: false
        });
      });
  };
  render() {
     
    const bathroomList = this.state.results.map(result => {
    //   console.log(result.id);
      let pathname = `/detail/${result.id}`
      return (
          
        <div>

          <h2><Link to={pathname}>{result.name}</Link></h2>
          <p>{result.location.address1}, {result.location.city}</p>

        </div>
      );
    });
    return(
        <div>
            {bathroomList}
        </div>
    )
  }
}

export default List;
