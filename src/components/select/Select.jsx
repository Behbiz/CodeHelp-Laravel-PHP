import React, { Component } from 'react';
import "./Select.css"

class Select extends Component {
  render () {
    return(
        <>
    
        <h3>Dates:</h3>
        <select className="select-css browser-default custom-select">
          <option>Choose your option between available dates </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>

        <h3>Hours:</h3>
        <select className="browser-default custom-select">
         
          <option>Choose your option between available hours </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        
        <h3>Coders:</h3>
        <select className="browser-default custom-select">
          <option>Choose your option between available Coders </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
       <h3>Theme:</h3>
        <select className="browser-default custom-select">
          <option>Choose your option between available Theme </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </>
    );
  }
}

export default Select;