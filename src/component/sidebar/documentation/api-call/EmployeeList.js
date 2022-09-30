import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
function EmployeeList(props) {
    const [data, setData] = useState([]);
    const GetData = async () => {
        const result = await axios('https://api-generator.retool.com/Fkx6QU/data');
        setData(result.data);
    };
    useEffect(() => {
    
        GetData();
    }, []);
    let deleteeployee = (l) => {
        alert(l.id)
        let g=l.id
        axios.delete('https://api-generator.retool.com/Fkx6QU/data/' + l.id)
            .then((result) => {
                props.history.push('/EmployeList')
            });
            GetData();
    };
    let editemployee = (l) => {
        props.history.push({
            pathname: '/edit/' + l.id
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
                                                 
                                                        <button className="btn btn-warning" onClick={() => { editemployee(item) }}>Edit</button>
                                                        <button className="btn btn-warning" onClick={() => { deleteeployee(item) }}>Delete</button>
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