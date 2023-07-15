import React, { Component } from "react";
import rav from './images/rav4.png';
import { Link } from 'react-router-dom';
 
class carRav4 extends Component {
  render() {
    return (
      <div>
        <h3>2017 Toyota RAV4</h3>
          <h4>XLS</h4>
          <h4>$18,000</h4>
          <img src={rav} height="85%" width="85%" alt="Rav 4"/>
          <h5>Car Details</h5>
          <table className="infoTable">
            <tbody>
            <tr className="infoTableRow">
                <td className="tableKey">Mileage</td>
                <td className="tableValue">45k Miles</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Engine Type</td>
                <td className="tableValue">V8, 4.2 Liter</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">MPG</td>
                <td className="tableValue">18 City / 24 Hwy</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Exterior Color</td>
                <td className="tableValue">Titanium</td>
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
                <td className="tableValue">4</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">VIN</td>
                <td className="tableValue">CMT8Q79SKU1630411</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Stock #</td>
                <td className="tableValue">RAV-48993</td>
              </tr>
              <tr>
                <td className="prevButton">
                  <Link to="/carShelby">
                    <button type="button" style={{background: '#4DABD4'}}>Previous</button>
                  </Link>
                </td>
                <td className="nextButton">
                  <Link to="/carSilverado">
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
 
export default carRav4;