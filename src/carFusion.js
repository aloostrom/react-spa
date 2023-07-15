import React, { Component } from "react";
import fusion from './images/fusion.png';
import { Link } from 'react-router-dom';
 
class carFusion extends Component {
  render() {
    return (
      <div>
        <h3>2016 Ford Fusion</h3>
          <h4>SRE</h4>
          <h4>$24,000</h4>
          <img src={fusion} height="85%" width="85%" alt="Shelby"/>
          <h5>Car Details</h5>
          <table className="infoTable">
            <tbody>
            <tr className="infoTableRow">
                <td className="tableKey">Mileage</td>
                <td className="tableValue">56k Miles</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Engine Type</td>
                <td className="tableValue">4-cyl., 3.1 Liter</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">MPG</td>
                <td className="tableValue">28 City / 32 Hwy</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Exterior Color</td>
                <td className="tableValue">White</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Interior Color</td>
                <td className="tableValue">Grey/Black</td>
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
                <td className="tableValue">ISLDIWTDZXH192505</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Stock #</td>
                <td className="tableValue">FUS-87992</td>
              </tr>
              <tr>
                <td className="prevButton">
                  <Link to="/carSilverado">
                    <button type="button" style={{background: '#4DABD4'}}>Previous</button>
                  </Link>
                </td>
                <td className="nextButton">
                  <Link to="/car8er">
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
 
export default carFusion;