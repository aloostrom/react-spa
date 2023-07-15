import React, { Component } from "react";
import homeImg from './images/homeImage.png';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Enlightened Shopping</h2>
        <p>Welcome to Carvana. Carvana gives shoppers peace of mind knowing
            that you've made the right purchase. Our tools allow buyers to
            ensure that they are getting the best deal for their purchase. 
            Check out our catalog now to start saving today!
        </p>
 
        <p>Of course, we haven't forgotten about sellers. Carvana is here
            to help you make sure you get the most value for your sale. We're
            here to ensure you get the most for your sale. We'll purchase
            your car for cash, or put the sale value toward a trade. <br></br>
            <br></br>
        </p>
        <h2>Why Carvana?</h2>
        <p>Carvana backs every car with a single-owner guarantee. Each car
            in our catalog also comes with an add 50,000 mile / 6-month
            warranty. Warranty repairs are covered by our no-hassle promise.
            Just bring your car into one of our many dealerships nationwide
            for a free repair, no questions asked.
        </p>
        <img src={homeImg} className="center" alt="Happy Owner"/>
      </div>
    );
  }
}
 
export default Home;