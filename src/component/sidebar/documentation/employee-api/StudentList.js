import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import EditEmployee from './EditEmployee';
/*function StudentList() {
    const [employees, setEmployees] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [employeeCount, setEmployeeCount] = useState(0);
    function getEvents() {
        axios.get("https://api-generator.retool.com/LKSpkn/data")
            .then(response => response.data)
            .then((data) => {
                setEmployees(data)
            });
    }
    useEffect(() => {
        getEvents();
    }, [searchText, employeeCount])
    function onSearchTextChange(e) {
        setSearchText(e.target.value);
    }

    function addNewEmployee() {
        setEmployeeCount(employeeCount + 1);
    }
    return (
        <div>
            <h2>Employees Data...</h2>
            <p>
                <label>Search By Name : <input type="text" value={searchText}
                    onChange={onSearchTextChange}></input></label>
            </p>
            <p>
                <button onClick={addNewEmployee}>Add Employee</button>
            </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.Name}</td>
                            <td>{emp.Age}</td>
                            <td>{emp.Marks}</td>
                            <td>
                                <button className="btn btn-success ml-2">Update</button>
                                <button className="btn btn-danger ml-2">Delete</button>
                                <button className="btn btn-warning ml-2">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}*/



// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.
function StudentList() {
    const [employees, setEmployees] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [employeeCount, setEmployeeCount] = useState(0);
    function getEvents() {
        axios.get("https://api-generator.retool.com/LKSpkn/data")
            .then(response => response.data)
            .then((data) => {
                setEmployees(data)
            });
    }
    useEffect(() => {
        getEvents();
    }, [searchText, employeeCount])
    function onSearchTextChange(e) {
        setSearchText(e.target.value);
    }

    function addNewEmployee() {
        setEmployeeCount(employeeCount + 1);
    }
    return (
        <Router>
            <div>
                <h2>Accounts</h2>

                <ul>
                    <li>
                        <Link to="/netflix">Netflix</Link>
                    </li>
                    <li>
                        <Link to="/zillow-group">Zillow Group</Link>
                    </li>
                    <li>
                        <Link to="/yahoo">Yahoo</Link>
                    </li>
                    <li>
                        <Link to="/modus-create">Modus Create</Link>
                    </li>
                    <li>
                        <Link to="/student">Create student</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/:id" children={<Child/>} />
                </Switch>
            </div>
            <div>
                <h2>Employees Data...</h2>
                <p>
                    <label>Search By Name : <input type="text" value={searchText}
                        onChange={onSearchTextChange}></input></label>
                </p>
                <p>
                    <button onClick={addNewEmployee}>Add Employee</button>
                </p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.Name}</td>
                                <td>{emp.Age}</td>
                                <td>{emp.Marks}</td>
                                <td>
                                    <button className="btn btn-success ml-2">Update</button>
                                    <button className="btn btn-danger ml-2">Delete</button>
                                    <button className="btn btn-warning ml-2">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
         
        </Router>
    );
}
export default StudentList;

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    return (
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}