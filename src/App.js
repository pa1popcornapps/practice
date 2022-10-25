import './App.css';
import Header from "./component/header/Header"
import Body from './component/body/Body';
import Footer from './component/footer/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from './container/ProductDetail';
import ProductListing from './container/ProductListing';
import ProductComponent from './container/ProductComponent';
function App() {
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:1337/api/tests')
      .then(({ data }) => setRestaurants(data))
      .catch((error) => setError(error))

  }, [])

  for(let key in restaurants.data){
    console.log(restaurants.data[key].id)
  }
  return (
    <div >
      <div className="App">
        <Header />
      </div>
      <Body />
      <Router>
          <Switch>
            <Route path="/" exact component={ProductListing}/>
            <Route path="/product/:productId" exact component={ProductDetail}/>
            <Route>404 Not Found</Route>
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
