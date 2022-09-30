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
import EmployeeApi from './documentation/api-call/EmployeeApi';
import UnControlledForms from './documentation/forms/UnControlledForms';
import ControlledForms from './documentation/forms/ControlledForms';
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

                            <div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <h3 className="text-center">React Side Bar With Router Concept</h3>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
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
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <h5>React Component-Api</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link to="/documentation/component-api/SetState" >Set State</Link>
                                                </li>
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link to="/documentation/component-api/force-update" >Force Update</Link>
                                                </li>
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link to="/documentation/component-api/find-dom" >Find Dom Node</Link>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                                                <h5>React Api Calls</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link to="/documentation/api-call/EmployeeApi" >Employee Api Calls</Link>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFour">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <h5>React forms</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link to="/documentation/forms/ControlledForms" >Controlled Forms</Link>
                                                </li>
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link to="/documentation/forms/UnControlledForms" >Un Controlled Forms</Link>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFive">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">

                                                <h5>React functional component Hooks</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link to="/documentation/hooks/functional-hooks/UseState" >Use State</Link>
                                                </li>
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link to="/documentation/hooks/functional-hooks/UseEffect" >Use Effect</Link>
                                                </li>
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link to="/documentation/hooks/functional-hooks/UseContext" >Use Context</Link>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingSix">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">

                                                <h5>Additional React functional component Hooks</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
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
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingSeven">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">

                                                <h5>React class component Hooks</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link to="/documentation/hooks/class-hooks/HooksSequence" >Class Component Hooks</Link>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-items">







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
                        <Route path="/documentation/forms/ControlledForms">
                            <ControlledForms />
                        </Route>
                        <Route path="/documentation/forms/UnControlledForms">
                            <UnControlledForms />
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
                            <UseReducer />
                        </Route>
                        <Route path="/documentation/hooks/functional-hooks/additional-hooks/UseRef">
                            <UseRef />
                        </Route>
                        <Route path="/documentation/hooks/class-hooks/HooksSequence">
                            <HooksSequence />
                        </Route>
                        <Route path="/documentation/api-call/EmployeeApi">
                            <EmployeeApi />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

