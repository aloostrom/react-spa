import React, { Component } from "react";
import { Link } from "react-router-dom";
//get car images from src/images
import shelby from './images/shelby-3821716_1920.png';
import bmw from './images/bmw8er.png';
import fusion from './images/fusion.png';
import rav from './images/rav4.png';
import chevy from './images/silverado.png';

 var cityPlaceholder;
// Step 1: Get user coordinates 
function getCoordinates() { 
	var options = { 
		enableHighAccuracy: true, 
		timeout: 5000, 
		maximumAge: 0 
	}; 

	function success(pos) { 
		var crd = pos.coords; 
		var lat = crd.latitude.toString(); 
		var lng = crd.longitude.toString(); 
		var coordinates = [lat, lng]; 
		//console.log(`Latitude: ${lat}, Longitude: ${lng}`); 
		getCity(coordinates); 
		return; 

	} 

	function error(err) { 
		console.warn(`ERROR(${err.code}): ${err.message}`); 
	} 

	navigator.geolocation.getCurrentPosition(success, error, options); 
} 

// Step 2: Get city name 
function getCity(coordinates) { 
	var xhr = new XMLHttpRequest(); 
	var lat = coordinates[0]; 
	var lng = coordinates[1]; 

	// use the locationIQ service to get the city for coordinates
	xhr.open('GET', " https://us1.locationiq.com/v1/reverse.php?key=bb1133b006ce2b&lat=" + 
	lat + "&lon=" + lng + "&format=json", true); 
	xhr.send(); 
	xhr.onreadystatechange = processRequest; 
	xhr.addEventListener("readystatechange", processRequest, false); 

	function processRequest(e) { 
		if (xhr.readyState === 4 && xhr.status === 200) { 
			var response = JSON.parse(xhr.responseText); 
			var city = response.address.city; 
      //console.log(city); 
      cityPlaceholder = (" for " + city);
			return; 
		} 
	} 
} 

getCoordinates(); 


class Buy extends Component {
  render() {
    return (
      <div>
        <h2>Buy</h2>
        <p>Browse our certified new/pre-owned cars backed by the Carvana guarantee.</p>
        <ul>
          <li>2018 Ford Mustang Shelby GT</li>
						<ul><Link to = "/carShelby"><img src={shelby} className="thumbnail" height="105" width="192" alt="Shelby"/></Link></ul>
            <ul>- $12,000</ul>
            <ul>- 25,000 miles</ul>
            <ul>- <b>Great </b>Price{cityPlaceholder}</ul>
          <li>2017 Toyota RAV4</li>
						<ul><Link to = "/carRav4"><img src={rav} className="thumbnail" height="105" width="192" alt="Rav4"/></Link></ul>
            <ul>- $18,000</ul>
            <ul>- 45,000 miles</ul>
            <ul>- <b>Good </b>Price{cityPlaceholder}</ul>
          <li>2016 Chevrolet Silverado</li>
						<ul><Link to = "/carSilverado"><img src={chevy} className="thumbnail" height="105" width="192" alt="Silverado"/></Link></ul>
            <ul>- $22,000</ul>
            <ul>- 78,000 miles</ul>
            <ul>- <b>Fair </b>Price{cityPlaceholder}</ul>
          <li>2016 Ford Fusion</li>
					<ul><Link to = "/carFusion"><img src={fusion} className="thumbnail" height="105" width="192" alt="Fusion"/></Link></ul>
            <ul>- $24,000</ul>
            <ul>- 56,000 miles</ul>
            <ul>- <b>Fair </b>Price{cityPlaceholder}</ul>
          <li>BMW 8ER</li>
						<ul><Link to = "/car8er"><img src={bmw} className="thumbnail" height="105" width="192" alt="BMW 8er"/></Link></ul>
            <ul>- $15,000</ul>
            <ul>- 42,000 miles</ul>
            <ul>- <b>Great </b>Price{cityPlaceholder}</ul>
        </ul>
      </div>
    );
  }
}
 
export default Buy;