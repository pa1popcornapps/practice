import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

export default function Routing() {
    const name = 'John Doe'
    return (
        <Router>
            <main>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/normal">Normal Routs</Link></li>
                        <li><Link to={`/parameters/${name}`}>Parameteraised Rout</Link></li>
                        <li><Link to="/navigation">navigation</Link></li>
                    </ul>
                </nav>
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/normal" component={Normal} />
                <Route path="/parameters/:name" component={Parameters} />
                <Route path="/navigation" component={Navigation} />
                </Switch>
            </main>
        </Router>
    );
}

// Home Page
const Home = () => (
    <Fragment>
        <h1>Home</h1>
        <FakeText />
    </Fragment>
);
// About Page
const About = () => (
    <Fragment>
        <h1>About</h1>
        <FakeText />
    </Fragment>
);
// Contact Page
const Normal = () => (
    <Fragment>
        <h1>Normal Routs</h1>
        <FakeText />
    </Fragment>
);
// Parameters  Page
const Parameters = ({match:{params:{name}}}) => (
     // props.match.params.name
    <Fragment>
        <h1>Parameters to routing to Url</h1>
        <FakeText />
    </Fragment>
);
// Navigation Page
const Navigation = ({history}) => (
    // props.match.params.name
   <Fragment>
       <h1>Navigation to Url</h1>
       <button onClick={() => history.push('/about') } >Go to home</button>
       <FakeText />
   </Fragment>
);
const FakeText = () => (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
)