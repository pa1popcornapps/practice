import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateEmployee() {
    const [employees, setEmployees] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [employeeCount, setEmployeeCount] = useState(0);

    useEffect(() => {
        fetch("https://api-generator.retool.com/LKSpkn/data")
            .then(res => res.json())
            .then(
                (result) => {
                    setEmployees(result);
                }
            );
    }, [searchText, employeeCount]);

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
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.Name}</td>
                            <td>{emp.Age}</td>
                            <td>{emp.Marks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CreateEmployee;