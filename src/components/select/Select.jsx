import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import IMG from "../../Assets/image 8.svg";
import "./Select.css";

const CREATE_URL = "http://localhost/code-help/apiCoders/create.php";
const URL = 'http://localhost/code-help/apiCoders/read.php'

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: "",
      theme: "",
      coders: [],
      listaCoders:[]
    };
    this.refresh = this.refresh.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.refresh()
  }

  refresh() {
    axios.get(`${URL}`)
    .then(response => { this.setState({ listaCoders: response.data.body}); })
    .catch(() => { console.log('Error retrieving data'); });    
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  handleSubmit(event) {
    event.preventDefault();
    const { datetime, theme, coders } = this.state;
    const formattedDate = new Date(datetime).toISOString().slice(0, 19).replace('T', ' ')
    axios
      .post(`${CREATE_URL}`, { date: formattedDate, theme: theme, name: coders })
      .then((res) => {
        console.log(res);
        window.location.href ="/list"
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="">
        <h1 className="title">
          Edit the technical query, with all the comfort
        </h1>
        <main className="ctnSelect">
          <img className="imgselect" src={IMG} alt="img" />
          <main />
          <div className="selectPosition">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="datetime">
                <h4 id="datetime">Date and time:</h4>
                </label>
              
              <input
                type="datetime-local"
                id="datetime"
                value={this.state.datetime}
                onChange={this.handleChange}
              />
          
              <h4>Theme:</h4>
              <label htmlFor="theme">
            
              </label>
              <textarea
                id="theme"
                value={this.state.theme}
                onChange={this.handleChange}
              />
              <br />
              <br></br>
              
              <br></br>
              <label id="coders" htmlFor="coders">
              <h4>Coders:</h4>
              <br></br>
              
              <br></br>
              </label>
              
              <select
                id="coders"
                value={this.state.coders}
                onChange={this.handleChange}
              >
                {this.state.listaCoders.map(function(item)  
                  {
                     return (
                      <option value={item.coderName}>{item.coderName}</option>
                     )
                  }
          )}
              </select>
              <br />
              <div className="buttones">
                <div className="buttoncancel">
                  <a href="/list">
                    <Button variant="primary"> Cancel</Button>
                  </a>
                </div>
                <div className="buttoncreate">
                  <Button variant="success" type="submit"> Create</Button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default Select;
