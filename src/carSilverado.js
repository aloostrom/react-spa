import React, { Component } from "react";
import chevy from './images/silverado.png';
import { Link } from 'react-router-dom';
 
class carSilverado extends Component {
  render() {
    return (
      <div>
        <h3>2016 Chevrolet Silverado</h3>
          <h4>Quad Cab</h4>
          <h4>$22,000</h4>
          <img src={chevy} height="85%" width="85%" alt="Shelby"/>
          <h5>Car Details</h5>
          <table className="infoTable">
            <tbody>
            <tr className="infoTableRow">
                <td className="tableKey">Mileage</td>
                <td className="tableValue">78k Miles</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Engine Type</td>
                <td className="tableValue">V8, 4.8 Liter</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">MPG</td>
                <td className="tableValue">14 City / 20 Hwy</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Exterior Color</td>
                <td className="tableValue">Silver</td>
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
                <td className="tableValue">B8JZOK4F8QH141474</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Stock #</td>
                <td className="tableValue">SLV-12897</td>
              </tr>
              <tr>
                <td className="prevButton">
                  <Link to="/carRav4">
                    <button type="button" style={{background: '#4DABD4'}}>Previous</button>
                  </Link>
                </td>
                <td className="nextButton">
                  <Link to="/carFusion">
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
 
export default carSilverado;