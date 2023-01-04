import React from "react";
import Button from 'react-bootstrap/Button'
import "./citas.css"
import "../../app.css"

const Citas = () => {
    return (
        <div className="App">
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
        <tr>
            <th scope="row">1</th>
            <td>01/01/2023</td>
            <td>8:50</td>
            <td>Bug</td>
            <td>Isabel</td>
            <td><Button variant="secondary">Edit</Button>{' '}</td>
            <td> <Button variant="danger">Delete</Button>{' '}</td>
        </tr>
        <tr>
        <th scope="row">2</th>
            <td>01/02/2023</td>
            <td>8:00</td>
            <td>UX</td>
            <td>Carla</td>
            <td><Button variant="secondary">Edit</Button>{' '}</td>
            <td> <Button variant="danger">Delete</Button>{' '}</td>
        </tr>
        <tr>
        <th scope="row">3</th>
            <td>02/02/2023</td>
            <td>7:00</td>
            <td>Php Help</td>
            <td>Ale</td>
            <td><Button variant="secondary">Edit</Button>{' '}</td>
            <td> <Button variant="danger">Delete</Button>{' '}</td>
        </tr>
        
        </tbody>
        </table>
        </div>
        <div className="rightPosition text-dark px-3 py-4 p-md-5 mx-md-4">
        <h2>The appointments scheduled so far are listed on the side, if you want to schedule a new technical appointment, use the button below.</h2>
        <Button variant="success">Create</Button>{' '}
        </div>
        </div>
        </div>
    )};

    export default Citas;
