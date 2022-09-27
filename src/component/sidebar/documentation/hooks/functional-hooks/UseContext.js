
import React, { useState, useContext } from "react";

const employeeContext = React.createContext();

function UseContext() {

    const [employee, setEmployee] = useState({
        Id: 101, Name: 'Pragim',
        Location: 'Bangalore', Salary: 12345
    });
    return (
        <div className="use-context">
            <h5>Use Context</h5>
            <employeeContext.Provider value={employee}>
                <Employee></Employee>
            </employeeContext.Provider>
        </div>
    );
}
export default UseContext;
function Employee() {
    let context = useContext(employeeContext);

    return (
        <div>
            <h4>Welcome to Employee Component...</h4>
            <p>
                <label>Employee ID : <b>{context.Id}</b></label>
            </p>
            <p>
                <label>Employee Name : <b>{context.Name}</b></label>
            </p>
            <Salary></Salary>
        </div>
    );
}

function Salary() {
    let context = useContext(employeeContext);

    return (
        <div>
            <h4>Welcome to Salary Component...</h4>
            <p>
                <label>Employee ID : <b>{context.Id}</b></label>
            </p>
            <p>
                <label>Employee Salary : <b>{context.Salary}</b></label>
            </p>
        </div>
    );
}


