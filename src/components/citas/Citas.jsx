import React, { Component } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import "./citas.css"
import "../../app.css"

const URL = 'http://localhost/code-help/apiCoders/readCitas.php'
const DELETE_URL = 'http://localhost/code-help/apiCoders/delete.php'

const DeleteButton = ({ id }) => (
    <span
      role="button"
      tabIndex="0"
      onClick={() => { 
        axios.delete(`${DELETE_URL}`, {data: {id: id}})
    }}
    >
      Delete
    </span>
  );

class Citas extends Component {
    constructor(props) {
        super(props);
        this.state = { listaCitas: []}
        this.refresh = this.refresh.bind(this);
    }
    componentDidMount() {
        this.refresh()
    }
    refresh() {
        axios.get(`${URL}`)
        .then(response => { this.setState({ listaCitas: response.data.body}); })
        .catch(() => { console.log('Error retrieving data'); });    
      }

    render() {
        return(
         
        
        <div class="ctnFlex">
        <div className="leftPosition">
        <table class="table table-success table-striped">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Hours</th>
            <th scope="col">Theme</th>
            <th scope="col">Coder</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody class="table-group-divider">
        {this.state.listaCitas.map(function(item)  
                  {
                     return (
                        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.datetime}</td>
            <td>{item.datetime}</td>
            <td>{item.theme}</td>
            <td>{item.name}</td>
            <td><Button variant="secondary">Edit</Button>{' '}</td>
            <td> <Button variant="danger"
                                    onClick={() => { 
                                        
                                        //axios.delete(`${DELETE_URL}`, {data: {id: item.id}})
                            }} >Delete</Button>{}</td>
        </tr>
                     )
                  }
          )}
        
        </tbody>
        </table>
        </div>
        <div className="rightPosition text-dark px-3 py-4 p-md-5 mx-md-4">
        <h3>The appointments scheduled so far are listed on the side, if you want to schedule a new technical appointment, use the button below.</h3>
        <a href="/create"><Button variant="success"> Create</Button></a>
        </div>
        </div>
        
    )};}

    export default Citas;
