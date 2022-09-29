import React from 'react';
import About from './About';
import Contact from './Contact';
import State from './documentation/state-props/State';
import Prop from './documentation/state-props/Prop';
import PropsValidation from './documentation/state-props/PropsValidation';
import Constructor from './documentation/constructor/Constructor';
import SetState from './documentation/component-api/SetState';
import ForceUpdate from './documentation/component-api/force-update';
import FindDom from './documentation/component-api/find-dom';
import HooksSequence from './documentation/hooks/class-hooks/HooksSequence';
import UseState from './documentation/hooks/functional-hooks/UseState';
import UseEffect from './documentation/hooks/functional-hooks/UseEffect';
import UseContext from './documentation/hooks/functional-hooks/UseContext';
import UseCallback from './documentation/hooks/functional-hooks/additional-hooks/UseCallback';
import UseDebugValue from './documentation/hooks/functional-hooks/additional-hooks/UseDebugValue';
import UseImperativeHandle from './documentation/hooks/functional-hooks/additional-hooks/UseImperativeHandle';
import UseLayoutEffect from './documentation/hooks/functional-hooks/additional-hooks/UseLayoutEffect';
import UseMemo from './documentation/hooks/functional-hooks/additional-hooks/UseMemo';
import UseReducer from './documentation/hooks/functional-hooks/additional-hooks/UseReducer';
import UseRef from './documentation/hooks/functional-hooks/additional-hooks/UseRef';
import CreateEmployee from './documentation/employee-api/CreateEmploye';
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
                            <h3 className="text-center">React Side Bar With Router Concept</h3>
                            <div>
                                <ul className="list-items">
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/about" >About</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <h5>React State & Props</h5>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/state-props/State" >State</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/state-props/Prop" >Prop</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/state-props/PropsValidation" >Prop Validation</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/state-props/Constructor" >Constructor</Link>
                                    </li>
                                    <h5>React Component-Api</h5>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/component-api/SetState" >Set State</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/component-api/force-update" >Force Update</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/component-api/find-dom" >Find Dom Node</Link>
                                    </li>
                                    <h5>React functional component Hooks</h5>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/hooks/functional-hooks/UseState" >Use State</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/hooks/functional-hooks/UseEffect" >Use Effect</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/hooks/functional-hooks/UseContext" >Use Context</Link>
                                    </li>
                                    <h5>Additional React functional component Hooks</h5>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/hooks/functional-hooks/additional-hooks/UseCallback" >Use Callback</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/hooks/functional-hooks/additional-hooks/UseDebugValue" >Use Debug Value</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/hooks/functional-hooks/additional-hooks/UseImperativeHandle" >Use Imperative Handle</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/hooks/functional-hooks/additional-hooks/UseLayoutEffect" >Use Layout Effect</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/hooks/functional-hooks/additional-hooks/UseMemo" >Use Memo</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/hooks/functional-hooks/additional-hooks/UseReducer" >Use Reducer</Link>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/hooks/functional-hooks/additional-hooks/UseRef" >Use Ref</Link>
                                    </li>
                                    <h5>React class component Hooks</h5>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/hooks/class-hooks/HooksSequence" >Class Component Hooks</Link>
                                    </li>
                                    <h5>React Api Calls</h5>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <Link to="/documentation/employee-api/CreateEmploye" >Api Calls</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="content-section p-5">
                    <Switch>
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
                        <Route path="/documentation/state-props/PropsValidation">
                            <PropsValidation />
                        </Route>
                        <Route path="/documentation/state-props/Constructor">
                            <Constructor />
                        </Route>
                        <Route path="/documentation/component-api/SetState">
                            <SetState />
                        </Route>
                        <Route path="/documentation/component-api/force-update">
                            <ForceUpdate />
                        </Route>
                        <Route path="/documentation/component-api/find-dom">
                            <FindDom />
                        </Route>
                        <Route path="/documentation/hooks/functional-hooks/UseState">
                            <UseState />
                        </Route>
                        <Route path="/documentation/hooks/functional-hooks/UseEffect">
                            <UseEffect />
                        </Route>
                        <Route path="/documentation/hooks/functional-hooks/UseContext">
                            <UseContext />
                        </Route>
                        <Route path="/documentation/hooks/functional-hooks/additional-hooks/UseCallback">
                            <UseCallback />
                        </Route>
                        <Route path="/documentation/hooks/functional-hooks/additional-hooks/UseDebugValue">
                            <UseDebugValue />
                        </Route>
                        <Route path="/documentation/hooks/functional-hooks/additional-hooks/UseImperativeHandle">
                            <UseImperativeHandle />
                        </Route>
                        <Route path="/documentation/hooks/functional-hooks/additional-hooks/UseLayoutEffect">
                            <UseLayoutEffect />
                        </Route>
                        <Route path="/documentation/hooks/functional-hooks/additional-hooks/UseMemo">
                            <UseMemo />
                        </Route>
                        <Route path="/documentation/hooks/functional-hooks/additional-hooks/UseReducer">
                            <UseReducer/>
                        </Route>
                        <Route path="/documentation/hooks/functional-hooks/additional-hooks/UseRef">
                            <UseRef />
                        </Route>
                        <Route path="/documentation/hooks/class-hooks/HooksSequence">
                            <HooksSequence />
                        </Route>
                        <Route path="/documentation/employee-api/CreateEmploye">
                            <CreateEmployee />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

