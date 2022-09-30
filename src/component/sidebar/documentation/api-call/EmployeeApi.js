import React from 'react';   
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import CreateEmployee from './CreateEmployee';
import EmployeeList from './EmployeeList';
import EditEmployee from './EditEmployee';
function EmployeeApi() {  
  return (  
    <div className="App">  
     <Router>    
      <div className="container">    
        <nav className="btn btn-warning navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/CreateEmployee'} className="nav-link">Add Employee</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/EmployeeList'} className="nav-link">Employee List</Link>    
              </li>    
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/CreateEmployee' component={CreateEmployee} />    
          <Route path='/edit/:id' component={EditEmployee} />    
          <Route path='/EmployeeList' component={EmployeeList} />    
        </Switch>    
      </div>    
    </Router>    
    </div>  

  );  

}  
export default EmployeeApi;  