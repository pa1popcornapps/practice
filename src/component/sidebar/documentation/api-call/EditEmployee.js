import React, { useState, useEffect } from 'react'
import axios from 'axios';
function EditEmployee(props) {
    const [employee, setemployee] = useState({ Id: '', Name: '', Department: '', Age: '', Location: '', Salary: '' });
    const Url = "https://api-generator.retool.com/Fkx6QU/data/" + props.match.params.id;
    useEffect(() => {
        const GetData = async () => {
            const result = await axios(Url);
            setemployee(result.data);
        };
        GetData();
    }, [Url]);
    const UpdateEmployee = (e) => {
        e.preventDefault();
        const data = { Id: props.match.params.id, Name: employee.Name, Department: employee.Department, Age: employee.Age, Location: employee.Location, Salary: employee.Salary};
        axios.put(Url, data)
            .then((result) => {
                props.history.push('/EmployeList')
            });
    };
    const onChange = (e) => {
        e.persist();
        setemployee({ ...employee, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <div>
                <div className="justify-content-center">
                    <div>
                        <div>
                            <div>
                                <form onSubmit={UpdateEmployee}>
                                    <h1>Update Employee</h1>
                                    <div className="mb-3">
                                        <input type="text" name="Name" id="Name" placeholder="Name" value={employee.Name} onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Department" name="Department" id="Department" value={employee.Department} onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Age" name="Age" id="Age" value={employee.Age} onChange={onChange} />
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" placeholder="Location" name="Location" id="Location" value={employee.Location} onChange={onChange} />
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" placeholder="Salary" name="Salary" id="Salary" value={employee.Salary} onChange={onChange} />
                                    </div>
                                    <div className="p-4">
                                        <div>
                                            <div xs="12" sm="6">
                                                <button type="submit" className="btn btn-info mb-1" block><span>Save</span></button>
                                            </div>
                                            <div xs="12" sm="6">
                                                <button className="btn btn-info mb-1" block><span>Cancel</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
              </div > 
        )
}
export default EditEmployee  