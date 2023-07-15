import React, { Component } from "react";
import shelby from './images/shelby-3821716_1920.png';
import { Link } from 'react-router-dom';
 
class carShelby extends Component {
  render() {
    return (
      <div>
          <h3>2018 Ford Mustang</h3>
          <h4>Shelby GT</h4>
          <h4>$12,000</h4>
          <img src={shelby} height="85%" width="85%" alt="Shelby"/>
          <h5>Car Details</h5>
          <table className="infoTable">
            <tbody>
            <tr className="infoTableRow">
                <td className="tableKey">Mileage</td>
                <td className="tableValue">25k Miles</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Engine Type</td>
                <td className="tableValue">V8, 4.2 Liter</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">MPG</td>
                <td className="tableValue">17 City / 21 Hwy</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Exterior Color</td>
                <td className="tableValue">Red</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Interior Color</td>
                <td className="tableValue">Black</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Transmission</td>
                <td className="tableValue">Auto, 5-Speed</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Doors</td>
                <td className="tableValue">2</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">VIN</td>
                <td className="tableValue">NP3I0JQI2IC832518</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Stock #</td>
                <td className="tableValue">SLB-56775</td>
              </tr>
              <tr>
                <td></td>
                <td className="nextButton">
                <Link to="/carRav4">
                  <button type="button" style={{background: '#4DABD4'}}>Next</button>
                </Link>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
}
 
export default carShelby;