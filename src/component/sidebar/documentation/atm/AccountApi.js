import React from 'react';   
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import CreateAccount from './CreateAccount';
import AccountList from './AccountList';
import EditAccount from './EditAccount';
function AccountApi() {  
  return (  
    <div className="App">  
     <Router>    
      <div className="container">    
        <nav className="btn btn-warning navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/CreateAccount'} className="nav-link">Add Account</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/AccountList'} className="nav-link">Transaction Details</Link>    
              </li>    
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/CreateAccount' component={CreateAccount} />    
          <Route path='/edit/:id' component={EditAccount} />    
          <Route path='/AccountList' component={AccountList} />    
        </Switch>    
      </div>    
    </Router>    
    </div>  

  );  

}  
export default AccountApi;  