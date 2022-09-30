import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
function EmployeeList(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const GetData = async () => {
            const result = await axios('https://api-generator.retool.com/Fkx6QU/data');
            setData(result.data);
        };
        GetData();
    }, []);
    let deleteeployee = (id) => {
        debugger;
        axios.delete('curl "https://api-generator.retool.com/Fkx6QU/data"' + id)
            .then((result) => {
                props.history.push('/EmployeList')
            });
    };
    let editemployee = (id) => {
        props.history.push({
            pathname: '/edit/' + id
        });
    };
    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <i className="fa fa-align-justify"></i> Employee List
                        </div>
                        <div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Age</th>
                                        <th>City</th>
                                        <th>Location</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item) => {
                                            return <tr>
                                                <td>{item.Name}</td>
                                                <td>{item.Department}</td>
                                                <td>{item.Age}</td>
                                                <td>{item.Salary}</td>
                                                <td>{item.Location}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <button className="btn btn-warning" onClick={() => { editemployee(item.Id) }}>Edit</button>
                                                        <button className="btn btn-warning" onClick={() => { deleteeployee(item.Id) }}>Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmployeeList 