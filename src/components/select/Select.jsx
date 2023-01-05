import axios from 'axios';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import IMG from '../../Assets/image 8.svg'
import "./Select.css";
import Calendario from './Calendar';


const URL = 'http://localhost/code-help/apiCoders/read.php'

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { listaItens: [], value: '' }

    this.refresh = this.refresh.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
//input theme
handleChange(event) {
  this.setState({value: event.target.value});
}
handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

//Coders
componentDidMount() {
  this.refresh()
}
refresh() {
  axios.get(`${URL}`)
  .then(response => { this.setState({ listaItens: response.data.body}); })
  .catch(() => { console.log('Error retrieving data'); });    
}
  render () {
    return(
      <>
      <h1 className="title">Edit the technical query, with all the comfort</h1>
      <main className="ctnSelect">
      <img className="imgselect" src={IMG} alt="img"/>
      <main/>
      
      <div className="selectPosition">
      <h3>Dates:<Calendario/></h3>
        
          <h3>Coders:
          <select className="browser-default custom-select">
          <option>Choose your option between available Coders </option>
          {this.state.listaItens.map(function(item)  
                  {
                     return (
                      <option value={item.id}>{item.coderName}</option>
                     )
                  }
          )}
          </select></h3>
          

          <h3>Theme: <form onSubmit={this.handleSubmit}>
          <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </h3>
         
        <div className="buttones">
        <div className="buttoncancel">
          <a href="/list"><Button variant="primary"> Cancel</Button></a>
        </div>
        <div className="buttoncreate">
          <Button variant="success"> Create</Button>
        </div>
        </div>
        </div>
        
        
      
        </main>
      </>
    );
  }
}

export default Select;