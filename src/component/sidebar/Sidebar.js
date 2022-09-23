import React from 'react';
import About from './About';
import Contact from './Contact';
import State from './documentation/state-props/State';
import Prop from './documentation/state-props/Prop';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function SideBar() {
    
    return (
        <Router>
            <div className="side-bar">
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                    Documentation
                </button>
                <div className="offcanvas offcanvas-start" id="demo">
                    <div className="offcanvas-body">
                        <div className="offcanvas-header row justify-content-end">
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <nav>
                            <h5>React Router Example</h5>

                            <div>
                                <ul className="list-items">
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/home" >Home</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/about" >About</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/state-props/State" >Statet</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/state-props/Prop" >Prop</Link>
                                    </li>
                                </ul>

                            </div>
                        </nav>

                    </div>
                </div>
                
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/documentation/state-props/State">
                        <State />
                    </Route>
                    <Route path="/documentation/state-props/Prop">
                        <Prop />
                    </Route>
                </Switch>
            </div>

        </Router>
    );
}
function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}
