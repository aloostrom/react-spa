import React, { Component } from "react";
 
class Sell extends Component {
  render() {
    return (
      <div>
        <h2>Want to sell?</h2>
        <p>We want to make you the best deal for your offer. In order
          to do so, we'll need to get some info from you. Let's get
          some basic info on the car you want to sell. Providing your 
          VIN allows us to check your cars accident history.
        </p>
        <p>Once we have your contact information and a CarFax on
          your car, we'll reach out to you within 3 business days. 
          One of our representatives will get some finer details 
          so we can make the best offer for your car. 
        </p>
        <table>
          <tbody>
          <tr>
            <td>Your Name: </td>
            <td><textarea rows="1" cols="25" placeholder="First and Last Name"></textarea></td>
          </tr>
          <tr>
            <td>Make: </td>
            <td><textarea rows="1" cols="25" placeholder="Make of car"></textarea></td>
          </tr>
          <tr>
            <td>Model: </td>
            <td><textarea rows="1" cols="25" placeholder="Car Model"></textarea></td>
          </tr>
          <tr>
            <td>Mileage: </td>
            <td><textarea rows="1" cols="25" placeholder="Last Odometer read"></textarea></td>
          </tr>
          <tr>
            <td>VIN# </td>
            <td><textarea rows="1" cols="25" placeholder="VIN for CarFax&reg;"></textarea></td>
          </tr>
          <tr>
            <td>Phone: </td>
            <td><textarea rows="1" cols="25" placeholder="###-###-####"></textarea></td>
          </tr>
          <tr>
            <td>Email: </td>
            <td><textarea rows="1" cols="25" placeholder="yours@example.com"></textarea></td>
          </tr>
          <tr> 
            <td>I want to trade <input type="checkbox"></input></td>
            <td><button>Submit</button></td>
          </tr>
          </tbody>
        </table>
        
      </div>
    );
  }
}
 
export default Sell;