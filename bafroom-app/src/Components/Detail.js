import React, { Component } from "react";
import "./List.css";
import StarRatings from "react-star-ratings";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: this.props.match.params.id,
      reviews: "",
      rating: 1
    };
  }
  changeRating(newRating, name) {
    this.setState({
      rating: newRating
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newReview = this.state
    console.log(newReview)
  }
  handleChange(e) {
    this.setState({
      reviews: e.target.value
    });
  }

  componentDidMount() {
    fetch(
      `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/${
        this.state.name
      }`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Access-Control-Allow-Origin": true
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        // console.log(res);
        this.setState({
          name: res.name,
          location: res.location.display_address,
          url: res.url
        });
      });
  }

  render() {
    const { rating } = this.state;
    const { reviews } = this.state;
    // console.log(this.state);
    return (
      <div>
        <h1>{this.state.name}</h1>

        <p>{this.state.location} </p>
        <h2>BATHROOM REVIEWS</h2>
        <p>{reviews}</p>
        <p className="url">Check them out on yelp - </p>
        <a href="{this.state.url}" className="url">
          {this.state.url}
        </a>
        {/* form field */}
        <div className="field">
          <h1>LEAVE A BATHROOM REVIEW</h1>
          <form onSubmit={this.handleSubmit}>
            <br />
            <br />
            <label className="review">
              Bathroom Review: <br />
              <textarea
                type="text"
                value={this.state.reviews}
                onChange={this.handleChange}
                name="Review"
              />
            </label>
            <br />
            {/* <h2>Rating from state: {rating}</h2>
            <StarRatings
              rating={this.state.rating}
              renderStarIcon={() => (
                <span>
                  k
                  <img src="https://cdn4.iconfinder.com/data/icons/hotel-1-1/48/8-512.png" />
                </span>
              )}
              changeRating={this.changeRating}
              numberOfStars={6}
              name="rating"
            /> */}
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
    // let details = this.props.results.map((result) => {
    //     return(
    //         <div>
    //           <h1>{result.alias}</h1>
    //         </div>
    //     )
    // })
    // return(
    //     <div>
    //  {details}
    //     </div>
  }
}

export default Detail;
