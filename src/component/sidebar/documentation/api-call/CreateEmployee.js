import React, { useState } from 'react'
import axios from 'axios';
function CreateEmployee(props) {
    const [employee, setemployee] = useState({ Name: '', Department: '', Age: '', Location: '', Salary: ''});
    const [showLoading, setShowLoading] = useState(false);
    const apiUrl = "https://api-generator.retool.com/Fkx6QU/data";
    const Insertemployee = (e) => {
        e.preventDefault();
        debugger;
        const data = { Name: employee.Name, Department: employee.Department, Age: employee.Age, Location: employee.Location, Salary: employee.Salary};
        axios.post(apiUrl, data)
            .then((result) => {
                props.history.push('/EmployeList')
            });
    };
    const onChange = (e) => {
        e.persist();
        debugger;
        setemployee({ ...employee, [e.target.name]: e.target.value });
    }
    return (
        <div className="flex-row align-items-center">
            <div>
                <div className="justify-content-center">
                    <div>
                        <div>
                            <div>
                                <form onSubmit={Insertemployee}>
                                    <h1>Register</h1>
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
                                            <div>
                                                <button type="submit" className="btn btn-info mb-1" block><span>Save</span></button>
                                            </div>
                                            <div>
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
        </div>
    )
}
export default CreateEmployee