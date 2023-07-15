import React, { Component } from "react";
import bmw from './images/bmw8er.png';
import { Link } from 'react-router-dom';
 
class car8er extends Component {
  render() {
    return (
      <div>
        <h3>BMW 8ER</h3>
          <h4>Gran Coupe</h4>
          <h4>$15,000</h4>
          <img src={bmw} height="85%" width="85%" alt="Shelby"/>
          <h5>Car Details</h5>
          <table className="infoTable">
            <tbody>
            <tr className="infoTableRow">
                <td className="tableKey">Mileage</td>
                <td className="tableValue">42k Miles</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Engine Type</td>
                <td className="tableValue">6-cyl., 3.0 Liter</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">MPG</td>
                <td className="tableValue">28 City / 34 Hwy</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Exterior Color</td>
                <td className="tableValue">Green</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Interior Color</td>
                <td className="tableValue">Black</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Transmission</td>
                <td className="tableValue">Manual, 5-Speed</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Doors</td>
                <td className="tableValue">2</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">VIN</td>
                <td className="tableValue">LP11LEMZ28Q616027</td>
              </tr>
              <tr className="infoTableRow">
                <td className="tableKey">Stock #</td>
                <td className="tableValue">BMR-89957</td>
              </tr>
              <tr>
                <td className="prevButton">
                  <Link to="/carFusion">
                    <button type="button" style={{background: '#4DABD4'}}>Previous</button>
                  </Link>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
}
 
export default car8er;